import React, { Component } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "http://dummy-photo.jpg"
      },
    };

    // console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child ComponentDidMount");
    // This function used for API calls

    const data = await fetch("https://api.github.com/users/anandyelloju");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }

  componentDidUpdate() {
    // console.log("Component Did Update");    
  }
  componentWillUnmount() {
    // console.log("Component Will Unmount");
    
  }
  render() {
    // console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @anandyelloju</h4>
      </div>
    );
  }
}

export default UserClass;
