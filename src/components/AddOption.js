import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    };
    addOptions = (e) => {
        e.preventDefault();
        const optvalue = e.target.elements.optionnm.value.trim();
        const error = this.props.addOptions(optvalue);
        this.setState(() => ({error})); 
        if(!error){
            e.target.elements.optionnm.value = '';
        }
    }
    render() {
        return (
            <div>
                <div>{this.state.error && <p>{this.state.error}</p>}</div>
                <form onSubmit={this.addOptions}>
                    <input type="text" className="textareabox" name="optionnm" />
                    <button className="addbuttoncmnt">Add a Comment</button>
                </form>
            </div>
        );
    }
}