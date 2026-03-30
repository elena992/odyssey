'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useFavoriteStore } from '@/store/useFavoriteStore';
import { useUIStore } from '@/store/useUIStore';
import { DESTINATIONS } from '@/mocks/destinations'; // Base local para mostrar datos
import styles from './FavoritesDrawer.module.scss';

const FavoritesDrawer = () => {
  const { favorites, removeFavorite } = useFavoriteStore();
  const { isDrawerOpen, closeDrawer } = useUIStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const favoriteDestinations = DESTINATIONS.filter(dest => 
    favorites.includes(dest.id)
  );

  return (
    <>
      <div 
        className={`${styles.overlay} ${isDrawerOpen ? styles.open : ''}`} 
        onClick={closeDrawer} 
      />
      <aside className={`${styles.drawer} ${isDrawerOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2>My Trips ({favoriteDestinations.length})</h2>
          <button className={styles.closeBtn} onClick={closeDrawer}>&times;</button>
        </div>

        <div className={styles.content}>
          {favoriteDestinations.length > 0 ? (
            favoriteDestinations.map((dest) => (
              <div key={dest.id} className={styles.favItem}>
                <div className={styles.thumb}>
                  <Image src={dest.image} alt={dest.title} fill sizes="60px" />
                </div>
                <div className={styles.info}>
                  <h4>{dest.title}</h4>
                  <p>{dest.location}</p>
                </div>
                <button 
                  className={styles.removeBtn} 
                  onClick={() => removeFavorite(dest.id)}
                  title="Remove from trips"
                >
                  🗑️
                </button>
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>You have no saved trips yet.</p>
              <p>❤️ Add some!</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default FavoritesDrawer;
