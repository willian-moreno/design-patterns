import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.addUser({ id: 1, name: 'Willian', age: 22 });
myDatabaseFunction.addUser({ id: 2, name: 'Alves', age: 22 });
myDatabaseFunction.addUser({ id: 3, name: 'Moreno', age: 22 });

export { myDatabaseFunction };
