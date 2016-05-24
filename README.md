# bem-class-names

Modification of [classNames](https://github.com/JedWatson/classnames) utility to create BEM class names.

## Install

	npm install mpk/bem-class-names#121f525

## Usage

```javascript
var classNames = require('bem-class-names');

// Create BEM class name factory for the specified block name
var cx = classNames('block');

// Examples
cx(); // => 'block'
cx('elem'); // => 'block__elem'
cx('elem', 'mod1'); // => 'block__elem block__elem_mod1'
cx('elem', 'mod1', 'mod2'); // => 'block__elem block__elem_mod1 block__elem_mod2'
cx(null, 'mod1'); // => 'block block_mod1'
cx('elem', { 'mod1': false, 'mod2': true }); // => 'block__elem block__elem_mod2'
```

## License

MIT