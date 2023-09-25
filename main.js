{/* <div class="profile-pic"><img src="https://picsum.photos/10" /></div>
          <div class="content">
            <div class="names">
              <p class="full-name">Full Name</p>
              <p class="user-name">@full_name</p>
              <p class="time"> 27mins</p>
            </div>
          </div>
          <div class="tweet-content">
            <p>This is just a dummy tweet, speaking of dummy mmm ...</p>
          </div>
          <div class="tweet-icons">
            <i class="fa fa-comment" aria-hidden="true"></i>
            <i class="fa fa-heart" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
          </div> */}

          const fetchURL = "https://my-json-server.typicode.com/juanbaridon/actividadtwitter/data"


fetch (fetchURL)
.then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json(); // Convierte la respuesta en formato JSON.
  })
.then (data => {

})
.catch(error => {
    console.error('Hubo un error:', error);
});


function showData(data) {
    const contenedor = document.getElementById("contenedor")
    
}