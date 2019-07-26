import React from 'react';

class TimeControl extends React.Component {
    
    render() {

      return (
        <div className="container">
          <h1>Pomodoro Clock</h1>
          <div className="length-control">
              <div>
                  <div id="break-label">Break Length</div> 
                  <div>
                    <i className="arrow fa fa-arrow-circle-down" id="break-decrement" onClick={this.props.brkDecrement}></i>                
                    <span id="break-length">{this.props.breakLength}</span>
                    <i className="arrow fa fa-arrow-circle-up" id="break-increment" onClick={this.props.brkIncrement}></i>
                  </div>
              </div>
              <div>
                <div id="session-label">Session Length</div>
                <div>
                  <i className="arrow fa fa-arrow-circle-down" id="session-decrement" onClick={this.props.sesDecrement}></i>
                  <span id="session-length">{this.props.sessionLength}</span>
                  <i className="arrow fa fa-arrow-circle-up" id="session-increment" onClick={this.props.sesIncrement}></i>
                </div>
              </div>
          </div>
          <div className="timer">
            <div className="timer-wrapper">
              <div id="timer-label">{this.props.timerType}</div>
              <div id="time-left">{this.props.timerType === 'Session' ? this.props.clockify(this.props.timer) : this.props.clockify(this.props.breakTime)}</div>
            </div>
          </div>
          <div className="time-control">
              <i id="start_stop" onClick={this.props.handleStartStop} className={`${this.props.buttonIcon} arrow`} ></i>
              <i id="reset" onClick={this.props.reset} className="fa fa-refresh"></i>
          </div>
          <audio id="beep" preload="auto" 
            src="https://goo.gl/65cBl1"
            ref={ (audio) => { this.audioBeep = audio;} } 
          />
        </div>    
      );
      
    }
  }

export default TimeControl;