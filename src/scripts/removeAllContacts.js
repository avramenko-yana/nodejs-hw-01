import { writeContacts } from '../utils/writeContacts.js';
 
const removeAllContacts = async () => {
  try { 
    await writeContacts([]);
    console.log('Всі контакти були успішно видалені.');
  } catch (error) {
    console.error('Помилка при видаленні всіх контактів:', error);
  }
};
 
await removeAllContacts();
