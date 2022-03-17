import express from 'express';

const resizeRoute = express.Router();

resizeRoute.get('/resize', (req: express.Request, res: express.Response) => {
    res.send('Resizing from this route');
})

export  default resizeRoute;