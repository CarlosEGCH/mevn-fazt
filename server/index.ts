import app from "./app";
import { startConnection } from './database';

startConnection();
app.listen(3000);
console.log('Server is running ion port 3000');