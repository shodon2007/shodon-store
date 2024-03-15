import { FC } from 'react';

import classNames from 'src/shared/lib/classNames/classNames';
import Button from 'src/shared/ui/Button/Button';

import cls from './Tab.module.scss';
import { TabElements } from 'src/app/types/tab';

interface TabProps {
	tabs: TabElements;
	activeTab: string;
	changeTab: (newValue: string) => void;
}

const Tab: FC<TabProps> = props => {
	const { tabs, activeTab, changeTab } = props;

	function setTab(newValue: string) {
		changeTab(newValue);
	}

	return (
		<div className={cls.tab} data-testid='tab'>
			{Object.entries(tabs).map(([key, tabElement]) => {
				return (
					<Button
						className={classNames(cls.btn, {
							[cls.selected]: activeTab === key,
						})}
						key={key}
						onClick={() => setTab(key)}
						data-testid='button'
					>
						{tabElement.name}
					</Button>
				);
			})}
		</div>
	);
};

export default Tab;
