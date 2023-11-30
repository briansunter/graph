import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import crypto from 'crypto';
import { cwd } from 'process';
import { uuid } from 'uuidv4';

export type ImageData = {
    srcset: string;
    hashedFilename: string;
    width: number;
    height: number;
};
const fileExists = async (filePath: string): Promise<boolean> => {
    try {
        await fs.stat(filePath);
        return true;
    } catch {
        return false;
    }
};
export class ImageProcessor {
    private static instance: ImageProcessor = new ImageProcessor();
    private cache: { [key: string]: ImageData[] | string };

    public static getInstance(): ImageProcessor {
        return this.instance;
    }

    constructor() {
        this.cache = {};
    }

    public cacheImage(key: string, imageData: ImageData[] | string): void {
        this.cache[key] = imageData;
    }

    public getCachedImage(key: string): ImageData[] | string | undefined {
        return this.cache[key];
    }

    public async generateResponsiveSizes(imagePath: string): Promise<ImageData[]> {
        const cacheKey = `responsive-${imagePath}`;
        const cached = this.getCachedImage(cacheKey);
        if (cached && Array.isArray(cached)) return cached;
    
        const d = cwd();
        const localImagePath = path.join(d, imagePath);
        await fs.mkdir(path.join(d, 'public', 'assets'), { recursive: true });
    
        const imageBuffer = await fs.readFile(localImagePath);
        const hash = crypto.createHash('sha256');
        hash.update(imageBuffer);
        const hashedFilenameBase = hash.digest('hex');
    
        const sizes = [480, 800, 1200];
        const resultArray: ImageData[] = [];
    
        for (const size of sizes) {
            const sizeHashedFilename = `${hashedFilenameBase}-${size}.webp`;
            const sizeImagePath = path.join(d, 'public', 'assets', sizeHashedFilename);
    
            if (!await fileExists(sizeImagePath)) {
                try {
                    const metadata = await sharp(localImagePath)
                        .resize(size)
                        .webp({ quality: 80 })
                        .toFile(sizeImagePath);
    
                    resultArray.push({
                        srcset: `/assets/${sizeHashedFilename} ${size}w`,
                        hashedFilename: sizeHashedFilename,
                        width: metadata.width,
                        height: metadata.height,
                    });
                } catch (error) {
                    console.error(`Failed to create resized image: ${error}`);
                }
            } else {
                const metadata = await sharp(sizeImagePath).metadata();
                if (metadata.width && metadata.height){
                resultArray.push({
                    srcset: `/assets/${sizeHashedFilename} ${size}w`,
                    hashedFilename: sizeHashedFilename,
                    width: metadata.width,
                    height: metadata.height,
                });
                }   
            }
        }
    
        this.cacheImage(cacheKey, resultArray);
        return resultArray;
    }
    
public async generateLowQualityImage(imagePath: string): Promise<string> {
    const cacheKey = `low-quality-${imagePath}`;
    const cached = this.getCachedImage(cacheKey);
    if (cached && typeof cached === 'string') return cached;

    const d = cwd();
    await fs.mkdir(path.join(d, 'public', 'assets'), { recursive: true });

    const localImagePath = path.join(d, imagePath);
    const imageBuffer = await fs.readFile(localImagePath);

    const hash = crypto.createHash('sha256');
    hash.update(imageBuffer);
    const hashedFilename = `${hash.digest('hex')}.webp`;

    // Check if a file with the same hash already exists
    const finalImagePath = path.join(d, 'public', 'assets', hashedFilename);
    if (await fileExists(finalImagePath)) {
        const placeHolderImageBuffer = await fs.readFile(finalImagePath);
        const base64Image = `data:image/webp;base64,${placeHolderImageBuffer.toString('base64')}`;
        this.cacheImage(cacheKey, base64Image);
        return base64Image;
    }

    const uniqueTempFilename = `${uuid()}-${hashedFilename}`;
    const tempImagePath = path.join(d, 'public', 'assets', uniqueTempFilename);

    try {
        await sharp(localImagePath)
            .resize(20)
            .blur()
            .webp({ quality: 80 })
            .toFile(tempImagePath);
    } catch (error) {
        console.error(`Failed to create low quality image: ${error}, ${localImagePath}`);
    }
    // read new image and get b64 content
    const placeHolderImageBuffer = await fs.readFile(tempImagePath);
    const base64Image = `data:image/webp;base64,${placeHolderImageBuffer.toString('base64')}`;

    // await fs.rename(tempImagePath, finalImagePath);

    this.cacheImage(cacheKey, base64Image);
    return base64Image;
    // return `/assets/${hashedFilename}`;
}
}
