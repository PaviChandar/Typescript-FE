import { useEffect, useState } from "react"

const SetTimeOut = () => {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        setTimeout(() => {
            setCount(c => c + 1)
        }, 10000)
    }, [count])

    return (
        <div>
            <h3>setTimeOut sample</h3>
            <h4>{count}</h4>
        </div>
    )
}

export default SetTimeOut