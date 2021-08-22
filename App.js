import './App.css';
import Sidebar from './sidebar';
import Feed from './Feed'
import Widgets from './widgets'

function App() {
  return (
    <div className="app">
      
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;
