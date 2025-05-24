'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

export default function Home() {
  const [yesCount, setYesCount] = useState(0);
  const [noClicked, setNoClicked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const yesButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleYesClick = () => {
    setYesCount(prev => prev + 1);
  };

  const handleNoClick = () => {
    setNoClicked(true);
  };

  const hideYes = yesCount >= 5;
  const hayirScale = 1 + yesCount * 0.2;
  const evetScale = Math.max(1 - yesCount * 0.1, 0.4);

  // Hover durumunda zıt konumu hesapla
  const [yesPos, setYesPos] = useState<{ top?: number; left?: number }>({});

  const handleYesMouseEnter = () => {
    if (!yesButtonRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const buttonRect = yesButtonRef.current.getBoundingClientRect();

    // Container içindeki button pozisyonu (sol ve üst mesafe)
    const relativeTop = buttonRect.top - containerRect.top;
    const relativeLeft = buttonRect.left - containerRect.left;

    // Container boyutları
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    // Buton boyutu
    const buttonWidth = buttonRect.width;
    const buttonHeight = buttonRect.height;

    // Zıt pozisyon hesapla:
    // top: containerHeight - (relativeTop + buttonHeight)
    // left: containerWidth - (relativeLeft + buttonWidth)

    const oppositeTop = containerHeight - (relativeTop + buttonHeight);
    const oppositeLeft = containerWidth - (relativeLeft + buttonWidth);

    setYesPos({
      top: oppositeTop,
      left: oppositeLeft,
    });
    setIsHover(true);
  };

 
  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 font-sans text-center overflow-hidden"
    >
      {!noClicked ? (
        <>
          <h1 className="text-2xl mb-6">Al hâlâ küsmüşsün 😔</h1>
          <div className="relative w-full max-w-lg h-40 flex justify-center items-center gap-4">
            {!hideYes && (
              <button
                ref={yesButtonRef}
                onClick={handleYesClick}
                onMouseEnter={handleYesMouseEnter}
                
                className={`bg-green-600 text-white px-6 py-3 rounded-lg transition-transform duration-300 ${
                  isHover ? 'absolute' : 'relative'
                }`}
                style={{
                  transform: `scale(${evetScale})`,
                  top: isHover ? yesPos.top : undefined,
                  left: isHover ? yesPos.left : undefined,
                }}
              >
                Evet
              </button>
            )}
            <button
              onClick={handleNoClick}
              className="bg-red-600 text-white px-6 py-3 rounded-lg transition-transform duration-300"
              style={{ transform: `scale(${hayirScale})` }}
            >
              Hayır
            </button>
          </div>
        </>
      ) : (
        <>
          <Image
            src="/images (1).jpeg"
            alt="vğpvğapvğap"
            width={400}
            height={400}
            className="mx-auto"
          />
          <h1 className="text-3xl mt-10">
            bpğapbğapbğapbğa beneğiim küs değil 🥹❤️
          </h1>
        </>
      )}
    </main>
  );
}
