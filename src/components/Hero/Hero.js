import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Twoja, lepsza organizacja</h1>
      <p className={styles.subtitle}>Prosta lista to do dla wszystkich</p>
    </div>
  );
};

  export default Hero;

