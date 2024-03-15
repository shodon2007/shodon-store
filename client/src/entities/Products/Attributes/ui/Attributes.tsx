import { FC } from 'react';
import cls from './Attributes.module.scss';
import { Attribute } from 'src/app/types/product';

interface AttributesProps {
	attributes: Attribute[];
}

const Attributes: FC<AttributesProps> = ({ attributes }) => {
	return (
		<div className={cls.attributes}>
			{attributes.map(elem => {
				return (
					<div key={elem.id} className={cls.attribute}>
						<span className={cls.attribute_title}>{elem.title}</span>:
						<span className={cls.attribute_description}>
							{elem.description}
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default Attributes;
