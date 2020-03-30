import * as React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Highlighter from '../shared/SynctaxHighlighter';
import marked from 'marked';

import Comment from './comment';
import * as Interfaces from '../shared/interfaces';

interface RouteParams {
  num: string
}

interface IArticleProps {
  articles: Interfaces.GithubArticlesData | undefined;
}

const Article: React.FunctionComponent<IArticleProps> = (props) => {
  React.useEffect(()=> {
    window.scrollTo(0, 0);
  }, [])

  const params = useParams<RouteParams>();
  const article = props.articles?.repository.issues.nodes.find((node: Interfaces.GithubNode) => {
    return node.number ==  Number.parseInt(params.num);
  })
  let content = article?.body.replace(/!\[.+?\]\(.+?\)/, '');

  const regCover = article?.body.match(/!\[.+?\]\((.+?[^)]*)\)/);
  const cover = regCover == null ? "" : regCover[1];;

  return (
      <div className="Article">
        <div className="ui container Main-content">
          <div className="ui grid">
            <div className="column">
              <h1 className="ui header">{article?.title}</h1>
              <img className="ui big image" src={ cover } style={{padding: '10px'}}></img>
              <ReactMarkdown 
                source={content} 
                renderers={{code: Highlighter}} 
              />
            </div>
          </div>
          <div className="ui grid">
            <div className="column">
              <Comment comments={article?.comments.nodes} subjectId={article?.id}/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Article;
