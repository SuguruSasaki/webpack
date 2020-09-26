export class HelloWorld {
  private name: string

  constructor(name) {
    this.name = name
    this.say()
  }

  say() {
    console.log(`Yahooooo: ${this.name}`)
  }
}

export default new HelloWorld('test ')