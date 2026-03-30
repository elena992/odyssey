'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Destination } from '@/mocks/destinations';
import styles from './page.module.scss';

const DestinationDetails = () => {
  const params = useParams();
  const id = params?.id as string;
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/destinations');
        const data: Destination[] = await response.json();
        
        const found = data.find((dest) => dest.id === id);
        setDestination(found || null);
      } catch (error) {
        console.error('Error fetching destination:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchDestination();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Exploring the horizon...</div>;
  }

  if (!destination) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>
          <h2>Destination Not Found</h2>
          <p>The journey you're looking for doesn't seem to exist.</p>
          <Link href="/" className={styles.backBtn}>Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <Image 
          src={destination.image} 
          alt={destination.title} 
          fill 
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay}>
          <span className={styles.badge}>{destination.category}</span>
          <h1>{destination.title}</h1>
          <div className={styles.location}>
            📍 {destination.location}
          </div>
        </div>
      </header>

      <main className={styles.content}>
        <section className={styles.details}>
          <h2>Journey Overview</h2>
          <p>
            {destination.description || `Discover the breathtaking beauty of ${destination.location}. This destination offers a unique blend of culture, relaxation, and adventure that will leave you with unforgettable memories.`}
          </p>
          <p>
            Immerse yourself in the local atmosphere, explore hidden gems, and experience the world from a new perspective. Whether you're looking for a peaceful escape or a thrilling challenge, this journey is tailored for those who seek the extraordinary.
          </p>
          <p>
            Every detail of this trip has been carefully curated to ensure comfort and authenticity. From the moment you arrive until your departure, you'll be surrounded by the essence of what makes {destination.title} a truly world-class destination.
          </p>
        </section>

        <aside className={styles.sidebar}>
          <div className={styles.bookingCard}>
            <div className={styles.priceTag}>
              <span className={styles.label}>Price per person</span>
              <span className={styles.amount}>${destination.price}</span>
            </div>
            <button className={styles.bookBtn}>
              Book Now
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default DestinationDetails;
