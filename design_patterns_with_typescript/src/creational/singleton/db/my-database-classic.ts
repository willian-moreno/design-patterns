import User from '../interfaces/user';

export default class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(id: number): void {
    const position = this.users.map(({ id }) => id).indexOf(id);
    this.users.splice(position, 1);
  }

  getUsers(): void {
    this.users.forEach((user) => {
      console.log(user);
    });
  }
}
