import React, { useState } from 'react';
import classNames from 'classnames';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles(() => createStyles({
  button: {
    '&.open': {
      backgroundColor: '#605F5F',
    },
  },
  list: {
    backgroundColor: '#605F5F',
    color: '#FFFFFF',
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

export default function ButtonUserPopver(): JSX.Element {
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
        color="inherit"
        className={classNames(classes.button, { open: anchorEl !== null })}
        onClick={handleClickOpenPopover}
      >
        Horse
        {anchorEl
          ? <ArrowDropDownIcon />
          : <ArrowDropUpIcon />}
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
            <ListItemText primary="隱私權設定" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            dense
            button
          >
            <ListItemText primary="登出" />
          </ListItem>
        </List>
      </Popover>
    </>
  );
}
