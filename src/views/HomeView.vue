<template>
  <main>
    123
  </main>
</template>


<script setup lang="ts">
import { ref } from "vue"
import TheWelcome from '../components/TheWelcome.vue'
import { HTLLOWORD } from '@/api/example'

const test = ref('')
const getTest = () => {
  HTLLOWORD().then(res => {
    console.log(res)
  })
}

getTest();
</script>


