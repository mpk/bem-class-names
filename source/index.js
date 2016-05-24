/**
 *	BEM classNames helper
 *
 *	@see https://github.com/JedWatson/classnames/
 */
/**
 *	Create BEM class name factory for the specified block name.
 *
 *	@param {string} blockName
 *	@return {function}
 */
module.exports = function( blockName ) {
	return function( elemName ) {
		var classNames = [createName(blockName, elemName)];

		var modNames = [].slice.call(arguments, 1);
		classNames.push(process(blockName, elemName, modNames));

		return classNames.join(' ').trim();
	};
};

function process( blockName, elemName, modNames ) {
	var classNames = [];

	for (var i = 0; i < modNames.length; i += 1) {
		var modName = modNames[i];
		if (!modName) continue;

		if (typeof modName == 'string' || typeof modName == 'number') {
			classNames.push(createName(blockName, elemName, modName));
		} else if (Array.isArray(modName)) {
			classNames.push(process(blockName, elemName, modName));
		} else if (typeof modName == 'object') {
			for (var key in modName) {
				if ({}.hasOwnProperty.call(modName, key) && modName[key]) {
					classNames.push(createName(blockName, elemName, key));
				}
			}
		}
	}

	return classNames.join(' ').trim();
}

function createName( blockName, elemName, modName ) {
	var className = blockName;

	if (elemName) className += '__' + elemName;
	if (modName) className += '_' + modName;

	return className;
}