

          const fetchURL = "https://my-json-server.typicode.com/juanbaridon/actividadtwitter/data"


fetch (fetchURL)
.then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json(); // Convierte la respuesta en formato JSON.
  })
.then (data => {
showData(data)
})
.catch(error => {
    console.error('Hubo un error:', error);
});


function showData(data) {
    const contenedor = document.getElementById("contenedor")

    for (const item of data) {
        contenedor.innerHTML += 
         `<div class="tweets" >
         <div class="profile-pic"><img style = "height:50px" src="https://xsgames.co/randomusers/avatar.php?g=pixel" /></div>
        <div class="content">
          <div class="names">
            <p class="full-name">${item.name}</p>
            <p class="user-name">@${item.name}</p>
            <p class="time"> 27mins</p>
          </div>
        </div>
        <div class="tweet-content">
          <p>${item.text}</p>
        </div>
        <div class="tweet-icons">
          <i class="fa fa-comment" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
        </div>
        </div>`
    }
}