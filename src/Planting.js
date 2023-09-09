class Planting {
  constructor(plantType, quantity) {
    this.plantType = plantType;
    this.quantity = quantity;
    this.plantingDate = new Date();
  }

  updateQuantity(newQuantity) {
    this.quantity = newQuantity;
  }
}

module.exports = Planting;
