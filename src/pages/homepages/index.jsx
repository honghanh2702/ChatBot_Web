import './index.css';
import chatBot from '../../assest/chat_Bot.png'
import { Button } from '@mui/material';
import { useRef, useState } from 'react';

import ParticleRing from './ParticleRing';
import { useNavigate } from 'react-router-dom';


const Homepages=()=> {
    const navigate = useNavigate();
    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            <div className='background-container'>
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10 }}>
                    <ParticleRing />
                </div>
                <div className="navbar-container">
                    <div className="navbar-menu">
                        <div className="menu-item">AI</div>
                        <div className="menu-list">
                            <div className="menu-list-item">Feature</div>
                            <div className="menu-list-item">About</div>
                            <div className="menu-list-item">Blog</div>
                        </div>
                        <div style={{ marginLeft: 100 }}>
                            <Button
                            onClick={()=>navigate('/signup')}
                                variant="outlined"
                                style={{ color: "white", borderRadius: 15, marginTop: 5, fontSize: 15, marginRight: 20 }}
                            >
                                Sign Up
                            </Button>
                            <Button
                             onClick={()=>navigate('/login')}
                                style={{ color: "white", borderRadius: 15, marginTop: 5, fontSize: 15, width: 100, height: 30, background: "linear-gradient(to right, #7b42f6, #b34df0)", }}
                            >
                                Login
                            </Button>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', marginTop: 45,border: "1px solid rgba(255, 255, 255, 0.308)",borderRadius:10 }}>
                    <div style={{ width: 657, height: 382, marginRight: 30 }}>
                        <div style={{ paddingLeft: 55 }}>
                            <h1 style={{ color: 'white', fontSize: '70px', margin: '0 0 20px' }}>
                                Get ready for the new era of AI
                            </h1>
                            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '16px', lineHeight: '1.5', margin: '0 0 30px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et vulputate tortor, in posuere nibh.
                                Praesent sit amet metus porttitor mi consectetur pellentesque in at leo.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    style={{
                                        padding: '15px',
                                        borderRadius: '10px',
                                        border: 'none',
                                        width: '250px',
                                        backgroundColor: '#333',
                                        color: 'white',
                                        fontSize: '16px',
                                        outline: 'none',
                                    }}
                                />
                                <button
                                    style={{
                                        padding: '15px 30px',
                                        borderRadius: '10px',
                                        border: 'none',
                                        fontSize: '16px',
                                        color: 'white',
                                        background: 'linear-gradient(to right, #7b42f6, #b34df0)',
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s',
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: 300, height: 400 }}>
                        <img
                            style={{
                             
                                width: 400,
                                height: 400,
                                marginLeft:-50
                                
                            }}
                            src={chatBot}
                        />
                    </div>
                </div>
            </div>
            </div>





    );
}

export default Homepages;
