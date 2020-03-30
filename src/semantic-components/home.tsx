
import * as React from 'react';

import * as Interfaces from '../shared/interfaces';
import PreviewCard from './card';
import AccordionList from './accordion-list';

interface IHomeProps {
    articles: Interfaces.GithubArticlesData | undefined;
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  
    const accordingList: any = {};
    props.articles?.repository.issues.nodes.forEach((node: Interfaces.GithubNode) => {
      let date = new Date(node.createdAt).toLocaleDateString('zh').replace(/\//g, '-');
      date = date.replace(/-\d{1,2}$/, '');
      if(!accordingList[date]) {
        accordingList[date] = [];
      }
      if(!(node.labels.nodes.length > 0 && node.labels.nodes[0].name === 'quicklyFix')) {
        accordingList[date].push(node);
      } 
    })
    
  
  return (
    <div className="Home">
      <div className="ui container Main-content">
        <div className="ui grid">
          <div className="ten wide column">
             <div className="ui container">
              {
                props.articles == null ? (
                  <div className="ui grid">
                    <div className="column">
                      <div className="ui placeholder">
                        <div className="image header">
                        <div className="line"></div>
                        <div className="line"></div>
                      </div>
                      <div className="paragraph">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                      </div>
                      </div>
                      </div>
                    </div>
                ) : (
                    props.articles.repository.issues.nodes.map((issue: Interfaces.GithubNode, index: number) => {
                      if(issue.labels.nodes.length > 0 && issue.labels.nodes[0].name === 'quicklyFix'){
                        return null;
                      } else {
                        return (
                          <div className="ui grid" key={index}>
                            <div className="column">
                              <PreviewCard issue={issue}/>  
                            </div>
                          </div>
                        )
                      }
                  })
                )
              }
            </div>
          </div>
          <div className="six wide column">
            <AccordionList  accordingList={accordingList}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;