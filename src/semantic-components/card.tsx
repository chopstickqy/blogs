import * as React from 'react';
import marked from 'marked';

import * as Interfaces from '../shared/interfaces';
import { Link } from 'react-router-dom';
// import '../index.css';

interface ICardProps {
    issue: Interfaces.GithubNode;
}

const PreviewCard: React.FunctionComponent<ICardProps> = (props) => {

    const issue = props.issue;
    let content = marked(issue.body.replace(/!\[.+?\]\(.+?\)/, ''));
    const regContent = content.match(/<p>(.*?)<\/p>/);
    content = regContent == null ? "" : regContent[1];

    const regCover = issue.body.match(/!\[.+?\]\((.+?[^)]*)\)/);
 
    const cover = regCover == null ? "" : regCover[1];;
    const createdAt = new Date(issue.createdAt).toLocaleDateString('zh').replace(/\//g, '-');
    return (
        <div className="Card">
            <div className="ui card" style={{width: "auto"}}>
                <div className="image" style={{height: "40vh"}}>
                    <h3 className="ui header cover-title">{ issue.title }</h3>
                    <Link to={'/article/' + issue.number}>
                        <img className="image-cover" src={ cover } />
                    </Link>
                </div>
                <div className="content">
                    {/* <a className="header">Kristy</a> */}
                    <div className="meta">
                        <i className="clock outline icon"></i>
                        <span className="date" style={{marginRight: "0.5rem"}}>{ createdAt }</span>
                        {
                            issue.labels.nodes.map((lableNode: Interfaces.GithubLabelsNode, index: number) => {
                                return <div className="ui horizontal label" key={index} style={{backgroundColor: '#'+lableNode.color}}>{ lableNode.name }</div>
                            })
                        }
                        
                    </div>
                
                </div>
                <div className="extra content">
                    <div className="description tiny">
                        { content }
                    </div>
                </div>
                <div className="extra content" style={{textAlign: "right"}}>
                    <span>
                        <i className="thumbs up outline icon"></i>
                        { issue.reactions.totalCount }
                    </span>
                    <span style={{marginLeft: "5px"}}>
                        <i className="comment alternate outline icon"></i>
                        { issue.comments.totalCount }
                    </span>
                </div>
            </div>
        </div>
    )
};

export default PreviewCard;