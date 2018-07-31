import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';


export default class CommentApp extends React.Component{
    state = {
        options: [],
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    addOptions = (option) => {
        if(!option){
            return 'Enter a valid input';
        }

        this.setState((prevState) => {
            return{
                options: prevState.options.concat([option])
            };
        });
    }
    render(){
        return (
            <div>
                <Header />
                <AddOption addOptions={this.addOptions} />
                <Options 
                    options={this.state.options} 
                    handleDeleteOption={this.handleDeleteOption}
                />
            </div>
        );
    }
}