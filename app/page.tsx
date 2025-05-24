'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);

  const handleNoClick = () => setNoCount(prev => prev + 1);
  const handleYesClick = () => setYesClicked(true);

  const yesScale = 1 + noCount * 0.2;
  const noScale = Math.max(1 - noCount * 0.15, 0.2);
  const hideNoButton = noCount >= 6;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-sans p-4 text-center">
      {!yesClicked ? (
        <>
          <h1 className="text-2xl mb-6">Sen Alpe&#39;ye SBS misin</h1>
          <div className="space-x-4">
            <button
              onClick={handleYesClick}
              className="bg-green-600 text-white px-6 py-3 rounded-lg transition-transform duration-300"
              style={{ transform: `scale(${yesScale})` }}
            >
              Evet
            </button>
            {!hideNoButton && (
              <button
                onClick={handleNoClick}
                className="bg-red-600 text-white px-6 py-3 rounded-lg transition-transform duration-300"
                style={{ transform: `scale(${noScale})` }}
              >
                Hayır
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <Image
            src="/063b9661c3b6fkel.jpg"
            alt="SBS"
            width={208}
            height={300}
            className="rounded-xl mx-auto mb-6"
          />
          <h1 className="text-3xl">
            Al işteeeeeptğepteğptğpt biliyordum gitttttt SBS 
          </h1>
        </>
      )}
    </main>
  );
}
