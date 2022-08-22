import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import { Button } from '@ellucian/react-design-system/core';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
  card: {
    marginTop: 0,
    marginRight: spacing40,
    marginBottom: 0,
    marginLeft: spacing40
  },
  button: {
    marginBottom: spacing40
  }
});

const goToUrl = (url) => {
  window.open(url, '_blank');
};

const QuickButtonLinksTemplate = (props) => {
  const {
    classes,
    cardInfo: {
      configuration: { customConfiguration }
    }
  } = props;
  const links = customConfiguration.links.map((item) => {
    return (
      <Button
        className={classes.button}
        fluid
        key={item.label}
        onClick={() => goToUrl(item.url)}
      >
        {item.label}
      </Button>
    );
  });
  return <div className={classes.card}>{links}</div>;
};

QuickButtonLinksTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  cardInfo: PropTypes.object
};

export default withStyles(styles)(QuickButtonLinksTemplate);
