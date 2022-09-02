import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

const RouterPage = (props) => {
  return (
    <Router basename={props.pageInfo.basePath}>
      <Switch>
        <Route path="/page/:pageId">
          <Home {...props} />
        </Route>
      </Switch>
    </Router>
  );
};

RouterPage.propTypes = {
  pageInfo: PropTypes.object
};

export default RouterPage;
