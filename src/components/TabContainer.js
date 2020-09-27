import React from 'react';
import Tab from './Tab.js';

class TabContainer extends React.Component {
    render() {
        return(
            <div>
                <Tab name="Notepad"/>
                <Tab name="Game Status"/>
            </div>
        );
    }
}

export default TabContainer;