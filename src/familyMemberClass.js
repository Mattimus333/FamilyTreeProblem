export class FamilyMember{

  constructor(name, parents = [null, null], spouse = null, children = []){
    this.name = name;
    this.parents = parents;
    this.children = [];
    this.spouse = undefined;
  }

  setParents(parents){
    this.parents = parents;
  }

  addChild(child){
    this.children.push(child);
  }

  addProperty(propName, value){
    this[propName] = value;
  }

  addSpouse(spouse){
    this.spouse = spouse;
  }
}
