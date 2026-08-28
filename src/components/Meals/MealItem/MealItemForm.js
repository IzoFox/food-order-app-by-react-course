import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
    return(
        <form className={styles.form}>
            <Input label='Qty' input={{
                id: 'amount',
                type: 'number',
                min: '1',
                step: '1',
                defaulValue: '1'
            }} />
            <button>Add</button>
        </form>
    )
}

export default MealItemForm;