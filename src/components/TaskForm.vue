<template>
<form @submit.prevent="saveTask()">
<input type="text" placeholder="write a title" v-model="task.title">

<textarea rows="3" placeholder="Write a Description" v-model="task.description"></textarea>

<button>Save</button>
</form>
</template>

<script lang="ts">

import {defineComponent} from 'vue';
import {Task} from '../interfaces/Task';
import {createTask} from '../services/TaskService'

export default defineComponent({
    data() {
        return {
        task: {} as Task
        }
    },
    methods: {
        async saveTask() {
            const res = await createTask(this.task);
            console.log(res);
            this.$router.push({ name: "tasks" }) //Global object $router
        }
    }
})

</script>