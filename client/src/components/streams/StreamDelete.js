import React from "react";
import Modal from "../Modal";
import history from "../../history";

// React.Fragment or empty tags <></>: something like an invisible element that doesn't have any impact on the DOM

const StreamDelete = () => {
    const actions = (
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );

    return (
        <div>
            StreamDelete
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream"
                actions={actions}
                onDismiss={() => history.push("/")}
            />
        </div>
    );
};

export default StreamDelete;
