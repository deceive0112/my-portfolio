<template> 
    <div class="flex flex-col min-h-screen px-18 md:px-30">
        <web-header class="p-3 shadow-xl rounded-md mt-3"/>
        <div class="p-3">
            <AppBackground />
            <slot />
        </div>
        <web-footer class="bg-blue-500 p-3 shadow-xl rounded-md mb-3"/>
    </div>
</template>