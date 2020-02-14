var nav = {
    
    "title": "The Harriman Bulletin",

    "upperItem": [
        {
            "id": "menu-home",
            "name": "Home",
            "path": "index.html"  
        },

        {
            "id": "menu-about",
            "name": "About Us",
            "path": "about.html"  
        }
    ],
    
    "dropDown": [
        {
            "id": "menu-reports",
            "name": "Reports",
            "path": "#",
            "items": [
                {
                    "id": "menu-weather",
                    "name": "Weather",
                    "path": "weather.html"  
                },
        
                {
                    "id": "menu-terrain",
                    "name": "Terrain",
                    "path": "terrain.html"  
                },
        
                {
                    "id": "menu-wildlife",
                    "name": "Wildlife",
                    "path": "wildlife.html"  
                }
            ]
        }
    ]
}

var footer = {
    
    "socialMedia": [
        {
            "name": "facebook",
            "url": "#",
            "alt": "facebook link"
        },

        {
            "name": "twitter",
            "url": "#",
            "alt": "twitter link"
        },

        {
            "name": "instagram",
            "url": "#",
            "alt": "instagram link"
        }
    ],

    "info":
        {
            "heading": "Explore Harriman",
            "text": "Blah blah blah this is a description of the group. Extra words to make this blurb longer!"
        },

    "siteNav":
        {
            "heading": "Site Navigation",
            "path": [
                {
                    "name": "Home",
                    "path": "index.html"
                },

                {
                    "name": "About Us",
                    "path": "about.html"
                },

                {
                    "name": "Weather",
                    "path": "weather.html"
                },

                {
                    "name": "Terrain",
                    "path": "terrain.html"
                },

                {
                    "name": "Wildlife",
                    "path": "wildlife.html"
                }
            ]
        },
    
    "contact":
        {
            "address": "Some Address",
            "email": "someemail@gmail.com",
            "phone": "(555)-555-5555"
        },
}

$(document).ready(function () {
    
//------------
//Nav Template
//------------
    var navTemplate = $("#navbar-template").html();
    var compiledNavTemplate = Handlebars.compile(navTemplate);
    $(".navbar-container").html(compiledNavTemplate(nav))

    
//---------------
//Footer Template
//---------------
    var footerTemplate = $("#footer-template").html();
    var compiledFooterTemplate = Handlebars.compile(footerTemplate);
    $(".footer-container").html(compiledFooterTemplate(footer))
    
//detect current locations and set corresponding nav bar link to active
//doesn't work with conditions and dropdown elements
//alternative method that might fix? https://stackoverflow.com/questions/17050253/set-navigation-menu-item-active-in-handlebars-partial
    var url = window.location;

    $('ul.navbar-nav a[href="'+ url +'"]').parent().addClass('active');
    $('ul.navbar-nav a').filter(function() {
            return this.href == url;
    }).parent().addClass('active');
});