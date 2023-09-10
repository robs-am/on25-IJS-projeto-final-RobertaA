const Person = require("./Person");
const GroupGarden = require("./GroupGarden");
class Planting {
  constructor(plantType, quantity, planter) {
    this.plantType = plantType;
    this.quantity = quantity;
    this.planter = planter;
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

const carrotPlanting = new Planting("Cenoura", 15);
