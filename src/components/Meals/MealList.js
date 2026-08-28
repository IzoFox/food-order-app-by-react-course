import styles from './MealList.module.css';

const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Naomi Roll',
    description:
      "Philadelphia cream cheese, chicken fillet, masago, tomato, cucumber, sesame seeds",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Spicy Salmon",
    description: "Rice, salmon, spicy sauce",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Eel Sushi",
    description: "Smoked eel, unagi sauce, sesame seeds",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'Salmon Poke Salad',
    description:
      "Rice, salmon, cucumber, chuka seaweed, nori, bonito flakes, peanut sauce",
    price: 7.99,
  },
];

const MealList = () => {
    const meallist = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

    return(
        <section className={styles.meals}>
            <ul>
                {meallist}
            </ul>
        </section>
    )
}

export default MealList;