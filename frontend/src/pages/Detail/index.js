import React,{Component} from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

import './index.css';

export default class Detail extends Component{
    state = {
       dados : {},
    }

    async loadData(){
        const {id} = this.props.match.params;
        const response = await api.get(`/user/${id}`);
        this.setState({dados : response.data});
    }

    componentDidMount(){
        this.loadData();
    }

    render(){       
        return(
           <div>
               <Header/>
               <div className='detail-container'>
                   {console.log(this.state.dados)}
                        <div className='card'>
                            <img id='avatar' src={this.state.dados.avatar_url} alt=''/>
                            <div id='info'>
                                <span>{this.state.dados.name}</span>
                                <p><span>Empresa:</span> {this.state.dados.company}</p>
                                <p><span>Biografia: </span> {this.state.dados.bio}</p>
                                <p><span>Repositórios: </span> {this.state.dados.public_repos}</p>
                                <p><span>Seguidores: </span> {this.state.dados.followers}</p>
                            </div>
                        </div>
                </div>
           </div>
        )
    }
}