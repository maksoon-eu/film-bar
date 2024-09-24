import { setForbiddenError } from '../store/globalStore';
import { AppDispatch } from '../store/store'; // Импорт AppDispatch

type HttpRequestMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE';

interface HTTPHeaders {
    [key: string]: string;
}

interface useHttpProps {
    url: string;
    method?: HttpRequestMethods;
    body?: string | null;
    headers?: HTTPHeaders;
    dispatch: AppDispatch; // Используем правильный тип для dispatch
}

export const request = async ({
    url,
    method = 'GET',
    body = null,
    headers = {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.REACT_APP_API_KEY as string,
        Accept: 'application/json',
    },
    dispatch,
}: useHttpProps): Promise<any> => {
    try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
            if (response.status === 403) {
                dispatch(setForbiddenError());
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (e) {
        throw new Error('Failed to fetch data');
    }
};
