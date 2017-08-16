# lazy-load-next
Lazy Load Image using IntersectionObserver API

## Usage
Install lazy-load-next
`yarn add lazy-load-next` or `npm install lazy-load-next --save`

`script.js`
```javascript
const LazyLoad = require('lazy-load-next');

// on document ready
document.addEventListener('DOMContentLoaded', function() {
	// image selector as argument
	let lz = new LazyLoad('img.lazyload');
})
```
`index.html`
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>LazyLoad</title>
</head>
<body>
	<img src="/placeholder.img" data-src="/real-image.img">
	<img src="/placeholder.img" data-src="/real-image2.img">
	<img src="/placeholder.img" data-src="/real-image2.img">
</body>
</html>
```
