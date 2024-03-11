import React from "react";
import { useRouter } from "next/router";

import { BsTwitter } from "react-icons/bs";

const SidebarLogo: React.FC = () => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.push("/")}
			className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 transition cursor-pointer"
		>
			<BsTwitter className="text-blue-500" size={30} />
		</div>
	);
};

export default SidebarLogo;
