import { useSelector } from 'react-redux';
import { StateSchema } from "../store/config/StateSchema";

export const useAppSelector = useSelector.withTypes<StateSchema>();
