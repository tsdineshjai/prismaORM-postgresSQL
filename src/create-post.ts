import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
	await client.post.create({
		data: {
			title: "A positive mindset",
			content: "I am having a positive mindset no matter what happens in life",
			author: {
				connect: {
					id: 1,
				},
			},
		},
	});
}

main()
	.then(async () => {
		console.log(`post creating task was performed successfully`);
		await client.$disconnect();
	})
	.catch(async (e) => {
		console.log(e);
		await client.$disconnect();
		process.exit(1);
	});
