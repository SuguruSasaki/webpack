export class Hello {
  constructor(name) {
    this.name = name;
    this.say(name);
  }

  say() {
    console.log(`Hello ${this.name}`);
  }
}

export default new Hello('Suguru sasaki');
