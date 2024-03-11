import { FC, ReactNode } from 'react';

import classNames from 'src/shared/lib/classNames/classNames';
import Button from 'src/shared/ui/Button/Button';

import cls from './Tab.module.scss';

export interface TabElement {
	name: string;
	component: ReactNode;
}

export type TabElements = Record<string, TabElement>;

interface TabProps {
	tabs: TabElements;
	tab: string;
	changeTab: (newValue: string) => void;
}

const Tab: FC<TabProps> = props => {
	const { tabs, tab, changeTab } = props;

	function setTab(newValue: string) {
		changeTab(newValue);
	}

	return (
		<div className={cls.tab}>
			{Object.entries(tabs).map(([key, tabElement]) => {
				return (
					<Button
						className={classNames(cls.btn, {
							[cls.selected]: tab === key,
						})}
						key={key}
						onClick={() => setTab(key)}
					>
						{tabElement.name}
					</Button>
				);
			})}
		</div>
	);
};

export default Tab;
