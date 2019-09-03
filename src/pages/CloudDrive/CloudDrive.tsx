import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import CloudIcon from '@material-ui/icons/Cloud';
import SearchIcon from '@material-ui/icons/Search';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles((theme) => createStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 75,
    backgroundColor: '#373737',
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
  headerRight: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default function Login(): JSX.Element {
  const classes = useStyles();

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
        </div>
        <div className={classes.headerRight}>
          <CloudIcon />
        </div>
      </header>
    </>
  );
}
