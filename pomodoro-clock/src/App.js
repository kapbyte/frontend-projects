import React from 'react';
import './App.css';

import TimeControl from './Components/TimeControl'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        breakLength: 5,
        sessionLength: 25,
        timer: 1500,
        breakTime: 300,
        pomodoroStarted: false,
        breakStarted: false,
        timerType: 'Session',
        lengthUpdate: false
      };
      this.reset = this.reset.bind(this);
      this.clockify = this.clockify.bind(this);
      this.brkDecrement = this.brkDecrement.bind(this);
      this.brkIncrement = this.brkIncrement.bind(this);
      this.sesDecrement = this.sesDecrement.bind(this);
      this.sesIncrement = this.sesIncrement.bind(this);
      this.handleStartStop = this.handleStartStop.bind(this);
      this.handleBreak = this.handleBreak.bind(this);
    }
    
    reset() {
      this.setState({
        breakLength: 5,
        sessionLength: 25,
        timer: 1500,
        breakTime: 300,
        pomodoroStarted: false,
        breakStarted: false,
        timerType: 'Session',
        lengthUpdate: false
      });
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    
    clockify(time) {
      let minutes = Math.floor(time / 60);
      let seconds = time - minutes * 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      return minutes + ':' + seconds;
    }
    
    brkDecrement() {
      if (this.state.breakLength > 1 && !this.state.lengthUpdate) {
        this.setState({
          breakLength: this.state.breakLength - 1,
          breakTime: this.state.breakTime - 60
        });
      }
    }
    
    brkIncrement() {
      if (this.state.breakLength < 60 && !this.state.lengthUpdate) {
        this.setState({
          breakLength: this.state.breakLength + 1,
          breakTime: this.state.breakTime + 60
        });
      }
    }
    
    sesDecrement() {
      if (this.state.sessionLength > 1 && !this.state.lengthUpdate) {
        this.setState({
          sessionLength: this.state.sessionLength - 1,
          timer: this.state.timer - 60
        });
      }
    }
    
    sesIncrement() {
      if (this.state.sessionLength < 60 && !this.state.lengthUpdate) {
        this.setState({
          sessionLength: this.state.sessionLength + 1,
          timer: this.state.timer + 60
        });
      }
    }
    
    handleStartStop() {
      this.setState({
        pomodoroStarted: !this.state.pomodoroStarted,
        lengthUpdate: true
      });
      let timerID = setInterval(() => {
        if (this.state.pomodoroStarted) {   
          if (this.state.timer === 0) {
            this.audio.play();
            this.setState({
              timer: this.state.sessionLength * 60,
              pomodoroStarted: false,
              timerType: 'Break'
            });
            clearInterval(timerID);
            this.handleBreak();
          }
          else {
            this.setState({ timer: this.state.timer - 1 });
          }
        }
        else {
          clearInterval(timerID);
        }
      }, 1000);
    }
    
    handleBreak() {
      this.setState({
        breakStarted: !this.state.breakStarted,
        lengthUpdate: true
      });
      let breakID = setInterval(() => {
        if (this.state.breakStarted) {
          if (this.state.breakTime === 0) {
            this.audio.play();
            this.setState({
              breakTime: this.state.breakLength * 60,
              breakStarted: false,
              timerType: 'Session'
            });
            clearInterval(breakID);
            this.handleStartStop();
          }
          else {
            this.setState({breakTime: this.state.breakTime - 1});
          }
        }
        else {
          clearInterval(breakID);
        }
      }, 1000);
    }
    
    componentDidMount() {
      this.audio = document.getElementById('beep');
    }
  
    render() {
      let sessionOrBreak = this.state.timerType === 'Session' ? this.handleStartStop : this.handleBreak;
      let buttonIcon = this.state.pomodoroStarted ? "fa fa-pause" : "fa fa-play";
      return (
        <div>  
          <TimeControl 
            breakLength={this.state.breakLength}  
            sessionLength={this.state.sessionLength}
            timer={this.state.timer}
            breakTime={this.state.breakTime}
            timerType={this.state.timerType}
            reset={this.reset}
            clockify={this.clockify}
            brkDecrement={this.brkDecrement}
            brkIncrement={this.brkIncrement}
            sesDecrement={this.sesDecrement}
            sesIncrement={this.sesIncrement}
            handleStartStop={sessionOrBreak}
            buttonIcon={buttonIcon}
          />
        </div>
      );
    }
  }

export default App;