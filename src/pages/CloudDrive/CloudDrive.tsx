import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import CloudIcon from '@material-ui/icons/Cloud';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles((theme) => createStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 75,
    backgroundColor: '#373737',
    borderBottom: '1px solid #000000',
    boxShadow: '0px 3px 6px #000029',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  titleText: {
    paddingLeft: theme.spacing(),
    fontWeight: 'bold',
    letterSpacing: '1.2px',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    '& > button': {
      color: '#FFFFFF',
    },
  },
  inputContainer: {
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
    width: 150,
    backgroundColor: '#E6E6E6',
    borderRadius: theme.shape.borderRadius * 4,
  },
  filterContainer: {
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',
  },
  listItem: {

  },
  checkbox: {
    padding: theme.spacing(0.5, 0.5, 0.5, 3),
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
  },
  sidebar: {
    width: 250,
    height: 'calc(100vh - 75px)',
    backgroundColor: '#373737',
    borderRight: '1px solid #000000',
  },
}));

export default function Login(): JSX.Element {
  const classes = useStyles();

  const [anchorTimeEl, setAnchorTimeEl] = React.useState<HTMLButtonElement | null>(null);

  function handleClickOpenTimePopover(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    setAnchorTimeEl(event.currentTarget);
  }

  function handleCloseTimePopover(): void {
    setAnchorTimeEl(null);
  }

  const [timeChecked, setTimeChecked] = React.useState<{ label: string; value: string }[]>([]);

  const handleTimeCheckedToggle = (time: { label: string; value: string }): ()
  => void => (): void => {
    const foundTimeChecked = timeChecked.find((checked): boolean => checked.value === time.value);
    let newChecked;

    if (foundTimeChecked) {
      newChecked = timeChecked.filter((checked): boolean => checked.value !== time.value);
    } else {
      newChecked = [...timeChecked, time];
    }

    setTimeChecked(newChecked);
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerLeft}>
          <div className={classes.title}>
            <CloudIcon color="secondary" />
            <Typography className={classes.titleText} color="secondary" variant="h6">CLOUD DRIVE</Typography>
          </div>

          <div className={classes.searchContainer}>
            <Paper className={classes.inputContainer}>
              <InputBase
                placeholder="搜尋"
              />
            </Paper>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>

          <div className={classes.filterContainer}>
            <Typography variant="body1">篩選器</Typography>

            <Button color="inherit" onClick={handleClickOpenTimePopover}>
              時間
              {anchorTimeEl
                ? <ArrowDropDownIcon />
                : <ArrowDropUpIcon />}
            </Button>
            <Popover
              open={Boolean(anchorTimeEl)}
              anchorEl={anchorTimeEl}
              onClose={handleCloseTimePopover}
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
                    onClick={handleTimeCheckedToggle(time)}
                  >
                    <ListItemText primary={time.label} />
                    <div>
                      <Checkbox
                        className={classes.checkbox}
                        edge="end"
                        checked={timeChecked
                          .filter((checked): boolean => checked.value === time.value).length > 0}
                        tabIndex={-1}
                        disableRipple
                      />
                    </div>
                  </ListItem>
                ))}
              </List>
            </Popover>
          </div>
        </div>
        <div className={classes.headerRight}>
          Horse
          <IconButton>
            <SettingsApplicationsOutlinedIcon />
          </IconButton>
        </div>
      </header>
      <div>
        <div className={classes.sidebar}></div>
        <div></div>
      </div>
    </>
  );
}
