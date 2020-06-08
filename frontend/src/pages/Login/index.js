import React,{Component} from 'react';
import api from '../../services/api';
import './index.css';

export default class Login extends Component{
    state = {
        username : ''
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const response = await api.post(`/login/${this.state.username}`);
        const {msg} = response.data;
        
        if(msg === 0){
            alert('Usuário não encontrado');
        }else{
            this.props.history.push('/dashboard');
        }
    }

    handleLogin = event =>{
        event.preventDefault();
        this.setState({[event.target.name] : event.target.value});
    }

    render(){
        return(
            <div className='main-containerLogin'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder='digite seu usuário do GitHub' 
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleLogin}/>
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        )
    }
}