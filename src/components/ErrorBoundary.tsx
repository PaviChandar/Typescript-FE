import { ErrorInfo, Component, ReactNode } from "react";

interface Props {
    children?: ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends Component<Props, State>{
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true }
    }

   public componentDidCatch(error:Error, errorInfo:ErrorInfo){
    console.log("Uncaught error : ",error, errorInfo )
   }

    public render() {
        if (this.state.hasError) {
            return <h1>Oops!..there was an error</h1>
        }

        return this.props.children
    }
}


export default ErrorBoundary