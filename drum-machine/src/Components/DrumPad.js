import React from 'react';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
              
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
  
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
  
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
   
    handleKeyPress(e) {
      if (e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.currentTime = 0;
        this.audio.play();
        this.props.handleDisplay(this.props.id)
      }
    }
  
    handleClick() {
      this.audio.currentTime = 0;
      this.audio.play();
      this.props.handleDisplay(this.props.id)
    }
  
    render() { 
        return (
            <div 
              className='drum-pad' 
              id={this.props.id} 
              onClick={this.handleClick}
              onKeyPress={this.handleKeyPress}
             >
             <h1>{this.props.letter}</h1>
             <audio 
                ref={ref => this.audio = ref}
                className='clip'
                src={this.props.src} 
                id={this.props.letter}>
              </audio>
            </div>
        );
    }
}

export default DrumPad;