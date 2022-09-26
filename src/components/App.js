import { useEffect, useState } from 'react';
import { getPosts } from '../api/index';
import { Home } from '../pages';
import { Login } from '../pages';
import { Loader } from './';
import { Navbar } from './';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth } from '../hooks';

const About = () => {
  return <h1>About</h1>;
};

const UserInfo = () => {
  return <h1>User</h1>;
};

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  // const [posts, setPosts] = useState([]);
  // // const [loading, setLoading] = useState(true);
  const auth = useAuth();
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await getPosts();

  //     if (response.success) {
  //       setPosts(response.data.posts);
  //     }

  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home
            // posts={posts}
            />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
