import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

let dirName = 'images';

const createImage = async(height: number, width: number) => {
    try {
        const newImage = await sharp('images/image 1.jpeg')
        .resize(height, width)
        .toFile('anotherimage.png');
    } catch (error) {
        console.log(error);
    }
}

export default createImage;



