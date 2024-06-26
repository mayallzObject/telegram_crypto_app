import { Outlet } from 'react-router-dom';

const AppContent = () => (
  <div className="content">
    content
    <Outlet />
  </div>
);
export default AppContent;
