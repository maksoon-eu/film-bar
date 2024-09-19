interface IConditionalComponent<T> {
    value?: T;
    children: React.ReactNode;
}

const ConditionalComponent = <T,>({ value, children }: IConditionalComponent<T>) => {
    if (Array.isArray(value)) {
        if (!value.length) {
            return null;
        }
    } else if (!value) {
        return null;
    }

    return <>{children}</>;
};

export default ConditionalComponent;
