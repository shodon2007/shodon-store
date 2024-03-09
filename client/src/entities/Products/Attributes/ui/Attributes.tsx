import { FC } from 'react';
import { Attribute } from 'src/shared/api/productApi';
import cls from './Attributes.module.scss';

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
