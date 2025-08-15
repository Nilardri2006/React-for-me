import React from 'react'


const Childcomponents = React.memo(
    (props) => {
        console.log("re-rendered again child component");
        return (
            <div>
                <button onClick={props.handleClick}>
                    {props.buttonName}
                </button>
            </div>
        )
    }


);

export default Childcomponents
