import React from "react";

class Search extends React.Component {
  state = {
    term: "",
  };
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit} className="submitForm">
          <div className="form__group field">
            {/* <label htmlFor="video-search">Video Search</label> */}
            <input
              className="form__field"
              onChange={this.handleChange}
              name="video-search"
              type="text"
              value={this.state.term}
            />
            <label for="name" class="form__label">
              Search Text
            </label>
          </div>
        </form>
      </div>
    );
  }
}
export default Search;
