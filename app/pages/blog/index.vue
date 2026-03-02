<script setup lang="ts">
definePageMeta({
  layout: "default",
})

const share = async (title: string, slug: string) => {
  const url = `${window.location.origin}/blog/${slug}`
  if (navigator.share) {
    await navigator.share({ title, url })
  } else {
    await navigator.clipboard.writeText(url)
    alert('Link copied!')
  }
}

const posts = [
  { id: 1, title: 'Post-1', slug: 'post-1' },
  { id: 2, title: 'Post-2', slug: 'post-2' },
  { id: 3, title: 'Mis gatos', slug: 'post-3' },
]

const drag = useDragScroll()
</script>

<template>
  <div class="max-w-3xl mx-auto pt-15 pb-15">

    <div class="mb-6">
      <div :ref="drag.scrollContainer" @mousedown="drag.onMouseDown" @mouseleave="drag.onMouseLeave"
        @mouseup="drag.onMouseUp" @mousemove="drag.onMouseMove"
        class="flex flex-nowrap gap-3 p-4 rounded-xl border border-white/10 backdrop-blur-xl shadow-lg overflow-x-auto cursor-grab active:cursor-grabbing select-none"
        style="scrollbar-width: none;">
        <a href="/blog/my-day/my-day-1.png" target="_blank" draggable="false">
          <div
            class="relative shrink-0 w-30 h-46 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg border border-white/10">
            <img src="/blog/my-day/my-day-1.png" class="w-full h-full object-cover" draggable="false" />
            <div class="absolute bottom-0 left-0 right-0 bg-black/50 flex items-center justify-center py-2">
              <span class="text-white text-xs font-semibold">02-03-26</span>
            </div>
          </div>
        </a>
        <div
          class="shrink-0 w-30 h-46 rounded-xl bg-purple-500/30 border border-white/10 flex items-end justify-center p-2 cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg">
          <span class="text-xs text-center font-semibold">My Day 02</span>
        </div>
        <div
          class="shrink-0 w-30 h-46 rounded-xl bg-sky-500/30 border border-white/10 flex items-end justify-center p-2 cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg">
          <span class="text-xs text-center font-semibold">My Day 03</span>
        </div>
        <div
          class="shrink-0 w-30 h-46 rounded-xl bg-purple-500/30 border border-white/10 flex items-end justify-center p-2 cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg">
          <span class="text-xs text-center font-semibold">My Day 04</span>
        </div>
        <div
          class="shrink-0 w-30 h-46 rounded-xl bg-sky-500/30 border border-white/10 flex items-end justify-center p-2 cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg">
          <span class="text-xs text-center font-semibold">My Day 05</span>
        </div>
        <div
          class="shrink-0 w-30 h-46 rounded-xl bg-purple-500/30 border border-white/10 flex items-end justify-center p-2 cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg">
          <span class="text-xs text-center font-semibold">My Day 06</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4">

      <div v-for="post in posts" :key="post.id"
        class="rounded-xl border border-white/10 backdrop-blur-xl shadow-lg overflow-hidden">

        <NuxtLink :to="`/blog/${post.slug}`">
          <div class="p-4 hover:bg-white/5 transition-all duration-300 cursor-pointer">
            <p class="text-base">{{ post.title }}</p>
          </div>
        </NuxtLink>

        <div class="border-t border-white/10 mx-4" />

        <div class="flex items-center px-4 py-2 gap-1">

          <NuxtLink :to="`/blog/${post.slug}`"
            class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-200 flex-1 justify-center shadow-lg">
            <UIcon name="mdi:comment-outline" class="size-5" />
            <span>Comment</span>
          </NuxtLink>

          <button @click="share(post.title, post.slug)"
            class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-200 flex-1 justify-center shadow-lg">
            <UIcon name="mdi:share-outline" class="size-5" />
            <span>Share</span>
          </button>

        </div>

      </div>

    </div>
  </div>
</template>
