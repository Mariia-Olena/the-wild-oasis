import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Account from './pages/Account';
import Settings from './pages/Settings';
import Users from './pages/Users';
import Cabins from './pages/Cabins';
import Bookings from './pages/Bookings';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to='dashboard' />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='bookings' element={<Bookings />} />
          <Route path='cabins' element={<Cabins />} />
          <Route path='users' element={<Users />} />
          <Route path='settings' element={<Settings />} />
          <Route path='account' element={<Account />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
