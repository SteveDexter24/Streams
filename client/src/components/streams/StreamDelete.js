import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { deleteStreams, fetchStream } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// React.Fragment or empty tags <></>: something like an invisible element that doesn't have any impact on the DOM

class StreamDelete extends React.Component {
    componentDidMount() {
        // get the id variable from the path using props.match.params.id
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStreams(id)} className="ui button negative">
                    Delete
                </button>
                <Link to="/" className="ui button">
                    Cancel
                </Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return "Are you sure you want to delete this stream?";
        }

        return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`;
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push("/")}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteStreams, fetchStream })(StreamDelete);
