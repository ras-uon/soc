import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Components/Layout';
import Register from './Pages/Registration';
import Members from './Pages/Members';
import Posts from './Pages/Posts';
import './assets/App.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="members" element={<Register />} />
                        <Route path="members/all" element={<Members/>}/>
                        <Route path="posts" element={<Posts />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default App;
