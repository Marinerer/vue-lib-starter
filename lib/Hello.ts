export default class Hello {
  public name: string
  constructor(name: string) {
    this.name = name
  }

  sayHi() {
    console.log(`hi, ${this.name}!`)
  }
}
