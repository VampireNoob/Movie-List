import { Component } from 'react';
import chek from './chek.jpg'

export class MovieList extends Component {
    state = {
        userInput: "",
        einkaufsListe: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(inputItem) {
        if (inputItem === '') {
            alert ('Bitte füge etwas ein!')
        }
        else {
        let listArray = this.state.einkaufsListe;
        listArray.push(inputItem);
        this.setState({einkaufsListe: listArray, userInput: ''})
        console.log(listArray)
    }
}

    deleteItem() {
        let listArray = this.state.einkaufsListe;
        listArray = [];
        this.setState({einkaufsListe: listArray})
    }

    crossWord(e) {
        const li = e.target;
        li.classList.toggle('cross');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit= {this.onFormSubmit}>
                <div className='container'>
                    <input type="text" 
                    placeholder='Was wir noch gucken möchten!!!' 
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>
                <div className='container'>
                    <button onClick={() => this.addItem(this.state.userInput)} className='add'>Zufügen</button>
                </div>
                <ul>
                    {this.state.einkaufsListe.map((item, index) => (
                        <li onClick={this.crossWord} key={index}>
                            <img src={ chek } alt="chek" width='20px' />
                            {item}
                        </li>
                    ))}
                </ul>
                <div className='container'>
                    <button onClick={() => this.deleteItem()} className='delete'>Löschen</button>
                </div>
                </form>
            </div>
        )
    }
}