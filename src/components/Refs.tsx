import { useEffect, useRef, useState } from "react"

const Refs = () => {
    const [timer, setTimer] = useState(0)
    const inputRef = useRef<number | null>(null)

    const stopTimer = () => {
        if (inputRef.current) {
            window.clearInterval(inputRef.current)
        }
    }

    useEffect(() => {
        inputRef.current = window.setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
        return () => {
            stopTimer()
        }
    }, [])

    return (
        <div>
            <h3>Mutable refs demo</h3>
            Timer - {timer}{" "}
            <button onClick={() => stopTimer()} >Stop timer</button>
        </div>
    )
}

export default Refs