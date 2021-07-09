import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MyLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export default function Header() {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    }
  }));
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            SIBAU Attendance Management System
          </Typography>
          <nav>
            <MyLink variant="button" color="textPrimary" className={classes.link}>
              <Link to="/abc">ABC
              </Link>
            </MyLink>
            <Link variant="button" color="textPrimary" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" style={{ backgroundColor: '#F1C40F' }} variant="outlined" className={classes.link}>
          <Link to="/login" style={{textDecoration: 'none'}}>
              Login
            </Link>
          </Button>
          <Button href="#" style={{ backgroundColor: '#F1C40F' }} variant="outlined" className={classes.link}>
            <Link to="/register" style={{textDecoration: 'none'}}>
              Register
            </Link>
          </Button>
          <Button href="#" style={{ backgroundColor: '#F1C40F' }} variant="outlined" className={classes.link}>
            <Link to="/dashboard" style={{textDecoration: 'none'}}>
              Dashboard
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}