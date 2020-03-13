//feeds nav template
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

//feeds footer template
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
            "text": "The Harriman Bulletin is a seasonal newsletter concerning recent conditions and news about Harriman State park. The Bulletin is produced by a few enthusiasts of the park who want to share their passion."
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
            "address": "800 Kanawauke Rd, Southfields, NY 10975",
            "email": "askus@harrimanbulletin.com",
            "phone": "(555)-555-5555"
        },
}

$(document).ready(function () {

    //-----------------
    // Fill Templates
    //-----------------

    //Nav
    $(".navbar-container").append(Handlebars.templates['nav'](nav))

    //Footer
    $(".footer-container").append(Handlebars.templates['footer'](footer))
    
//detect current locations and set corresponding nav bar link to active
//adapted from https://css-tricks.com/snippets/jquery/add-active-navigation-class-based-on-url/
//and extended to apply to reports while subitems are selected
    var url = window.location;

    $('ul.navbar-nav a[href="'+ url +'"]').parent().addClass('active');
    //adds active class to nav item when on the corresponding url
    $('ul.navbar-nav a').filter(function() {
            return this.href == url;
    }).parent().addClass('active');
    //adds active class to report when any of the reports are active
    $('ul.navbar-nav a').filter(function() {
        return this.href == url;
    }).parent().parent().addClass('active');
});