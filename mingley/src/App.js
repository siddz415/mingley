 // import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="landing-page">
    <header>
      <h1>Welcome to Mingley</h1>
      <p>Your ultimate destination for meaningful connections</p>
    </header>
    <section className="features">
      <h2>Features</h2>
      <div className="feature">
        <h3>Match-making</h3>
        <p>Find your perfect match based on your interests, preferences, and compatibility.</p>
      </div>
      <div className="feature">
        <h3>Chatting</h3>
        <p>Connect with your matches and start a conversation to get to know each other better.</p>
      </div>
      <div className="feature">
        <h3>Events</h3>
        <p>Discover local events and activities where you can meet other Mingley users in person.</p>
      </div>
    </section>
    <section className="cta">
      <h2>Ready to mingle?</h2>
      <button>Sign Up Now</button>
    </section>
    <footer>
      <p>&copy; 2024 Mingley. All rights reserved.</p>
    </footer>
  </div>
  );
}

export default App;
