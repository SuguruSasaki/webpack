export class Hello {
  constructor(name) {
    this.say(name);
  }

  say(name) {
    console.log(`Hello ${name}`);
  }
}

export default new Hello("Suguru sasaki");
