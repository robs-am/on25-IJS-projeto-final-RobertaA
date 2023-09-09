import { Pessoa } from "./Pessoa.js";

export class Pessoa {
  nome;
  bairro;
  email;

  constructor(nome, bairro, email) {
    this.nome = nome;
    this.bairro = bairro;
    this.email = email;
    this.grupo = null;
  }
  inscreverEmGrupo(grupo) {
    if (this.grupo) {
      this.deixarGrupo();
    }
    grupo.adicionarMembro(this);
    this.grupo = grupo;
    return `Usuário ${this.nome} adicionado ao grupo`;
  }

  deixarGrupo() {
    if (this.grupo) {
      this.grupo.removerMembro(this);
      this.grupo = null;
    }
  }
}

const usuario1 = new Pessoa("Roberta", "Méier", "email1@gmail.com");
console.log(usuario1);
const usuario2 = new Pessoa("Laíssa", "Campo Grande", "email2@gmail.com");
console.log(usuario2);
const usuario3 = new Pessoa("Raquel", "Cascadura", "email3@gmail.com");
console.log(usuario3);

usuario3.inscreverEmGrupo(grupo);
