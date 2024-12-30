import { useEffect, useRef } from 'react';
import Script from 'next/script';

export const VideoPalyerBase = ({url}) => {
    const iframeRef = useRef(null);
    const playerRef = useRef(null);
  
    useEffect(() => {
      // Проверяем, загружен ли скрипт
      if (window.VK && iframeRef.current) {
        playerRef.current = window.VK.VideoPlayer(iframeRef.current);
        
        // Замьютить видео
        playerRef.current.mute();
      }
    }, []);
  
    return (
      <>
        <Script
          src="https://vk.com/js/api/videoplayer.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (iframeRef.current) {
              playerRef.current = window.VK.VideoPlayer(iframeRef.current);
              playerRef.current.mute(); // Замьютить видео после загрузки
            }
          }}
        />
        <iframe 
            ref={iframeRef}
            style={{ height: "100vh", width: "100vw", border: 'none' }}
            src={`${url}&autoplay=1&amp;loop=1&amp;js_api=1&amp;controls=0&amp;mute=1&amp;muteв=1&amp;volume=0&amp;`}
            frameborder="0" 
            allow="autoplay; encrypted-media; fullscreen; clipboard-write; " 
            webkitallowfullscreen 
            mozallowfullscreen 
            allowfullscreen
            loading="lazy"
        ></iframe>  
      </>
    );
}