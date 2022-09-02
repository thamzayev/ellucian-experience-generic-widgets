import React from "react";
import PropTypes from "prop-types";
import {
  TextField,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@ellucian/react-design-system/core";
import { Icon } from "@ellucian/ds-icons/lib";

const QuickButtonPageTemplateConfig = (props) => {
  const {
    cardControl: { setCustomConfiguration, setIsCustomConfigurationValid },
    cardInfo: {
      configuration: { customConfiguration }
    }
  } = props;

  const client = customConfiguration ? customConfiguration.client : undefined;
  const [pages, setPages] = React.useState(
    client ? client.pages : [{ title: "", content: "" }]
  );

  const handleChange = (i, e) => {
    const newPages = [...pages];
    newPages[i][e.target.name] = e.target.value;
    setPages(newPages);

    setCustomConfiguration({
      customConfiguration: {
        client: {
          pages: newPages
        }
      }
    });
  };

  const addLink = () => {
    setPages([...pages, { title: "", content: "" }]);
  };

  const removeLink = (i) => {
    const newPages = [...pages];
    newPages.splice(i, 1);
    setPages(newPages);
  };

  const handleBlur = (e) => {
    setIsCustomConfigurationValid(e.target.value !== "");
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Text</TableCell>
            <TableCell>Content</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pages.map((element, index) => {
            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <TextField
                    label="Title"
                    margin="normal"
                    name="title"
                    onBlur={handleBlur}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Title for Page"
                    value={element.title}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    label="Content"
                    margin="normal"
                    name="content"
                    onBlur={handleBlur}
                    onChange={(e) => handleChange(index, e)}
                    value={element.content}
                    fullWidth
                    multiple
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

QuickButtonPageTemplateConfig.propTypes = {
  cardControl: PropTypes.object,
  cardInfo: PropTypes.object
};

export default QuickButtonPageTemplateConfig;
