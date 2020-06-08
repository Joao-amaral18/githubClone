import React,{Component} from 'react';
import jobIcon from '../../img/job.png';

import api from '../../services/api';

import './index.css';

export default class JobsCard extends Component{
    state = {
        jobs : []
    }

    async loadData(){
        const response = await api.get('/jobs');
        this.setState({jobs : response.data});
    }

    componentDidMount(){
        this.loadData();
    }

    render(){
        return(
            <div className='main-container'>
                {
                    this.state.jobs.map(job =>(
                        <div className='jobs-container'>
                            <img src={jobIcon} alt=''/>
                            <div>
                                <span>{job.description}</span>
                                <p>{job.company}</p>
                                <p>{job.company_address}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}