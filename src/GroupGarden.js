const Planting = require("./Planting");

class GroupGarden {
  constructor(neighborhoodName, admin) {
    this.neighborhoodName = neighborhoodName;
    this.admin = admin;
    this.members = [admin];
    this.plantings = [];
  }
  addPlanting(plantType, quantity, planter) {
    const newPlanting = new Planting(plantType, quantity, planter);
    //ele cria uma nova instancia da classe Planting dentro do método da classe groupgarden
    this.plantings.push(newPlanting);
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
