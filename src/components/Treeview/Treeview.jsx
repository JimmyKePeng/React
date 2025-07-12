import MenuList from "./MenuList";
import { menuList } from "./data";
// function Treeview({ menuList = [] })
function Treeview() {
  // menuList = menuList;
  return (
    <div className="bg-amber-200 min-h-10 w-[100%]">
      <div className="bg-blue-200  h-full w-[20%] p-5">
        <MenuList menuList={menuList} />
      </div>
    </div>
  );
}
export default Treeview;
