import {create} from 'zustand';
import { persist } from 'zustand/middleware';


type Recipe = {
    id:number;
    name : string;
    ingredients : string;
    intructions : string;
}

type RecipeStore = {
    recipes : Recipe[];
    addrecipe : (recipe : Recipe) => void;
    removerecipe : (id:number) => void;
}

export const useStore = create<RecipeStore>()(persist(
    (set) => ({
    recipes : [],
    addrecipe : (recipe) => set((state) => ({recipes : [recipe , ...state.recipes]})),
    removerecipe : (id) => set((state) => ({recipes : state.recipes.filter((recipe) => recipe.id !== id)}))
}),
{
    name: 'recipe-storage',
}
)
);