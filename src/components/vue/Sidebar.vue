<template>
    <div class="sidebar fixed left-0 top-[40px] h-[calc(100vh-40px)]">
        <ul>
            <li v-for="item in menuItems" :key="item.text">
                <a :href="item.link" class="after:content-[''] after:absolute after:-bottom-2 after:left-0 after:bg-white after:!h-[1px] after:w-0 relative after:transition-all after:duration-200 after:ease-in-out" :class="{ 'active after:!w-full': currentPath === item.link }" @click="navigateId(item.link)">{{
                    item.text }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Icon } from "@iconify/vue";

const menuItems = ref([
  { text: 'Personal', link: '#personal' },
  { text: 'Technical skills', link: '#technical' },
  { text: 'Work experience', link: '#work-experience' },
  { text: 'Projects', link: '#projects' },
  { text: 'Contact', link: '#contact' }
]);
const currentPath = ref('#personal');

const navigateId = (id: string) => {
  currentPath.value = id;

  const target = document.querySelector(id) as HTMLElement
  const offset = 16;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

  target.parentNode?.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
  });
};
</script>

<style scoped>
.sidebar {
    @apply w-60 bg-black p-4;
}

.sidebar ul {
    @apply list-none p-0;
}

.sidebar li {
    @apply mt-4 mb-6;
}

.sidebar a {
    @apply no-underline text-gray-600;
}

.sidebar a:hover {
    @apply text-white;
}

.sidebar a.active {
    @apply text-white;
}
</style>
