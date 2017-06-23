// you're supposed to do `Maths = require( 'real-maths' )`

// this is the REAL word
const Maths = Object.create( Math );

// this is the REAL circle constant
Maths.TAU = 6.2831853071795864769252867665590057683943; 


module.exports = Maths;
