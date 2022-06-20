import { FC, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch } from './hooks/redux';
import { check } from './http/userAPI';
import { NavBar } from './modules/shared/components/navbar';
import { AppRouter } from './navigation/AppRouter';
import { appStateSlice } from './store/redux/reducers/appStateSlice';
import { userSlice } from './store/redux/reducers/userSlice';


export const App: FC = () => {
	const { setIsAuth } = appStateSlice.actions;
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(false);

	/* useEffect(() => {
		setTimeout(() =>
			check().then(data => {
				dispatch(setIsAuth(true));
			}).finally(() => setIsLoading(false))
			, 1000)
	}, []); */

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
