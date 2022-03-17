import express from 'express';
import { appendFile } from 'fs';
import resizeRoute from './apis/resize';

const routes = express.Router();

const logger = (req: express.Request, res: express.Response, next: Function): void => {
    const vistedRoute = (`${req.url} was visted`);
    console.log(vistedRoute);
    next();
}

routes.get('/', (req: express.Request, res: express.Response) => {
    res.send("Just saying Hi");
})

routes.use('/', logger, resizeRoute);

export default routes;