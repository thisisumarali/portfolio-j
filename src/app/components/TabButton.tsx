import React, { ReactNode, FC, MouseEventHandler } from 'react';

interface TabButtonProps {
  active: boolean;
  selectTab: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const TabButton: FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'text-white border-b border-yellow-500'
    : 'hover:text-[#ADB7BE] hover:border-b hover:border-yellow-500';

  return (
    <button onClick={selectTab}>
      <p className={`mr-4 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
