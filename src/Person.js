class Person {
  constructor(name, neighborhood, email) {
    this.name = name;
    this.neighborhood = neighborhood;
    this.email = email;
    this.group = null;
  }

  enrollInGroup(group) {
    if (this.group) {
      this.leaveGroup();
    }
    group.addMember(this);
    this.group = group;

    console.log(
      `Membros do grupo ${group.neighborhoodName}:`,
      group.getMembersNames().join(", ")
    );
  }

  leaveGroup() {
    if (this.group) {
      this.group.removeMember(this);
      this.group = null;
    }
  }
}
console.log("person.js loaded and Person class is defined");

module.exports = Person;

const roberta = new Person("Roberta", "Méier", "email1@gmail.com");
// console.log(roberta);
const laissa = new Person("Laíssa", "Campo Grande", "email2@gmail.com");
// console.log(laissa);
const raquel = new Person("Raquel", "Cascadura", "email3@gmail.com");
// console.log(raquel);
