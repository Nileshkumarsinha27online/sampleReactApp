import React from 'react';
import './styles.scss';
import ListContainer from '../../containers/ListContainer';
import SampleContainer from '../../containers/SampleContainer';
export default class LayoutComponent extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className='layout-container'>
                <SampleContainer />
                 <ListContainer />
            </div>
        );
    }
}