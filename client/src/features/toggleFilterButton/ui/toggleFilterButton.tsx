import { FC } from 'react';
import classNames from 'src/shared/lib/classNames/classNames';
import Button, { buttonTheme } from 'src/shared/ui/Button/Button';
import cls from './toggleFilterButton.module.scss';
import { Attribute } from 'src/shared/api/productApi';

interface ToggleFilterButtonProps {
	title: string;
	description: string;
	checked: boolean;
	toggleAttributeHandler: (attribute: Attribute, checked: boolean) => void;
}

const ToggleFilterButton: FC<ToggleFilterButtonProps> = props => {
	const { title, description, checked, toggleAttributeHandler } = props;

	return (
		<Button
			theme={buttonTheme.SMALLEST}
			className={classNames(cls.attribute, {
				[cls.checked]: checked,
			})}
			onClick={() => {
				toggleAttributeHandler({ title, description }, checked);
			}}
			data-testid='attribute-button'
		>
			<span>{description}</span>
		</Button>
	);
};

export default ToggleFilterButton;
