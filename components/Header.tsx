const Header: React.FC = () => {
    return (
      <header className="relative bg-dark-black text-white h-screen grid place-items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-5xl font-extrabold leading-tight">
            Transform Your Smile with <span className="text-accent-purple">Dr. Devin Chetty</span>
          </h1>
          <p className="mt-4 text-lg">
            Professional dental care trusted by celebrities and clients worldwide.
          </p>
          <a
            href="#services"
            className="mt-6 inline-block px-6 py-3 bg-accent-purple text-white rounded-lg hover:bg-accent-blue transition"
          >
            Explore Services
          </a>
        </div>
      </header>
    );
  };
  
  export default Header;
  