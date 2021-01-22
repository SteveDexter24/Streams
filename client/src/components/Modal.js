import React from "react";
import ReactDOM from "react-dom";

// event.stopPropagation() : event does not continue to bubble up and goes to div with history.push(), which
// causes the window to get dismissed by navigating to some other page

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standart modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector("#modal")
    );
};

export default Modal;
