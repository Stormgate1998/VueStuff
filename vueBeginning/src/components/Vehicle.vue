<template>
    <div :style="{ left: `${x}px`, top: `${y}px`, transform: `rotate(${angle}deg)` }" class="rotated-element">
        <CarPic />
    </div>
</template>

<script setup lang="ts">
import CarPic from "./CarPic.vue"
const { x, y, angle } = defineProps<{
    x: number,
    y: number,
    angle: number,
}>()
</script>


<style scoped>
.rotated-element {
    position: absolute;
    transform-origin: center;
    /* Add any additional styling you need */
}
</style>
