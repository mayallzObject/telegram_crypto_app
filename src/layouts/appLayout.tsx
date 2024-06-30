import { Outlet } from 'react-router-dom';
import NavBar from '../components/navigation/navBar';

const AppLayout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <main>
        <Outlet />
      </main>
      <footer>
        <NavBar />
      </footer>
    </div>
  );
};

export default AppLayout;
