import HobbyCard from './HobbyCard';

const HobbyGrid = ({ hobbies, selectedHobby, onSelect }) => {
  const cards = [...hobbies, ...hobbies];

  return (
    <div className="hobby-grid-viewport">
      <div className="hobby-grid">
        {cards.map((hobby, index) => (
          <HobbyCard
            key={`${hobby._id || hobby.name}-${index}`}
            hobby={hobby}
            isSelected={selectedHobby && selectedHobby._id === hobby._id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default HobbyGrid;
