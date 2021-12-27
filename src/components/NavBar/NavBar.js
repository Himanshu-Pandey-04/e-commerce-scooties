import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component {
    constructor() {
        super();
        this.state = { show: false };
    }

    render() {
        return (
            <>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <div className='header'>
                    <div className='top-header'>
                        <a className='support' href='/'><i className='fa fa-phone'></i>Support : +91 - 9090909090</a>
                        <a className='book-ride' href='/'><i className="fa fa-motorcycle"></i> Book a FREE Test Ride Now</a>
                        <div className='options'>
                            <a href='/'>Contact</a>
                            <a href='/'>Career</a>
                            <a href='/'>Media <i className='fa fa-angle-down'></i></a>
                        </div>
                    </div>
                    <div className='toggle-menu'><i class="fa fa-bars" onClick={toggleMenu}></i></div>
                    <div className='bottom-header'>
                        <div className='logo' onClick={this.closeSubMenu}><i className="fa fa-square"></i></div>
                        <div className='options'>
                            <button className='btn btn-center' href='/'>About</button>
                            <button className='btn btn-center' href='/'>Locate Store</button>
                            <li className='dropdown' onClick={toggleSubMenu}>Scooters <i className='fa fa-angle-down'></i></li>
                            <li className='dropdown'>Purchase Assistance <i className='fa fa-angle-down'></i></li>
                        </div>
                        <a className='dealership' href='/'>Dealership</a>
                    </div>
                </div>
                <div className='sub-menu'>
                    <a className='option o-left' href='/'>HRX350 Bike</a>
                    <a className='option o-left' href='/'>GEAR350 EB</a>
                    <a className='option o-left' href='/'>RX - AK290 EB</a>
                    <a className='option o-left' href='/'>GBM - Heavy</a>
                </div>
            </>
        )
    }
}


function toggleMenu() {
    var menu = document.getElementsByClassName('bottom-header')[0];
    var sub_menu = document.getElementsByClassName('sub-menu')[0];
    if(menu.style.display !== 'none')
    {
        menu.style.display = 'none';
        sub_menu.style.display = 'none';
    }

    else menu.style.display = 'flex';
}

function toggleSubMenu() {
    var sub_menu = document.getElementsByClassName('sub-menu')[0];
    if(sub_menu.style.display == 'none') sub_menu.style.display = 'flex';
    else sub_menu.style.display = 'none';
    console.log('toggleSubMenu');
}

function closeMenu() {
    var mediaQ = window.matchMedia("(max-width: 700px)");
    if(mediaQ.matches)
    {
        var menu = document.getElementsByClassName('bottom-header')[0];
        menu.style.display = 'none';
    }
}

function closeSubMenu() {
    var sub_menu = document.getElementsByClassName('sub-menu')[0];
    sub_menu.style.display = 'none';
    console.log('closeSubMenu');
}

function closeMenus() {
    closeMenu();
    closeSubMenu();
}

window.onscroll = closeMenus;