<script setup lang="ts">
definePageMeta({
  layout: "default",
})

onMounted(() => {
  const container = document.querySelector('.giscus')
  if (!container) return

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'deceive0112/general-mike')
  script.setAttribute('data-repo-id', 'R_kgDORSQ-7Q')
  script.setAttribute('data-category', 'General')
  script.setAttribute('data-category-id', 'DIC_kwDORSQ-7c4C3dx7')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'en')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true
  container.appendChild(script)
})

const share = async () => {
  if (navigator.share) {
    await navigator.share({ title: 'Mi gatos', url: window.location.href })
  } else {
    await navigator.clipboard.writeText(window.location.href)
    alert('Link copied!')
  }
}

//lightbox for each images
const lightboxSrc = ref<string | null>(null)
const openLightbox = (src: string) => lightboxSrc.value = src
const closeLightbox = () => lightboxSrc.value = null
</script>

<template>
  <div class="max-w-3xl mx-auto pt-15 pb-15">

    <NuxtLink to="/blog"
      class="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors duration-200">
      <UIcon name="mdi:arrow-left" class="size-4" />
      Back to Blog
    </NuxtLink>

    <div class="rounded-xl border border-white/10 backdrop-blur-xl shadow-lg overflow-hidden">
      <div class="p-6">
        <p class="text-xs text-gray-400 mb-2">March 2, 2026</p>
        <h1 class="text-2xl font-bold mb-4">Mis gatos</h1>
        <p class="text-base text-justify leading-relaxed">My daily dose of serotonin 🐾</p>
        <div class="grid grid-cols-2 gap-1 mt-5">
          <img src="/blog/post-3/cat-1.jpg"
            class="w-full h-80 object-cover rounded-tl-xl rounded-bl-xl cursor-zoom-in hover:brightness-90 transition-all duration-200"
            @click="openLightbox('/blog/post-3/cat-1.jpg')" />
          <div class="grid grid-cols-2 gap-1">
            <img src="/blog/post-3/cat-2.jpg"
              class="w-full h-40 object-cover cursor-zoom-in hover:brightness-90 transition-all duration-200"
              @click="openLightbox('/blog/post-3/cat-2.jpg')" />
            <img src="/blog/post-3/cat-3.png"
              class="w-full h-40 object-cover rounded-tr-xl cursor-zoom-in hover:brightness-90 transition-all duration-200"
              @click="openLightbox('/blog/post-3/cat-3.png')" />
            <img src="/blog/post-3/cat-4.jpg"
              class="w-full h-40 object-cover cursor-zoom-in hover:brightness-90 transition-all duration-200"
              @click="openLightbox('/blog/post-3/cat-4.jpg')" />
            <img src="/blog/post-3/cat-5.jpg"
              class="w-full h-40 object-cover rounded-br-xl cursor-zoom-in hover:brightness-90 transition-all duration-200"
              @click="openLightbox('/blog/post-3/cat-5.jpg')" />
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 mx-4" />

      <div class="flex items-center px-4 py-2 gap-1">
        <button
          class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-200 flex-1 justify-center">
          <UIcon name="mdi:comment-outline" class="size-5" />
          <span>Comment</span>
        </button>
        <button @click="share"
          class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-200 flex-1 justify-center">
          <UIcon name="mdi:share-outline" class="size-5" />
          <span>Share</span>
        </button>
      </div>

      <div class="px-4 pb-6 pt-3 border-t border-white/10">
        <div class="giscus" />
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="lightboxSrc"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          @click="closeLightbox">
          <img :src="lightboxSrc"
            class="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            @click.stop />
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
