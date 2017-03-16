# Progressive Enhancement Audit for Funda | Quick, hack, Protoype for Concept
## The prototype
![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/develop/week_1/exercise_2/screenshots/app_0.jpg)
You can view the GitHub repository [here](https://github.com/DaveBitter/minor-webdev_funda). the functionality is explained in the README.MD of the repository.

## Progressive Enhancements
### Images
#### Broken Stuff
* Google Maps (visually, not the grid)
* Property and Services icons

![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/develop/week_1/exercise_2/screenshots/images_0.png)

#### Possible Solutions
Although you can still navigate through the maps, the functionality is mostly useless. You're unable to see where you are on the map. You also can't get a summary of the neighborhood because the icons of the properties and services aren't showing.

It's not possible to alter the Google Maps part, but we can put layers over the maps. You can clearly see that the tiles are still visible. We can 'paint' the streetnames and/or neighborhoodnames on top of the maps. This way you can still see where you are on the map.

We can easily fix the icons not showing up by replacing the images for the icons with SVG's. This way you can still see the difference between the properties and the services. The same fix resolves the issue of the Funda logo not loading.

### Fonts
#### Broken Stuff
* Icon-font

![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/develop/week_1/exercise_2/screenshots/fonts_0.png)
![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/develop/week_1/exercise_2/screenshots/fonts_1.png)

#### Possible Solutions
We could have a fallback for when this happens, but it's probably not the best fix. Instead, we should use SVG's or even PNG's to replace the icon-font. We're currently loading in an entire icon-font for two icons. This should be replaced by just two SVG's or PNG's.

#### Working Stuff
The fallback for the custom font is from the same font-type. Because of this, the website doesn't look very different.

### Javascript
#### Broken Stuff
* Routing
* Connecting to API
* Building up HTML
* Google Maps

![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/develop/week_1/exercise_2/screenshots/javascript_0.png)

#### Possible Solutions
In order to build an single page app (SPA) we used Javascript (JS). We could either ditch the SPA part and build a more traditional way of displaying content like different HTML pages. We could also use [the :target selector](https://developer.mozilla.org/nl/docs/Web/CSS/:target) to try to build SPA functionality. This is kind of hacky so we would better of going for the traditional way of routing. 

We can fix the connecting to the API by migrating the API part to the server side. This way, we can still provide the user with some functionality like getting the information for the properties and services.

The building of the HTML currently is done with JS. We could migrate this to the server side too. This way, we can still provide the user with information for the properties and services.

The Google Maps part is not in our control. We basically use their JS code to have a functioning map.

## Tools used
* [Images On/Off](https://chrome.google.com/webstore/detail/images-onoff/nfmlhilnjccdggifdbhnhkffmjgalbgg?utm_source=chrome-app-launcher-info-dialog)
* [Web Font Block](https://chrome.google.com/webstore/detail/web-font-block/hgdahmldlgfdgnmcpjpnpofobapedikb)
* [Quick Javascript Switcher](https://chrome.google.com/webstore/detail/quick-javascript-switcher/geddoclleiomckbhadiaipdggiiccfje)
