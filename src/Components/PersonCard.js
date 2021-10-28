import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
            hairColor: this.props.hairColor
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.state.hairColor}</p>
                <button onClick={this.Birthday}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
                <form onSubmit={this.Hair}>
                    <label>
                        Pick your {this.props.firstName} {this.props.lastName}:
                        <select value={this.hairColor}>     
                            <option value="Black">Black</option>
                            <option value="Brown">Brown</option>
                            <option value="Blond">Blonde</option>
                            <option value="Red">Red</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
    Birthday = () => {
        this.setState({ age: this.state.age + 1 })
    }
    Hair = () =>{
        this.setState({ hairColor: this.target.value })
    }
}


export default PersonCard