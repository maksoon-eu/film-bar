import { setForbiddenError } from '../../store/global/globalStore';
import { AppDispatch } from '../../store/config/StateSchema';

type HttpRequestMethods = 'GET' | 'POST' | 'PATCH' | 'DELETE';

interface HTTPHeaders {
    [key: string]: string;
}

interface useHttpProps {
    url: string;
    method?: HttpRequestMethods;
    body?: string | null;
    headers?: HTTPHeaders;
    dispatch: AppDispatch;
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
        let response;
        if (process.env.NODE_ENV === 'development') {
            response = await fetch(url, { method, body });

            await new Promise((res) => {
                setTimeout(() => {
                    res(1);
                }, 1500);
            });
        } else {
            response = await fetch(url, { method, body, headers });
        }

        if (!response.ok) {
            if (response.status === 403) {
                dispatch(setForbiddenError());
            }
            throw new Error(`Request error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (e) {
        throw new Error('Failed to fetch data');
    }
};
