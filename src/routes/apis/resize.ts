import express from 'express';
import createImage from '../../resize';

const resizeRoute = express.Router();

resizeRoute.post('/resize', async(req: express.Request, res: express.Response) => {
    let height = req.body.height;
    let width = req.body.width;

    // const result = service(height, width)

    let image = await createImage(height, width);
     res.send(image);
})




export  default resizeRoute;