const loadPlayers = (search) => {
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => displayPlayers(data.player))
}

const displayPlayers = players => {
    const playersContainer = document.getElementById('players-container');
    playersContainer.textContent = '';
    players.forEach(player => {
        console.log(player);
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('col');
        playerDiv.innerHTML = `
            <div class="card" style="height: 38rem;" onclick="loadPlayersId('${player.idPlayer}')">
                <img src="${player.strThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${player.strPlayer}</h5>
                    <p class="card-text">Birth Date: ${player.dateBorn}</p>
                    <p class="card-text">Birth Location: ${player.strBirthLocation}</p>
                    <p class="card-text">Sports Name: ${player.strSport}</p>
                    <p class="card-text">Team Name: ${player.strTeam}</p>
                </div>
            </div>
        `;
        playersContainer.appendChild(playerDiv);
    })
}

const searchPlayers = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPlayers(searchText);
    searchField.value = '';
}

const loadPlayersId = idPlayer => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${idPlayer}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.players))
}

const displayDetails = players => {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.textContent = '';
    players.forEach(player => {
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('col');
        detailsDiv.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${player.strThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${player.strPlayer}</h5>
                    <p class="card-text">Birth Date: ${player.dateBorn}</p>
                    <p class="card-text">Birth Location: ${player.strBirthLocation}</p>
                    <p class="card-text">Sports Name: ${player.strSport}</p>
                    <p class="card-text">Team Name: ${player.strTeam}</p>
                </div>
            </div>
        `;
        detailsContainer.appendChild(detailsDiv);
    })

}

loadPlayers('');