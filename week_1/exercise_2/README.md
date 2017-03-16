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

## Tools used
* [Images On/Off](https://chrome.google.com/webstore/detail/images-onoff/nfmlhilnjccdggifdbhnhkffmjgalbgg?utm_source=chrome-app-launcher-info-dialog)
* [Web Font Block](https://chrome.google.com/webstore/detail/web-font-block/hgdahmldlgfdgnmcpjpnpofobapedikb)

