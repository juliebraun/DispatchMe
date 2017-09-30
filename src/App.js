import React, { Component } from "react";
import "./App.css";
import Projects from "./Components/Projects";
import $ from "jquery";
import AddProject from "./Components/AddProject";
import uuid from "uuid";
import { base } from "./Components/base";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  componentWillMount() {
    this.setState([
      {
        id: uuid.v4(),
        title: "title",
        location: "location",
        assignment: "assignment",
        worker: "worker"
      }
    ]);
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }

  render() {
    return (
      <div className="App">
        Dispatcher*
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects
          projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)}
        />
      </div>
    );
  }
}

export default App;
