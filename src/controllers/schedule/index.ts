import CSVService from '../../services/CSVService';
import FileService from '../../services/FileService';
import { Response } from 'express';


export const getSchedule = async (req: Request, res: Response): Promise<void> => {
    const fileService = new FileService();
    const csvService = new CSVService();
    const file = fileService.getFileByPath(FileService.getAssetsPath() + '/bus-schedule.csv');

    const csvString = new TextDecoder().decode(file);
    const result = await csvService.parseCsv(csvString);
    res.status(200).json(result);
};
