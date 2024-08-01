
 export const genetateMetadata=async({params})=>{
    const postData=await fetch(``)
    return { 
        title:'Post details',
        description:params.description
    }
 }

const page = ({ params }) => {
    console.log(params.food);
    let { title, description, ratings, feature } = food.find(food => food.id == params.food)
    return (
        <div>
            <div className='border border-red-400 p-2 text-center'>
                <h1 className='font-bold text-xl'> {title}</h1>
                <p>{description}</p>
                <p> <span className='font-bold'>feature: </span>{feature}</p>
                <p> <span className='font-bold'> ratings:  </span>{ratings}</p>
            </div>
        </div>
    );
};

export default page;


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