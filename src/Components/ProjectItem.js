import React, { Component } from "react";

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="Project">
        {this.props.project.title} - {this.props.project.location} -
        {this.props.project.assignment} - {this.props.project.worker}
        <a
          href="#"
          onClick={this.deleteProject.bind(this, this.props.project.id)}
        >
          X
        </a>
      </li>
    );
  }
}

export default ProjectItem;
