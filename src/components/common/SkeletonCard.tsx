import styles from './SkeletonCard.module.scss';

const SkeletonCard = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={`${styles.skeleton} ${styles.image}`} />
      <div className={styles.content}>
        <div className={`${styles.skeleton} ${styles.badge}`} />
        <div className={`${styles.skeleton} ${styles.title}`} />
        <div className={`${styles.skeleton} ${styles.text}`} />
        <div className={styles.footer}>
          <div className={`${styles.skeleton} ${styles.price}`} />
          <div className={`${styles.skeleton} ${styles.button}`} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
