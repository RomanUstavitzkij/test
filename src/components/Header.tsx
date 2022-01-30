import React from 'react';
import {Avatar} from "@mui/material";
import { deepPurple } from '@mui/material/colors';
import {Link, Outlet} from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className='header'>
            <Link className={'header_link'} to={'/'}>
                <Avatar className='header__avatar' sx={{ bgcolor: deepPurple[500] }}>
                    H
                </Avatar>
            </Link>
            <Link className={'header_link'} to={'/profile'}>
                <Avatar className='header__avatar' sx={{ bgcolor: deepPurple[500] }}>
                    P
                </Avatar>
            </Link>
        </div>
        <Outlet/>
        </>
    );
};

export default Header;
