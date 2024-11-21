document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById("listaUsuarios");

            data.forEach(user => {
                const randomAge = Math.floor(Math.random() * (65 - 18 + 1)) + 18;

                const userImage = `assets/img/${user.id}.jpeg`;

                const userCard = document.createElement("div");
                userCard.classList.add("user-card");

                userCard.innerHTML = `
                    <img src="${userImage}" alt="${user.name}">
                    <h2>${user.name}</h2>
                    <p><strong>Edad:</strong> ${randomAge}</p>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Teléfono:</strong> ${user.phone}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Compañía:</strong> ${user.company.name}</p>
                    <p><strong>Dirección:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
                `;

                userList.appendChild(userCard);
            });
        })
        .catch(error => console.error("Error al obtener los datos de la API:", error));
});