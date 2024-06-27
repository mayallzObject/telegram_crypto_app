import AppContent from '../components/content/content';
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
        <AppContent />
      </main>
      <footer>
        <NavBar />
      </footer>
    </div>
  );
};

export default AppLayout;
