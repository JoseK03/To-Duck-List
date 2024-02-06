import mongoose from 'mongoose';

mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log('DB is connected'))
    .catch((err) => console.log('Error in connection', err));
