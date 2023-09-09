const Person = require("../src/Person");
const GroupGarden = require("../src/GroupGarden");

describe("Person Class", () => {
  it("should create a person named Roberta", () => {
    const roberta = new Person("Roberta", "Méier", "email1@gmail.com");
    expect(roberta.name).toBe("Roberta");
  });

  it("should enroll a person into a group", () => {
    const roberta = new Person("Roberta", "Méier", "email1@gmail.com");
    const gardenGroupMeier = new GroupGarden("Méier", roberta);
    expect(roberta.group).toBe(null);

    roberta.enrollInGroup(gardenGroupMeier);

    expect(roberta.group).toBe(gardenGroupMeier);
  });
});

it("should remove a person from a group", () => {
  const alice = new Person("Alice", "Méier", "email4@gmail.com");
  const gardenGroupMeier = new GroupGarden("Meier", alice);

  alice.enrollInGroup(gardenGroupMeier);
  expect(alice.group).toBe(gardenGroupMeier);

  alice.leaveGroup();
  expect(alice.group).toBe(null);
});
