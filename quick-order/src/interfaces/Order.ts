import { Dish } from "./Dish";

type Status = 'received' | 'preparing' | 'ready-to-serve';

export interface DishSelection {
    id: number;
    quantity: number;
    menuItem: Dish
}

export interface Order {
    id: number;
    quantity: number;
    menuItem: Dish
}