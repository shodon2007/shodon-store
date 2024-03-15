import { FC, memo } from 'react';
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

const Navbar: FC<NavbarProps> = memo(({ className }) => {
	const userSlice = useSelector((state: RootState) => state.userSlice);
	const dispatch = useDispatch();

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Link to={'/'} className={cls.title} data-testid='title-link'>
				shodon store
			</Link>
			<nav className={cls.nav}>
				{userSlice.token ? (
					<>
						<ThemeButton data-testid='theme-button' />
						<Link to={'/basket'} className={cls.link}>
							<BasketSvg className={cls.svg} />
						</Link>
						<LogoutSvg className={cls.svg} onClick={() => dispatch(logout())} />
					</>
				) : (
					<>
						<div></div>
						<ThemeButton data-testid='theme-button' />
						<Link to={'/auth'} data-testid='auth-link'>
							<ProfileSvg className={cls.svg} />
						</Link>
					</>
				)}
			</nav>
		</div>
	);
});

export default Navbar;
