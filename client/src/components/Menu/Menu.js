import { useState } from 'react';
import MenuItem from './MenuItem';
import { MENU_ITEMS } from './MenuConstants'

import './Menu.css';

const Menu = ({
    onMenuItemClick
}) => {
    const [currentItem, setCurrentItem] = useState();

    const menuItemClickHandler = (id) => {
        setCurrentItem(id);
        onMenuItemClick(id);
    }

    return (
        <aside className="menu">
            {MENU_ITEMS.map(x => 
                <MenuItem 
                    key={x.id}
                    id={x.id}
                    isSelected={x.id == currentItem}
                    onClick={menuItemClickHandler}
                >
                    {x.text}
                </MenuItem>
            )}
        </aside>
    );
}

export default Menu;
