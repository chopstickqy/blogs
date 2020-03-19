import * as React from 'react';

declare const $: any;

interface IDropDownProps {
    certificate: boolean;
}

const DropDown: React.FunctionComponent<IDropDownProps> = (props) => {

    React.useEffect(()=>{
        $('.ui.dropdown').dropdown() ;
    })


  return (
      <div className="DropDown">
        <div className="ui icon top right pointing dropdown" style={{marginLeft: "1rem"}}>
            <i className="ellipsis vertical icon"></i>
            <div className="menu">
                {
                   props.certificate ? 
                   (<div className="item">
                        <i className="sign out alternate icon"></i>
                        Signout
                    </div>) : 
                    (<div className="item">
                        <i className="github alternate icon"></i>
                        Login with Github
                    </div>)
                }
            </div>
        </div>
      </div>
  );
};

export default DropDown;
