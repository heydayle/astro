<script setup lang="ts">
import Title from './Title.vue'
import { ref } from 'vue';
const count = ref(0)
const increase = () => {
    count.value += 1
}

</script>

<template>
    <div>
        <h1>Great, Vue!</h1>
        <div>
            Count: <Title :title="count"/>
        </div>
        <button id="button" @click="increase">++</button>
    </div>
</template>