import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Header = ({setDate}, date) => {
  const classes = useStyle();

  const onNext = () => {
    setDate.setDate(new Date(date.date.getFullYear(), date.date.getMonth() + 1));
  }

  const onLast = () => {
    setDate.setDate(new Date(date.date.getFullYear(), date.date.getMonth() - 1));
  }

  return (
    <div>
      <AppBar position={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
          >
            Calendar
          </Typography>
          <Button onClick={() => onLast()} color="inherit">last</Button>
          <Button onClick={() => onNext()} color="inherit">next</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;