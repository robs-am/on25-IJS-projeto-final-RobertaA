const Person = require("./Person");
const GroupGarden = require("./GroupGarden");
const Planting = require("./Planting");

const lider1 = new Person("Roberta", "Méier", "email1@gmail.com");
console.log(lider1);
const lider2 = new Person("Laíssa", "Campo Grande", "email2@gmail.com");
console.log(lider2);
const lider3 = new Person("Raquel", "Cascadura", "email3@gmail.com");
console.log(lider3);

const GroupGardenMeier = new GroupGarden("Méier", "Roberta");
const GroupGardenCG = new GroupGarden("Campo Grande", "Laíssa");
const GroupGardenCascadura = new GroupGarden("Cascadura", "Raquel");

console.log(GroupGardenMeier);
