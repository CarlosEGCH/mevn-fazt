<template>
    <div>
        <h1>Task Detail</h1>
    <form @submit.prevent="handleUpdate()">
        <input type="text" v-model="currentTask.title">
        <textarea rows="3" v-model="currentTask.description"></textarea>
        <button>Update</button>
    </form>
        <button @click="handleDelete()">Delete</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Task } from '../interfaces/Task';
import { deleteTask, getTask, updateTask } from '../services/TaskService';

export default defineComponent({
    data() {
        return {
            currentTask: {} as Task
        }
    },
    methods: {
        async loadTask(id: string) {
            const res = await getTask(id);
            this.currentTask = res.data;
        },
        async handleUpdate() {
            if(typeof this.$route.params.id == "string"){
            await updateTask(this.$route.params.id, this.currentTask);
            this.$router.push("/");
            }
        },
        async handleDelete() {
            if(typeof this.$route.params.id == "string"){
            await deleteTask(this.$route.params.id);
            this.$router.push("/");            }
        }
    },
    mounted() {
        if(typeof this.$route.params.id == "string"){
            this.loadTask(this.$route.params.id);
        }
    }
})
</script>
