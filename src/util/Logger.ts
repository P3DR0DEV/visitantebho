import path from 'path';
import { writeFileSync, promises as fsPromises } from 'fs';

class Log {
  static async info(message: string): Promise<void> {
    const filePath = `${path.resolve(__dirname, '../log/info/')}/${new Date().toDateString()}.txt`;
    message = `${new Date()} - ${message} \n`;
    await fsPromises.writeFile(filePath, message, { flag: 'a' });
    return;
  };

  static error(name: string, message: string): void {
    const filePath = `${path.resolve(__dirname, '../log/error/')}/${new Date().toDateString()}.txt`;
    message = `${new Date()} - ${name} - ${message} \n`;
    writeFileSync(filePath, message, { flag: 'a' });
    return;
  };
};

export { Log };
