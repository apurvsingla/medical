import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {HeaderMain} from './Header.styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ReactWhatsapp from 'react-whatsapp';
// import {Weight} from '../source'
import {useItem} from '../context';
import MenuIcon from '@material-ui/icons/Menu';
import {useMediaQuery} from '../MediaQuery/MediaQuery';
import {auth} from '../../firbase/firebase.utils';
import { useHistory, Link } from "react-router-dom";
import './Header.scss';

const sidebar = {
    menuItem: {
        width: '9vw', display: 'flex', justifyContent: 'center', cursor: 'pointer'
    }
}

const Header = ({currentUser}) => {
    let history = useHistory();
    let isPageWide = useMediaQuery('(max-width: 768px)')
    let isPageWideSearch = useMediaQuery('(max-width: 400px)')
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const Item = useItem();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <HeaderMain>
            {isPageWide ? <MenuIcon style={{color: 'white'}}/> : null}
            <h1 className="mainHeading"><sup style={{fontSize: '0.7rem', 
            position: 'relative', bottom: '3px', }}>BE</sup>
            <span onClick={() => history.push('/')}>
                Bodywise
                </span>
            </h1>
            <span
            className="otherText"
            >Shop</span>
            <span className="otherText" >Take Self - Assessment</span>
            <span className="otherText">
                <span onClick={handleClick}>
                    Choose Concerns
                    <ExpandMoreIcon style={{
                        position: 'relative',
                        top: 6,
                        width: 18
                    }}/>
                </span>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} style={sidebar.menuItem}>Hair</MenuItem>
                    <MenuItem onClick={handleClose} style={sidebar.menuItem}>Skin</MenuItem>
                    <MenuItem onClick={handleClose} style={sidebar.menuItem}>Weight</MenuItem>
                </Menu>
            </span>
            <span className="otherText">All Products</span>
            <span className="otherText">Book Consultaiton</span>

            <span>
                {isPageWideSearch ? null :  <SearchIcon  className="search"/>}
               
                <WhatsAppIcon className="otherIcons"/>
                <ReactWhatsapp number="1-212-736-5000" message="Hi! I want to know more about the products!" 
                style={{position: 'absolute', marginLeft:'-30px',marginTop: '17px', border: 'none',    
                height: '5vh', width: '2vw', zIndex: '2', overflow: 'hidden', backgroundColor: 'transparent',
                outline: 'none', cursor: 'pointer'
                }}/>
                {currentUser ? <span className="option"
                style={{color: 'white', cursor: 'pointer',}}
                onClick={() => auth.signOut()}
                >
                    SIGN OUT
                </span>: <Link
                className="signin"
                to="/signIn"
                >
                <AccountCircleIcon className="otherIcons" onClick={()=> history.push('/signIn')}/>
                    
                    </Link>}
                <LocalMallIcon className="otherIcons" onClick={() => history.push('/cart')}/>
                <span style={{color: 'white'}}>{Item}</span>
            </span>
            {/* <AppBar position="static"   className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h4" noWrap>
            BodyWise
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            Shop
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
          Take Self-Assesment
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
          Choose Corners
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
          All Products
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
          Book Consultaiton
          </Typography>
              <SearchIcon className={classes.paddingLeft}/>
            
        </Toolbar>
      </AppBar> */}
        </HeaderMain>
    )
}

export default Header;