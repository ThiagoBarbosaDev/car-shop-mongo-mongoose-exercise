import express from 'express';
import { carsRouter, motorcyclesRouter } from './Routes';

const app = express();
app.use(express.json());

app.use('/cars', carsRouter);
app.use('/motorcycles', motorcyclesRouter);

export default app;
