import toggleAttribute from './toggleAttribute';

describe('testing toggleAttribute', () => {
	test('testing attribute delete function', () => {
		const res = toggleAttribute(
			{
				name: ['str1', 'str2'],
			},
			{
				title: 'name',
				description: 'str1',
			},
			true,
		);

		const res2 = toggleAttribute(
			{
				name: [],
			},
			{
				title: 'name',
				description: 'str1',
			},
			true,
		);

		expect(res).toEqual({ name: ['str2'] });
		expect(res2).toEqual({ name: [] });
	});

	test('testing add new attribute', () => {
		const res1 = toggleAttribute(
			{
				ОЗУ: ['8gb'],
			},
			{
				id: 1,
				title: 'ОЗУ',
				description: '6gb',
			},
			false,
		);

		const res2 = toggleAttribute(
			{
				ОЗУ: ['8gb'],
			},
			{
				id: 1,
				title: 'Камера',
				description: '8mp',
			},
			false,
		);

		expect(res1).toEqual({
			ОЗУ: ['8gb', '6gb'],
		});

		expect(res2).toEqual({
			ОЗУ: ['8gb'],
			Камера: ['8mp'],
		});
	});
});
