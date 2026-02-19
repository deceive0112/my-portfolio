<script setup>
const x = ref(0)
const y = ref(0)
const gifSrc = ref('/catdance.gif')

const handleMouse = (event) => {
    x.value = event.clientX
    y.value = event.clientY
}

onMounted(() => {
    window.addEventListener('mousemove', handleMouse)
})

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouse)
})
</script>

<template>
    <div class="fixed inset-0 -z-10 overflow-hidden">
        <img :src="gifSrc" class="pointer-events-none absolute w-40 h-40"
            :style="{ left: `${x}px`, top: `${y}px`, transform: 'translate(-50%, -50%)' }" />
    </div>
</template>