import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import guitarVideo from '../assets/videos/guitar.mp4';
import readingVideo from '../assets/videos/reading.mp4';
import gamingVideo from '../assets/videos/gaming.mp4';
import plantingVideo from '../assets/videos/planting.mp4';

const VIDEO_DURATION = 5000;

const heroVideos = [
  { src: guitarVideo, title: 'Music' },
  { src: readingVideo, title: 'Reading' },
  { src: gamingVideo, title: 'Gaming' },
  { src: plantingVideo, title: 'Gardening' },
];

const Hero = () => {
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((current) => (current + 1) % heroVideos.length);
    }, VIDEO_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" aria-label="Hobbify hero section">
      <div className="hero-video-layer" aria-hidden="true">
        {heroVideos.map((video, index) => (
          <video
            key={`${video.title}-${index}`}
            className={`hero-video ${index === activeVideo ? 'active' : ''}`}
            src={video.src}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
          />
        ))}
        <div className="hero-video-overlay" />
      </div>

      <div className="hero-content">
        <span className="eyebrow">MORE THAN JUST A HOBBY</span>
        <h1>Hobbies Make Life Richer</h1>
        <p>
          They reduce stress, spark creativity, build new skills and bring people
          together. Discover products that help you do what you love.
        </p>
        <button className="primary-btn" onClick={() => navigate('/hobbies')}>
          Explore Hobbies <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
