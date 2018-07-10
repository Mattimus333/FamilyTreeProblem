import { FamilyMember } from './familyMemberClass'

export function createJohn(){
  let firstParent = new FamilyMember("John")
  console.log(firstParent)
  return firstParent
}
