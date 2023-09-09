const Person = require("./Person");

class GroupGarden {
  constructor(neighborhoodName, leader) {
    this.neighborhoodName = neighborhoodName;
    this.leader = leader;
    this.members = [leader];
    this.plantings = [];
  }

  addMember(person) {
    this.members.push(person);
  }

  removeMember(person) {
    const index = this.members.indexOf(person);
    if (index > -1) {
      this.members.splice(index, 1);
    }
  }

  changeLeader(newLeader) {
    if (this.members.includes(newLeader)) {
      this.leader = newLeader;
    } else {
      console.log("The new leader must be a member of the group!");
    }
  }
}

module.exports = GroupGarden;

const lider1 = new Person("Roberta", "Méier", "email1@gmail.com");
console.log(lider1);
const GroupGardenMeier = new GroupGarden("Méier", "Roberta");
console.log(GroupGardenMeier);
