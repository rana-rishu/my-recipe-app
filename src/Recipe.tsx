import { useState } from 'react';
import { useStore } from './store';

const Recipe = () => {
    const { recipes, addrecipe , removerecipe } = useStore(); 

    const [name, setName] = useState<string>('');
    const [ingredients, setIngredients] = useState<string>('');
    const [intructions, setIntructions] = useState<string>('');

    const handleAddRecipe = () => {
      if (!name) return;
      
      addrecipe({
        id: Date.now(),
        name: name,
        ingredients: ingredients,
        intructions: intructions
      });
      setName('');
      setIngredients('');
      setIntructions('');
    };

    const handledelete = (id:number) => {
      removerecipe(id)
    }

  return (
    <div className="rounded-lg bg-green-600 min-w-[320px] min-h-[80%] m-10 flex flex-col items-center p-10 transition-colors gap-10 overflow-auto">
        <h1 className='font-bold text-4xl text-white'>Recipe Manager</h1>
        
        <div className="flex flex-col w-full max-w-md gap-4">
            <input
                className='p-3 bg-green-700 text-white placeholder-green-200 rounded-md focus:ring-white focus:outline-none focus:ring-2 border-none'
                type='text'
                value={name}
                placeholder='Recipe Name'
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className='p-3 bg-green-700 text-white placeholder-green-200 rounded-md focus:ring-white focus:outline-none focus:ring-2 border-none'
                type='text'
                value={ingredients}
                placeholder='Ingredients'
                onChange={(e) => setIngredients(e.target.value)}
            />
            <textarea
                className='p-3 bg-green-700 text-white placeholder-green-200 rounded-md focus:ring-white focus:outline-none focus:ring-2 border-none'
                value={intructions}
                placeholder='Instructions'
                onChange={(e) => setIntructions(e.target.value)}
            />
            <button 
                onClick={handleAddRecipe}
                className='px-5 py-2 rounded-lg text-xl bg-white text-green-700 font-bold hover:bg-gray-100 transition-all'
            > 
                Save Recipe
            </button>
        </div>

        <hr className="w-full border-green-500" />

        <ul className="flex flex-col w-full max-w-md gap-4">
            {recipes.map((recipe) => (
              <li key={recipe.id} className="bg-white p-4 rounded-lg shadow-lg text-gray-800 ">
                <h2 className='font-bold text-xl border-b mb-2'>{recipe.name}</h2>
                <p className="text-sm"><span className="font-bold">Ingredients:</span> {recipe.ingredients}</p>
                <p className="text-sm"><span className="font-bold">Instructions:</span> {recipe.intructions}</p>
                
                <div className="mt-5">
                <button 
                className='px-3 py-1 rounded-lg text-xl bg-red-600 text-white font-bold'
                onClick={() => handledelete(recipe.id)}
                >Delete</button>
                </div>
              </li>
            ))}
        </ul>
    </div>
  );
};

export default Recipe;