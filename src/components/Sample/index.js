import React from 'react';
import './styles.scss';
export default class SampleComponent extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className='sample-container'>
                <h1 className='sample-container-heading'>This is a sample Component</h1>
            </div>
        );
    }
}