<script setup>
import { ref, onMounted, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
const SIZE = 60

const cells = ref(1)

onMounted(() => {
  if (width.value && height.value) {
    const cols = Math.ceil((width.value) / SIZE)
    const rows = Math.ceil((height.value) / SIZE)
    cells.value = cols * rows
  }
})

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(auto-fill, ${SIZE}px)`,
  width: `${width.value}px`,
  height: `${height.value}px`,
}))

// Precompute color classes
const colorClasses = [
  'hover:bg-red-500/30',
  'hover:bg-blue-500/30',
  'hover:bg-green-500/30',
  'hover:bg-yellow-500/30',
  'hover:bg-purple-500/30',
  'hover:bg-pink-500/30',
  'hover:bg-indigo-500/30',
  'hover:bg-orange-500/30',
  'hover:bg-gray-300/30',
]

const getRandomColorClass = () => 
  colorClasses[Math.floor(Math.random() * colorClasses.length)]
</script>

<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Grid using CSS -->
    <div 
      class="skew-y-[20deg] scale-150 absolute inset-0 group grid gap-[1px] bg-gray-300/20 dark:bg-gray-700/20"
      :style="gridStyle"
    >
      <div
        v-for="i in cells"
        :key="i"
        class=" transition-colors duration-500 inner-shadow shadow-sm shadow-white/10"
        :class="getRandomColorClass()"
      />
    </div>

    <!-- Radial gradient overlay -->
    <div 
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(circle at center, transparent 0%, black 100%)"
    />
    
    <slot />
  </div>
</template>