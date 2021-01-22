import React from 'react'
import "./style.css";

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} style={{ margin: "12px 0 12px 0"}}/>
        </div>
    )
}

export function SubmitBtn(props) {
    return (
        <button {...props} className="btn submitBtn" style={{backgroundColor: "#2196f3", color: "white", marginBottom: "10px"}}>Search</button>
    )
}