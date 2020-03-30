import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Highlighter from '../shared/SynctaxHighlighter';

import * as Interfaces from '../shared/interfaces';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../shared/gglMutation';

interface ICommentProps {
    comments: Interfaces.GitHubCommentNode[] | undefined;
    subjectId: string | undefined;
}

const Comment: React.FunctionComponent<ICommentProps> = (props) => {
    let input: HTMLTextAreaElement | null;
    const [addComment, {data}] = useMutation(ADD_COMMENT, {
        update(cache, result) {
            console.log(cache);
            console.log(result);
        }
    });

    return (
        <div className="Comment">
            <div className="ui threaded comments" style={{ width: '100%', maxWidth: 'none'}}>
                <h3 className="ui dividing header">Comments</h3>
                {
                    props.comments?.map((commentNode: Interfaces.GitHubCommentNode, index: number) => {
                        return (
                            <div className="comment" key={index}>
                                <a className="avatar">
                                    <img src={commentNode.author.avatarUrl} />
                                </a>
                                <div className="content">
                                <a className="author">{commentNode.author.login}</a>
                                <div className="metadata">
                                <span className="date">{commentNode.createdAt}</span>
                                </div>
                                <div className="text">
                                    <ReactMarkdown 
                                        source={commentNode.body} 
                                        renderers={{code: Highlighter}} 
                                    />
                                </div>
                                <div className="actions">
                                    <a className="reply">Reply</a>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }

                <form className="ui reply form">
                    <div className="field">
                    <textarea ref={node => {input = node}}></textarea>
                    </div>
                    <div className="ui blue labeled submit icon button" 
                        onClick={ ()=> addComment({
                            variables: { body: input?.value, subjectId: props.subjectId}
                        })}>
                        <i className="icon edit"></i> Add Reply
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Comment;




