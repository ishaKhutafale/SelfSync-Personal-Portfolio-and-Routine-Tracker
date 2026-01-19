function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Left */}
        <h2 className="logo">SelfSync</h2>

        {/* Center */}
        <ul className="nav-links">
          <li>Home</li>
          <li>Portfolio</li>
          <li>Tracker</li>
        </ul>

        {/* Right */}
        <div className="sign-in">Sign In</div>
      </div>
    </nav>
  );
}

export default Navbar;
