import React, { useState } from 'react';
import classNames from 'classnames';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles((theme) => createStyles({
  button: {
    color: '#FFFFFF',
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
          {[
            { label: '今日', value: '今日' },
            { label: '昨日', value: '昨日' },
            { label: '最近7日', value: '最近7日' },
            { label: '最近30日', value: '最近30日' },
            { label: '最近90日', value: '最近90日' },
            { label: '最近一年', value: '最近一年' },
          ].map((time): JSX.Element => (
            <ListItem
              key={time.value}
              className={classes.listItem}
              dense
              button
              onClick={handleCheckedToggle(time)}
            >
              <ListItemText primary={time.label} />
              <div>
                <Checkbox
                  className={classes.checkbox}
                  edge="end"
                  checked={checked.filter(
                    (internalChecked): boolean => internalChecked.value === time.value,
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
