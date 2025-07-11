import MenuItem from "./MenuItem";
function MenuList({ menuList = [] }) {
  return (
    <ul className="ml-4 p-1">
      {menuList && menuList.length > 0
        ? menuList.map((item, index) => {
            return <MenuItem item={item} key={index} />;
          })
        : null}
    </ul>
  );
}
export default MenuList;
