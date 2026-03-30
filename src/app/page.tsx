'use client';

import { useState, useEffect } from 'react';
import { useSearchStore } from '@/store/useSearchStore';
import { Destination } from '@/mocks/destinations'; // Reusing the interface
import DestinationCard from '@/components/common/DestinationCard';
import FilterBar from '@/components/common/FilterBar';
import SkeletonCard from '@/components/common/SkeletonCard';
import styles from './page.module.scss';

export default function Home() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchTerm = useSearchStore((state) => state.searchTerm);
  const activeCategory = useSearchStore((state) => state.category);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/destinations');
        
        if (!response.ok) {
          throw new Error('Failed to fetch destinations. Please try again later.');
        }
        
        const data = await response.json();
        setDestinations(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const filteredDestinations = destinations.filter((destination) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch = (
      destination.title.toLowerCase().includes(search) ||
      destination.location.toLowerCase().includes(search)
    );

    const matchesCategory = activeCategory === 'All' || destination.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <h1>Find Your Next Adventure</h1>
        <p>Explore the world's most beautiful destinations.</p>
      </header>

      <FilterBar />

      {error && (
        <div className={styles.errorAlert}>
          <p>⚠️ {error}</p>
        </div>
      )}

      <div className={styles.grid}>
        {loading ? (
          Array.from({ length: 12 }).map((_, i) => (
            <SkeletonCard key={`skeleton-${i}`} />
          ))
        ) : filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))
        ) : (
          !error && (
            <div className={styles.noResults}>
              No destinations found {searchTerm ? `for "${searchTerm}"` : ''} 
              {activeCategory !== 'All' ? ` in category "${activeCategory}"` : ''}
            </div>
          )
        )}
      </div>
    </main>
  );
}
