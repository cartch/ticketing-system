import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Login } from './pages/home/Home.page';

function App() {
  return (
    <div className='App'>
      {/* <Login /> */}
      <DefaultLayout>// Dashboard</DefaultLayout>
    </div>
  );
}

export default App;
