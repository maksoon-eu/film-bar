import { useDispatch } from 'react-redux';
import { AppDispatch } from "../store/config/StateSchema";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
