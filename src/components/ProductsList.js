import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { GlobalContext } from '../context/GlobalState';
import {  Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 345,
    height: 400
  },
  media: {
    height: 200,
  },
}));



export const ProductsList = () => {
  const classes = useStyles();
  const { products, addCart } = useContext(GlobalContext);
  const addProduct = (product) => {
    addCart(product);
  };
  return (
    <React.Fragment>
      <div className={classes.root}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={6} sm={3} key={product.id}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={product.image}
                  title={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    S/. {product.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  <Link to={`/product/${product.id}`}>{product.title}</Link>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button 
                  size="small" 
                  color="primary"
                  variant="contained"
                  onClick={() => {
                      addProduct(product);
                    }}
                  >
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    </React.Fragment>
  );
};