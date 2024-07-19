interface NavLinkProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ onClick, children }) => {
  return (
    <a className="nav_link" onClick={onClick}>
      {children}
    </a>
  );
};
