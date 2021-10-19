import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  return (
    <div
      //   className="flex fixed top-0 left-0 flex-col m-0 w-16 h-screen text-white bg-gray-900 shadow-lg"
      class="fixed top-0 left-0 m-0 w-16 h-screen text-white bg-gray-900 border-2 shadow-lg"
    >
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
    </div>
  );
};

export default SideBar;
