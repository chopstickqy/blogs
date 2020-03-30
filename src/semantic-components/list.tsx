import * as React from 'react';

import * as Interfaces from '../shared/interfaces';
import { Link } from 'react-router-dom';

interface IListProps {
    nodeLists: Interfaces.GithubNode[];
}

const List: React.FunctionComponent<IListProps> = (props) => {
    console.log(props.nodeLists);
  return (
      <div className="List">
          <div className="ui relaxed divided list">
            {
                props.nodeLists.map((node: Interfaces.GithubNode, index: number) => {
                    return (
                        <div className="item" key={index}>
                            <i className="icon"></i>
                            <div className="content">
                                <Link className="header" to={'/article/' + node.number}>{node.title}</Link>
                                {/* <div className="description">{new Date(node.createdAt).toLocaleDateString('zh').replace(/\//g, '-') }</div> */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
  );
};

export default List;
