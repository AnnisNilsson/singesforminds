import React, {useState, useEffect} from 'react';
import NavbarDrawer from './NavbarDrawer';
import NavbarDesktop from './NavbarDesktop';

const Navbar = () => {
    const [drawerActivate, setDrawerActivate] = useState(false);

    useEffect(() => {
        if(window.innerWidth <= 900) {
            setDrawerActivate(true);
        }

        window.addEventListener('resize', () => {
            if(window.innerWidth <= 900) {
                setDrawerActivate(true);
            } else {
                setDrawerActivate(false);
            }
        })
    }, []);

    const createDrawer = () => {
        return(
            <NavbarDrawer />
        )
    }

    const destroyDrawer = () => {
        return(
            <NavbarDesktop />        
            )
    }
    return(
        <div>
            {drawerActivate ? createDrawer() : destroyDrawer()}
        </div>
    )
}
export default Navbar;