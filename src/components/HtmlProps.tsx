export interface Props extends React.HTMLProps<HTMLButtonElement> {
    submit: boolean
}

const HtmlProps: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <button>{props.submit}Submit</button>
            <p>{props.children}</p>
        </div>
    )
}

export default HtmlProps