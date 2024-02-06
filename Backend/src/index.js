import app from "./app.js";
import './db.js';

app.listen(process.env.PORT)
console.log('Server running in port', process.env.PORT);
