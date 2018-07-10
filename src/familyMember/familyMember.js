class FamilyMember{

  this.name;
  this.parents;
  this.children;
  this.age;

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
}
