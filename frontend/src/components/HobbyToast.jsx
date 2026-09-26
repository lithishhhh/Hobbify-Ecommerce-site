import { useNavigate } from 'react-router-dom';

const HobbyToast = ({ hobby, message, visible, onClose }) => {
  const navigate = useNavigate();

  if (!visible || !hobby || !message) {
    return null;
  }

  return (
    <div className="hobby-toast" role="status" aria-live="polite">
      <div className="hobby-toast-copy">
        <p>{message}</p>
        <button type="button" onClick={() => {
          onClose?.();
          navigate(`/shop?hobby=${encodeURIComponent(hobby.name)}`);
        }}>
          Explore {hobby.name} →
        </button>
      </div>
    </div>
  );
};

export default HobbyToast;
