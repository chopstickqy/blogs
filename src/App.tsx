
import * as React from 'react';

import * as Constants from './shared/gglQueries';
import * as Interfaces from './shared/interfaces';

import Card from './semantic-components/card';
import Header from './semantic-components/header';
import AccordionList from './semantic-components/accordion-list';
import { useQuery } from '@apollo/react-hooks';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  
  // const { data } = useQuery<Interfaces.GithubViewerData>(
  //   Constants.GET_ARTICLES,
  //   { variables: { nextPage: 0 }}
  // )
  // console.log(data);
  React.useEffect(() => {
    async function fetchAuth() {
      const code = window.location.search.split('code=')[1];
      const res = await fetch(
        `http://47.105.44.68:7080/api/token`, 
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
          console.log(res && res.access_token);
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
      <div className="ui container" style={{ marginTop: '2rem'}}>
        <div className="ui grid">
          <div className="ten wide column">
             <div className="ui container">
              <div className="ui grid">
                <div className="column">
                  <Card />  
                </div>
              </div>
              <div className="ui grid">
                <div className="column">
                  <Card />  
                </div>
              </div>
            </div>
          </div>
          <div className="six wide column">
            <AccordionList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;