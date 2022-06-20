import { FC, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch } from './hooks/redux';
import { check } from './http/userAPI';
import { NavBar } from './modules/shared/components/navbar';
import { AppRouter } from './navigation/AppRouter';
import { userSlice } from './store/redux/reducers/userSlice';


export const App: FC = () => {
	const { setIsAuth, setUser } = userSlice.actions;
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		check().then(data => {
			dispatch(setUser(true));
			dispatch(setIsAuth(true));
		}).finally(() => setIsLoading(false));
	}, []);

	return (
		<BrowserRouter>
			{isLoading
				? <Spinner animation='grow' />
				: <>
					<NavBar />
					<AppRouter />
				</>
			}
		</BrowserRouter>
	);
};
