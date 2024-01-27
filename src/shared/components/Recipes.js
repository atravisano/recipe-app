import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export function Recipes(props) {
    return <Grid container spacing={4}>
      {props.items.map(item => item.recipe).map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="img"
              image={item.image}
              alt={item.label} />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {item.label}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {Math.ceil(item.calories).toLocaleString()} Calories
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>;
  }