import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import rootReducer from "Redux/reducers";


export const store = configureStore ({
    reducer: rootReducer
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook <ReturnType <typeof store.getState> > = useSelector;