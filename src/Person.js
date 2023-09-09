class Person {
  constructor(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.group = null;
  }

  enrollInGroup(group) {
    if (this.group) {
      this.leaveGroup();
    }
    group.addMember(this);
    this.group = group;
  }

  leaveGroup() {
    if (this.group) {
      this.group.removeMember(this);
      this.group = null;
    }
  }
}
module.exports = Person;

const lider1 = new Person("Roberta", "Méier", "email1@gmail.com");
console.log(lider1);
const lider2 = new Person("Laíssa", "Campo Grande", "email2@gmail.com");
console.log(lider2);
const lider3 = new Person("Raquel", "Cascadura", "email3@gmail.com");
console.log(lider3);
