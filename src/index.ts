// src/app.ts
import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});