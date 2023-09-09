class Pessoa {
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
  }

  deixarGrupo() {
    if (this.grupo) {
      this.grupo.removerMembro(this);
      this.grupo = null;
    }
  }
}
