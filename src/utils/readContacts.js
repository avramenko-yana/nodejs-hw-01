 
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';


export const readContacts = async () => {
  try { 
    const data = await fs.readFile(PATH_DB, 'utf-8'); 
    return JSON.parse(data);
  } catch (error) { 
    if (error.code === 'ENOENT') {
      console.log('Файл контактів не знайдено, буде створено новий.');
      return [];
    } 
    console.error('Помилка при читанні файлу контактів:', error);
    throw error;
  }
};
