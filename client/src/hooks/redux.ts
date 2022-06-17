import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, rootState } from "../store/redux/store";

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;