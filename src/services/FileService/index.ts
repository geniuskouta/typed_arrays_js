import * as fs from 'fs';
import path from 'path';

class FileService {
    getFileByPath(filePath: string): Uint8Array {
        const fileData = fs.readFileSync(filePath);
        return new Uint8Array(fileData);
    }

    getFileSize(file: Uint8Array) {
        return file.byteLength;
    }

    static getAssetsPath() {
        return path.resolve(__dirname, '../../assets');
    }
}

export default FileService;
