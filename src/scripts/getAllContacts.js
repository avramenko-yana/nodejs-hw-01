import { readContacts } from '../utils/readContacts.js';
 
const getAllContacts = async () => {
  try { 
    const contacts = await readContacts();
     
    console.log('Всі контакти:', contacts);
  } catch (error) {
    console.error('Помилка при отриманні контактів:', error);
  }
};
 
await getAllContacts();
