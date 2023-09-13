let members = [
  new Person("Alice", "123 Street", "123-456-7890"),
  new Person("Bob", "456 Avenue", "456-789-0123"),
  // ... outros membros ...
];

function populateGardenLeaders() {
  const gardenLeaderDropdown = document.getElementById("gardenLeader");

  members.forEach((member) => {
    const option = document.createElement("option");
    option.value = member.name; // ou talvez uma ID se você tiver uma para cada membro
    option.textContent = member.name;
    gardenLeaderDropdown.appendChild(option);
  });
}

populateGardenLeaders();

let gardenGroups = [];

document
  .getElementById("addGardenForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const gardenName = document.getElementById("gardenName").value;
    const gardenLeaderName = document.getElementById("gardenLeader").value;

    // Suponho que a classe GroupGarden aceite um nome e um líder como argumentos.
    // Se a classe não aceitar diretamente um nome de líder, você pode precisar
    // buscar o objeto `Person` correspondente pelo nome primeiro.
    const gardenLeader = members.find(
      (member) => member.name === gardenLeaderName
    );
    const newGroup = new GroupGarden(gardenName, gardenLeader);

    gardenGroups.push(newGroup);

    // Limpa os campos do formulário após a criação
    event.target.reset();

    alert("Garden group created successfully!");
  });
