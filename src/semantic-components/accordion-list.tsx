import * as React from 'react';
import List from './list';

declare const $: any;

interface IAccordionListProps {
}

const AccordionList: React.FunctionComponent<IAccordionListProps> = (props) => {

    React.useEffect(()=>{
        // document.getElementsByClassName('.ui.accordion').accordion();
        $('.ui.accordion').accordion({});
    })

  return (
      <div className="AccordionList">
          <div className="ui styled fluid accordion">
            <div className="title">
                <i className="dropdown icon"></i>
                2020-1 (1)
            </div>
            <div className="content">
                <List/>
            </div>
            <div className="title">
                <i className="dropdown icon"></i>
                2019-12 (1)
            </div>
            <div className="content">
                <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
            </div>
            <div className="title">
                <i className="dropdown icon"></i>
                2019-10 (1)
            </div>
            <div className="content">
                <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
                <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
            </div>
        </div>
      </div>
  );
};

export default AccordionList;
