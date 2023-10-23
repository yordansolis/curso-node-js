import fse from "fs-extra";
import imagemin from "imagemin";
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';
import sharp from "sharp";
import path from "path";

const inputFolder = 'src';
const outputFolder = 'img_opt';
const targetWidth = 1920;

const optimizarImagenes = async () => {
    try {
        const files = await fse.readdir(inputFolder);
        console.log(files);

        for (const file of files) {
            const src = path.join(inputFolder, file);
            const dest = path.join(outputFolder, file);

            const stats = await fse.stat(src);

            // Resize image using sharp
            await sharp(src)
                .resize({ width: targetWidth })
                .toFile(dest);

            // Optimize image using imagemin
            await imagemin([src], {
                destination: outputFolder,
                plugins: [
                    imageminJpegtran({ quality: 80 }), // Compress JPEG images with quality 80%
                 //   imageminPngquant({ quality: 80 }), // Compress PNG images
                    // imageminGifsicle(), // Compress GIF images (uncomment if needed)
                    // imageminSvgo(), // Compress SVG images (uncomment if needed)
                    imageminWebp({ quality: 80 }) // Compress WebP images with quality 80
                ]
            });
        }

        console.log('Imagenes optimizadas');
    } catch (error) {
        console.log(error);
    }
}

optimizarImagenes();
