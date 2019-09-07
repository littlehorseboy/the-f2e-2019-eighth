import React, { useState } from 'react';
import classNames from 'classnames';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles((theme) => createStyles({
  button: {
    '&.open': {
      backgroundColor: '#605F5F',
    },
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  checkbox: {
    padding: theme.spacing(0.5, 0.5, 0.5, 3),
  },
}));

export default function ButtonSizePopver(): JSX.Element {
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
        大小
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
        <List>
          <ListItem
            className={classes.listItem}
            dense
          >
            <div>
              <Checkbox
                className={classes.checkbox}
                edge="end"
                tabIndex={-1}
                disableRipple
              />
            </div>
          </ListItem>
        </List>
      </Popover>
    </>
  );
}
