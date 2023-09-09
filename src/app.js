const Person = require("./Person");
const GroupGarden = require("./GroupGarden");

const Planting = require("./Planting");

const roberta = new Person("Roberta", "Méier", "email1@gmail.com");
//console.log(roberta);
const laissa = new Person("Laíssa", "Campo Grande", "email2@gmail.com");
//console.log(laissa);
const raquel = new Person("Raquel", "Cascadura", "email3@gmail.com");
///console.log(raquel);

const alice = new Person("Alice", "Tijuca", "email4@gmail.com");

const GroupGardenMeier = new GroupGarden("Méier", "Roberta");
const GroupGardenCG = new GroupGarden("Campo Grande", "Laíssa");
const GroupGardenCascadura = new GroupGarden("Cascadura", "Raquel");

roberta.enrollInGroup(GroupGardenMeier);
console.log(roberta);
laissa.enrollInGroup(GroupGardenCG);
console.log(laissa);
raquel.enrollInGroup(GroupGardenCascadura);
console.log(raquel);
