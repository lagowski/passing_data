import React from 'react';
// import { render } from  'react-dom';
import { Header} from './components/Header'
import { Home} from './components/Home'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        };
    }

    onGreet() {
        alert("Hello");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        })
    }

    render() {
        var user = {
            name: "Anna",
            hobbies: ["Sports", "ULM"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home
                            name={"Max"}
                            initialAge={27}
                            user={user}
                            greet={this.onGreet}
                            changeLink={this.onChangeLinkName.bind(this)}
                            initialLinkName={this.state.homeLink}
                        >
                            <p>This is paragraph - CHILD</p>
                        </Home>
                    </div>
                </div>
            </div>
        )
    }

}

export default App;