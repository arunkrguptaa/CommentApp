import React from 'react';
import Option from './Option';

const Options = (props) =>{
    return (
        <div>
            <div>
                {
                    props.options.map((opts) => ( 
                        <Option 
                            key={opts} 
                            textOpt={opts}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Options;