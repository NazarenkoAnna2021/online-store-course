import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './modules/shared/components/navbar';
import { AppRouter } from './navigation/AppRouter';


export const App: FC = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<AppRouter />
		</BrowserRouter>
	);
};
