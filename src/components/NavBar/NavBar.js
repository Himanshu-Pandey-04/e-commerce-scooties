import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component {
    constructor() {
        super();
        this.state = { show: false };
    }

    toggleMenu = () => {
        var property = document.getElementsByClassName('submenu')[0].style.display;
        if(property === 'flex') property = 'none';
        else property = 'flex';
        
    }
    

    render() {
        return (
            <>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <div className='header'>
                    <div className='top-header'>
                        <a><i className='fa fa-phone'></i>Support : +91 - 9090909090</a>
                        <a className='book-ride' href='/'><i class="fa fa-motorcycle"></i> Book a FREE Test Ride Now</a>
                        <div className='options'>
                            <a href='/'>Contact</a>
                            <a href='/'>Career</a>
                            <a href='/'>Media <i className='fa fa-angle-down'></i></a>
                        </div>
                    </div>
                    <div className='bottom-header'>
                        <div className='logo'><i className="fa fa-square"></i></div>
                        <div className='options'>
                            <button className='btn btn-center' href='/'>About</button>
                            <button className='btn btn-center' href='/'>Locate Store</button>
                            <li className='dropdown' href='/' onClick={this.toggleMenu}>Scooters <i className='fa fa-angle-down'></i></li>
                            <li className='dropdown' href='/'>Purchase Assistance <i className='fa fa-angle-down'></i></li>
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
