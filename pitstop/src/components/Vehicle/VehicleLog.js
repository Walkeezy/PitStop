import React, {Component} from 'react'
import VehicleLogEntry from './VehicleLogEntry'

class VehicleLog extends Component {
    render() {
        const entries = this.props.logentries
        return (

            <div className="VehicleLog">
            <h2>Logbuch</h2>
                {entries.map((entry, index) => <VehicleLogEntry key={index} entry={entry}/>)}
            </div>

        )
    }
}

export default VehicleLog
