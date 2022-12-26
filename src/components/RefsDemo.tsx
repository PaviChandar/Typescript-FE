import React from "react"

class RefsDemo extends React.Component {

    inputRef = React.createRef<HTMLInputElement>()

    componentDidMount() {
        if (this.inputRef.current) {
            this.inputRef.current.focus()
        }
    }

    render() {
        return (
            <div>
                <h3>React Refs with typescript</h3>
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
}

export default RefsDemo