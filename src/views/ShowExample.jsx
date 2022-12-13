import React, { memo } from "react";

const ExampleComponent = (props) => {
    console.log("This being Re-render");
    return(
        <div className="container-content">
            <h1 style={{color: 'red'}}>
                {props.fakeCount}
            </h1>
        </div>
    )
}

export default memo(ExampleComponent);