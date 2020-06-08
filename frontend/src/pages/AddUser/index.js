import React,{Component} from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

import './index.css';

export default class AddUser extends Component{
    state = {
        userGit : '',
        linguagem : '',
        sexo : '',
        experiencia : '',
    }

    handleSubmit = async event =>{
        event.preventDefault();
        await api.post('/users',{
            userGit : this.state.userGit,
            linguagem : this.state.linguagem,
            sexo : this.state.sexo,
            experiencia : this.state.experiencia
        });
        this.props.history.push('/dashboard');
    }

    handleOnChange = event =>{
        event.preventDefault();
        this.setState({[event.target.name] : event.target.value})
    }


    render(){
        return(
            <div>
                <Header/>
                <form onSubmit={this.handleSubmit}>
                    <div className='addUser-container'>
                        <h1>Cadastrar Desenvolvedor</h1>

                        <span>Github username</span>
                        <input type='text' 
                                name='userGit'
                                value={this.state.userGit}
                                onChange={this.handleOnChange}/>

                        <span>Linguagem</span>
                        <select type='text'
                                name='linguagem'
                                value={this.state.linguagem}
                                onChange={this.handleOnChange}>
                            <option value=''></option>
                            <option value='JavaScript'>JavaScript</option>
                            <option value='Python'>Python</option>
                            <option value='C++'>C++</option>
                        </select>

                        <span>Sexo</span>
                        <select type='text'
                                name='sexo'
                                value={this.state.sexo}
                                onChange={this.handleOnChange}>
                            <option value=''></option>
                            <option value='M'>Masculino</option>
                            <option value='F'>Feminino</option>
                        </select>

                        <span>Experiência</span>
                        <select type='text'
                                name='experiencia'
                                value={this.state.experiencia}
                                onChange={this.handleOnChange}>
                            <option value=''></option>
                            <option value='Junior'>Júnior</option>
                            <option value='Pleno'>Pleno</option>
                            <option value='Senior'>Sênior</option>
                        </select>


                        <button type='submit'>Salvar</button>
                    </div>
                </form>
            </div>
        )
    }
}