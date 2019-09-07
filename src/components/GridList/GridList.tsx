import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

interface RowI {
  star: boolean;
  name: string;
  type: string;
  size: string;
  dimension: string;
  updateTime: string;
  owner: string;
  folder: 'graphicDesign' | 'uidesign' | 'illustration' | null;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles((theme) => createStyles({
  root: {
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

interface PropsI {
  routeComponentProps: RouteComponentProps;
}

export default function CustomizedTables(props: PropsI): JSX.Element {
  const classes = useStyles();

  const { routeComponentProps } = props;

  const [rows, setRows] = useState<RowI[]>([
    {
      star: false,
      name: '74cf22f6b942fb109a…',
      type: 'JEPG檔案',
      size: '23 KB',
      dimension: '564 × 423',
      updateTime: '2018/2/27',
      owner: 'Horse',
      folder: 'graphicDesign',
    },
    {
      star: false,
      name: '742a253400e0b053a…',
      type: 'JEPG檔案',
      size: '26 KB',
      dimension: '564 × 877',
      updateTime: '2018/4/22',
      owner: 'Horse',
      folder: null,
    },
    {
      star: false,
      name: '78589d57615b17112…',
      type: 'JEPG檔案',
      size: '52 KB',
      dimension: '564 × 954',
      updateTime: '2018/6/1',
      owner: 'Horse',
      folder: 'illustration',
    },
    {
      star: true,
      name: '74cfg2f2b942fc109a…',
      type: 'JEPG檔案',
      size: '52 KB',
      dimension: '564 × 423',
      updateTime: '2018/2/27',
      owner: 'Horse',
      folder: 'uidesign',
    },
    {
      star: false,
      name: '744a224402e0b053a…',
      type: 'JEPG檔案',
      size: '52 KB',
      dimension: '564 × 877',
      updateTime: '2018/4/22',
      owner: 'Horse',
      folder: 'uidesign',
    },
    {
      star: true,
      name: '78589da7615b07112…',
      type: 'JEPG檔案',
      size: '52 KB',
      dimension: '564 × 877',
      updateTime: '2018/4/22',
      owner: 'Horse',
      folder: 'graphicDesign',
    },
    {
      star: false,
      name: '78589da7615b07113…',
      type: 'JEPG檔案',
      size: '52 KB',
      dimension: '564 × 877',
      updateTime: '2018/4/22',
      owner: 'Horse',
      folder: 'graphicDesign',
    },
    {
      star: false,
      name: '78589da7615b07114…',
      type: 'JEPG檔案',
      size: '52 KB',
      dimension: '564 × 877',
      updateTime: '2018/4/22',
      owner: 'Horse',
      folder: 'uidesign',
    },
    {
      star: true,
      name: '78589da7615b07115…',
      type: 'JEPG檔案',
      size: '52 KB',
      dimension: '564 × 877',
      updateTime: '2018/4/22',
      owner: 'Horse',
      folder: 'graphicDesign',
    },
    {
      star: false,
      name: '78589da7615b07116…',
      type: 'JEPG檔案',
      size: '52 KB',
      dimension: '564 × 877',
      updateTime: '2018/4/22',
      owner: 'Horse',
      folder: 'graphicDesign',
    },
    {
      star: false,
      name: '78589da7615b07117…',
      type: 'JEPG檔案',
      size: '52 KB',
      dimension: '564 × 877',
      updateTime: '2018/4/22',
      owner: 'Horse',
      folder: 'graphicDesign',
    },
  ]);

  let finalRows = rows;

  if (routeComponentProps.match.path === '/star') {
    finalRows = finalRows.filter((row): boolean => row.star);
  }

  if (routeComponentProps.match.path === '/trashCan') {
    finalRows = finalRows.filter((): boolean => false);
  }

  if (routeComponentProps.match.path === '/shareAll') {
    finalRows = finalRows.filter((): boolean => false);
  }

  if (routeComponentProps.match.path === '/shareStar') {
    finalRows = finalRows.filter((): boolean => false);
  }

  if ((routeComponentProps as RouteComponentProps<{ folder: string }>).match.params.folder) {
    finalRows = finalRows
      .filter((row): boolean => row.folder
        === (routeComponentProps as RouteComponentProps<{ folder: string }>).match.params.folder);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        {finalRows.map((row): JSX.Element => (
          <Grid key={row.name} item xs={12} sm={6} md={4} lg={3}>
            <Box my={1}>
              <Skeleton variant="rect" height={200} />
            </Box>
            <Skeleton />
            <Skeleton width="60%" />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
