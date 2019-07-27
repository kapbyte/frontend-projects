import React from 'react';
import './App.css';

import Title from './Components/Title';
import DisplayQuote from './Components/DisplayQuote';
import Buttons from './Components/Buttons';
import Author from './Components/Author';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: ''
        }

        this.tweetQuote = this.tweetQuote.bind(this);
        this.fetchQuote = this.fetchQuote.bind(this);
        this.quote = this.quote.bind(this);
    }

    componentDidMount() {
        this.quote();
    };

    fetchQuote() {
        this.quote();
    }

    quote() {
        const self = this;
        const quoteAPI = `https://thesimpsonsquoteapi.glitch.me/quotes`;
            fetch(quoteAPI) 
                .then((resp) => resp.json())
                .then(function(data) {
                    self.setState({
                        quote: data[0].quote,
                        author: data[0].character
                    });
                    document.getElementById("text").innerHTML = data[0].quote;
                    document.getElementById("author").innerHTML = data[0].character;
                })
                .catch(function(error) {
                    console.log(error);
                });
    }

    tweetQuote() {
        console.log('tweeting quote');
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(`${this.state.quote} \n- ${this.state.author}.`));
    }

    render() {
        return (
            <div>
                <Title />
                <div className="container" id="quote-box">
                    <DisplayQuote />
                    <div className="buttons">
                        <Buttons 
                            fetchQuote={this.fetchQuote}
                            tweetQuote={this.tweetQuote}
                        />
                        <Author />
                    </div>
                </div>
            </div>
        );
    }
};

export default App;