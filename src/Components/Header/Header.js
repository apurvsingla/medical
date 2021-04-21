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
const sidebar = {
    menuItem: {
        width: '9vw', display: 'flex', justifyContent: 'center'
    },
    search: {
        paddingTop: '15px',paddingLeft: '22px', height: 34, width: 40, color: 'white'
    },
    otherIcons: {
        paddingLeft: '15px', paddingBottom: '3px', width: 40,height: 30, color: 'white'
    },
    otherText: {
        paddingRight: '2%', paddingTop: '8px', color: 'white',fontWeight: '450'
    },
    mainHeading: {
        paddingRight: '4%', fontWeight: 'normal',color: 'white'
    }
}

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <HeaderMain>
            <h1 style={sidebar.mainHeading}><sup style={{fontSize: '0.7rem', 
            position: 'relative', bottom: '3px'}}>BE</sup>
                Bodywise
            </h1>
            <span style={sidebar.otherText} >Shop</span>
            <span style={sidebar.otherText} >Take Self - Assessment</span>
            <span style={sidebar.otherText}>
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
            <span style={sidebar.otherText}>All Products</span>
            <span style={sidebar.otherText}>Book Consultaiton</span>

            <span>
                <SearchIcon  style={sidebar.search}/>
                <WhatsAppIcon style={sidebar.otherIcons}/>
                <AccountCircleIcon style={sidebar.otherIcons}/>
                <LocalMallIcon style={sidebar.otherIcons}/>
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