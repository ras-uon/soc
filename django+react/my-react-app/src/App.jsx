import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Components/Layout';
import Register from './Pages/Registration';
import Posts from './Pages/Posts';
import Schedule from './Pages/Schedule';
import Account from './Pages/Account';
import Admin from './Pages/Admin';
import Proposals from './Pages/Proposals';

import './assets/App.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="members/registration" element={<Register />} />
                        <Route path="events/schedule" element={<Schedule />} />
                        <Route path="proposals" element={<Proposals/>}/>
                        <Route path="admin" element={<Admin/>}/>
                        <Route path="posts" element={<Posts />} />
                        <Route path="account" element={<Account/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default App;
