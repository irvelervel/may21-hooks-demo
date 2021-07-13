import { Component } from "react";

class ClassComponent extends Component {

    state = {
        name: 'Stefano',
        counter: 100
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/* <h1 onClick={() => this.setState({name: 'Marcelo'})}>{name}</h1> */}
                    {/* <h1 onClick={() => setName((oldName) => oldName + '_new')}>{name}</h1> */}
                    <h1 onClick={() => this.setState({ name: 'Sarath' })}>{this.state.name}</h1>
                </header>
            </div >
        )
    }
}

export default ClassComponent