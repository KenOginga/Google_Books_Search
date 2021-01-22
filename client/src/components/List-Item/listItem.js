import React, { Component } from "react";

class ListItem extends Component {
    state = {
        mounted: false,
        backgroundColor: "",
        color: "",
        text: "Save"
    }

    componentDidMount = () => {
        this.setState({
            mounted: true
        });
    };

    getStyle = () => {
        if (this.state.text === "save") {
            this.setState({
                backgroundColor: "#00E00",
                color: "white",
                text: "Saved"
            })
        } else {
            this.setState({
                backgroundColor: "",
                color: "",
                text: "Save"
            })
        }
    }

    handleClick = () => {
        this.props.saveGoogleBook(this.props)
        this.getStyle();
    }

    render() {
        const { book } = this.props
        return (
            <div>
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <img src={this.props.image} style={{ maxWidth: "100px" }} alt="book image" />
                        <h5 className="card-title" style={{ margin: "10px 0" }}>{this.props.title}</h5>
                        <p className="card-text" >{this.props.description}</p>
                        <p style={{ fontStyle: "italic" }}>Author(s): {this.props.authors}</p>
                        <a href={this.props.link} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginRight: "6px" }}>View Book</a>
                        <button onClick={this.handleClick} style={{ backgroundColor: this.state.backgroundColor, color: this.state.color }} className="btn">{this.state.text}</button>
                    </div>
                </div>
            </div>
        )
    };
};

export default ListItem;