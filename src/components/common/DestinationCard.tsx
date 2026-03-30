import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Destination } from '@/mocks/destinations';
import { useFavoriteStore } from '@/store/useFavoriteStore';
import styles from './DestinationCard.module.scss';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  const { favorites, addFavorite, removeFavorite } = useFavoriteStore();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isFavorite = mounted ? favorites.includes(destination.id) : false;

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(destination.id);
    } else {
      addFavorite(destination.id);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <button 
          className={`${styles.favoriteBtn} ${isFavorite ? styles.active : ''}`}
          onClick={toggleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.destinationImage}
          priority={destination.id === '1'}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.categoryBadge}>{destination.category}</span>
          <h3>{destination.title}</h3>
          <p>{destination.location}</p>
        </div>
        <div className={styles.footer}>
          <span className={styles.price}>${destination.price}</span>
          <Link href={`/destinations/${destination.id}`} className={styles.btn}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
