import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
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

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        })
    }

    componentWillMount() {
        console.log("Component Will mount")
    }

    componentDidMount() {
        console.log("Component Did mount")
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component Will Receive Props", nextProps)
    }

    shouldComponentUpdate(nextProps,nextStage) {
        console.log("Should Component Update", nextProps,nextStage)
        // if (nextState.status === 1 ){
        //     return false
        // }
        return true;
    }

    componentWillUpdate(nextProps,nextStage) {
        console.log("Component Will Update", nextProps,nextStage)
    }

    componentDidUpdate(previousProps,previousStage) {
        console.log("Component Did Update", previousProps,previousStage)
    }

    componentDidUpdate(previousProps,previousStage) {
        console.log("Component Did Update", previousProps,previousStage)
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
                <hr />
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary" >Zmien wartosc Headera u Parenta!</button>
                <hr />
                <input type="text" value={this.state.homeLink}
                       onChange={(event) => this.onHandleChange(event)} />

                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary" >Zmien wartosc Headera u Parenta na ta z okienka!</button>
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