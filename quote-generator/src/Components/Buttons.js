import React from 'react';

class Buttons extends React.Component {

    render() {
        return (
            <div className="buttons">
                <button type="button" className="btn btn-lg btn-info" id="tweet">
                    <a id="tweet-quote" onClick={this.props.tweetQuote} title="Tweet this quote!" href="https://twitter.com/intent/tweet/?text=" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i> Tweet
                    </a>
                </button>
                <button className="btn btn-lg btn-info" onClick={this.props.fetchQuote} type="button" id="new-quote" title="Get quote!"><i className="fa fa-comments-o"></i> Quote</button>
            </div>
        );
    }
};

export default Buttons;