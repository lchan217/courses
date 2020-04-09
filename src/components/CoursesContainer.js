import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class CoursesContainer extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
      isLoading: true,
      search: "",
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

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <div>
          Search by Title:
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <input
                type='text'
                placeholder='Search courses'
                value={this.state.search}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button type='submit'>Search</Button>
          </Form>
        </div>
        <ul>
          {this.state.courses.map((course, index) => (
            <li key={index}>{course.title} - More Details</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CoursesContainer;
