
// серверден деректер алу 
async function fetchUsers() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
          throw new Error('Қате орын алды!');
      }
      const users = await response.json();
      Userss(users);
  } catch (error) {
      console.error('Қате орын алды!', error.message);
  }
}

// хтмл
function Userss(users) {
  const container = document.getElementById('user-container');
  users.forEach(user => {
      const userBlock = document.createElement('div');
      userBlock.className = 'user-block';
      userBlock.innerHTML = `
          <p>Қолданушы аты: <strong>${user.name}</strong></p>
          <p>Email: <strong>${user.email}</strong></p>
      `;
      container.appendChild(userBlock);
  });
}

// айпи косу
fetchUsers();
