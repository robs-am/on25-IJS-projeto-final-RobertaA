const Person = require("./Person");
const GroupGarden = require("./GroupGarden");

const Planting = require("./Planting");

//criação de pessoas e seus respectivos bairros

const roberta = new Person("Roberta", "Méier", "email1@gmail.com");
//console.log(roberta);
const laissa = new Person("Laíssa", "Campo Grande", "email2@gmail.com");
//console.log(laissa);
const raquel = new Person("Raquel", "Cascadura", "email3@gmail.com");
///console.log(raquel);

const alice = new Person("Alice", "Méier", "email4@gmail.com");
const tania = new Person("Tânia", "Campo Grande", "email5@gmail.com");
const andre = new Person("Andre", "Meier", "email6@gmail.com");
//criação de grupos de hortas por bairros

const GroupGardenMeier = new GroupGarden("Méier", "Roberta");

const GroupGardenCG = new GroupGarden("Campo Grande", "Laíssa");
const GroupGardenCascadura = new GroupGarden("Cascadura", "Raquel");

//adiciona membros de hortas para cada grupo de bairro
tania.enrollInGroup(GroupGardenCG);
alice.enrollInGroup(GroupGardenMeier);
roberta.enrollInGroup(GroupGardenMeier);
andre.enrollInGroup(GroupGardenMeier);
laissa.enrollInGroup(GroupGardenCG);
raquel.enrollInGroup(GroupGardenCascadura);

//mudar admin
GroupGardenCG.changeAdmin(tania);
console.log(GroupGardenCG);

//Méier

//console.log(roberta);

//console.log(alice);

//Campo Grande

//console.log(laissa);

//console.log(tania);

//Cascadura

//console.log(raquel);

//console.log(GroupGardenCG);

//remove membros de hortas para cada grupo de bairro
