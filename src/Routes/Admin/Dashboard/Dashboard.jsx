import { Children } from 'react';
import Menu from './Menu';

const Dashboard = ({ children }) => {
  return (
    <div className='flex h-screen w-screen flex-col lg:flex-row'>
      <div className=' lg:w-1/4 p-6 bg-slate-200'>
        <Menu />
      </div>
      <div className='lg:w-3/4 p-6'>{children}</div>
    </div>
  );
};

export default Dashboard;
