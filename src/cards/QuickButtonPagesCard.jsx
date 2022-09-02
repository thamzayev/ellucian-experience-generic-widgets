import { withStyles } from "@ellucian/react-design-system/core/styles";
import {
  spacing40,
  spacing30
} from "@ellucian/react-design-system/core/styles/tokens";
import { Button } from "@ellucian/react-design-system/core";
import PropTypes from "prop-types";
import React from "react";

const styles = () => ({
  card: {
    marginTop: 0,
    marginRight: spacing40,
    marginBottom: 0,
    marginLeft: spacing40
  },
  button: {
    marginBottom: spacing30
  },
  navigationButton: {
    marginBottom: spacing30
  }
});

const QuickButtonPageTemplate = (props) => {
  const {
    classes,
    cardInfo: {
      configuration: { customConfiguration }
    },
    cardControl: { navigateToPage }
  } = props;

  const pages = customConfiguration.pages?.map((item, index) => {
    return (
      <Button
        className={classes.navigationButton}
        fluid
        key={item.title}
        onClick={() => {
          navigateToPage({ route: `page/${index}` });
        }}
      >
        {item.title}
      </Button>
    );
  });
  return <div className={classes.card}>{pages}</div>;
};

QuickButtonPageTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  cardInfo: PropTypes.object.isRequired,
  cardControl: PropTypes.object.isRequired
};

export default withStyles(styles)(QuickButtonPageTemplate);
