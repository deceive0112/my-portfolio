<template> 
    <div class="flex flex-col min-h-screen">
        <web-header class="bg-blue-900 p-3 shadow-md"/>
        <div class="p-3">
            <slot />
        </div>
        <web-footer class="bg-blue-900 p-3 shadow-md"/>
    </div>
</template>