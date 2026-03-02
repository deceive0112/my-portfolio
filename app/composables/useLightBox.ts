import { ref } from 'vue'

export const useLightbox = () => {
  const lightboxSrc = ref<string | null>(null)

  const openLightbox = (src: string) => {
    lightboxSrc.value = src
  }

  const closeLightbox = () => {
    lightboxSrc.value = null
  }

  return {
    lightboxSrc,
    openLightbox,
    closeLightbox
  }
}
