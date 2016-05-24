var cx = require('../source/index');

describe('cx', function() {

	var cxTest1 = cx('test1');
	var cxTest2 = cx('test2');

	// Tests for BEM

	it('creates class name for a block', function() {
		expect(cxTest1()).toBe('test1');
		expect(cxTest2()).toBe('test2');
	});

	it('creates class name for an element', function() {
		expect(cxTest1('foo')).toBe('test1__foo');
		expect(cxTest2('bar')).toBe('test2__bar');
	});

	it('creates class name for a block with modifier(s)', function() {
		expect(cxTest1(null, 'bar')).toBe('test1 test1_bar');
		expect(cxTest1(null, 'bar', 'baz')).toBe('test1 test1_bar test1_baz');
	});

	it('creates class name for an element with modifier(s)', function() {
		expect(cxTest1('foo', 'bar')).toBe('test1__foo test1__foo_bar');
		expect(cxTest1('foo', 'bar', 'baz')).toBe('test1__foo test1__foo_bar test1__foo_baz');
	});

	// Tests imported from JedWatson/classNames project

	it('creates class name from an object with truthy values', function() {
		expect(cxTest1('foo', { a1: true, a2: false, a3: 0, a4: null, a5: undefined, a6: 1 })).toBe('test1__foo test1__foo_a1 test1__foo_a6');
	});

	it('creates class name from truthy values', function() {
		expect(cxTest1('foo', 'a1', true, false, 0, null, undefined, 1, 'a8')).toBe('test1__foo test1__foo_a1 test1__foo_1 test1__foo_a8');
	});

	it('creates class name from an array', function() {
		expect(cxTest1('foo', [])).toBe('test1__foo');
		expect(cxTest1('foo', ['a1', 'a2'])).toBe('test1__foo test1__foo_a1 test1__foo_a2');
		expect(cxTest1('foo', ['a1', 'a2'], 'a3')).toBe('test1__foo test1__foo_a1 test1__foo_a2 test1__foo_a3');
		expect(cxTest1('foo', 'a0', ['a1', 'a2'])).toBe('test1__foo test1__foo_a0 test1__foo_a1 test1__foo_a2');
	});

	it('creates class name from multiple arrays', function() {
		expect(cxTest1('foo', ['a1', 'a2'], ['a3', 'a4'])).toBe('test1__foo test1__foo_a1 test1__foo_a2 test1__foo_a3 test1__foo_a4');
	});

	it('creates class name from values nested in an array', function() {
		expect(cxTest1('foo', ['a1', true, false, 0, null, undefined, 1, 'a8'])).toBe('test1__foo test1__foo_a1 test1__foo_1 test1__foo_a8');
		expect(cxTest1('foo', [{ a1: true, a2: true, a3: false }])).toBe('test1__foo test1__foo_a1 test1__foo_a2');
	});

	it('creates class name from nested arrays', function() {
		expect(cxTest1('foo', [[]])).toBe('test1__foo');
		expect(cxTest1('foo', [[], 'a1'])).toBe('test1__foo test1__foo_a1');
		expect(cxTest1('foo', ['a1', ['a2', 'a3']])).toBe('test1__foo test1__foo_a1 test1__foo_a2 test1__foo_a3');
	});

});