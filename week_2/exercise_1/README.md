# Feature Detection
## HTML
### Text-input fallback 
If you lookup the color input type on [caniuse.com](http://caniuse.com/#feat=input-color) you can see that it isn't supported on IE11. The input type will fallback to text in order to still provide a way for users to input the color. A hint to the syntax is displayed in the placeholder. Placeholders in inputs are also not supported on some browser, [like IE11](http://caniuse.com/#feat=css-placeholder-shown). The text for the placeholder is displayed in the label in order to still display the information. Optionally, you can remove this text when the browser does support placeholders.

[Link to page](http://webdev.davebitter.com/exercises/bt/week_2/index_0.html)

### File button fallback
If you lookup the support for the capture attribute on an input on [caniuse.com](http://caniuse.com/#feat=html-media-capture) you can see how poorly this feature is supported. The goal of using this way of input is to allow users to quickly snap a photo and input that file. The input will fallback on a regular file upload input on browsers where this isn't supported. This works good enough because the user is still able to upload the image by taking a picture an selecting the file through this input. Some phones even allow for snapping a photo and choosing that file automatically.

[Link to page](http://webdev.davebitter.com/exercises/bt/week_2/index_1.html)

## CSS
### Flexbox fallback
Although flexbox is [supported on most new browsers](http://caniuse.com/#feat=flexbox) it may not be supported on older (IE) browsers. I implemented flexbox in a way that it will 'perfect' the design in browsers that support it, but will still have decent positioning and layout in browsers that do not. I used the CSS.supports() API for this. The API is also [not supported on older browsers](http://caniuse.com/#feat=css-supports-api) so it will ignore the flexbox stuff on them. 

[Link to page](http://webdev.davebitter.com/exercises/bt/week_2/index_2.html)

### display: flow-root; fallback
[Clearfix](https://CSS-tricks.com/snippets/css/clear-fix/) has been a hack that every front-end developer used at least once. The neater way of getting exactly the same result is by using ```display: flow-root;```. I used a fallback to the clearfix on most browsers since this is [not supported on most browsers](http://caniuse.com/#feat=flow-root). I used the CSS.supports() API for this. The API is [not supported on older browsers](http://caniuse.com/#feat=css-supports-api) so it will ignore the ```display:flow-root;``` stuff on them. 

[Link to page](http://webdev.davebitter.com/exercises/bt/week_2/index_3.html)

## JS
### Geolocation fallback
Getting a user's geolocation from navigator through JS is well supported on most browsers. On some older browsers and Opera mini for instance [this feature is not supported](http://caniuse.com/#search=geolocation). In order to still get peoples latitude and longitude two inputs are shown when on those browsers. This way, the feature enriches the experience but isn't the only way of inputting the latitude en longitude. From a UX standpoint this fix is tougher to sell. A nice alternative is letting people do a serverside request for the latitude and longitude of a user's city for instance.

[Link to page](http://webdev.davebitter.com/exercises/bt/week_2/index_4.html)

### Google Maps fallback
Often times you see a Google Maps map with a company's location on a website. This is nice to have because user's can look around in the area, zoom in and out etc. User's without JS will see a blank container since the map solely runs on JS. A fallback for this is showing an image of the map by default in HTML and replace that map with a Google Maps map in JS.

[Link to page](http://webdev.davebitter.com/exercises/bt/week_2/index_5.html)