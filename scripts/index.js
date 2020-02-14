// Array of card objects
var cards = [
    {"name": "Weather",
    "id": "#weather-card",
    "staticImagePath": "assets/weather-static.jpg",
    "activeImagePath": "assets/weather-active.gif"
    },
    {"name": "Terrain",
    "id": "#terrain-card",
    "staticImagePath": "assets/terrain-static.jpg",
    "activeImagePath": "assets/terrain-active.gif"
    },
    {"name": "Wildlife",
    "id": "#wildlife-card",
    "staticImagePath": "assets/wildlife-static.jpg",
    "activeImagePath": "assets/wildlife-active.gif"
    }
]

var landmarks = [
    {
        "name": "Bradley Mine",
        "coordinates": "41.277044, -74.100116",
        "description": "The Bradley Mine is an iron mine that was operated in the 19th century by the Parrot brothers until 1874. This is Harriman's largest mine.",
        "buttonText": "CALL TO ACTION",
        // "buttonLink":
        "imgPath": "assets/bradley-mine.jpg",
        "imgAltTxt": "a picture of the bradley mine from the inside looking out"
    },
    {
        "name": "Ship Rock",
        "coordinates": "41.249414, -74.127447",
        "description": "It's a big rock",
        "buttonText": "CALL TO ACTION",
        // "buttonLink":
        "imgPath": "assets/ship-rock.jpg",
        "imgAltTxt": "a picture of the landmark called 'ship rock,' which is a large rock that juts into the trail"
    }
]


// pass each card to the play gif on hover function
for(var i = 0; i < cards.length; i++){
    playGifOnHover(cards[i]);
}

//bring focus to subscribe modal
$('#subscribe-modal').on('shown.bs.modal', function () {
    $('#name').trigger('focus')
  })

function playGifOnHover(card){
    $(document).ready(function(){
        // detect which card is being hovered over
        $(card.id).hover(
            function()
            {
                // change imagine in card being hovered to gif
                $("img", this).attr("src", card.activeImagePath);
            },
            function()
            {
                // change imagine in card being hovered to jpg
                $("img", this).attr("src", card.staticImagePath);
            }                         
        );                  
    });
}

$(document).ready(function(){
    var landmarkTemplate = $("#landmark-template").html();
    var compiledLandmarkTemplate = Handlebars.compile(landmarkTemplate);
    $(".landmark-container").html(compiledLandmarkTemplate(landmarks[0]))
});
