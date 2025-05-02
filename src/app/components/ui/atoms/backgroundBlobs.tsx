const BackgroundBlobs = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-300/10 to-blue-300/10 blur-3xl"
            style={{
              width: `${Math.random() * 30 + 20}%`,
              height: `${Math.random() * 30 + 20}%`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
    );
  };
  
  export default BackgroundBlobs;
  