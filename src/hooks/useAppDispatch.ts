import { useDispatch } from 'react-redux';
import { AppDispatch } from '../configs/redux/store';



export const useAppDispatch = () => useDispatch<AppDispatch>();
