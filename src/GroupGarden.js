const Person = require("./Person");

class GroupGarden {
  constructor(neighborhoodName, admin) {
    this.neighborhoodName = neighborhoodName;
    this.admin = admin;
    this.members = [admin];
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

  changeAdmin(newadmin) {
    if (this.members.includes(newadmin)) {
      this.admin = newadmin;
    } else {
      console.log("The new admin must be a member of the group.");
    }
  }
  getMembersNames() {
    return this.members.map((member) => member.name);
  }
}

module.exports = GroupGarden;
