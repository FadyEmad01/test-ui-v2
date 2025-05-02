import fs from 'fs';
import path from 'path';

export const extractCodeFromFilePath = (filePath: string) => {
  // const fullPath = path.resolve(process.cwd(), filePath);
  // const fileContent = fs.readFileSync(fullPath, 'utf-8');
  // return fileContent;
  
  const fullPath = path.resolve(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${fullPath}`);
  }
  return fs.readFileSync(fullPath, 'utf-8');
};
