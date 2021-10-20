import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import "./SideBarIcon.styles.css";

const SideBarIcon = ({ icon, text = "toolip 💡" }) => (
  <SideBarIconStyle className="sidebar__icon">
    {/* Icon */}
    {icon}
    {/* Icon */}
    <Tooltip>{text}</Tooltip>
  </SideBarIconStyle>
);

const SideBarIconStyle = tw.div`
hover:rounded
bg-gray-800
cursor-pointer;
duration-300
ease-linear
flex
h-12
hover:bg-green-600
hover:text-white
items-center
justify-center
mb-2
mt-2
mx-auto
relative
rounded-3xl
shadow-lg
text-green-500
transition-all
w-12
`;

const Tooltip = tw.div`
absolute
w-auto
p-2
m-2
min-w-max
left-14
rounded-md
shadow-md
text-white
bg-gray-900
text-xs
font-bold
transition-all
duration-100
origin-left;
transform
scale-0
`;

export default SideBarIcon;
