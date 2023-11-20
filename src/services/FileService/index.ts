import * as fs from 'fs';
import path from 'path';

class FileService {
    getFileByPath(filePath: string): Buffer {
        const fileData = fs.readFileSync(filePath);
        return fileData;
    }

    static getAssetsPath() {
        return path.resolve(__dirname, '../../assets');
    }
}

export default FileService;
