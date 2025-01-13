<template>
    <div class="sidebar sticky top-0 h-screen">
        <ul>
            <li v-for="item in menuItems" :key="item.text">
                <a :href="item.link" :class="{ active: currentPath === item.link }" @click="navigateId(item.link)">{{
                    item.text }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
    name: 'Sidebar',
    setup() {
        const menuItems = ref([
            { text: 'Personal', link: '#personal' },
            { text: 'Technical skills', link: '#technical' },
            { text: 'Work experience', link: '#work-experience' },
            { text: 'Projects', link: '#projects' },
            { text: 'Contact', link: '#contact' }
        ]);
        const currentPath = ref('#personal');

        const navigateId = (id) => {
            currentPath.value = id;

            const target = document.querySelector(id)
            const offset = 16;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        };

        return {
            menuItems,
            currentPath,
            navigateId,
        };
    }
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
    @apply my-2;
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
