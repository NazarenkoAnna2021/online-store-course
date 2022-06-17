import { AdminScreen } from '../../modules/admin/ui/screens/adminScreen';
import { BasketScreen } from '../../modules/shopPages/ui/screens/basketScreen'
import { ADMIN_ROUTE, BASKET_ROUTE } from '../../utils/constants';
import { IRoute } from '../entities/IRoute';

export const authRoutes: IRoute[] = [
    {
        path: ADMIN_ROUTE,
        Component: AdminScreen,
        nested: [
            {
                path: BASKET_ROUTE,
                Component: BasketScreen,
                nested: [],
            },
        ],
    },

];