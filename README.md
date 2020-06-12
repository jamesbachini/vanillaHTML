# vanillaHTML
Vanilla HTML is a elegantly simple boilerplate for web development projects and websites

# Getting Started
Download and install the zip file from https://vanillaHTML.com/vanillaHTML.zip

Start by editing the following files:
    components/header.html
    pages/home.html

# Pages
As you add pages update js/routes.js

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

# Contribute
If anyone would like to add code to the project, build templates or make improvements please do so via a pull request.

I'm keen to keep it lightweight but so anything that's not core should be setup as a 3rd party component.

# To Do
1. I'd like to build a live reload node module to watch for changes and refresh a browser automatically. This would speed up development and make it more usable for devs coming from Vue/React environments.
2. Webpack integration for optional support of Internet Explorer.
3. Linter
4. Templates
5. Components
6. Docs
