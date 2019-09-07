import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import StarIcon from '@material-ui/icons/Star';
import AddIcon from '@material-ui/icons/Add';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DynamicFeedIcon from '../../components/icons/DynamicFeed/DynamicFeed';
import { RouteComponentPropsI, RouteWithSubRoutes } from '../../router/Router';
import Header from '../../components/Header/Header';

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: '##FFFFFF',
  },
  bar: {
    // borderRadius: 20,
    backgroundColor: '#8D908D',
  },
})(LinearProgress);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles((theme) => createStyles({
  mainBodyContainer: {
    display: 'flex',
  },
  sidebar: {
    width: 250,
    height: 'calc(100vh - 75px)',
    color: '#FFFFFF',
    backgroundColor: '#373737',
    borderRight: '1px solid #000000',
  },
  nested: {
    paddingLeft: theme.spacing(4),
    '& .MuiListItemIcon-root': {
      color: 'inherit',
    },
  },
  folderNested: {
    paddingLeft: theme.spacing(8),
    '& .MuiListItemIcon-root': {
      color: 'inherit',
    },
  },
  sidebarBottom: {
    padding: theme.spacing(2),
  },
}));

export default function Home(props: RouteComponentPropsI): JSX.Element {
  const classes = useStyles();

  const { routes } = props;

  const [myCloudDriveOpen, setMyCloudDriveOpen] = useState(true);

  const [folderOpen, setFolderOpen] = useState(true);

  const [shareCloudDriveOpen, setShareCloudDriveOpen] = useState(false);

  return (
    <>
      <Header />

      <div className={classes.mainBodyContainer}>
        <div className={classes.sidebar}>
          <div>
            <List
              component="nav"
            >
              <ListItem button onClick={(): void => setMyCloudDriveOpen(!myCloudDriveOpen)}>
                <ListItemText primary="我的雲端硬碟" />
                {myCloudDriveOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              </ListItem>
              <Collapse in={myCloudDriveOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem
                    button
                    className={classes.nested}
                    component={Link}
                    to="/all"
                  >
                    <ListItemIcon>
                      <DynamicFeedIcon />
                    </ListItemIcon>
                    <ListItemText primary="全部檔案" />
                    <ListItemSecondaryAction>
                      23
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem
                    button
                    className={classes.nested}
                    component={Link}
                    to="/star"
                  >
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="已加星號" />
                    <ListItemSecondaryAction>
                      3
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={(): void => setFolderOpen(!folderOpen)}
                  >
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary="資料夾(3)" />
                    <ListItemSecondaryAction>
                      <AddIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Collapse in={folderOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem
                        button
                        className={classes.folderNested}
                        component={Link}
                        to="/folder/graphicDesign"
                      >
                        <ListItemText primary="Graphic Design" />
                        <ListItemSecondaryAction>
                          10
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem
                        button
                        className={classes.folderNested}
                        component={Link}
                        to="/folder/uidesign"
                      >
                        <ListItemText primary="UI Design" />
                        <ListItemSecondaryAction>
                          3
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem
                        button
                        className={classes.folderNested}
                        component={Link}
                        to="/folder/illustration"
                      >
                        <ListItemText primary="Illustration" />
                        <ListItemSecondaryAction>
                          4
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem
                    button
                    className={classes.nested}
                    component={Link}
                    to="/trashCan"
                  >
                    <ListItemIcon>
                      <DeleteForeverIcon />
                    </ListItemIcon>
                    <ListItemText primary="垃圾桶" />
                    <ListItemSecondaryAction>
                      3
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </Collapse>
            </List>

            <List
              component="nav"
            >
              <ListItem button onClick={(): void => setShareCloudDriveOpen(!shareCloudDriveOpen)}>
                <ListItemText primary="共用雲端硬碟" />
                {shareCloudDriveOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              </ListItem>
              <Collapse in={shareCloudDriveOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <DynamicFeedIcon />
                    </ListItemIcon>
                    <ListItemText primary="全部檔案" />
                    <ListItemSecondaryAction>
                      23
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="已加星號" />
                    <ListItemSecondaryAction>
                      3
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={(): void => setFolderOpen(!folderOpen)}
                  >
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary="資料夾(3)" />
                    <ListItemSecondaryAction>
                      <AddIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Collapse in={folderOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.folderNested}>
                        <ListItemText primary="Graphic Design" />
                        <ListItemSecondaryAction>
                          10
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem button className={classes.folderNested}>
                        <ListItemText primary="UI Design" />
                        <ListItemSecondaryAction>
                          3
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem button className={classes.folderNested}>
                        <ListItemText primary="Illustration" />
                        <ListItemSecondaryAction>
                          4
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <DeleteForeverIcon />
                    </ListItemIcon>
                    <ListItemText primary="垃圾桶" />
                    <ListItemSecondaryAction>
                      3
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </div>

          <Divider />

          <div className={classes.sidebarBottom}>
            <Typography variant="h6">儲存空間</Typography>
            <Typography>目前使用量：20.6G</Typography>
            <Typography>剩餘使用量：99.4G (共120G)</Typography>
            <BorderLinearProgress
              variant="determinate"
              value={(120 / 20.6) * 100}
            />
          </div>
        </div>

        {routes && routes.map((route): JSX.Element => (
          <React.Fragment key={route.path}>
            <RouteWithSubRoutes route={route} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
