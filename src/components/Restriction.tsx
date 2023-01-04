type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isPositive?: never
    isNegative: boolean
    isZero?: never
}

type Zero = RandomNumberType & {
    isPositive?: never
    isNegative?: never
    isZero: boolean
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

const Restriction = ({ value, isPositive, isNegative, isZero }: RandomNumberProps) => {
    return (
        <div>
            <h4>Never type example</h4>
            {value}{" "}{isPositive && "positive"}{isNegative && "negative"}
            {isZero && "zero"}
        </div>
    )
}

export default Restriction