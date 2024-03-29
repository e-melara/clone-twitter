import React from "react";

import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsHouseFill, BsBellFill } from "react-icons/bs";

import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar: React.FC = () => {
	const items = [
		{
			label: "Home",
			href: "/",
			icon: BsHouseFill
		},
		{
			label: "Notificaciones",
			href: "/notifications",
			icon: BsBellFill
		},
		{
			label: "Profile",
			href: "/users/123",
			icon: FaUser
		}
	];
	return (
		<div className="col-span-1 h-full pr-4 md:pr-6">
			<div className="flex flex-col items-end">
				<div className="space-y-2 lg:w-[230px]">
					<SidebarLogo />
					{items.map((item, index) => (
						<SidebarItem
							key={index}
							label={item.label}
							href={item.href}
							icon={item.icon}
						/>
					))}
					<SidebarItem
						onClick={() => {}}
						icon={BiLogOut}
						label="Logout"
					/>
					<SidebarTweetButton />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
