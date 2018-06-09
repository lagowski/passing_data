import React from 'react';
// import { render } from  'react-dom';
import { Header} from './components/Header'
import { Home} from './components/Home'

class App extends React.Component {
    onGreet() {
        alert("Hello");
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
                        <Header homeLink="Home" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Max"} initialAge={27} user={user} greet={this.onGreet}>
                            <p>This is paragraph - CHILD</p>
                        </Home>
                    </div>
                </div>
            </div>
        )
    }

}

export default App;