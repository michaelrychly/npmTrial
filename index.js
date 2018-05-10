

class App{
  constructor(name){
    this.name = name;
  }

  get trial() {
    let test = "";
    test = `What's up ${this.name}`;
    return test;
  }

}


let app = new App("awesome");

console.log(app.trial);

module.exports = App;
