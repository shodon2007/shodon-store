import { FC } from 'react';

import classNames from 'src/shared/lib/classNames/classNames';
import Button from 'src/shared/ui/Button/Button';

import cls from './Tab.module.scss';

interface TabProps {
	tabs: string[];
	tab: string;
	changeTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tab: FC<TabProps> = props => {
	const { tabs, tab, changeTab } = props;

	function setTab(newValue: string) {
		changeTab(newValue);
	}

	return (
		<div className={cls.tab}>
			{tabs.map(elem => {
				return (
					<Button
						className={classNames(cls.btn, {
							[cls.selected]: tab === elem,
						})}
						key={elem}
						onClick={() => setTab(elem)}
					>
						{elem}
					</Button>
				);
			})}
		</div>
	);
};

export default Tab;
