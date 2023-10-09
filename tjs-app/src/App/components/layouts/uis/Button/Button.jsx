import React from "react";
import './Button.css'

/*function Button(props){
    return(<button>Benjamin</button>);
}*/

const Button = (props) => {
    console.log(props);
    return <button className= "Button"
                 onClick={(evt) => {console.log(evt);
                 props.onbuttonclick("click in Benjamin");
                }}
                >
                {props.text}
            </button>
}

export default Button;