import * as React from "react";

interface TextInputProps extends React.Props<TextInput> {
    value: string;
    className?: string;
    onChange: (value: string) => void;
}

interface TextInputState {
    value: string;

}

export class TextInput extends React.Component<TextInputProps, TextInputState> {
    constructor(props: TextInputProps) {
        super(props);
        this.state = {
            value: props.value
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillReceiveProps(nextProps: TextInputProps) {
        this.setState({value: nextProps.value});
    }
    handleChange(event: any) {
        let value: string = event.target.value;
        this.props.onChange(value);
    }

    render() {
        return (
            <input 
                type="text" 
                value={this.state.value} 
                onChange={this.handleChange} 
                className={this.props.className}
            />
        );
    }
}
