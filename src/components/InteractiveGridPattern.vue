<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useIntervalFn } from '@vueuse/core'
const cols = ref(0)
const rows = ref(0)

const updateGrid = () => {
  cols.value = Math.ceil((window.innerWidth) / 70)
  rows.value = Math.ceil((window.innerHeight) / 70)
}
const { resume } = useIntervalFn(() => updateGrid(), 1400)

onMounted(() => {
  updateGrid()
  window.addEventListener('resize', updateGrid)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateGrid)
})
const getRandomClass = () => {
  const random = Math.random(1, 10)
  if (random < 0.01) return 'fill-slate-100/10'
  return 'fill-transparent'
}
const getRandomColorHover = () => {
  const colors = [
    'hover:fill-red-500/30',
    'hover:fill-blue-500/30',
    'hover:fill-green-500/30',
    'hover:fill-yellow-500/30',
    'hover:fill-purple-500/30',
    'hover:fill-pink-500/30',
    'hover:fill-indigo-500/30',
    'hover:fill-orange-500/30',
    'hover:fill-gray-300/30',
  ];
  
  return colors[Math.floor(Math.random() * colors.length)];
}
</script>

<template>
  <div class="min-h-screen relative">
    <!-- Grid Background -->
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
        <template
          v-for="x in cols"
          :key="`col-${x}`"
        >
          <template
            v-for="y in rows"
            :key="`row-${y}`"
          >
            <rect
              :x="(x - 1) * 70"
              :y="(y - 1) * 70"
              width="70"
              height="70"
              mask="url(#fade-mask)"
              class="transition-all duration-100 ease-in-out"
              :class="getRandomColorHover()"
            />
          </template>
        </template>
      </g>
    </svg>
    <slot />
  </div>
</template>
