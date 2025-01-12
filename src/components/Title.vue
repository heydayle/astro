<script setup lang="ts">
    import { defineProps } from 'vue'
    interface Props {
        title: string | number
    }
    const props = defineProps<Props>()
</script>
<template>
    <h1>{{ title }}</h1>
</template>