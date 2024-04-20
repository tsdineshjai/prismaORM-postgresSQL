import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const res = await prisma.user.findMany({
		where: {
			email: {
				endsWith: "gmail.com",
			},
			posts: {
				//atleast has one post got published
				some: {
					published: true,
				},
			},
		},
		include: {
			posts: {
				where: {
					published: true,
				},
			},
		},
	});

	console.log(res);

	// console.log(res[0].posts[0]);
	// console.log(res[0].posts[1]);
}

main()
	.then(async () => {
		console.log(`query has been performed successfully`);
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});
