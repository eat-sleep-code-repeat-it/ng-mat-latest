export class Student {
    id: number;
    name: string;
    email: string;
    country: string;
    favorite: boolean;

    constructor(name?: string) {
      this.name = name;
    }
}
