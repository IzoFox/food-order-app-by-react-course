import styles from './PromoText.module.css';

const PromoText = () => {
    return(
        <section className={styles['promo-text']}>
            <h2>Online Sushi Restaurant Japanese Kitchen</h2>
            <p>Japanese Kitchen - is an online sushi-restaurant that has favorite sushi and sashimi,
                rolls and other dishes of traditional Japanese kitchen, made with love of professional cooks.
            </p>
            <p>
                Fast work and quality products. The most nature components make dishes tasty
                and make you happy when you eat.
            </p>
        </section>
    )
}

export default PromoText;