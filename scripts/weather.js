//feeds weather record template
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

//feeds article template
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
            "p": "Most forecasts predicted that temperatures in the region – and the world for that matter – would be above average, which turned out to be true. Higher than average precipitation was predicted, which was in-line with observed temperatures as well. As a result, Harriman saw more rain and much less snow than average. Harriman saw snowfall of over 1 inch only twice this winter, much to the dismay of ice skaters, ice fisherman, and cross-country skiers, but to the advantage of hikers. The mild winter makes a few things more likely. First, mosquito, tick, and flea populations will likely be elevated this spring due to an earlier start. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },

        {
            "p": "Going forward, many predict that the region will see a rapid increase to spring-like levels in a matter of days, with daily high records likely being broken. Precipiation is likely to be high as well, so we will likely see streams flowing strongly and high water levels in the park's lakes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ]
}

$(document).ready(function () {

    //-----------------
    // Fill Templates
    //----------------- 

    //Article
    $("#weather-article-container").append(Handlebars.templates['article'](weatherArticle))

    //Data Table
    $(".weather-records-container").append(Handlebars.templates['weather-records'](weatherData))

});