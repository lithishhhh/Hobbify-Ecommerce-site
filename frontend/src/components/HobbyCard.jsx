const HobbyCard = ({ hobby, isSelected, onSelect }) => {
  return (
    <article
      className={`hobby-card ${isSelected ? 'active' : ''}`}
      data-hobby={hobby.name}
      onClick={() => onSelect(hobby)}
      style={{ '--card-image': `url('${hobby.image}')` }}
    >
      <div className="hobby-card-content">
        <div className="meta">
          <span className="name">{hobby.name}</span>
        </div>
        <div className="count">{hobby.count}</div>
      </div>
    </article>
  );
};

export default HobbyCard;
