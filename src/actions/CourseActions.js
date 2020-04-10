export const fetchCourse = () => {
  return dispatch => {
    return fetch(
      "https://cors-anywhere.herokuapp.com/https://quze-intern-test.s3.us-east-2.amazonaws.com/course-data.json"
    )
      .then(response => response.json())
      .then(payload => dispatch({ type: "FETCH_COURSE", payload }));
  };
};
