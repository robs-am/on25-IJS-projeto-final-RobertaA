const Person = require("../src/Person");
const GroupGarden = require("../src/GroupGarden");

describe("Person Class", () => {
  it("should create a person named Roberta", () => {
    const Roberta = new Person("Roberta", "Méier", "email1@gmail.com");
    expect(Roberta.name).toBe("Roberta");
  });

  it("should enroll a person into a group", () => {
    const Roberta = new Person("Roberta", "Méier", "email1@gmail.com");
    const gardenGroupMeier = new GroupGarden("Méier", Roberta);
    expect(Roberta.group).toBe(null);

    Roberta.enrollInGroup(gardenGroupMeier);

    expect(Roberta.group).toBe(gardenGroupMeier);
  });
});
