import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate network delay to test Skeletons/Loading states
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const destinations = [
    {
      id: '1',
      title: 'Neon Nights in Tokyo',
      location: 'Tokyo, Japan',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop',
      category: 'City',
      description: 'Experience the perfect blend of ultra-modern technology and timeless tradition in the heart of Japan.'
    },
    {
      id: '2',
      title: 'The Northern Lights',
      location: 'Reykjavík, Iceland',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1200&auto=format&fit=crop',
      category: 'Nature',
      description: 'Witness the celestial dance of the Aurora Borealis over the dramatic landscapes of Iceland.'
    },
    {
      id: '3',
      title: 'Ancient Machu Picchu',
      location: 'Cusco, Peru',
      price: 950,
      image: 'https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?q=80&w=1200&auto=format&fit=crop',
      category: 'Adventure',
      description: 'Hike through the clouds to discover the majestic ruins of the Incan Empire.'
    },
    {
      id: '4',
      title: 'Santorini Sunsets',
      location: 'Oia, Greece',
      price: 1100,
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop',
      category: 'Beach',
      description: 'Relax among blue-domed churches and white-washed houses overlooking the Aegean Sea.'
    },
    {
      id: '5',
      title: 'Safari in Serengeti',
      location: 'Serengeti, Tanzania',
      price: 2200,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
      category: 'Adventure',
      description: 'Experience the wild heart of Africa with the Great Migration and world-class wildlife viewing.'
    },
    {
      id: '6',
      title: 'Swiss Alps Adventure',
      location: 'Zermatt, Switzerland',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop',
      category: 'Nature',
      description: 'Ski or hike under the shadow of the Matterhorn in this alpine paradise.'
    },
    {
      id: '7',
      title: 'Golden Hour in Amalfi',
      location: 'Positano, Italy',
      price: 1650,
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
      category: 'Beach',
      description: 'A colorful vertical town built into the cliffs of the stunning Amalfi Coast.'
    },
    {
      id: '8',
      title: 'New York Skyline',
      location: 'New York, USA',
      price: 1400,
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop',
      category: 'City',
      description: 'The city that never sleeps, offering world-class museums, Broadway shows, and iconic landmarks.'
    },
    {
      id: '9',
      title: 'Bali Zen Retreat',
      location: 'Ubud, Indonesia',
      price: 850,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
      category: 'Nature',
      description: 'Find inner peace among the lush rice terraces and spiritual temples of Bali.'
    },
    {
      id: '10',
      title: 'Parisian Charm',
      location: 'Paris, France',
      price: 1300,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop',
      category: 'City',
      description: 'Stroll along the Seine and enjoy world-class cuisine in the City of Light.'
    },
    {
      id: '11',
      title: 'Sahara Star Gazing',
      location: 'Sahara, Morocco',
      price: 1150,
      image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=1200&auto=format&fit=crop',
      category: 'Adventure',
      description: 'Spend a night under the clearest stars you will ever see in a luxury desert camp.'
    },
    {
      id: '12',
      title: 'Bora Bora Luxury',
      location: 'French Polynesia',
      price: 3500,
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      category: 'Beach',
      description: 'Overwater bungalows and turquoise lagoons in the ultimate tropical paradise.'
    }
  ];

  return NextResponse.json(destinations);
}
