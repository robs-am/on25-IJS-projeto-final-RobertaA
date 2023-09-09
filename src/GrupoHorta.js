import { Pessoa } from "./Pessoa.js";

export class GrupoHorta {
  constructor(nomeDoBairro, lider) {
    this.nomeDoBairro = nomeDoBairro;
    this.lider = lider;
    this.membros = [lider];
    this.plantacoes = [];
  }

  adicionarMembro(pessoa) {
    this.membros.push(pessoa);
  }

  removerMembro(pessoa) {
    const index = this.membros.indexOf(pessoa);
    if (index > -1) {
      this.membros.splice(index, 1);
    }
  }

  mudarLider(novoLider) {
    if (this.membros.includes(novoLider)) {
      this.lider = novoLider;
    } else {
      console.log("O novo líder deve ser um membro do grupo!");
    }
  }
}
