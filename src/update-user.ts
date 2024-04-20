import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
	const post = await client.post.update({
		where: { id: 1 },
		data: { published: true },
	});

	console.log(post);
}

main()
	.then(async () => {
		console.log(`query was performed successfully`);
		await client.$disconnect();
	})
	.catch(async (e) => {
		console.log(e);
		await client.$disconnect();
		process.exit(1);
	});
