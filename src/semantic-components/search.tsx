import * as React from 'react';

interface ISearchProps {
}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  return (
    <div className="Search">
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Common passwords..."/>
                <i className="search icon"></i>
            </div>
        <div className="results"></div>
        </div>
    </div>
  );
};

export default Search;