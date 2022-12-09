import React from 'react';
import ReactDOM from 'react-dom/client';

function Header (){
  console.log("Hello");
  return (
    <>
        <div className='header-menu'>
            <p className='h-button'>О создателе</p>
            <p className='h-button'>Контакты</p>
            <p className='h-button'>Форма обратной связи</p>
        </div>
        <h1 className='heading'>Портал про котиков</h1>
    </>
  )
}

export  default Header;