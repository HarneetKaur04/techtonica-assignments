import "./App.css";
import Header from './components/header.js'

import Footer from './components/footer.js'
import Users from './components/users.js'
import Events from './components/events.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
    <div className="user and events">
        <Users />
        <Events/>
    </div>


      </main>
    <Footer />

    </div>
  );
}

export default App;