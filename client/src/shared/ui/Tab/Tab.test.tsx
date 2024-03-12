import { render, screen } from '@testing-library/react';
import Tab from './Tab';

describe('testing Tab.tsx', () => {
	test('testing Tabs length', () => {
		render(
			<Tab
				changeTab={() => false}
				activeTab={'login'}
				tabs={{
					login: {
						name: 'войти',
						component: <div></div>,
					},
					registration: {
						name: 'зарегестрироваться',
						component: <div></div>,
					},
				}}
			/>,
		);

		const tab = screen.getByTestId('tab');
		const buttons = screen.getAllByTestId('button');

		expect(buttons.length).toBe(2);
		expect(tab).toMatchSnapshot();
	});
});
