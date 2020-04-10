import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import ResultList from "./ResultList";
import { connect } from "react-redux";
import { fetchCourse } from "../../src/actions/CourseActions";

class CoursesContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      search: "",
      results: []
    };
  }

  componentDidMount() {
    this.props.fetchCourse();
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let results = this.state.courses.filter(course => {
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
        <ResultList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCourse: () => dispatch(fetchCourse())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);
