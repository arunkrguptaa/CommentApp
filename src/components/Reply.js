import React from 'react';

export default class Reply extends React.Component{
    state = {
        replytxt: [],
    };
    AddReply = (e) => {
        e.preventDefault();
        const replyval = e.target.elements.addReplynm.value.trim();
        e.target.elements.addReplynm.value = '';
        this.setState((prevState) => {
            return{
                replytxt: prevState.replytxt.concat([replyval])
            };
        });        
    }
    handleDelReply = (optionToRemove) => {
        this.setState((prevState) => ({
            replytxt: prevState.replytxt.filter((replyval) => optionToRemove !== replyval)
        }))
    }
    render(){
    return (
        <div>
            <ul>
                {
                    this.state.replytxt.map((replyval,replykey) => ( 
                        <li id={replykey} className="clearboth pad50">
                            <div>{replyval}
                            <button onClick={(e) => {
                                this.handleDelReply(replyval)
                            }}>Delete Reply</button>
                            </div>
                        </li>
                    ))
                }
                <div className="parentfrm">
                    <form onSubmit={this.AddReply}>
                    <input type="text" className="textareabox" rows="5" cols="30" name="addReplynm"/>
                        <button className="addbuttoncmnt">Reply</button>
                    </form>
                </div>
            </ul>
        </div>
    );
    }
}
