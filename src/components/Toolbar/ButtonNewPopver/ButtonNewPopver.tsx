import React, { useState } from 'react';
import classNames from 'classnames';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles((theme) => createStyles({
  button: {
    color: '#FFFFFF',
    '&.open': {
      backgroundColor: '#E57F10',
    },
  },
  list: {
    backgroundColor: '#E57F10',
    color: '#FFFFFF',
  },
  listItem: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    '& > svg': {
      marginRight: theme.spacing(),
    },
  },
}));

export default function ButtonNewPopver(): JSX.Element {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  function handleClickOpenPopover(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    setAnchorEl(event.currentTarget);
  }

  function handleClosePopover(): void {
    setAnchorEl(null);
  }

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        className={classNames(classes.button, { open: anchorEl !== null })}
        onClick={handleClickOpenPopover}
      >
        <AddIcon />
        新增
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <List className={classes.list}>
          <ListItem
            className={classes.listItem}
            dense
            button
          >
            <CreateNewFolderIcon />
            <ListItemText primary="新增資料夾" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            dense
            button
          >
            <CloudUploadIcon />
            <ListItemText primary="新增檔案" />
          </ListItem>
        </List>
      </Popover>
    </>
  );
}
