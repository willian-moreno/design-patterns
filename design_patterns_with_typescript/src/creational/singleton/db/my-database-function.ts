import User from '../interfaces/User';

export const MyDatabaseFunction = (function () {
  const users: User[] = []; // Dessa forma a constante fica privada.

  return {
    addUser(user: User): void {
      users.push(user);
    },

    removeUser(id: number): void {
      const position = users.map(({ id }) => id).indexOf(id);
      users.splice(position, 1);
    },
    getUsers(): void {
      users.forEach((user) => {
        console.log(user);
      });
    },
  };
})();
