import React, { Component } from "react";
import uuid from "uuid";

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    };
  }
  static defaultProps = {
    categories: [
      "Justin Long",
      "Jason Deli",
      "Trish Smith",
      "Tony Pebbles",
      "Victor Marmont",
      "Cassie Tettle"
    ]
  };

  handleSubmit(e) {
    if (this.refs.title.value === "") {
      alert("Please input a name for this Job");
    } else if (this.refs.location.value === "") {
      alert("Please input a valid location for this job");
    } else if (this.refs.assignment.value === "") {
      alert("Please enter a job description");
    } else if (this.refs.worker.value === "") {
      alert("Please select a worker for this job");
    } else {
      this.setState(
        {
          newProject: {
            id: uuid.v4(),
            title: this.refs.title.value,
            location: this.refs.location.value,
            assignment: this.refs.assignment.value,
            worker: this.refs.worker.value
          }
        },
        function() {
          //   console.log(this.state);
          this.props.addProject(this.state.newProject);
        }
      );
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(worker => {
      return (
        <option key={worker} value={worker}>
          {worker}
        </option>
      );
    });
    return (
      <div>
        <h3>Create new Job</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>New Job Name</label>
            <br />
            <input type="text" ref="title" />
          </div>
          <br />
          <div>
            <label>Job site location</label>
            <br />
            <input type="text" ref="location" />
          </div>
          <br />
          <div>
            <label>Assignment</label>
            <br />
            <input type="text" ref="assignment" />
          </div>
          <br />
          <div>
            <label>Assign Worker</label>
            <select ref="worker">{categoryOptions}</select>
          </div>
          <input type="submit" value="Assign Job" />
        </form>
      </div>
    );
  }
}

export default AddProject;
