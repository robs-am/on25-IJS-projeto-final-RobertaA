const GroupGarden = require("../src/GroupGarden");
const Planting = require("../src/Planting");



// Start of the tests
describe("GroupGarden Class", () => {
  let garden;
  const roberta = { name: "Roberta" };
  const andre = { name: "André" };

  beforeEach(() => {
    garden = new GroupGarden("Meier", roberta);
  });

  test("should initialize with the given neighborhood name and admin", () => {
    expect(garden.neighborhoodName).toBe("Meier");
    expect(garden.admin).toBe(roberta);
    expect(garden.members).toEqual([roberta]);
  });

  test("should add a planting", () => {
    garden.addPlanting("Rúcula", 5, roberta);
    expect(garden.plantings[0]).toBeInstanceOf(Planting);
    expect(garden.plantings[0].plantType).toBe("Rúcula");
    expect(garden.plantings[0].quantity).toBe(5);
    expect(garden.plantings[0].planter).toBe(roberta);
  });

  test("should add and remove members", () => {
    garden.addMember(andre);
    expect(garden.members.includes(andre)).toBe(true);

    garden.removeMember(andre);
    expect(garden.members.includes(andre)).toBe(false);
  });

  test("should change admin only if the new admin is a member", () => {
    garden.changeAdmin(andre);
    expect(garden.admin).toBe(roberta);

    garden.addMember(andre);
    garden.changeAdmin(andre);
    expect(garden.admin).toBe(andre);
  });

  test("should get the names of the members", () => {
    garden.addMember(andre);
    expect(garden.getMembersNames()).toEqual(["Roberta", "André"]);
  });
});
