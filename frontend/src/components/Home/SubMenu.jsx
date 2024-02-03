const SubMenu = (props) => {
  const { image, name } = props.menu;
  return (
    <a
      href="#1"
      className="min-w-[96px] w-[96px] flex flex-col items-center text-center"
    >
      <img className="w-9 h-9 mb-2" src={image} alt="" />
      <div className="text-sm text-black font-medium">{name}</div>
    </a>
  );
};

export default SubMenu;
