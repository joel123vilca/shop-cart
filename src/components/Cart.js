import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  list: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
  }
}));
export default function Cart(props) {
  const classes = useStyles();
  const { open, handleClose, item } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { carts } = useContext(GlobalContext);

  const getTotal = () => {
    let price = 0
    for (let i=0; i<carts.length; i++) {
      price = price + carts[i].price
    }
    return price
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {carts.length && (
          <DialogTitle id="responsive-dialog-title">
            <h3>Shop Cart List</h3>
          </DialogTitle>
        )}
        <DialogContent>
          <List className={classes.list} aria-label="contacts">
            {carts.map((cart) => (
              <ListItem button key={cart.id}>
                <ListItemText primary={cart.title} />
                <ListItemIcon>
                  S/. {cart.price}
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
          <hr></hr>
        </DialogContent>
        <DialogActions>
          <div>total: S/. {getTotal()}</div>
        </DialogActions>
      </Dialog>
    </div>
  );
}