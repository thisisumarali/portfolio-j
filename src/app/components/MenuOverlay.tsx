import React from 'react';
import NavLink from './NavLink';

interface MenuLink {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: MenuLink[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link, index) => (
        <li key={index} className='py-2'>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
