class Plantacao {
  constructor(tipoDePlanta, quantidade) {
    this.tipoDePlanta = tipoDePlanta;
    this.quantidade = quantidade;
    this.dataDePlantio = new Date();
  }

  atualizarQuantidade(novaQuantidade) {
    this.quantidade = novaQuantidade;
  }
}
