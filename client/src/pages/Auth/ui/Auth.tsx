import { ReactNode, useState } from 'react';

import { Login } from 'src/widgets/Auth/Login';
import { Registration } from 'src/widgets/Auth/Registration';
import Tab from 'src/shared/ui/Tab/Tab';

import cls from './Auth.module.scss';

const Auth = () => {
	const [tabValue, setTabValue] = useState('войти');

	const tabComponents: Record<string, ReactNode> = {
		войти: <Login />,
		зарегестрироваться: <Registration />,
	};

	return (
		<div className={cls.auth}>
			<div className={cls.content}>
				<Tab
					tabs={Object.keys(tabComponents)}
					tab={tabValue}
					changeTab={setTabValue}
				/>
				<form className={cls.form}>{tabComponents[tabValue]}</form>
			</div>
		</div>
	);
};

export default Auth;
