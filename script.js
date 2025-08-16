const userContainer = document.getElementById("user-container");
const reloadBtn = document.getElementById("reload");

async function fetchUsers() {
  userContainer.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();
    displayUsers(users);

  } catch (error) {
    userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}

function displayUsers(users) {
  userContainer.innerHTML = ""; // clear old data
  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
    `;
    
    userContainer.appendChild(card);
  });
}

// Reload button
reloadBtn.addEventListener("click", fetchUsers);

// Fetch users when page loads
fetchUsers();
