import React from 'react'

function Titlebody(props){
    return(
        <div>
        <div> {props.title}</div>
        <div>{props.image}</div>
        </div>
    );
};

export default Titlebody;