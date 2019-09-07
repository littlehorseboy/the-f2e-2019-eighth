import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const StyledTableCell = withStyles((theme) => createStyles({
  head: {
    backgroundColor: 'transparent',
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const StyledTableRow = withStyles(() => createStyles({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: '#E6E6E6',
    },
    '&:nth-of-type(odd)': {
      backgroundColor: '#E6E6E6',
    },
  },
}))(TableRow);

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
    height: 'calc(100% - 88px)',
    overflow: 'auto',
  },
  table: {
    marginTop: theme.spacing(3),
    minWidth: 700,
    overflow: 'auto',
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

  const changeStarStatus = (name: string): void => {
    setRows(rows.map((row): RowI => {
      if (row.name === name) {
        return {
          ...row,
          star: !row.star,
        };
      }
      return row;
    }));
  };

  const [anchorEl, setAnchorEl] = useState<HTMLTableRowElement | null>(null);

  function handleClickOpenPopover(
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
  ): void {
    setAnchorEl(event.currentTarget);
  }

  function handleClosePopover(): void {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" />
            <StyledTableCell align="center">名稱</StyledTableCell>
            <StyledTableCell align="center">類型</StyledTableCell>
            <StyledTableCell align="center">大小</StyledTableCell>
            <StyledTableCell align="center">尺寸</StyledTableCell>
            <StyledTableCell align="center">最後修改時間</StyledTableCell>
            <StyledTableCell align="center">擁有者</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalRows.map((row): JSX.Element => (
            <React.Fragment key={row.name}>
              <StyledTableRow hover onClick={handleClickOpenPopover}>
                <StyledTableCell align="left">
                  <IconButton
                    size="small"
                    onClick={(event): void => {
                      event.stopPropagation();
                      changeStarStatus(row.name);
                    }}
                  >
                    {row.star ? <StarIcon /> : <StarBorderIcon />}
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.type}</StyledTableCell>
                <StyledTableCell align="center">{row.size}</StyledTableCell>
                <StyledTableCell align="center">{row.dimension}</StyledTableCell>
                <StyledTableCell align="center">{row.updateTime}</StyledTableCell>
                <StyledTableCell align="center">{row.owner}</StyledTableCell>
              </StyledTableRow>
              <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <ListItem dense button>
                  <ListItemText primary="移至" />
                </ListItem>
                <ListItem dense button>
                  <ListItemText primary="重新命名" />
                </ListItem>
                <ListItem dense button>
                  <ListItemText primary="移除" />
                </ListItem>
              </Popover>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
