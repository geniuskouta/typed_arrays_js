import * as csvParser from 'csv-parser';
import { Readable } from 'stream';
import { pipeline } from 'stream/promises';

class CSVService {
    async parseCsv<T> (content: string, options?: csvParser.Options): Promise<T[]> {
        return await new Promise((resolve, reject) => {
            const result: T[] = [];
            const readableStream = Readable.from(content);
            const transformer = csvParser.default(options ?? {});
            transformer
                .on('data', (data) => result.push(data))
                .on('end', () => { resolve(result); })
                .on('error', (error) => { reject(error); });

            pipeline(readableStream, transformer)
                .catch((error) => { reject(error); });
        });
    }
}

export default CSVService;
