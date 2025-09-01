import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
 
const removeLastContact = async () => {
  try { 
    let contacts = await readContacts();
 
    if (contacts.length > 0) { 
      contacts.pop(); 
      await writeContacts(contacts);
      console.log('Останній контакт було успішно видалено.');
    } else {
      console.log('Список контактів порожній, нічого видаляти.');
    }
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error);
  }
};
 
await removeLastContact();
