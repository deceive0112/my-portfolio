<template>
    <div class="flex flex-row justify-between sticky top-0 left-0 w-full z-50 bg-transparent items-center text-center backdrop-blur-sm">
        <span>
            <UIcon name="arcticons:tildes" class="w-7 h-7 text-blue-300 hover:text-blue-600 mt-0.5"/>
        </span>
        <nav class="flex items-center gap-9">
            <span class="text-xl font-bold font-mono">About</span>
            <span class="text-xl font-bold font-mono">Projects</span>
            <span class="text-xl font-bold font-mono">Tech Stack</span>
            <span class="text-xl font-bold font-mono">Blog</span>
            <span class="text-xl font-bold font-mono">Contact</span>
            <UColorModeButton />
        </nav>
    </div>
</template>