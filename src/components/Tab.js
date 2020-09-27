import React from 'react';

class Tab extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <textarea defaultValue="Enter text here."></textarea>
            </div>
        );
    }
}

export default Tab;