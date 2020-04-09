import React, { Component } from "react";

class CoursesContainer extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://quze-intern-test.s3.us-east-2.amazonaws.com/course-data.json"
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          courses: response,
          isLoading: false,
        });
      });
  }
  render() {
    return <div>courses container</div>;
  }
}

export default CoursesContainer;
