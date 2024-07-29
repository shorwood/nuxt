import { primary } from '~/utils/colors'
import type { ContentWebsiteObject } from '@unserved/module-content'

export interface WebsiteSeoOptions {
  title?: string
  imageUrl?: string
  description?: string
}

export async function useWebsiteSeo(options: WebsiteSeoOptions = {}) {
  const { title, description } = options
  const router = useRouter()
  const route = computed(() => router.currentRoute.value)
  const meta = computed(() => route.value.meta as { title: string })

  // --- Fetch website data.
  const { data: website } = await useRequest('GET /api/website', {
    default: () => ({}) as ContentWebsiteObject,
  })

  // --- Head.
  useHead({
    title: title ?? meta.value.title,
    titleTemplate: `${website.value.name} - %s`,
    link: [
      { rel: 'icon', type: 'image/x-icon', href: website.value.iconUrl },
      { rel: 'apple-touch-icon', href: website.value.iconUrl },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  })

  // --- SEO.
  useSeoMeta({
    charset: 'utf8',
    title: title ?? meta.value.title,
    ogUrl: website.value.url,
    ogTitle: title ?? meta.value.title,
    ogSiteName: website.value.name,
    ogDescription: description ?? website.value.description,
    viewport: 'width=device-width, initial-scale=1.0',
    description: description ?? website.value.description,
    themeColor: primary['600'],
    applicationName: website.value.name,
  })
}
