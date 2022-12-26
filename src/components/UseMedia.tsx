import { useMediaQuery } from "usehooks-ts"

const UseMedia = () => {

    const media = useMediaQuery('(min-width: 768px)')

    return (
        <div>
            <h2>useMedia sample</h2>
            <div>{`The view port is ${media ? 'at least' : 'less than'} 768 pixels wide`}</div>
        </div>
    )
}

export default UseMedia