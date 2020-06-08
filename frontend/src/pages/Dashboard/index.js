import React,{Component} from 'react';

import GitCard from '../../components/GitCard';
import Header from '../../components/Header';
import AddUserBar from '../../components/AddUserBar';
import JobsCard from '../../components/JobsCard';

import './index.css';

export default class Dashboard extends Component{
    render(){
        return(
           <div>
                <Header/>
                <div className='dashboard-container'>
                    <AddUserBar/>
                    <GitCard/>
                    <JobsCard/>
                </div>
           </div>
        )
    }
}