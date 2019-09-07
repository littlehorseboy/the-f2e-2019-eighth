import React from 'react';
import { HashRouter, Route, RouteComponentProps } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import IsLoading from '../components/IsLoading/IsLoading';
import Home from '../pages/Home/Home';
import Main from '../pages/Main/Main';

interface RouteWithSubRoutesPropsI {
  route: RoutesI;
}

export function RouteWithSubRoutes(props: RouteWithSubRoutesPropsI): JSX.Element {
  const { route } = props;

  return (
    <Route
      path={route.path}
      render={(renderProps): JSX.Element => (
        <route.Component routeComponentProps={renderProps} routes={route.routes} />
      )}
    />
  );
}

export interface RouteComponentPropsI {
  routeComponentProps: RouteComponentProps;
  routes?: RoutesI[];
}

export interface RoutesI {
  path: string;
  name: string;
  Component: (props: RouteComponentPropsI) => JSX.Element;
  routes?: RoutesI[];
}

const routes: RoutesI[] = [
  {
    path: '/',
    name: 'home',
    Component: Home,
    routes: [
      { path: '/all', name: 'all', Component: Main },
      { path: '/star', name: 'star', Component: Main },
      { path: '/folder/:folder', name: 'folder', Component: Main },
      { path: '/trashCan', name: 'trashCan', Component: Main },
    ],
  },
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
        {routes.map((route): JSX.Element => (
          <React.Fragment key={route.path}>
            <RouteWithSubRoutes route={route} />
          </React.Fragment>
        ))}

        <IsLoading />
      </div>
    </HashRouter>
  );
}
