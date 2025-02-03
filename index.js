
// // серверден деректер алу 
// async function fetchUsers() {
//   try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       if (!response.ok) {
//           throw new Error('Қате орын алды!');
//       }
//       const users = await response.json();
//       Userss(users);
//   } catch (error) {
//       console.error('Қате орын алды!', error.message);
//   }
// }

// // хтмл
// function Userss(users) {
//   const container = document.getElementById('user-container');
//   users.forEach(user => {
//       const userBlock = document.createElement('div');
//       userBlock.className = 'user-block';
//       userBlock.innerHTML = `
//           <p>Қолданушы аты: <strong>${user.name}</strong></p>
//           <p>Email: <strong>${user.email}</strong></p>
//       `;
//       container.appendChild(userBlock);
//   });
// }

// // айпи косу
// fetchUsers();
*{
   margin: 0; 
}
.body{
    background-color: rgb(48, 52, 55);
background-image: url(DALL·E\ 2025-02-03\ 20.09.09\ -\ A\ scenic\ weather-themed\ background\ image\ for\ a\ website.\ The\ image\ should\ feature\ a\ dynamic\ sky\ transitioning\ through\ different\ weather\ conditions_\ a\ b.webp);
background-attachment: fixed;
background-size: cover;

}
.head{
  background-color: rgba(2, 95, 181, 0.493);
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;

  padding: 20px;
 
}
.h2{
    color: aliceblue;
}

.lupa{
    width: 20px;
    position: relative;
    right:25px ;
    top: 3px;
  background-color: #ff7d7d00;
    
}
.ATU{
    color: aliceblue;
}
.btns{
   margin-left: 450px;
   font-size: 30px;
}
.searh{
border-radius:2px solid rgb(105, 17, 17);
background-color: #7e161600;
border-radius: 1px solid rgb(213, 27, 27);

}

.kart{
    
    display: flex;
    flex-direction: column;
    gap: 30px;
margin-left: 50px;
}
ww1{
    background-color: azure;
    text-align: center;
    margin-right: 200px;
   
}

ww{
    font-family: Arial, sans-serif;
    background-color: #eef3f7;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-right: 200px;
   

}
.ww {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 320px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.date {
    color: #898484;
    font-size: 14px;
}
.temperature {
    font-size: 42px;
    font-weight: bold;
}
.jambir{
    font-size: 24px;
    margin-right: 10px;
}
.detaly {
    font-size: 16px;
    color: #767676;
}
.text {
    font-size: 12px;
    color: #878585;
}
