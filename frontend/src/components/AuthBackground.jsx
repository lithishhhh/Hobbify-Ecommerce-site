const AuthBackground = () => (
  <video
    className="auth-background-video"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    aria-hidden="true"
  >
    <source src="/videos/auth-background.mp4" type="video/mp4" />
  </video>
);

export default AuthBackground;
