import React from 'react'
import NavItem from './Item';
export default function Nav({navItems}) {
    return (
<>
<div className="header__second--down">
            <div className="header__second--down--tabs">
                {navItems.map((item, key) =>{return <NavItem key={key} item={item} />})}
            </div>
          </div>
</>
    );
}
