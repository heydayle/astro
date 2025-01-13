<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useThrottleFn } from '@vueuse/core'

const cols = ref(0)
const rows = ref(0)
const SIZE = 50

// Compute grid cells only when dimensions change
const gridCells = computed(() => {
  const cells = []
  for (let x = 0; x < cols.value; x++) {
    for (let y = 0; y < rows.value; y++) {
      // Pre-compute random hover color class
      const hoverClass = getRandomColorHover()
      cells.push({
        x: x * SIZE,
        y: y * SIZE,
        size: SIZE,
        class: hoverClass
      })
    }
  }
  return cells
})

// Throttle resize updates to reduce calculations
const updateGrid = useThrottleFn(() => {
  cols.value = Math.ceil(window.innerWidth / SIZE)
  rows.value = Math.ceil(window.innerHeight / SIZE)
}, 200) // 200ms throttle

onMounted(() => {
  updateGrid()
  window.addEventListener('resize', updateGrid)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateGrid)
})

// Memoize color classes
const colorClasses = [
  'hover:fill-red-500/30',
  'hover:fill-blue-500/30',
  'hover:fill-green-500/30',
  'hover:fill-yellow-500/30',
  'hover:fill-purple-500/30',
  'hover:fill-pink-500/30',
  'hover:fill-indigo-500/30',
  'hover:fill-orange-500/30',
  'hover:fill-gray-300/30',
]

function getRandomColorHover() {
  return colorClasses[Math.floor(Math.random() * colorClasses.length)]
}
</script>

<template>
  <div class="min-h-screen relative">
    <svg
      class="absolute inset-0 h-full w-full stroke-gray-300/20 transition-all duration-100 dark:stroke-gray/20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="fade-gradient"
          cx="50%"
          cy="50%"
          r="80%"
        >
          <stop
            offset="10%"
            stop-color="white"
            stop-opacity="1"
          />
          <stop
            offset="100%"
            stop-color="black"
            stop-opacity="0"
          />
        </radialGradient>
        <mask id="fade-mask">
          <rect
            width="100%"
            height="100%"
            fill="url(#fade-gradient)"
          />
        </mask>
      </defs>
      <!-- Grid Cells -->
      <g>
        <rect
          v-for="(cell, index) in gridCells"
          :key="index"
          :x="cell.x"
          :y="cell.y"
          :width="SIZE"
          :height="SIZE"
          mask="url(#fade-mask)"
          class="transition-all duration-0 ease-in-out fill-transparent"
          :class="cell.class"
        />
      </g>
    </svg>
    <slot />
  </div>
</template>