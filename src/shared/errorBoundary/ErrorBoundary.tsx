import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { connect } from 'react-redux';
import ErrorPageAsync from '../../pages/errorPage/ErrorPage.async';
import { StateSchema } from "../../store/config/StateSchema";

interface ErrorBoundaryProps {
    children: ReactNode;
    has403Error: boolean;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children, has403Error } = this.props;

        if (has403Error) {
            return (
                <Suspense fallback="">
                    <ErrorPageAsync type="forbidden" />
                </Suspense>
            );
        }

        if (hasError) {
            return (
                <Suspense fallback="">
                    <ErrorPageAsync />
                </Suspense>
            );
        }

        return children;
    }
}

const mapStateToProps = (state: StateSchema) => ({
    has403Error: state.global.forbiddenError,
});

export default connect(mapStateToProps)(ErrorBoundary);
