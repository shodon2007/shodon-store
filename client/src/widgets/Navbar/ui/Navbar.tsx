import { FC } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'src/shared/lib/classNames/classNames';
import { ThemeButton } from 'src/features/toggleTheme';

import cls from './Navbar.module.scss';

import BasketSvg from './svg/basket.svg';
import ProfileSvg from './svg/profile.svg';
import LogoutSvg from './svg/logout.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, logout } from 'src/app/providers/redux';

interface NavbarProps {
	className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
	const userSlice = useSelector((state: RootState) => state.userSlice);
	const dispatch = useDispatch();

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Link to={'/'} className={cls.title}>
				shodon store
			</Link>
			<nav className={cls.nav}>
				{userSlice.token ? (
					<>
						<ThemeButton />
						<Link to={'/basket'} className={cls.link}>
							<BasketSvg className={cls.svg} />
						</Link>
						<LogoutSvg className={cls.svg} onClick={() => dispatch(logout())} />
					</>
				) : (
					<>
						<div></div>
						<ThemeButton />
						<Link to={'/auth'}>
							<ProfileSvg className={cls.svg} />
						</Link>
					</>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
