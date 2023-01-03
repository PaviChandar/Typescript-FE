import { useContext } from "react"
import { ContextSample } from "./ContextSample"

const ContextMain = () => {
    const theme = useContext(ContextSample)

    return (
        <div>
            <h3 style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>
                Context Provider Sample
            </h3>
        </div>
    )
}

export default ContextMain