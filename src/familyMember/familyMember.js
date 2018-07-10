class FamilyMember{

  constructor(name, parents = [null, null]){
    this.name = name
    this.parents = parents
    this.children = []
  }

  getName(){
    return this.name
  }

  setParents(parents){
    this.parents = parents
  }

  getParents(){
    return this.parents
  }

  addChild(child){
    this.children = this.children.push(child)
  }

  getchildren(){
    return this.children
  }

  addProperty(propName, value){
    this[propName] = value
  }
}

let John = new FamilyMember("John");
John.addProperty("Age", 21)
console.log(John)
