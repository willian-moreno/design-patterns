import User from '../interfaces/User';

const users: User[] = [];

export const MyDatabaseModule = {
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
