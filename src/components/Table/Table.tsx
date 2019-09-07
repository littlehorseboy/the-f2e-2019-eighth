import React from 'react';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
}

const rows: RowI[] = [
  {
    star: false,
    name: '74cf22f6b942fb109a…',
    type: 'JEPG檔案',
    size: '23 KB',
    dimension: '564 × 423',
    updateTime: '2018/2/27',
    owner: 'Horse',
  },
  {
    star: false,
    name: '74cf22f6b942fb123209a…',
    type: 'JEPG檔案',
    size: '23 KB',
    dimension: '564 × 423',
    updateTime: '2018/2/27',
    owner: 'Horse',
  },
  {
    star: false,
    name: '74cf22f6b942fb109a23…',
    type: 'JEPG檔案',
    size: '23 KB',
    dimension: '564 × 423',
    updateTime: '2018/2/27',
    owner: 'Horse',
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles((theme) => createStyles({
  table: {
    marginTop: theme.spacing(3),
    minWidth: 700,
    overflow: 'auto',
  },
}));

export default function CustomizedTables(): JSX.Element {
  const classes = useStyles();

  return (
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
        {rows.map((row): JSX.Element => (
          <StyledTableRow key={row.name} hover>
            <StyledTableCell align="left">{row.star ? <StarIcon /> : <StarBorderIcon />}</StyledTableCell>
            <StyledTableCell align="center">{row.name}</StyledTableCell>
            <StyledTableCell align="center">{row.type}</StyledTableCell>
            <StyledTableCell align="center">{row.size}</StyledTableCell>
            <StyledTableCell align="center">{row.dimension}</StyledTableCell>
            <StyledTableCell align="center">{row.updateTime}</StyledTableCell>
            <StyledTableCell align="center">{row.owner}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
}
