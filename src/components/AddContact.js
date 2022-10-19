import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All fields are required!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
        console.log(this.props);
        this.props.history.push("/");
    };

    render() {
        return (
            <div className="ui header">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="first-name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => {
                                this.setState({ name: e.target.value });
                            }}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => {
                                this.setState({ email: e.target.value });
                            }}
                        />
                    </div>

                    <button className="ui primary button">Add</button>
                    <Link to="/">
                        <button className="ui grey button">Back</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default AddContact;
