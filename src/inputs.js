import * as React from 'react';

class JsonInput extends React.Component {
    constructor(props) {
        super(props);
        // TODO: this is a hack
        // there should probably be a single source of truth
        this.state = {
            value: JSON.stringify(this.props.value)
        }
    }

    handleChange = event => {
        try {
            this.setState({
                value: event.target.value
            })
            let value = JSON.parse(event.target.value);
            this.props.onChange(value);
        } catch (e) {
            // TODO: add error?
            return;
        }
    }

    render() {
        let className = this.props.inline ? "json-input form-control fc-inline" : "json-input form-control";
        return <input type="text" className={className} value={this.state.value} onChange={this.handleChange} />;
    }
}

export {
    JsonInput
}
