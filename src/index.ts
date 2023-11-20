// src/app.ts
import express from 'express';
import * as scheduleController from './controllers/schedule';

type APIControllerType = (req: unknown, res: unknown) => void // the library does not accept Promise<void> return type

const app = express();
const PORT = 3000;

app.get('/', scheduleController.getSchedule as APIControllerType);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
