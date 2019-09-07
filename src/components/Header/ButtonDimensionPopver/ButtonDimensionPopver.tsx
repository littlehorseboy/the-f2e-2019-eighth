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
  list: {
    backgroundColor: '#605F5F',
    color: '#FFFFFF',
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  checkbox: {
    color: '#FFFFFF',
    marginLeft: theme.spacing(3),
    padding: theme.spacing(0.5),
  },
}));

export default function ButtonDimensionPopver(): JSX.Element {
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

  const [checked, setChecked] = useState<{ label: string; value: string }[]>([]);

  const handleCheckedToggle = (item: { label: string; value: string }): ()
  => void => (): void => {
    const foundChecked = checked
      .find((internalChecked): boolean => internalChecked.value === item.value);
    let newChecked;

    if (foundChecked) {
      newChecked = checked
        .filter((internalChecked): boolean => internalChecked.value !== item.value);
    } else {
      newChecked = [...checked, item];
    }

    setChecked(newChecked);
  };

  return (
    <>
      <Button
        color="inherit"
        className={classNames(classes.button, { open: anchorEl !== null })}
        onClick={handleClickOpenPopover}
      >
        尺寸
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
          {[
            { label: '大於300*400像素', value: '大於300*400像素' },
            { label: '大於640*480像素', value: '大於640*480像素' },
            { label: '大於600*800像素', value: '大於600*800像素' },
            { label: '大於1024*768像素', value: '大於1024*768像素' },
            { label: '大於兩百萬像素', value: '大於兩百萬像素' },
            { label: '大於四百萬像素', value: '大於四百萬像素' },
            { label: '大於六百萬像素', value: '大於六百萬像素' },
            { label: '大於八百萬像素', value: '大於八百萬像素' },
          ].map((dimension): JSX.Element => (
            <ListItem
              key={dimension.value}
              className={classes.listItem}
              dense
              button
              onClick={handleCheckedToggle(dimension)}
            >
              <ListItemText primary={dimension.label} />
              <div>
                <Checkbox
                  className={classes.checkbox}
                  edge="end"
                  checked={checked.filter(
                    (internalChecked): boolean => internalChecked.value === dimension.value,
                  ).length > 0}
                  tabIndex={-1}
                  disableRipple
                />
              </div>
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
}
