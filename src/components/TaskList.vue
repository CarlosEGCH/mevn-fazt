<template>
<ul>
    <li v-for="(task, index) in tasks" :key="index" @click="this.$router.push(`/tasks/${task._id}`)">
        {{task.title}}
    </li>
</ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Task } from '../interfaces/Task';
import {getTasks} from '../services/TaskService'

export default defineComponent({
    data() {
        return {
            tasks: [] as Task[]
        }
    },
    methods: {
        async loadTasks() {
            const res = await getTasks();
            this.tasks = res.data;
        }
    },
    mounted() {
        this.loadTasks()
    }
})
</script>
