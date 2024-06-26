import { Outlet } from 'react-router-dom';

const AppContent = () => (
  <div className="content">
    App content
    <Outlet />
  </div>
);
export default AppContent;
