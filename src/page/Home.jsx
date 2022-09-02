import { withStyles } from "@ellucian/react-design-system/core/styles";
import { spacing20 } from "@ellucian/react-design-system/core/styles/tokens";
import reactHtmlParser from "html-react-parser";
import PropTypes from "prop-types";
import React from "react";
import { usePageControl } from "@ellucian/experience-extension/extension-utilities";
import { useParams } from "react-router-dom";
const styles = () => ({
  card: {
    margin: `0 ${spacing20}`
  }
});

const HomePage = (props) => {
  const {
    classes,
    cardInfo: {
      cardConfiguration: { customConfiguration }
    }
  } = props;
  const { setPageTitle } = usePageControl();
  const { pageId } = useParams();
  setPageTitle(customConfiguration.pages[pageId].title);

  return (
    <div className={classes.card}>
      {reactHtmlParser(customConfiguration.pages[pageId].content)}
    </div>
  );
};

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  cardInfo: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
