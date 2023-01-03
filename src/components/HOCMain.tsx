import { ComponentType, useCallback, useState } from "react"

export function HOCMain<T>(Component: ComponentType<T>) {

    return (hocProps: Omit<T, "count" | "startTimer" | "endTimer">) => {
        const [count, setCount] = useState(0);
        const [timer, setTimer] = useState(-1);

        const startTimer = useCallback(() => {
            const timer:any = setInterval(
                () =>
                    setCount((prev) => {
                        return prev + 1;
                    }),
                1000
            );
            setTimer(timer);
        }, []);

        const endTimer = useCallback(() => {
            clearInterval(timer);
            setCount(0);
        }, [timer]);

        return (
            <Component {...(hocProps as T)} startTimer={startTimer} endTimer={endTimer} count={count} />
        )
    }
}