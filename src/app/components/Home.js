import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        },3000);
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age +3
        })
    }

    render () {
        return (
            <div>
                <h1>COMPONENT</h1>
                <p>Your Name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <p>User Object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr />
                {this.props.children}
                <hr />
                <button onClick={()=> this.onMakeOlder()} className="btn btn-primary" >Make Older </button>
                <hr />
                <button onClick={this.props.greet} className="btn btn-primary" >Greet u Parenta!</button>
            </div>
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    initialAge: PropTypes.number,
    children: PropTypes.element.isRequired
}