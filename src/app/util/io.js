import path from 'path';

import { promises as fs } from 'fs';

export function getStoragePath(filename){

    return path.join(process.cwd(),'storage',filename)
}

export default function writeData(data, filename) {

    const storagePath = getStoragePath(filename);

    return fs.appendFile(storagePath, data + "\n");


}