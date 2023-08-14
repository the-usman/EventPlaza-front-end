import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthState from './assets/context/authContext/authState';
import { BrowserRouter } from 'react-router-dom';
import PostState from './assets/context/postContext/postState'
import FavouriteState from './assets/context/postContext/favouriteState'
import RemindState from './assets/context/postContext/remindeState';
import AlertState from './assets/context/AlertContext/AlertState';
import BookState from './assets/context/bookContext/bookState';
import PostPage from './assets/context/postPage/postPageState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertState>
      <BrowserRouter>
        <AuthState>
          <PostState>
            <FavouriteState>
              <RemindState>
                <BookState>
                  <PostPage>
                    <App />
                  </PostPage>
                </BookState>
              </RemindState>
            </FavouriteState>
          </PostState>
        </AuthState>
      </BrowserRouter>
    </AlertState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
