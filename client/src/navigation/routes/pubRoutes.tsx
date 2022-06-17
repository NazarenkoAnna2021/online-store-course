import { MainScreen } from '../../modules/shopPages/ui/screens/mainScreen';
import {AuthScreen} from '../../modules/auth/ui/screens/authScreen';
import {DeviceScreen} from '../../modules/shopPages/ui/screens/deviceScreen'
import { DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../../utils/constants";
import { IRoute } from '../entities/IRoute';

export const pubRoutes: IRoute[] = [
    {
        path: SHOP_ROUTE,
        Component: MainScreen,
        nested: [],
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthScreen,
        nested: [],
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthScreen,
        nested: [],
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DeviceScreen,
        nested: [],
    },
];