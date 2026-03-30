'use client';

import { useSearchStore } from '@/store/useSearchStore';
import styles from './FilterBar.module.scss';

const CATEGORIES = ['All', 'City', 'Nature', 'Beach', 'Adventure'];

const FilterBar = () => {
  const { category: activeCategory, setCategory } = useSearchStore();

  return (
    <div className={styles.filterBar}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`${styles.pill} ${activeCategory === cat ? styles.active : ''}`}
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
