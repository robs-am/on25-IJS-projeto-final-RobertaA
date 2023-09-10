const Person = require("../src/Person");
const GroupGarden = require("../src/GroupGarden");

describe("Group Class", () => {
  let laissa, tania, group;

  beforeEach(() => {
    laissa = new Person("Laíssa", "Campo Grande", "email2@gmail.com");
    tania = new Person("Tânia", "Campo Grande", "email5@gmail.com");
    group = new GroupGarden("Campo Grande", laissa);
  });

  it("should initialize group with admin as first member", () => {
    expect(group.members[0]).toBe(laissa);
  });

  it("should add member to group", () => {
    tania.enrollInGroup(group);
    expect(group.members).toContain(tania);
  });
  it("should remove member from group", () => {
    tania.enrollInGroup(group);
    tania.leaveGroup();
    expect(group.members).not.toContain(tania);
  });
});
