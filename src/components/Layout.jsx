import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              Stock Portal
            </Link>
          </Typography>
          <Link to="/portfolio" className={classes.link}>
            Portfolio
          </Link>
          <Link to="/advice" className={classes.link}>
            Investment Advice
          </Link>
          <Link to="/chat" className={classes.link}>
            Chat
          </Link>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;