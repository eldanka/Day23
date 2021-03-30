import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <Table characterData={characters}
                removeCharacter={this.removeCharacter} />
            </div>
        )
    }

    state = {
        characters: [
            {
                firstName: 'Lary',
                lastName: 'Page',
            },
            {
                firstName: 'Ada',
                lastName: 'Lovelace',
            },
            {
                firstName: 'Alan',
                lastName: 'Turing',
            },
        ],
    }

    removeCharacter = (index) => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            }),
        })
    }
}

export default App;