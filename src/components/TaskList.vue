<template>
<h1>Task List</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {getTasks} from '../services/TaskService'

export default defineComponent({
    methods: {
        async loadTasks() {
            const res = await getTasks();
            console.log(res);
        }
    },
    mounted() {
        this.loadTasks()
    }
})
</script>
