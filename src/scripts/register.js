let members = [];

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const neighborhood = document.getElementById("neighborhood").value;
    const email = document.getElementById("email").value;

    const newMember = new Person(name, neighborhood, email);
    members.push(newMember);

    event.target.reset();
    alert("Member registered successfully!");
  });
