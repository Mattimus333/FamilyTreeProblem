import React from "react";
import { FamilyMember } from "./familyMemberClass"

class FamilyTree extends React.Component {

  constructor(props){
    super(props)
    this.state = {headOfFamily: new FamilyMember("Steph Curry")}
    let spouse = new FamilyMember("Ayesha Curry")
    let kid = new FamilyMember("Riley Curry")
    this.state.headOfFamily.addChild(kid)
    this.state.headOfFamily.spouse = spouse
  }

  render() {
    return (
      this.createFamilyTree(this.state.headOfFamily)
    );
  }

  createFamilyTree(familyMember){
    let spouse = familyMember.spouse
    let coupleString = familyMember.name
    if (familyMember.spouse){
      coupleString += ` and ${spouse.name}`
    }
    return (
      <ul>
        {coupleString}
        {this.getChildren(familyMember)}
      </ul>
    )
  }

  getChildren(familyMember){
    return familyMember.children.map((child) => {
      return (
        <li>
          <ul>
          {this.createFamilyTree(child)}
          </ul>
        </li>
      )
    })
  }
}

export default FamilyTree;
