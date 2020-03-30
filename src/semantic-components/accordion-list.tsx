import * as React from 'react';
import List from './list';
import * as Interfaces from '../shared/interfaces';

declare const $: any;

interface IAccordionListProps {
    accordingList: any;
}

const AccordionList: React.FunctionComponent<IAccordionListProps> = (props) => {

    React.useEffect(()=>{
        // document.getElementsByClassName('.ui.accordion').accordion();
        $('.ui.accordion').accordion({});
    })

    
  return (
      <div className="AccordionList">
          <div className="ui styled fluid accordion">
            {
               Object.keys(props.accordingList).map((date: string, index) => (
                    // <li key={idx} className={classes.li}>{obj} : {props.accordingList[obj]}</li>     
                    
                    <div key={index}>
                        <div className="title">
                            <i className="dropdown icon"></i>
                            {date}
                        </div>
                        <div className="content">
                            <List nodeLists={props.accordingList[date]}/>
                        </div> 
                    </div>
               
                ))
            }
        </div>
      </div>
  );
};

export default AccordionList;
