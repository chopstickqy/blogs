import * as React from 'react';

interface IListProps {
}

const List: React.FunctionComponent<IListProps> = (props) => {
  return (
      <div className="List">
          <div className="ui relaxed divided list">
            <div className="item">
                <i className="map marker icon"></i>
                <div className="content">
                    <a className="header" href={"#"}>【译】用Node.js编写内存效率高的应用程序</a>
                    <div className="description">Updated 10 mins ago</div>
                </div>
            </div>
            <div className="item">
                <i className="map marker icon"></i>
                <div className="content">
                    <a className="header" href={"#"}>【译】用Node.js编写内存效率高的应用程序</a>
                    <div className="description">Updated 10 mins ago</div>
                </div>
            </div>
            <div className="item">
                <i className="map marker icon"></i>
                <div className="content">
                    <a className="header" href={"#"}>【译】用Node.js编写内存效率高的应用程序</a>
                    <div className="description">Updated 10 mins ago</div>
                </div>
            </div>
        </div>
      </div>
  );
};

export default List;
