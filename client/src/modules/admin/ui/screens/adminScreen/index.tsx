import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const AdminScreen: FC = () => {
    return (
        <div>
            AdminScreen
            <Outlet />
        </div>
    );
};