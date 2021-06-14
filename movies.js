$("#btn").click(function (e) { 
    $.ajax({
        url: "https://imdb-api.com/en/API/Top250Movies/k_9owqoby2",
        method:"GET",
        beforeSend:function(){
            $("#loading").toggleClass("loader");
        },
        success: function (response) {
           
            allMovies(response);
            $("#loading").toggleClass("loader");
        },
        error:function(error){
            console.log(error);
            $("#loading").toggleClass("loader");
        }
    });
    
});

function allMovies(response){
    console.log(response.items);
    let movieLayout="";
    for(let i=0;i<response.items.length;i++)
    {
        movieLayout=`<div class="card">
        <span class="number">${response.items[i].rank}</span>
        <img src="${response.items[i].image}" alt="${response.items[i].title}-image" width='150px' height='200px'>
        <div class="movieInfo">
            <p class="movieName"> <span> ${response.items[i].title}</span> (${response.items[i].year})</p>
            <p class="movieDetails"><span>IMDB Rating: ${response.items[i].imDbRating}/10</span><span> | </span><span>&nbsp;Director: </span><span>${response.items[i].crew.slice(0,response.items[i].crew.indexOf("("))} </span><span>&nbsp;Stars: </span><span>${response.items[i].crew.slice(response.items[i].crew.indexOf(",")+1,response.items[i].crew.search("  "))} </span><span>&nbsp;Genres: </span><span>Comedy, Drama, Romance </span></p>
            <p class="movieDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus sit ducimus, nostrum autem minima dignissimos tempore eum dicta dolorum!</p>
        </div>
    </div>`;

    $("#allMoviesCards").append(movieLayout);
    }
}