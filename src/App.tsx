
import * as React from 'react';

import * as Constants from './shared/gglQueries';
import * as Interfaces from './shared/interfaces';

import Header from './semantic-components/header';
import Home from './semantic-components/home';
import Article from './semantic-components/article';
import { useQuery } from '@apollo/react-hooks';
import { HashRouter as Router, Route } from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  
  const { loading, data } = useQuery<Interfaces.GithubArticlesData>(
    Constants.GET_ARTICLES,
    { variables: { nextPage: 0 }}
  )

  console.log(data);
  React.useEffect(() => {
    async function fetchAuth() {
      const code = window.location.search.split('code=')[1]; 
      if(!code) {
        window.location.href = "https://github.com/login/oauth/authorize?client_id=0ad806205b7c02bb9e8b&redirect_uri=http://localhost:3000/oauth/redirect&scope=public_repo";
      }
      const res = await fetch(
        `http://47.105.44.68:7080/api/token`, 
        // `http://localhost:8779/api/token`, 
        {
          method: 'post',
          body: code,
          headers: {
            accept: 'application/json'
          }
      });
      res
        .json()
        .then(res => {
          console.log("res && res.access_token")
          console.log(res);
          if(res && res.access_token) {
            localStorage.setItem('github_token', res.access_token);
            window.location.reload();
          }
        })
        .catch(err => {console.log(err)});
    }
    if(!localStorage.getItem('github_token')) {
      fetchAuth();
    }
  });
  return (
    <div className="App">
      <Header />

      <Router>
          <CacheSwitch>
            <CacheRoute exact path='/' component={()=><Home articles={data}/>} />
            <Route path='/article/:num' component={()=><Article articles={data}/>} />
            <Route render={() => <div>404 未找到页面</div>} />
          </CacheSwitch>
      </Router>
    </div>
  );
};

export default App;