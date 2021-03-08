import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './utils/AuthRoute';

import MenuBar from './components/Menu';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
import NewPost from './pages/NewPost';
import Startups from './pages/Startups';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <AuthProvider>
      <Router>
        <MenuBar />
        <Route exact path='/' component={Home} />
        <AuthRoute exact path='/login' component={Login} />
        <AuthRoute exact path='/register' component={Register} />
        <Route exact path='/newpost' component={NewPost} />
        <Route exact path='/posts/:postId' component={SinglePost} />
        <Route exact path='/startups' component={Startups} />
        <Route exact path='/confirmation' component={Confirmation} />
      </Router>
    </AuthProvider>
  );
}

export default App;
