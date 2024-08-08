import { resolve } from "path";

type HttpRequestMethods = 'GET' | 'POST' | 'PATCH' | 'DElETE';

interface HTTPHeaders {
    [key: string]: string;
}

interface useHttpProps {
    url: string;
    method?: HttpRequestMethods;
    body?: string | null;
    headers?: HTTPHeaders;
}

export const request = async ({
    url,
    method = 'GET',
    body = null,
    headers = {
        'Content-Type': 'application/json',
        // 'X-API-KEY': process.env.REACT_APP_API_KEY as string,
        Accept: 'application/json',
    },
}: useHttpProps): Promise<any> => {
    try {
        const response = await fetch(url, { method, body, headers });

        const data = await response.json();

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(1)
            }, 2000)
        })

        return data;
    } catch (e) {
        throw new Error();
    }
};
