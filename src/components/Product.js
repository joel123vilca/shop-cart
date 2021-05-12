import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 300,
    objectFit: 'cover'
  },
});

export const Product = (route) => {
  const classes = useStyles();
  let history = useHistory();
  const { getProduct, product, addCart } = useContext(GlobalContext);
  const id = route.match.params.id;

  useEffect(() => {
    getProduct(id)
  }, []);

  const addProduct = (product) => {
    addCart(product);
  };

  return (
    <React.Fragment>
      { product ? (
      <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            S/. {product.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.title}
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
      ) : (
        <p>Cargando ...</p>
      )}
    </React.Fragment>
  )
}