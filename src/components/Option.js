import React from 'react';
import Reply from './Reply';

const Option = (props) => {
    return (
        <div>
            <div>
                <div className="clearboth">
                    <div className="pad10">
                    <p>{props.textOpt}
                    <button onClick={(e) => {
                        props.handleDeleteOption(props.textOpt)
                    }}>Delete</button></p>
                    </div>
                    <Reply/>                   
                </div>
            </div>  
        </div>
    );
}

export default Option;