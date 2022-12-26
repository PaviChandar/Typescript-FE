import React, { Component } from "react";

class ClassCounter extends Component<{}, { count: number }> {
    state = {
        count: 0
    }

    updateCount = (e: React.MouseEvent<HTMLButtonElement>) => {
        switch (e.currentTarget.innerText) {
            case "-":
                this.setState({
                    count: this.state.count - 1
                })
                break
            case "+":
                this.setState({
                    count: this.state.count + 1
                })
                break
        }
    }

    render(): JSX.Element {
        const { count } = this.state
        return (
            <div>
                <h3>Class component</h3>
                <h1>{count}</h1>
                <button onClick={this.updateCount} >+</button>
                <button onClick={this.updateCount} >-</button>
            </div>
        )
    }
}

export default ClassCounter