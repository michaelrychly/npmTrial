

class app{
  constructor(name){
    this.name = name;
  }

  get trial() {
    let test = "";
    test = `What's up ${this.name}`;
    return test;
  }

}


let see = new app("awesome");

console.log(see.trial);

module.exports.app;
