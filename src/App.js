import React, { useEffect } from 'react'
import './App.css';
import Navbar from './assets/components/Navbar';
import { useContext, useState } from 'react'
import axios from 'axios';
import AuthContext from './assets/context/authContext/authContext'
import CreateAccount from './assets/components/CreateAccount';
import LoginUser from './assets/components/LoginUser';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './assets/components/Home';
import Profile from './assets/components/Profile'
import AddPost from './assets/components/AddPost';
import EditPost from './assets/components/EditPost';
import Favourite from './assets/components/Favourite';
import Footer from './assets/components/Footer';
import RemindMe from './assets/components/RemindMe';
import ProfileInfo from './assets/components/ProfileInfo';
import alertContext from './assets/context/AlertContext/AlertContext';
import Alert from './assets/components/Alert';
import Book from './assets/components/Book';
import PostPage from './assets/components/PostPage';
import Contact from './assets/components/Contact';
import About from './assets/components/About';

function App() {
  const { alert, showAlert } = useContext(alertContext)
  const navigate = useNavigate()
  const { createUser, createAdmin, loginUser, loginAdmin, user, getUser } = useContext(AuthContext)
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    image: null
  })
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value]
    });
  }
  const handleChangefile = (e) => {
    setData({
      ...data,
      image: e.target.files[0]
    });
  };
  const addImage = async () => {
    const postData = new FormData();
    postData.append('image', data.image);// eslint-disable-next-line
    const response = await axios.post('http://localhost:5000/api/auth/addimage', postData, {
      headers: {
        "Content-Type": "multipart/form-data",
        token: localStorage.getItem('token')
      }
    });
    showAlert("Image updated successfully", "success")
  };
  const addImage1 = async (id) => {
    const postData = new FormData();
    postData.append('image', data.image);
    const response = await axios.post(`http://localhost:5000/api/auth/adminimage/${id}`, postData, {
      headers: {
        "Content-Type": "multipart/form-data",
        token: localStorage.getItem('token')
      }
    });
    if (response.data.success)
      showAlert("Image updated successfully", "success")
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    await createUser(data.email, data.password, data.name);
    addImage();
    if (user)
      navigate('/')
  }
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    await loginUser(data.email, data.password);
    if (user)
      navigate('/')
  }
  const handleSubmit3 = async (e) => {
    e.preventDefault();
    const id = await createAdmin(data.email, data.password, data.name);
    addImage1(id);
    if (user)
      navigate('/')
  }
  const handleSubmit4 = async (e) => {
    e.preventDefault();
    await loginAdmin(data.email, data.password);
    if (user)
      navigate('/')
  }
  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem('token')) {
          await getUser();
      }
  };

  fetchData();
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<>
            <Navbar />
            <Home />
            <Footer />
          </>} />
        <Route
          path='/loginuser'
          element={<>
            <Alert alert={alert} />
            <LoginUser handleChange={handleChange} handleSubmit={handleSubmit2} data={data} heading="User" />
            
          </>} />
        <Route
          path='/adminlogin'
          element={<>
            <Alert alert={alert} />
            <LoginUser handleChange={handleChange} handleSubmit={handleSubmit4} data={data} heading="Admin" />
            
          </>
          } />
        <Route
          path='/createadmin'
          element={
            <CreateAccount handleChange={handleChange} handleSubmit={handleSubmit3} handleChangefile={handleChangefile} data={data} setData={setData} />} heading="Admin" />
        <Route path='/createuser'
          element={<>
            <Alert alert={alert} />
            <CreateAccount handleChange={handleChange} handleSubmit={handleSubmit1} handleChangefile={handleChangefile} data={data} setData={setData} heading="User" />
          </>} />

          {user && (user.type === "BossAdim" || user.type === "admin") &&
        <Route path='/addpost'
          element={<>
            <Navbar />
            <Alert alert={alert} />
            <Profile />
            <AddPost user={user} />
            <Footer />
          </>} />}
        <Route path='/editpost'
          element={<>
            <Navbar />
            <Alert alert={alert} />
            <Profile />
            <EditPost />
            <Footer />
          </>} />
        <Route path='/favouritepost'
          element={<>
            <Navbar />
            <Alert alert={alert} />
            <Profile />
            <Favourite />
            <Footer />
          </>} />
        <Route path='/reminder'
          element={<>
            <Navbar />
            <Alert alert={alert} />
            <Profile />
            <RemindMe />
            <Footer />
          </>} />
        <Route path='/profileinfo'
          element={<>
            <Navbar />
            <Alert alert={alert} />
            <Profile />
            <ProfileInfo />
            <Footer />
          </>} />
        <Route path='/book'
          element={<>
            <Navbar />
            <Alert alert={alert} />
            <Profile />
            <Book user={user}/>
            <Footer />
          </>} />
        <Route path='/postpage'
          element={<>
            <Navbar />
            <Alert alert={alert} />
            <PostPage user={user}/>
            <Footer />
          </>} />
        <Route path='/contact'
          element={<>
            <Navbar />
            <Alert alert={alert} />
            <Contact user={user}/>
            <Footer />
          </>} />
        <Route path='/about'
          element={<>
            <Navbar />
            <Alert alert={alert} />
            <About user={user}/>
            <Footer />
          </>} />

      </Routes>
      
    </div>
  )
}

export default App
