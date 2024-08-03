<script setup lang="ts">
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as THREE from 'three'

const props = defineProps<{
  colors?: string[]
  classContainer?: string
}>()

const container = ref<HTMLElement>()
let renderer: THREE.WebGLRenderer

onMounted(() => {
  if (renderer) renderer.dispose()
  if (!container.value) return
  const { width, height } = container.value.getBoundingClientRect()

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000)
  camera.position.set(0, 15, -50)
  camera.rotateOnWorldAxis(new THREE.Vector3(-0.85, 0.1, 0.1), Math.PI / 4)

  // Rendered
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  container.value.append(renderer.domElement)

  // Controls
  // const controls = new OrbitControls(camera, renderer.domElement)

  // Post-processing composer
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85)
  bloomPass.threshold = 0.51
  bloomPass.strength = 0.2
  bloomPass.radius = 0.5
  composer.addPass(bloomPass)

  const planes: THREE.Mesh[] = []
  const planeCount = 100
  const planeWidth = 100
  const planeHeight = 20
  const planeThickness = 0.2

  for (let i = 0; i < planeCount; i++) {
    const planeGeometry = new THREE.BoxGeometry(planeWidth, planeHeight, planeThickness, 256, 4)
    const material = new THREE.ShaderMaterial({
      clipping: true,
      clipIntersection: true,
      uniforms: {
        color1: { value: new THREE.Color(props.colors?.[0] ?? '#ff0000') },
        color2: { value: new THREE.Color(props.colors?.[1] ?? '#00ff00') },
        color3: { value: new THREE.Color(props.colors?.[2] ?? '#0000ff') },
        screenW: { value: width },
        screenH: { value: height },
        time: { value: performance.now() },
        index: { value: i },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;
        varying vec3 vWorldNormal;

        uniform float index;
        uniform float time;

        float wave(float x, float freq, float amp, float f) {
          return sin(x * freq + time * f) * amp;
        }

        float wave3(float x) {
          return wave(x, 1.00, 00.5, 0.0005)
               + wave(x, 0.33, 01.0, 0.000050)
               + wave(x, 0.20, 05.0, 0.000025)
               + wave(x, 0.10, 20.0, 0.000010);
        }

        void main() {
          vNormal = normal;
          vPosition = position;

          // Define the final position of the vertex.
          vec4 finalPosition = vec4(
              position.x - wave3(position.y) * 1.0,
              position.y,
              position.z + wave3(position.x) * 1.0 + sin(index + time * 0.0001) * 0.5,
              1.0
            );

          // Expose the world position for the fragment shader.
          vWorldPosition = (modelMatrix * finalPosition).xyz;
          vWorldNormal = (modelMatrix * vec4(normal, 0.0)).xyz;

          gl_Position = projectionMatrix
            * modelViewMatrix
            * finalPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        uniform float time;
        uniform float index;
        uniform float screenW;
        uniform float screenH;

        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;

        // Define the mix function to mix 3 colors using a single interpolation value.
        // Example: vec3 color = mix(color1, color2, color3, 0.75);
        vec3 mix3(vec3 c1, vec3 c2, vec3 c3, float t) {
          if (t < 0.33) return mix(c1, c2, t * 3.0);
          if (t < 0.66) return mix(c2, c3, (t - 0.33) * 3.0);
          return mix(c3, c1, (t - 0.66) * 3.0);
        }

        // Normalize a value between a min and max value
        float normalizeRotate(float value, float min, float max) {
          float result = (value - min) / (max - min);
          return mod(abs(result), 1.0);
        }

        float normalizeClamp(float value, float min, float max) {
          return clamp((value - min) / (max - min), 0.0, 1.0);
        }

        void main() {

          // Mix the 3 colors based on the index
          float vX = normalizeRotate(vPosition.x + time * 0.0025, -10.0, 10.0);
          float vZ = normalizeRotate(index + time * 0.0005, 0.0, 20.0);
          vec3 colorX = mix3(color1, color2, color3, vX);
          vec3 colorZ = mix3(color1, color2, color3, vZ);
          vec3 color = mix(colorX, colorZ, 0.5);
          // vec3 color = vec3(0.5);

          // Shade the color based on the Y position.
          color *= normalizeClamp(vPosition.y, 0.0, 9.8); // Fade out based on height
          color += normalizeClamp(vPosition.y, 9.5, 10.5) * 0.5; // Add some color to the top
          color *= normalizeClamp(distance(vWorldPosition, cameraPosition), 50.0, 15.0); // Fade out based on distance
          color *= 1.0 - pow(length(gl_FragCoord.xy / vec2(screenW, screenH) - 0.5), 2.5) * 1.5; // Add vignette

          // Set the final fragment color
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    })
    const plane = new THREE.Mesh(planeGeometry, material)
    plane.position.set(0, 0, -i * 1)
    scene.add(plane)
    planes.push(plane)
  }

  function animate() {
    for (const plane of planes) {
      const material = plane.material as THREE.ShaderMaterial
      material.uniforms.time.value = performance.now()
      material.uniforms.index.value = planes.indexOf(plane)
      material.uniforms.screenW.value = renderer.domElement.width
      material.uniforms.screenH.value = renderer.domElement.height
    }

    requestAnimationFrame(animate)
    composer.render()
  }

  renderer.setClearColor(0x000000, 0) // Set background to transparent
  animate()

  window.addEventListener('resize', () => {
    const { width, height } = container.value?.getBoundingClientRect()?? { width: 0, height: 0 }
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
    composer.setSize(width, height)
  })
})
</script>

<template>
  <div class="relative">
    <slot />
    <div ref="container" class="absolute left-0 top-0 w-full h-full" :class="classContainer" />
  </div>
</template>
