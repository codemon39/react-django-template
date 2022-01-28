import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import DeleteProduct from "./DeleteProduct";


const Product = ({classes, product}) => (
    <Grid item xs={4}>
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={product.image}
            />
            <CardContent style={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="subheading" component="p">
                    {product.name}{" | "}${product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableActionSpacing style={{ justifyContent: 'center' }}>
                <DeleteProduct id={product.id}/>
            </CardActions>
        </Card>
    </Grid>
)


const styles = theme => ({
    media: {
        height: 450,
        width: 'auto',
        backgroundSize: 'contain',
    },
    card: {
        margin: 10,
        height: 'fit-content',
    },
});

export default withStyles(styles)(Product);