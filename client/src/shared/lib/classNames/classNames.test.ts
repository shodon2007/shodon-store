import classNames from 'src/shared/lib/classNames/classNames';

describe('testing classNames', () => {
	test('testing className', () => {
		expect(classNames('helloclass')).toBe('helloclass');
		expect(classNames('')).toBe('');
	});

	test('testing mods', () => {
		expect(classNames('hellobro', { name: true })).toBe('hellobro name');
		expect(classNames('hellobro', { name: false })).toBe('hellobro');
		expect(classNames('hellobro', {})).toBe('hellobro');
		expect(classNames('hellobro')).toBe('hellobro');
	});

	test('testing additional', () => {
		expect(classNames('hello', { name: true }, ['yes', 'two'])).toBe(
			'hello name yes two',
		);
		expect(classNames('hello', { name: true }, [])).toBe('hello name');
		expect(classNames('hello', { name: true }, ['', ''])).toBe('hello name  ');
	});
});
