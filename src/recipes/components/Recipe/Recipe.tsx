import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Recipe as RecipeModel } from '../../../shared/models/recipes';

export default function Recipe({ item }: { item: RecipeModel }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia component="img" image={item.image} alt={item.label} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {item.label}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {Math.ceil(item.calories).toLocaleString()} Calories
        </Typography>
      </CardContent>
    </Card>
  );
}
