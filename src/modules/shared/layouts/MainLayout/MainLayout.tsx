import { Outlet } from 'react-router';
import styles from './main-layout.module.css';

export function MainLayout() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div className={styles.headerContainer}>
					<span>Prueba Técnica</span>
					<nav></nav>
				</div>
			</header>
			<main className={styles.main}>
				<Outlet />
			</main>
			<footer className={styles.footer}>
				<div className={styles.footerContainer}>footer</div>
			</footer>
		</div>
	);
}
