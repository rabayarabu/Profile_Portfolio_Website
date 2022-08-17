import React, {Component} from 'react';
import './styles.css';



class Name extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            count: 0
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
        alert(`${this.state.name} ${this.state.address}`)
        event.preventDefault()

    }
    increment() {
        this.setState( 
        {
            count: this.state.count + 1
        }, () => {
            console.log('value', this.state.count)
        } 
        )
        console.log(this.state.count)
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
            <button type="submit">Submit</button>
            <div>
                count - {this.state.count}
            </div>
            <button onClick={() => this.increment()}>Increment</button>
        </form>

        )
    }
        
}

export default Name