import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';

import * as Constants from '../shared/gglQueries';
import * as Interfaces from '../shared/interfaces';
import Search from './search';
import DropDown from './drop-down';

declare const $: any;

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    
    const { data } = useQuery<Interfaces.GithubViewerData>(
        Constants.GET_USER_INFO,
        { variables: { }}
    )

    React.useEffect(()=>{
        $('.avatar.image')
        .popup({
          position : 'right center',
          target   : '.avatar.image',
          content  : data ? data.viewer.login : null
        });
    })
 

    return (
        <div className="Header">
            <div className="ui borderless main menu">
                <div className="ui container">
                    <div className="header item">
                        <img className="logo" src="assets/images/logo.png"/ >
                        Project Name
                    </div>
                    <div className="ui right floated item">
                        <Search />
                        { 
                            data ? 
                            <img  className="ui avatar image" src={data.viewer.avatarUrl} style={{marginLeft: "1rem"}} /> : 
                            null
                        }
                        <DropDown certificate={data ? true : false} />
                     </div>
                </div>
            </div>
        </div>
      );
};

export default Header;
