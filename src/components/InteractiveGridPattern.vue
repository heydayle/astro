<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useIntervalFn } from '@vueuse/core'
const cols = ref(0)
const rows = ref(0)

const updateGrid = () => {
  cols.value = 0
  rows.value = 0
  cols.value = Math.ceil((window.innerWidth) / 50)
  rows.value = Math.ceil((window.innerHeight) / 50)
}
const { resume } = useIntervalFn(() => updateGrid(), 1400)

onMounted(() => {
  resume()
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
</script>

<template>
  <div class="min-h-screen relative">
    <!-- Grid Background -->
    <svg
      class="absolute inset-0 h-full w-full stroke-gray-300/10 transition-all duration-300 dark:stroke-gray/10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="fade-gradient"
          cx="50%"
          cy="50%"
          r="100%"
        >
          <stop
            offset="70%"
            stop-color="white"
            stop-opacity="1"
          />
          <stop
            offset="100%"
            stop-color="white"
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
              :x="(x - 1) * 50"
              :y="(y - 1) * 50"
              width="50"
              height="50"
              mask="url(#fade-mask)"
              :class="getRandomClass()"
              class="transition-all duration-300 ease-in-out hover:fill-slate-100/10"
            />
          </template>
        </template>
      </g>
    </svg>
    <slot />
  </div>
</template>
