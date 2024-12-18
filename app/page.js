
"use client";  // Add this directive to use React hooks like useState and useEffect

import { useState, useEffect } from 'react';
import BreedCard from '../components/BreedCard';  // Import BreedCard component

const Home = () => {
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState('');

  // Simulated static breed data (replace with a real API call)
  useEffect(() => {
    const breedsData = [
      {
        id: 1,
        name: 'Caucasian Shepherd Dog',
        description: 'A serious guardian breed and should never be taken lightly.',
        life_expectancy: '15 - 20 years',
        hypoallergenic: false,
      },
      {
        id: 2,
        name: 'Bouvier des Flandres',
        description: 'A calm and loyal dog known for its strength and protective nature.',
        life_expectancy: '10 - 12 years',
        hypoallergenic: true,
      },
      // Add more breeds here if needed
    ];

    setBreeds(breedsData);
  }, []);

  // Filter breeds based on search input
  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      {/* Search input */}
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search breeds"
          className="p-2 border rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Breed Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBreeds.map((breed) => (
          <BreedCard key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default Home;





































































// 'use client';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// export default function Home() {
//   const [breeds, setBreeds] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://dogapi.dog/api/v2/breeds')
//       .then((res) => res.json())
//       .then((data) => {
//         setBreeds(data.data);  // Store fetched breed data
//         setLoading(false);      // Set loading to false when data is fetched
//       });
//   }, []);

//   if (loading) return <div className="text-center">Loading...</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center mb-4">Dog Breeds</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {breeds.map((breed) => (
//           <div key={breed.id} className="p-4 border rounded-lg">
//             <h2 className="text-xl">{breed.attributes.name}</h2>
//             <Link href={`/breeds/${breed.id}`}>
//               <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
//                 View Details
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
