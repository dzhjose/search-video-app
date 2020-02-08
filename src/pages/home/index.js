import React, { Component } from "react";
import FormSearch from "../../components/FormSearch";
import Movies from "../../components/containers/Movies";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <FormSearch />
        <Movies />
      </React.Fragment>
    );
  }
}

export default Home;
