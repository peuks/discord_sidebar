import { SideBarIcon } from "@ui";
import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import tw from "tailwind-styled-components";

const SideBar = () => {
  return (
    <SideBarStyle>
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
    </SideBarStyle>
  );
};

const SideBarStyle = tw.div`
// Color
text-white
bg-gray-900
shadow-lg
// position
fixed
top-0
left-0
// width
m-0
w-16
h-screen
`;

export default SideBar;
