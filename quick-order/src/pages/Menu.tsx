import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DishCard from '../components/DishCard';
import { Dish } from '../interfaces/Dish';
import MenuHeader from '../components/MenuHeader';
import { fetchMenuItems } from '../services/api';
import { OrderDrawer } from '../components/OrderDrawer';

export default function Home() {
    const [menuItems, setMenuItems] = useState<Dish[]>([]);

    useEffect(() => {
        async function loadMenuItems() {
            try {
                const data = await fetchMenuItems();
                setMenuItems(data);
            } catch (error) {
                toast(`Error fetching menu items: ${error}`);
                console.error('Error fetching menu items:', error);
            }
        }

        loadMenuItems();
    }, []);

    return (
        <div>
            <OrderDrawer />
            <MenuHeader />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container alignItems={'flex-start'} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(menuItems).map((menuItem, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <DishCard {...menuItem} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}
