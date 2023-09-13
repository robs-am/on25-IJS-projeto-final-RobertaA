const Planting = require("../src/Planting");
const Person = require("../src/Person");

describe("Planting Class", () => {
  let planting;
  const alice = new Person("Alice", "123 St", "123-456-7890");

  beforeEach(() => {
    planting = new Planting("Rose", 5, alice);
  });

  test("should initialize with the given plant type, quantity, and planter", () => {
    expect(planting.plantType).toBe("Rose");
    expect(planting.quantity).toBe(5);
    expect(planting.planter).toBe(alice);
  });

  test("should update the quantity of the plant", () => {
    const consoleSpy = jest.spyOn(console, "log");
    planting.updateQuantity(10);
    expect(planting.quantity).toBe(10);
    expect(consoleSpy).toHaveBeenCalledWith(
      "A quantidade atualizada de Roses é 10."
    );
    consoleSpy.mockRestore();
  });

  test("should get the days since planting", () => {
    const days = planting.daysSincePlanting;
    expect(typeof days).toBe("number");

    // If more than 7 days have passed, it should log a message
    if (days > 7) {
      const consoleSpy = jest.spyOn(console, "log");
      planting.daysSincePlanting;
      expect(consoleSpy).toHaveBeenCalledWith(
        "Já se passaram mais de uma semana desde que você plantou  Roses.Talvez seja hora de verificar seu crescimento ou dar um pouco mais de água."
      );
      consoleSpy.mockRestore();
    }
  });
});
