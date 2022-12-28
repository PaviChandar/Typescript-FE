type Greeting = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

const ConditionalRender = (props: Greeting) => {
    const { messageCount = 0 } = props

    return (
        <div>
            {props.isLoggedIn ? (
                <h2>Hey {props.name}! You have {messageCount} unread messages</h2>
            ) : (
                <h2>Welcome Guest</h2>
            )}
        </div>
    )
}

export default ConditionalRender