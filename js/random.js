
const loadUsers = () => {
    fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    const usersContainer = document.getElementById('user-container');
    usersContainer.textContent = '';
    users.forEach(user => {
        console.log(user);
        const userDiv = document.createElement('div');
        // userDiv.classList.add('user');
        userDiv.innerHTML = `
             <div class="user">
                <img src="${user.picture.large}" alt="">
             </div>
            <div class="user-info">
                <h2>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h2>
                <h3>Email Address: ${user.email}</h3>
                <h3>Country: ${user.location.country}</h3>
                <h3>City: ${user.location.city}</h3>
                <h3>Street: ${user.location.street.name}, ${user.location.street.number}</h3>
                <h3>Coordinates: ${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}</h3>
                <h3>TimeZone: ${user.location.timezone.description}, ${user.location.timezone.offset}</h3>
            </div>
        `;
        usersContainer.appendChild(userDiv);
    })
}

// loadUsers();