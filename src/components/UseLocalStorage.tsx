import { useLocalStorage } from "usehooks-ts"

const UseLocalStorage = () => {
    const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true)

    const toggleTheme = () => {
        setDarkTheme((prevValue: boolean) => !prevValue)
    }

    return (
        <div>
            <h2><b>useLocalStorage sample</b></h2>
            <button onClick={toggleTheme} >
                {`The current theme is ${isDarkTheme ? `dark` : `light`}`}
            </button>
        </div>
    )
}

export default UseLocalStorage