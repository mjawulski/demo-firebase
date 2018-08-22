export class Answer {
  name: string;
  count: number;

  constructor(name = '', count = 0) {
    this.name = name;
    this.count = count;
  }
}
