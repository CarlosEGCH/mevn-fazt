import axios from './axios';
import {Task} from '../interfaces/Task';

export const createTask = async (task: Task) => {
    return await axios.post('/tasks', task)
}

export const getTasks = async () => {
    return await axios.get("/tasks");
}
