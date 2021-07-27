import axios from 'axios';
import React, { useState } from 'react'

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const authObject = {
            'Project-ID': 'dd29388d-3917-40ac-8823-8aee820105e5', 'User-Name': username, 'User-Secret': password};
        try{
           await axios.get('https://api.chatengine.io/chats/', {headers: authObject});

           localStorage.setItem('username',username);
           localStorage.setItem('password',password);

           window.location.reload();
        } catch(err){
            setError('Oh no, Its wrong !')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App Using Chat-Engine</h1>
                <form 
                    onSubmit={handleSubmit}>
                    <input
                    type="text" 
                    value={username} 
                    onChange={(e)=>setUsername(e.target.value)} 
                    className="input"
                    placeholder="Username"
                    required   />
                    <input
                    type="password" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    className="input"
                    placeholder="Password"
                    required   />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start</span>
                        </button>
                    </div>
                <h3 className="error">{error}</h3>
                </form>
            </div>
        </div>
    )
}
