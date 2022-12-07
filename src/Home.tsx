import React from 'react';
import ReactDOM from 'react-dom/client';
import selectPage from './App';

function Home (){
  return (
    <div className='home-box'>
        <div className='h-box'>
            <div className='info'>
                <h2>Интересные факты</h2>
                <p>Тут можно прочитать несколько интересных фактов про котиков</p>
                <a className="button">Почитать факты о котиках</a>
            </div>
            <img className='picture' src='https://i.pinimg.com/564x/c3/36/db/c336db828028b8dcb20e4e0222503e4f.jpg'/>
        </div>
        <div className='h-box'>
            <div className='info'>
                <h2>Тест на знание котиков</h2>
                <p>А тут можно пройти тест на знание кошачьих закидонов</p>
                <a className="button">Почитать факты о котиках</a>
            </div>
            <img className='picture' src='https://i.pinimg.com/564x/ab/c4/d3/abc4d329811c39f0a5e4286b9743c0d0.jpg'/>
        </div>
        <div className='h-box'>
            <div className='info'>
                <h2>Полезная информация</h2>
                <p>Тут можно ознакомиться с полезной информацией, которая пригодится, если решите завести котика</p>
                <a className="button">Почитать факты о котиках</a>
            </div>
            <img className='picture' src='https://i.pinimg.com/564x/25/38/c8/2538c83f9c267c409aacc422f34fcd80.jpg'/>
        </div>
        <div className='h-box'>
            <div className='info'>
                <h2>О создании сайта</h2>
                <p>А здесь можно получить немного информации о том, как создавался сайт</p>
                <a className="button">Почитать факты о котиках</a>
            </div>
            <img className='picture' src='https://i.pinimg.com/564x/fb/74/a6/fb74a6df5ab0663e4eb038f808c63068.jpg'/>
        </div>
    </div>
  )
}

export  default Home;