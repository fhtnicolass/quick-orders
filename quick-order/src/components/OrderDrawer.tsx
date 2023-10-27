import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { useCart } from '../providers/CartContext';

export function OrderDrawer() {
    const { isCartOpen } = useCart()

    return (
        <Drawer
            anchor={'right'}
            open={isCartOpen}
        >
            {<><Typography>Order details</Typography></>}
        </Drawer>
    )
}