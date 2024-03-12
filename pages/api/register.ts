import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	try {
		const { email, username, name, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 12);

		const user = await prisma.user.create({
			data: {
				email,
				username,
				name,
				hashedPassword,
				bio: "profile.png",
				coverImage: "profile.png",
				profileImage: "profile.png"
			}
		});

		return res
			.status(201)
			.json({ message: "User created successfully", user });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
}
