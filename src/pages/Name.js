import React, { Component } from 'react';
import './styles.css';



class Name extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            count: 0,
            saveButton: '',
            isAged: false
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
    saveButton() {
        console.log('saved')
    }

    render() {
        let message
        if(this.state.isAged){
            message = <div>Ammu</div>
        }else {
            message = <div>Ami</div>
        }
        return <div>{message}</div>
        // return (
        //     <form onSubmit={this.handleSubmit}>
        //         <div>
        //             <label>Name</label>
        //             <input type="text"
        //                 value={this.state.name}
        //                 onChange={this.handleNameChange} />
        //         </div>
        //         <div>
        //             <label>Address</label>
        //             <textarea value={this.state.address}
        //                 onChange={this.handleAddressChange} />
        //         </div>
        //         <button type="submit">Submit</button>
        //         <div>
        //             count - {this.state.count}
        //         </div>
        //         <button onClick={() => this.increment()}>Increment</button>
        //         <div>
        //             <button onClick={this.saveButton}>Save</button>
        //         </div>
        //     </form>


        // )
    }

}

export default Name