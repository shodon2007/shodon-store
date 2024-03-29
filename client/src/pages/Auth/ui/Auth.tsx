import { Login } from 'src/widgets/Auth/Login';
import { Registration } from 'src/widgets/Auth/Registration';
import Tab from 'src/shared/ui/Tab/Tab';

import cls from './Auth.module.scss';
import { useSearchParams } from 'react-router-dom';
import { TabElements } from 'src/app/types/tab';

const Auth = () => {
	const [searchParams, setSearchParams] = useSearchParams({ tab: 'login' });

	const changeTab = (newValue: string) => {
		setSearchParams({ tab: newValue });
	};

	const tabComponents: TabElements = {
		login: {
			component: <Login />,
			name: 'войти',
		},
		registration: {
			component: <Registration />,
			name: 'зарегестрироваться',
		},
	};

	return (
		<div className={cls.auth} data-testid='auth-page'>
			<div className={cls.content}>
				<Tab
					tabs={tabComponents}
					activeTab={searchParams.get('tab')}
					changeTab={changeTab}
				/>
				<form className={cls.form}>
					{
						tabComponents[
							searchParams.get('tab') in tabComponents
								? searchParams.get('tab')
								: 'login'
						].component
					}
				</form>
			</div>
		</div>
	);
};

export default Auth;
