import { Card, CardMedia } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dish } from "../interfaces/Dish";
import { useCart } from "../providers/CartContext";
import { DishSelection } from "../interfaces/Order";

export default function DishCard(dishProps: Dish) {
    const { description, imageUrl, name, price } = dishProps;

    const { dispatch, toggleCartOpen } = useCart();

    const addToCart = (menuItem: DishSelection) => {
        dispatch({ type: 'ADD_TO_CART', payload: menuItem });
        toggleCartOpen();
    };

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <CardMedia
                    sx={{ height: 140 }}
                    image={imageUrl}
                    title="green iguana"
                />
                <Typography variant="h4">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2">
                    {formattedPrice}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => addToCart({ id: 1, menuItem: dishProps, quantity: 1 })}>Add to Cart</Button>
            </CardActions>
        </Card>
    );
}