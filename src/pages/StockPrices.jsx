import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, makeStyles } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const StockPrices = () => {
  const classes = useStyles();
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get('/api/stocks');
        setStocks(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };
    fetchStockData();
  }, []);

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Real-Time Stock Prices
      </Typography>
      <Grid container spacing={3}>
        {stocks.map((stock) => (
          <Grid item xs={12} sm={6} md={4} key={stock.symbol}>
            <Paper className={classes.paper}>
              <Typography variant="h6">{stock.symbol}</Typography>
              <Typography variant="body1">Price: {stock.price}</Typography>
              <Typography variant="body1">
                Change: {stock.change} ({stock.changePercent}%)
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StockPrices;