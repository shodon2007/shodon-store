import checkFilterStatus from './checkFilterStatus';

test('testing checkFilterStatus', () => {
	expect(checkFilterStatus({ NFC: ['Есть'] }, 'NFC', 'НЕТ')).toBe(false);
	expect(checkFilterStatus({ NFC: ['Есть'] }, 'NFC', 'Есть')).toBe(true);
	expect(checkFilterStatus({ hello: ['Есть'] }, 'NFC', 'Есть')).toBe(false);
});
