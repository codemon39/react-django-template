import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import {useProduct} from "../providers/ProductProvider";
import {Error} from "@material-ui/icons";
import Loading from "../components/Loading";
import Product from "../components/Product";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


const ProductList = ({classes}) => {
    const {loading, error, products} = useProduct();
    const availableProducts = products.filter(product => !product.archived);

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <Error error={error}/>;
    }

    return (
        <div className={classes.root}>
            <Grid
                container
                alignItems="center"
                justify="center"
                style={{minHeight: "100vh"}}
                spacing={24}
            >
                {availableProducts.length > 0
                    &&
                    (
                        availableProducts.map(product => <Product
                            key={product.id} product={product}/>)
                    )
                    ||
                    (
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            No products found
                        </Typography>
                    )
                }
            </Grid>
        </div>
    );
};

const styles = theme => ({
    container: {
        margin: "0 auto",
        padding: theme.spacing.unit * 2,
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

export default withStyles(styles)(ProductList);