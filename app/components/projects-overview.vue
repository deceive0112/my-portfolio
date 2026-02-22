<template>
    <div class="col-span-3 mt-15">
        <h2 class="flex text-4xl uppercase font-bold items-center text-center justify-center mb-1">Projects</h2>
        <div class="grid grid-cols-3 gap-4 p-3 rounded-xl backdrop-blur-sm shadow-2xl">

          <!-- Programming Languages -->
          <div
            class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
            <p class="text-sm text-gray-400 font-semibold mb-2 uppercase tracking-widest">Programming Languages</p>
            <div class="flex flex-wrap gap-2">
              <div class="flex flex-col items-center gap-1">
                <UIcon name="devicon:typescript" class="rounded-xl shadow-xl size-13 p-1" />
                <span class="text-[10px] text-gray-400">TypeScript</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <UIcon name="devicon:javascript" class="rounded-xl shadow-xl size-13 p-1" />
                <span class="text-[10px] text-gray-400">JavaScript</span>
              </div>
            </div>
          </div>

          <!-- Frontend -->
          <div
            class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
            <p class="text-sm text-gray-400 font-semibold mb-2 uppercase tracking-widest">Frontend</p>
            <div class="flex flex-wrap gap-2">
              <div class="flex flex-col items-center gap-1">
                <UIcon name="devicon:html5" class="rounded-xl shadow-xl size-13 p-1" />
                <span class="text-[10px] text-gray-400">HTML</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <UIcon name="devicon:css" class="rounded-xl shadow-xl size-13 p-1" />
                <span class="text-[10px] text-gray-400">CSS</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <UIcon name="devicon:vuejs" class="rounded-xl shadow-xl size-13 p-1" />
                <span class="text-[10px] text-gray-400">Vue</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <UIcon name="devicon:nuxtjs" class="rounded-xl shadow-xl size-13 p-1" />
                <span class="text-[10px] text-gray-400">Nuxt</span>
              </div>
            </div>
          </div>

          <!-- Backend & Database -->
          <div
            class="p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-sky-500/20 hover:shadow-lg hover:bg-white/5">
            <p class="text-sm text-gray-400 font-semibold mb-2 uppercase tracking-widest">Backend & Database</p>
            <div class="flex flex-wrap gap-2">
              <div class="flex flex-col items-center gap-1">
                <UIcon name="devicon:firebase" class="rounded-xl shadow-xl size-13 p-1" />
                <span class="text-[10px] text-gray-400">Firebase</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <UIcon name="devicon:bun" class="rounded-xl shadow-xl size-13 p-1" />
                <span class="text-[10px] text-gray-400">Bun</span>
              </div>
            </div>
          </div>

          <div class="flex justify-end col-span-3">
            <UButton icon="material-symbols:grid-view-outline-rounded"
              class="rounded-lg shadow-md cursor-pointer bg-linear-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 transition-all duration-200 border-0">
              View More
            </UButton>
          </div>
        </div>
      </div>
</template>