import React, {Component} from 'react';
import './styles.css';



class Name extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            address: ''
        }
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value

            }
        )

    }
    handleAddressChange = (event) => {
        this.setState({
            address: event.target.value

            }
        )

    }
    handleSubmit = event => {
        alert('${this.state.name} ${this.state.address}')

    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text"
                 value={this.state.name}
                 onChange={this.handleNameChange} />
            </div>
            <div>
                <label>Address</label>
                <textarea value={this.state.address}
                 onChange={this.handleAddressChange}/>
            </div>
            <button type="">Submit</button>
        </form>

        )
    }
        
}

export default Name