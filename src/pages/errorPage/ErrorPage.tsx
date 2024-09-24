import Error from '../../shared/error/Error';
import ErrorForbidden from "../../shared/error/ErrorForbidden";

interface IErrorPage {
    type?: string;
}

const ErrorPage = ({ type }: IErrorPage) => {
    return (
        <>
            {type === 'forbidden' ? <ErrorForbidden /> : <Error />}
        </>
    );
};

export default ErrorPage;
