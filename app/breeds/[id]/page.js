"use client";  // Add this directive to use React hooks like useState and useEffect

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const BreedPage = () => {
  const [breed, setBreed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Access the dynamic route parameter using useRouter
  const router = useRouter();
  const { query } = router;

  // Use a fallback if query or id is not available
  const id = query?.id || null;  // Fallback to null if id is not found in query

  useEffect(() => {
    if (id) {
      const fetchBreed = async () => {
        try {
          const response = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch breed data');
          }
          const data = await response.json();
          setBreed(data);  // Set the breed data when successfully fetched
        } catch (err) {
          setError(err.message);  // Set error message if any
        } finally {
          setLoading(false);  // Stop loading when done
        }
      };

      fetchBreed();
    }
  }, [id]);

  // Handling loading, error, and displaying breed data
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!breed) {
    return <div>Breed not found</div>;
  }

  return (
    <div>
      <h1>{breed.name}</h1>
      <p>{breed.description}</p>
      <p><strong>Life Expectancy:</strong> {breed.life_expectancy}</p>
      <p><strong>Hypoallergenic:</strong> {breed.hypoallergenic ? 'Yes' : 'No'}</p>
      {/* Add more breed details here */}
    </div>
  );
};

export default BreedPage;





  















































// 'use client';
// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';

// export default function BreedDetails() {
//   const { id } = useParams();  // Get the breed ID from the URL
//   const [breed, setBreed] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`https://dogapi.dog/api/v2/breeds/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setBreed(data.data);  // Set breed data for this specific breed
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching breed details:", err);
//         setLoading(false);
//       });
//   }, [id]);  // Re-run the effect if the ID changes

//   if (loading) return <div className="text-center">Loading...</div>;

//   if (!breed) return <div className="text-center">Breed not found.</div>;

//   // Destructure the breed data for easier access
//   const {
//     name,
//     description,
//     temperament,
//     life_expectancy,
//     height,
//     weight,
//   } = breed.attributes;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">{name}</h1>
//       <p className="mt-4">{description || 'No description available'}</p>
//       <div className="mt-4">
//         <h2 className="text-xl font-semibold">Temperament:</h2>
//         <p>{temperament || 'No temperament information available'}</p>
//       </div>
//       <div className="mt-4">
//         <h2 className="text-xl font-semibold">Life Expectancy:</h2>
//         <p>{life_expectancy || 'No life expectancy information available'}</p>
//       </div>
//       <div className="mt-4">
//         <h2 className="text-xl font-semibold">Height:</h2>
//         <p>{height?.metric || 'No height information available'} cm</p>
//       </div>
//       <div className="mt-4">
//         <h2 className="text-xl font-semibold">Weight:</h2>
//         <p>{weight?.metric || 'No weight information available'} kg</p>
//       </div>
//     </div>
//   );
// }
