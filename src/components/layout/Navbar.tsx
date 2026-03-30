'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchStore } from '@/store/useSearchStore';
import { useFavoriteStore } from '@/store/useFavoriteStore';
import { useUIStore } from '@/store/useUIStore';
import FavoritesDrawer from './FavoritesDrawer';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { searchTerm, setSearchTerm } = useSearchStore();
  const { favorites } = useFavoriteStore();
  const { toggleDrawer } = useUIStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const favCount = mounted ? favorites.length : 0;

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          Odyssey
        </Link>
        
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li>
            <button className={styles.favLink} onClick={toggleDrawer}>
              My Trips
              {favCount > 0 && <span className={styles.badge}>{favCount}</span>}
            </button>
          </li>
        </ul>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </nav>
      <FavoritesDrawer />
    </>
  );
};

export default Navbar;
