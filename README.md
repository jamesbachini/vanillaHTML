# VanillaHTML
Vanilla HTML is a elegantly simple boilerplate for web development projects and websites

Demo: https://vanillahtml.com

![VanillaHTML](https://vanillahtml.com/img/promotional/github-banner.jpg)

# Getting Started
Clone the Git repository or download and install the zip file from https://vanillahtml.com/vanillaHTML.zip

Start by editing the following files:
    components/header.html
    pages/home.html

# Pages
If you add new pages, update js/routes.js

Pages are loaded via the page query parameter. So https://vanillaHTML.com/?page=terms will load the terms.html page. This is setup in routes.js

# Components
Web components can be built as single HTML files. CSS at the top, HTML in the middle and Javascript at the bottom. Include all Javascript between script tags at the bottom of the file, don't use inline Javascript.

See the examples in components/

These can be loaded via the utils.loadModule('components/header.html','header');

1st parameter is the path to the file, 2nd is the dom ID to inject the code.

This allows for modular and 3rd party components to be added with ease.

# Tips and Tricks
There is a small library of CSS classes to make life easier i.e. text-center will add the text-align: center; css style.
Check core.css for details: https://github.com/jamesbachini/vanillaHTML/blob/master/html/core/core.css

Tracking and analytics snippets can be placed in components/pixels.html, this will be loaded 3 seconds after the main page to meet page load time requirements.

Don't modify any files in the core folder so that it's easy to update in future. There is site specific CSS in css/style.css and JS in js/script.js

# Resources
https://vanillahtml.com/

https://unsplash.com/

https://undraw.co/

https://coolors.co/

https://jamesbachini.com/

https://nodejs.org/en/

https://denocode.com/

https://developers.google.com/speed/pagespeed/insights/

https://search.google.com/search-console/welcome


# Contribute
If anyone would like to add code to the project, build templates or make improvements please do so via a pull request.

I'm keen to keep it lightweight but so anything that's not core should be setup as a 3rd party component.

# To Do
Integrate babel or another compiler as a optional build process
Templates
Components & 3rd party directory
Docs
