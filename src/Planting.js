class Planting {
  constructor(plantType, quantity) {
    this.plantType = plantType;
    this.quantity = quantity;
    this.plantingDate = new Date();
  }

  updateQuantity(newQuantity) {
    this.quantity = newQuantity;
    return console.log(
      `A quantidade atualizada de ${this.plantType}s é ${this.quantity}.`
    );
  }

  get daysSincePlanting() {
    const today = new Date();
    const timeDifference = today - this.plantingDate;
    const days = Math.floor(timeDifference / (1000 * 3600 * 24));

    if (days > 7) {
      console.log(
        `Já se passaram mais de uma semana desde que você plantou  ${this.plantType}s.Talvez seja hora de verificar seu crescimento ou dar um pouco mais de água.`
      );
    }

    return days;
  }
}

module.exports = Planting;

const tomatoPlanting = new Planting("Tomate", 10);
const carrotPlanting = new Planting("Cenoura", 15);

tomatoPlanting.updateQuantity(30);
//tomates plantados a 5 dias atras

console.log(tomatoPlanting);
