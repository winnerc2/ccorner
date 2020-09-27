import React from 'react';
import Tab from '../Tab';
import Connector from '../../graphql-interface/Connector';

class NotepadTab extends Tab {
    render() {
        conn = new Connector();
        return (
            <div>
                <h2>{this.props.name}</h2>
                <textarea>Type your notes here!</textarea>
            </div>
        );
    }
}

export default Tab;