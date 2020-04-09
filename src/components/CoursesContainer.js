import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import ResultList from "./ResultList";

class CoursesContainer extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
      isLoading: true,
      search: "",
      results: [],
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
          results: response,
        });
      });
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let results = this.state.courses.filter((course) => {
      return course.title
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    this.setState({ results: results });
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
          {this.state.results.map((course, index) => (
            <ResultList key={index} course={course} />
          ))}
        </ul>
      </div>
    );
  }
}

export default CoursesContainer;
