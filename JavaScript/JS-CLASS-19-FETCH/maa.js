function user_data() {
    let rows = '';
    for (let user of users) {
        rows = rows + `<tr>
                   <td>${user.id}</td>
                   <td>${user.firstName}</td>
                   <td>${user.lastName}</td>
                   <td>${user.email}</td>
                   <td>${user.gender}</td>
                   <td>${user.age}</td>
               </tr>`;
    }
    document.getElementById('user').innerHTML = rows;
}

fetch("https://dummyjson.com/users")
    .then(res => res.json())      //.then means sucess 
    .then(json => { users = json.users; user_data(); })