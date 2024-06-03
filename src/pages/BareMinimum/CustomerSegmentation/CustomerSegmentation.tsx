import React, { useState, useEffect } from 'react';

const CustomerSegmentation = () => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://c241ps01new-g463lwzijq-et.a.run.app');
        const blob = await response.blob();
        setImage(URL.createObjectURL(blob));
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {image ? <img src={image} alt="Customer Segmentation" /> : <p>Loading image...</p>}
    </div>
  );
};

export default CustomerSegmentation;