import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prisma from "@/libs/prismadb";

const serverAuth = async (req: NextApiRequest) => {
	const session = await getSession({ req });

	if (!session?.user?.email) {
		return {
			status: 401,
			data: { message: "Unauthorized" }
		};
	}

	const currentUser = await prisma.user.findUnique({
		where: { email: session.user.email }
	});

	if (!currentUser) {
		return {
			status: 401,
			data: { message: "Unauthorized" }
		};
	}

	return { status: 200, currentUser };
};

export default serverAuth;
