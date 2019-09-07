import React from 'react';
import { HashRouter, Route, RouteComponentProps } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import IsLoading from '../components/IsLoading/IsLoading';
import Home from '../pages/Home/Home';
import Main from '../pages/Main/Main';

interface RouteWithSubRoutesPropsI {
  route: RouteI;
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
  routes?: RouteI[];
}

export interface RouteI {
  path: string;
  name: string;
  Component: (props: RouteComponentPropsI) => JSX.Element;
  breadcrumbName: string;
  routes?: RouteI[];
}

export const routes: RouteI[] = [
  {
    path: '/',
    name: 'home',
    Component: Home,
    breadcrumbName: '我的雲端硬碟',
    routes: [
      {
        path: '/all', name: 'all', Component: Main, breadcrumbName: '全部檔案',
      },
      {
        path: '/star', name: 'star', Component: Main, breadcrumbName: '已加星號',
      },
      {
        path: '/folder/:folder', name: 'folder', Component: Main, breadcrumbName: '資料夾',
      },
      {
        path: '/trashCan', name: 'trashCan', Component: Main, breadcrumbName: '垃圾桶',
      },
      {
        path: '/shareAll', name: 'shareAll', Component: Main, breadcrumbName: '全部檔案',
      },
      {
        path: '/shareStar', name: 'shareAll', Component: Main, breadcrumbName: '已加星號',
      },
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
