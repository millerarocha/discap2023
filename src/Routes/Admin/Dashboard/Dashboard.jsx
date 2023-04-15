import { Children } from 'react';
import Menu from './Menu';

const Dashboard = ({ children }) => {
  return (
    <div className='flex h-screen w-screen flex-col lg:flex-row'>
      <div className=' lg:w-64 p-6 h-screen bg-slate-200 fixed'>
        <Menu />
      </div>
      <div className='lg:w-3/4 p-6 ml-64'>{children}</div>
    </div>
  );
};

export default Dashboard;
