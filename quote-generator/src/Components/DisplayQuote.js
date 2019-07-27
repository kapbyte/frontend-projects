import React from 'react';

function DisplayQuote() {
    return (
        <div>
            <div className="quote-text">
                <h4 className="rocksalt-font"><div id="text"></div></h4>
                <i><h6><b>- </b><span id="author"></span></h6></i>
            </div>
        </div>
    );
}

export default DisplayQuote;