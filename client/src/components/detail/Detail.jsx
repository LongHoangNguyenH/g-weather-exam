import { NavLink, Outlet } from 'react-router-dom';

const Detail = () => {
  const navLinks = [
    {
      name: 'Weather',
      href: '/weather',
    },
    {
      name: 'Subcribe',
      href: '/subcribe',
    },
    {
      name: 'Unsubcribe',
      href: '/unsubcribe',
    }
  ];
  return (
    <div className='flex flex-col p-10 gap-7'>
      <div className='flex items-center justify-center gap-7'>
        {navLinks.map((link) => (
          <NavLink
            to={link.href}
            key={link.name}
            className={({ isActive }) =>
              isActive
                ? 'flex flex-col items-center after:block after:w-[40px] after:h-[3px] after:bg-[#de800d] after:rounded-full'
                : 'after:block after:h-[3px]'
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Detail;
