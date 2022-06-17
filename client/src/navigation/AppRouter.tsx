import { FC, useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from "../hooks/redux";
import { IRoute } from "./entities/IRoute";
import { authRoutes, pubRoutes } from "./routes";

export const AppRouter: FC = () => {
    const { isAuth } = useAppSelector(state => state.appState);

    const createRoute: FC<IRoute[]> = (routes) => {
        return (
            <>
                {routes.map(({ path, Component, nested }) => <Route key={path} path={path} element={<Component />} >{!!nested.length && createRoute(nested)}</Route>)}
            </>
        );
    };

    return (
        <Routes>
            {isAuth && createRoute(authRoutes)}
            {createRoute(pubRoutes)}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};