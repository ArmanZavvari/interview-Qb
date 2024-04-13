
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../configs/redux/store';


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
