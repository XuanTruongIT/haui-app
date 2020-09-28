import React, { Component } from 'react';
import './haui.css';

class haui extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            url: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    handleSubmit(event) {
        this.setState({
            src: 'https://static.dhcnhn.vn/student?id=' + this.state.value,
            url: 'https://sv.dhcnhn.vn/student/result/viewexamresult?code=' + this.state.value,
        });
        event.preventDefault();
    }
    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Mã sinh viên: </label>
                        <input id="student-code" value={this.state.value} onChange={this.handleChange} type="text" className="form-control" />
                    </div>
                    <button type="submit" id="search">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Tìm kiếm
                    </button>
                </form>
                <div className="img">
                    <a href={this.state.url} target="_blank" title="Click vào ảnh để xem thông tin 🙂"><img src={this.state.src}></img></a>
                </div>
            </div>
        )
    }
}
export default haui;