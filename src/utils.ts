import '@rmwc/button/styles';
import '@rmwc/dialog/styles';
import '@rmwc/drawer/styles';
import '@rmwc/icon/styles';
import '@rmwc/list/styles';
import '@rmwc/top-app-bar/styles';
import '@rmwc/typography/styles';

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export class User {
  readonly #name: string;
  #role?: Role;

  constructor(name: string) {
    this.#name = name;
  }

  get name(): string {
    return this.#name;
  }

  get role(): Role | undefined {
    return this.#role;
  }

  login(role: Role): void {
    this.#role = role;
  }

  logout(): void {
    this.#role = undefined;
  }
}

export const user = new User('John Doe');
