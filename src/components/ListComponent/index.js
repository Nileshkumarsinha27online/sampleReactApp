import React from 'react';
import './styles.scss';
export default class ListComponent extends React.Component{
    constructor(){
        super();
    }
    componentWillMount(){
        this.props.fetchListData();
    }
    componentWillReceiveProps(nxtProps){
        this.props=nxtProps;
    }
    render(){
        var list = this.props.listData;
        if(list.length){
        var links=list.map((link,index)=>
      <li key={index} className="padding-20"><span className="padding-20">{link.id}</span><span className="padding-20">{link.name}</span><span className="">{link.phone}</span></li>
    );
        }
        return(
            <div className='list-component'>
                <ol className='list'>
                    {links}
                </ol>
            </div>
        )
    }
}