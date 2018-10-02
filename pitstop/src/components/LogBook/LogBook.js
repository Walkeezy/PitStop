import React, {Component} from 'react';
import LogEntry from './LogEntry';

class LogBook extends Component {
  render() {
    return (
    
      <div className="logbook">
        <h2>Logbuch</h2>
        {this.props.entries.map((entry, index) => <LogEntry key={index} entry={entry}/>)}
      </div>
      
    )
  }
}

export default LogBook