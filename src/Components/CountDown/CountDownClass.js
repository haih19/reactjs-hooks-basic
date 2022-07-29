import React from "react";


class CountDownClass extends React.Component {

    state = {
        count: 60,
        run: false
    }

    componentDidMount() {
        this.setState({
            run: false
        })
    }

    componentDidUpdate() {
        setTimeout(() => {
            let countx = this.state.count;
            (countx > 0 ?
                this.setState({
                    count: countx - 1
                })

                :
                this.setState({
                    count: 0
                })
            )
        }, 1000)
    }

    render() {
        return (
            <div>
                <h2>{this.state.count} Hello from CDClass</h2>
            </div>
        )
    }
}

export default CountDownClass;