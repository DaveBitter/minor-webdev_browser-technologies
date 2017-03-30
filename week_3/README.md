# Minor WebDev | Browser Technolgies (Final Exercise)
Dave Bitter | 500710907
![app hero](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/develop/week_3/screenshots/hero.jpg)


    V 1.0.0

## General
This folder in this repository holds the final exercise for the course 'Browser Technologies', part of the minor "Webdevelopment" at the [HvA](http://www.hva.nl/)

## Issues
I highly encourage adding issues to this repo in the case of finding one. I'm always up for improving my code.

## Get it running
### Clone this repo, duh
    git clone https://github.com/DaveBitter/minor-webdev_performance-matters
    cd minor-webdev_performance-matters

### Install the dependencies
    npm install

### Start up the server
When you run this command, changes in serverside JS files will be watched and the server will restart automatically, changes in clientside JS files will be watched and browserified and the server will be restarted.

    npm start

### Additional commands
Browserify clientside JS

    npm run build

Watchify clientside JS

    npm run watch

Clean clientside build.js file

    npm run clean

## Problem
The user needs to be able to search through and view detailed info from his/her contacts regardless their browser.

## The solution
I first defined the core functionality in order to make this happen. I enrich the user's experience with a enhanced version that supports JS after building the core functionality. Finally, I make use of the gyroscope of a device to add even more functionality. You can read more below.

### Core functionality
![core contact list](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/develop/week_3/screenshots/app_0.png)
![core detailed contact](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/develop/week_3/screenshots/app_1.png)
![core search](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/develop/week_3/screenshots/app_2.png)

I build the functionality core functionality server-side. The contact list is a plain HTML list with anchor tags that link to the detailed pages of contacts. The search-box does a POST to the server and a page with the found contacts will again be rendered as a plain HTML list with anchor tags. This will always work. Even if the browser doesn't support the CSS or JS that is added. 

### Enriched functionality
![enriched contact list](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/develop/week_3/screenshots/app_3.png)
![enriched detailed contact](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/develop/week_3/screenshots/app_4.png)
![enriched search](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/develop/week_3/screenshots/app_5.png)

I made a single page app out of the core functionality to enrich the functionality and therefore the user's experience. Viewing detailed contact information is now done by clicking on a contact. The detailed contact information is displayed underneath the contact name by making a clientside API call to our own server. This way, I could reuse the format functions that I wrote on the serverside. Searching is now done on the clientside with JS by hiding the elements that don't fit the user's query.

### Cool functionality
Finally, I added a cool functionality to the contact list. When a user has many contacts open, and the browser supports it, the app will close the contacts if the user quickly tilts the device. This is a useful and fun addition to the app.

## Final thoughts
This app always work by building the core functionality in pure HTML with the help of the server. Any addition I made is purely to enhance the functionality and user's experience. Building this core functionality ensured that I could fallback to this when any of the JS broke. Stripping the CSS isn't that bad since this wasn't a CSS heavy app and I used the correct HTML elements.