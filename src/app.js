import { Pessoa } from "./Pessoa.js";
import { GrupoHorta } from "./GrupoHorta.js";
import { Plantacao } from "./Plantacao.js";

const lider1 = new Pessoa("Roberta", "Méier", "email1@gmail.com");
console.log(lider1);
const lider2 = new Pessoa("Laíssa", "Campo Grande", "email2@gmail.com");
console.log(lider2);
const lider3 = new Pessoa("Raquel", "Cascadura", "email3@gmail.com");
console.log(lider3);

const GrupoHortaMeier = new GrupoHorta("Méier", "Roberta");
const GrupoHortaCG = new GrupoHorta("Campo Grande", "Laíssa");
const GrupoHortaCascadura = new GrupoHorta("Cascadura", "Raquel");
