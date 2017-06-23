# real-maths
Maths the proper way

# install
You can install it like any other npm package:

```bash
npm i real-maths
```

I recommend using the `-g` option to install it globally, so you don't need to deal with silly `Math` again

To access REAL `Maths` you simply need to import it:

```js
const Maths = require( 'real-maths' );
```

It is not crucial that you call the variable `Maths`, but if you don't, you're not using REAL `Maths`

# usage
If you are familiar with the [simplified english](https://jakubmarian.com/wp-content/uploads/2015/10/english-traditional-simplified.jpg) version, using the traditional one won't be an issue. The full documentation for the simplified version is [on MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math)

There is one small difference, as the simplified version uses the simplified circle constant, often referred to as `tau/2`, whilst people using REAL `Maths` should use the REAL circle constant: `tau`

```js
const Maths = require( 'real-maths' );

canvasContext.arc( x, y, radius, 0, Maths.TAU );
```

# suggestions
`Maths` is real. If you think you can improve upon its reality, don't hesitate to either contact me or simply open an issue or even just request a merge with a branch you made!

## disclaimer
It is not my intention to hurt anyone's feelings over language standards. If anyone is offended, I am deeply sorry, and if you think there is a serious issue, feel free to send me an email
