# Disabling Features
## Images
### www.davebitter.com (portfolio website)
#### Broken stuff
* White text on white background 
* Min-height on portfolio items
* No alt tags
![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/master/week_1/exercise_1/screenshots/images_0.png)
![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/master/week_1/exercise_1/screenshots/images_1.png)

### www.nu.nl
#### Broken stuff
* Text gets covered
* Text gets cut off
![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/master/week_1/exercise_1/screenshots/images_2.png)
![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/master/week_1/exercise_1/screenshots/images_3.png)

### www.pinterest.com
#### Broken stuff
* button with image as icon 

#### Working stuff
* min-height for images-containers
* background-colors for image-containers
* href with link to image as alt
![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/master/week_1/exercise_1/screenshots/images_4.png)
![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/master/week_1/exercise_1/screenshots/images_5.png)
![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/master/week_1/exercise_1/screenshots/images_6.png)

### Conclusion
A lot of website work okay without images. The broken stuff is mostly due to positioning and sizing. On my portfolio website I also ran into the issue of text being unreadable because the text is white on a white background.
On Pinterest buttons use images as icons. These buttons don't provide any alternative feedback to the user abouut the action. On the other hand, Pinterest handles not loading the images the best. A random colored background shows when an image isn't loaded. On some images the link to the image is added in the alt. This is a good way of provinding the link to the image to open when images can be loaded.
It's good to look at a way to not break the rest of the interface when an image isn't loaded. It's fairly easy to do by setting min-widths and min-heights.

## Fonts
### www.davebitter.com (portfolio website)
#### Broken stuff
* font-icons
* buttons
* quote-signs
![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/master/week_1/exercise_1/screenshots/fonts_0.png)
![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/master/week_1/exercise_1/screenshots/fonts_1.png)
![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/master/week_1/exercise_1/screenshots/fonts_2.png)

#### Working stuff
* fallback font is not from a diffrent font-type

### www.webdesignerdepot.com
#### Broken stuff
* fallback font from a diffrent font-type 
* ![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/master/week_1/exercise_1/screenshots/fonts_3.png)

#### Working stuff
* icons not from font
* ![alt tag](https://raw.githubusercontent.com/DaveBitter/minor-webdev_browser-technologies/master/week_1/exercise_1/screenshots/fonts_4.png)

#### Conclusion
It's nice to fallback to a font from the same font-type when the fonts don't load. On my website my custom font is a Sans Serfif, my fallback font is also a Sans Serif. It surprised me that Webdesigner Depot don't have a fallback font from the same font-type. 
It comes to no surprise that icon-fonts do not load and you see random characters. I found [this article](https://cloudfour.com/thinks/seriously-dont-use-icon-fonts/) which explains why you should not use them at all. The article sums it pretty much up.