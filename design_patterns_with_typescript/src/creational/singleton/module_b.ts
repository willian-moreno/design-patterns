import { MyDatabaseFunction } from './db/my-database-function';
import './module_a';

const myDatabase = MyDatabaseFunction;
myDatabase.addUser({ id: 4, name: 'Olaf', age: 50 });
myDatabase.addUser({ id: 5, name: 'Tristana', age: 17 });
myDatabase.addUser({ id: 6, name: 'Lux', age: 25 });

myDatabase.getUsers();
