# handlebars-cloudinary

![nodei.co](https://nodei.co/npm/handlebars-cloudinary.png?downloads=true&downloadRank=true&stars=true)

![npm](https://img.shields.io/npm/v/handlebars-cloudinary.svg)

![github-issues](https://img.shields.io/github/issues/leviwheatcroft/handlebars-cloudinary.svg)

![stars](https://img.shields.io/github/stars/leviwheatcroft/handlebars-cloudinary.svg)

![forks](https://img.shields.io/github/forks/leviwheatcroft/handlebars-cloudinary.svg)

[handlebars](http://handlebarsjs.com/) / [cloudinary](http://cloudinary.com/)
helper to generate cloudinary urls.

## install

`npm i --save handlebars-cloudinary`

## usage

```javascript
import { handlebarsCloudinary } from 'handlebars-cloudinary'
import { handlebars } from 'handlebars'
Handlebars.registerHelper('cloudinary', handlebarsCloudinary('mycloud'))

handlebars.compile('<img src="{{cloudinary cloudinary_id "{ width:400, height:300, crop:\'fill\' }"}}" alt="image alt">').template({})
// <img src="http://res.cloudinary.com/mycloud/image/upload/c_fill,h_300,w_400/v1/cloudinary_id" alt="image alt">
```

## quotes

The example above shows a problem you run into if trying to declare strings in
js. The escaped quotes will work fine in this case.

In a handlebars template file, you can just use single quotes.

## compatibility

`dist/index.js` should be fully compatible with node 6

## Author

Levi Wheatcroft <levi@wht.cr>

## Contributing

Contributions welcome; Please submit all pull requests against the master
branch.

## License

[MIT](http://opensource.org/licenses/MIT)
