import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import AddIcon from '@material-ui/icons/Add';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ListIcon from '@material-ui/icons/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { RouteComponentPropsI } from '../../router/Router';
import RouterBreadcrumbs from '../../router/RouterBreadcrumbs/RouterBreadcrumbs';
import ButtonNewPopover from '../../components/Toolbar/ButtonNewPopver/ButtonNewPopver';
import Table from '../../components/Table/Table';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  toolbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbarLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  toolbarRight: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
    fontWeight: 'bold',
  },
  toggleButtonGroup: {
    marginRight: theme.spacing(2),
    '& .MuiToggleButton-sizeSmall': {
      height: 30,
      padding: theme.spacing(0, 0.25),
    },
  },
}));

export default function Main(props: RouteComponentPropsI): JSX.Element {
  const classes = useStyles();

  const [viewMode, setViewMode] = useState('list');

  const handleChangeViewMode = (
    event: React.MouseEvent<HTMLElement, MouseEvent>, mode: string,
  ): void => {
    setViewMode(mode);
  };

  return (
    <div className={classes.root}>
      <div className={classes.toolbarContainer}>
        <div className={classes.toolbarLeft}>
          <KeyboardBackspaceIcon />
          <Typography variant="h6" className={classes.title}>我的雲端硬碟</Typography>
        </div>
        <div className={classes.toolbarRight}>
          <ToggleButtonGroup
            className={classes.toggleButtonGroup}
            value={viewMode}
            size="small"
            exclusive
            onChange={handleChangeViewMode}
          >
            <ToggleButton value="list">
              <ListIcon />
            </ToggleButton>
            <ToggleButton value="grid">
              <DashboardIcon />
            </ToggleButton>
          </ToggleButtonGroup>

          <ButtonNewPopover />
        </div>
      </div>
      <RouterBreadcrumbs />

      <Table />
    </div>
  );
}
