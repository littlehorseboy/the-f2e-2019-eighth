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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles((theme) => createStyles({
  root: {
    padding: theme.spacing(2),
  },
}));

export default function Main(props: RouteComponentPropsI): JSX.Element {
  const classes = useStyles();

  const { routeComponentProps } = props;

  const [viewMode, setViewMode] = useState('list');

  const handleChangeViewMode = (
    event: React.MouseEvent<HTMLElement, MouseEvent>, mode: string,
  ): void => {
    setViewMode(mode);
  };

  return (
    <div className={classes.root}>
      <div>
        <KeyboardBackspaceIcon />
        <Typography variant="h6">我的雲端硬碟</Typography>
        <ToggleButtonGroup value={viewMode} exclusive onChange={handleChangeViewMode}>
          <ToggleButton value="list">
            <ListIcon />
          </ToggleButton>
          <ToggleButton value="grid">
            <DashboardIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Button variant="contained" color="secondary">
          <AddIcon />
          新增
        </Button>
      </div>
      <RouterBreadcrumbs />
    </div>
  );
}
