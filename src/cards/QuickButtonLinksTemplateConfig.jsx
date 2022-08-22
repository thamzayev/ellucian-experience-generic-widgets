import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@ellucian/react-design-system/core';
import { Icon } from '@ellucian/ds-icons/lib';
const QuickButtonLinksTemplateConfig = (props) => {
  const {
    cardControl: { setCustomConfiguration, setIsCustomConfigurationValid },
    cardInfo: {
      configuration: { customConfiguration }
    }
  } = props;

  const client = customConfiguration ? customConfiguration.client : undefined;
  const [links, setLinks] = React.useState(
    client ? client.links : [{ label: '', url: '' }]
  );

  const handleChange = (i, e) => {
    const newLinks = [...links];
    newLinks[i][e.target.name] = e.target.value;
    setLinks(newLinks);

    setCustomConfiguration({
      customConfiguration: {
        client: {
          links: newLinks
        }
      }
    });
  };

  const addLink = () => {
    setLinks([...links, { name: '', email: '' }]);
  };

  const removeLink = (i) => {
    const newLinks = [...links];
    newLinks.splice(i, 1);
    setLinks(newLinks);
  };

  const handleBlur = (e) => {
    setIsCustomConfigurationValid(e.target.value !== '');
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Text</TableCell>
            <TableCell>Url</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((element, index) => {
            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <TextField
                    label="Label"
                    margin="normal"
                    name="label"
                    onBlur={handleBlur}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Label for URL"
                    value={element.label}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    label="URL"
                    margin="normal"
                    name="url"
                    onBlur={handleBlur}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="https://..."
                    value={element.url}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    color="gray"
                    disabled={!index}
                    onClick={() => removeLink(index)}
                  >
                    <Icon color="red" name="trash" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <IconButton onClick={() => addLink()}>
        <Icon name="add" />
      </IconButton>
    </div>
  );
};

QuickButtonLinksTemplateConfig.propTypes = {
  cardControl: PropTypes.object,
  cardInfo: PropTypes.object
};

export default QuickButtonLinksTemplateConfig;
