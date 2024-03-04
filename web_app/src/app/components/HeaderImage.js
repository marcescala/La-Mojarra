import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

function HeaderImage() {
  return (
    <header className="header">
      <h1>LA MOJARRA</h1>
      <div className="header-img">
        <Image
          src="/main_image.jpeg"
          alt="Header Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </header>
  );
}

export default HeaderImage;
