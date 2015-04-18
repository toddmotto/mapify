# Mapify.js [![Build Status](https://travis-ci.org/toddmotto/mapify.svg)](https://travis-ci.org/toddmotto/mapify)

Mapify is a 0.7KB standalone module for map iteration over Arrays and Objects, in the same fashion `Array.prototype.map` works, but also includes `Object` iteration support and is faster than `.map` itself.

### Array mapping
Creates a new `Array` with the results of calling a provided function on every element in this `Array`.

##### Syntax
```javascript
mapify(arr, callback[, thisArg]);

// Callback parameters
// currentValue: The current element being processed in the array.
// index: The index of the current element being processed in the array.
// array: The array being mapped.

// thisArg (optional)
// Value to use as this when executing callback.
```

##### Example

```javascript
var mapped = mapify([1, 3, 9], function (currentValue, index, array) {
  return currentValue * currentValue;
})
console.log(mapped); // 1, 9, 81
```

### Object mapping
Creates a new `Object` with the results of calling a provided function on every property in this `Object`.

##### Syntax
```javascript
mapify(obj, callback[, thisArg]);

// Callback parameters
// currentValue: The current element being processed in the object.
// propName: The name of the current property being processed in the object.
// object: The object being mapped.
//
// thisArg (optional)
// Value to use as this when executing callback.
```

##### Example

```javascript
var mapped = mapify({ a: 1, b: 2, c: 3 }, function (currentValue, propName, object) {
  return currentValue * currentValue;
})
console.log(mapped); // { a: 1, b: 4, c: 9 }
```

## Installing with Bower
To install Mapify into your project using Bower, use the GitHub repository hook:

```
bower install https://github.com/toddmotto/mapify.git
```

## Manual installation
Drop your files into your required folders, make sure you're using the files from the `dist` folder, which is the compiled production-ready code. Ensure you place the script before the closing `</body>` tag so the DOM tree is populated when the script runs.
	
```html
<body>
	<!-- html content above -->
	<script src="dist/mapify.min.js"></script>
  <script>
  var mapped = mapify([1, 3, 9], function (currentValue, index, array) {
    return currentValue * currentValue;
  })
  console.log(mapped);
  </script>
</body>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using Gulp.

## Release history
- 1.0.0
  - Initial release
