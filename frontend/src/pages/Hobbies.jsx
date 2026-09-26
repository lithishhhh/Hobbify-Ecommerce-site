import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getHobbies } from '../services/hobbyService';

const Hobbies = () => {
  const navigate = useNavigate();
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    const fetchHobbies = async () => {
      try {
        const data = await getHobbies();
        setHobbies(data);
      } catch (error) {
        console.error('Failed to fetch hobbies', error);
      }
    };

    fetchHobbies();
  }, []);

  return (
    <div className="page-shell">
      <Navbar />
      <main className="content-page hobbies-page">
        <div className="inner-page-header">
          <h2>Hobbies</h2>
          <p>Choose the activity that fits your next passion.</p>
        </div>

        <div className="hobby-grid hobbies-grid">
          {hobbies.map((hobby) => (
            <article
              key={hobby._id}
              className="hobby-card"
              onClick={() => navigate(`/shop?hobby=${hobby._id}`)}
              style={{ '--card-image': `url('${hobby.image}')` }}
            >
              <div className="hobby-card-content">
                <div className="meta">
                  <span className="name">{hobby.name}</span>
                </div>
                <div className="count">{hobby.count}</div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hobbies;
