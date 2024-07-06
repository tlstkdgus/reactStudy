import React from "react"

function HelloProps(props){
    return(
        <div>
            <p>My name is {props.name} and age is {props.age} </p>
            <strong>YOu are {props.someFunc()}</strong>
            <p> this is someArr {[...props.someArr]}</p>
            <p> this is someObj {props.someObj.one}</p>
            {props.someJSX}
        </div>

    )
}

export default HelloProps;