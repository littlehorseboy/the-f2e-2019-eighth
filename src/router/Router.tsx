import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import IsLoading from '../components/IsLoading/IsLoading';
import CloudDrive from '../pages/CloudDrive/CloudDrive';

const routes = [
  { path: '/all', name: 'all', Component: CloudDrive },
  { path: '/star', name: 'star', Component: CloudDrive },
  { path: '/folder/:folder', name: 'folder', Component: CloudDrive },
  { path: '/trashCan', name: 'trashCan', Component: CloudDrive },
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles(() => createStyles({
  root: {
    fontFamily: '"Noto Sans TC", system-ui, -apple-system, "Roboto", "Helvetica", "Arial", sans-serif',
    minHeight: '100vh',
    color: '#373737',
  },
}));

export default function Router(): JSX.Element {
  const classes = useStyles();

  return (
    <HashRouter>
      <div className={classes.root}>
        {routes.map(({
          path, Component,
        }): JSX.Element => (
          <React.Fragment key={path}>
            <Route exact path={path} component={Component} />
          </React.Fragment>
        ))}

        <IsLoading />
      </div>
    </HashRouter>
  );
}
