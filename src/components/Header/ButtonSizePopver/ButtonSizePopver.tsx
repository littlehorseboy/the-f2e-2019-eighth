import React, { useState } from 'react';
import classNames from 'classnames';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles((theme) => createStyles({
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
    '& > div > div:not(:first-child), & > div > span': {
      marginLeft: theme.spacing(),
    },
  },
  textField: {
    width: 60,
  },
  select: {
    width: 60,
    '& > div > .MuiSelect-root': {
      paddingTop: 5.5,
      paddingBottom: 5.5,
      backgroundColor: '#FFFFFF',
    },
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
        <List className={classes.list}>
          <ListItem
            className={classes.listItem}
            dense
          >
            <div>
              <TextField
                className={classes.textField}
              />
              <TextField
                select
                className={classes.select}
                value="KB"
                SelectProps={{ native: true }}
                variant="outlined"
              >
                <option value="KB">KB</option>
              </TextField>
              <Typography component="span">至</Typography>
              <TextField
                className={classes.textField}
              />
              <TextField
                select
                className={classes.select}
                value="KB"
                SelectProps={{ native: true }}
                variant="outlined"
              >
                <option value="KB">KB</option>
              </TextField>
            </div>
          </ListItem>
        </List>
      </Popover>
    </>
  );
}
