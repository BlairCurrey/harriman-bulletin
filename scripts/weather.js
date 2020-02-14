var weatherData = {
    
    "location": "Sloatsburg, NY",

    "month": [
        
        {       
            "month": "February",
            "average": "37.0 F",
            "high": "55.6F",
            "low": "22.9 F",
            "precipitation": "3.6 in",
        },

        {
            "month": "January",
            "average": "34.1 F",
            "high": "67.5 F",
            "low": "10.0 F",
            "precipitation": "2.2 in",
        },

        {
            "month": "December",
            "average": "32.8 F",
            "high": "58.5 F",
            "low": "12.0 F",
            "precipitation": "8.0 in",
        }
    ]
}

var weatherArticle = {
    
    "title": "Weather",

    "subtitle": "Harriman - Spring 2020",

    "image": 
        {
            "path": "assets/weather-article.jpg",
            "alt": "sun shining"
        },

    "paragraphs": [
        {
            "p": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },

        {
            "p": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
}

$(document).ready(function () {

//------------------------ 
// Weather Record Template
//------------------------ 

    //save weather record html and register as partial 
    var weatherTemplate = $("#weather-records-template").html()
    Handlebars.registerPartial("weatherRecords", weatherTemplate);

    //Compile the weather template data into a function
    var weatherTemplateCompiled = Handlebars.compile(weatherTemplate);

    //Pass weatherData object to template
    var weatherHtml = weatherTemplateCompiled(weatherData);

    //Append filled in template to elements with the "weather-records-container class
    $(".weather-records-container").append(weatherHtml);

//-----------------
// Article Template
//----------------- 

    //save article html and register as partial 
    var articleTemplate = $("#article-template").html()
    Handlebars.registerPartial("article", articleTemplate);

    //Compile the template into a function
    var articleTemplateCompiled = Handlebars.compile(articleTemplate);

    //Pass weather article object to template
    var weatherArticleHtml = articleTemplateCompiled(weatherArticle);

    //Append filled in template to element with the "weather-article-container" id
    $("#weather-article-container").append(weatherArticleHtml);
});