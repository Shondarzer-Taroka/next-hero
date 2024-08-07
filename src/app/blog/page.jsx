import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center'>
            {
                food.map(food => <div key={food.id} className='border border-red-400 p-2'>
                    <h1 className='font-bold text-xl'> {food.title}</h1>
                    <p>{food.description}</p>
                    <p>{food.feature}</p>
                    <p>{food.ratings}</p>
                    <Link href={`/blog/${food.id}`}><button className='bg-green-400 rounded px-4 py-2 text-white'>view details</button></Link>
                    
                </div>)
            }
        </div>
    );
};

export default Blog;


const food = [
    {
        "id": 1,
        "title": "Margherita Pizza",
        "description": "A classic Italian pizza with tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.",
        "ratings": 4.7,
        "feature": "Vegetarian"
    },
    {
        "id": 2,
        "title": "Cheeseburger",
        "description": "A juicy grilled beef patty topped with melted cheese, lettuce, tomatoes, onions, pickles, and a special sauce, served in a toasted bun.",
        "ratings": 4.5,
        "feature": "Non-Vegetarian"
    },
    {
        "id": 3,
        "title": "Caesar Salad",
        "description": "A fresh salad with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
        "ratings": 4.2,
        "feature": "Vegetarian"
    },
    {
        "id": 4,
        "title": "Chicken Tikka Masala",
        "description": "Chunks of roasted marinated chicken in a spiced curry sauce, typically served with rice or naan.",
        "ratings": 4.8,
        "feature": "Non-Vegetarian"
    },
    {
        "id": 5,
        "title": "Spaghetti Carbonara",
        "description": "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
        "ratings": 4.6,
        "feature": "Non-Vegetarian"
    }
]

