import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useItemIncr} from '../../context';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140, 
    },
  });

const HairComponent = ({data, onStart}) => {
    const increaseQuantity = useItemIncr();
    const classes = useStyles();
   
    return(
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={data.src}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
                <h2>{data.title}</h2>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                <p>For: {data.for}</p>
                <p>With: {data.with}</p>
                <p>{data.price}: {data.discount}</p>
                
            </Typography>
            </CardContent>
        </CardActionArea>

        <CardActions style={{display: 'flex', justifyContent: 'space-around', background: 'linear-gradient(to right, #ffffff 0%, #ffffff 50%, #000000 50%, #000000 100%'}}>
            <Button size="small"  onClick={(e) => {
                increaseQuantity(data);
                }}>
            Add to Cart
            </Button>
            <Button size="small" style={{color: 'white'}}>
            Buy Now
            </Button>
        </CardActions>
        </Card>
    )
}

export default HairComponent;