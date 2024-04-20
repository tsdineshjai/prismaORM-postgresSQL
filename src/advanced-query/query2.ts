import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
	log: ["info", "query"],
});

async function main() {
	let res = await prisma.post.findMany({
		take: 3,
		skip: 2,
	});
	console.log(res);
}

// take as same as LIMIT  eg: LIMIT 10 gives us 10 records, so does the take : 10
//skip is same as OFFSET eg: OFFSET 10 makes skip the 10 records, so does the skip : 10

main()
	.then(async () => {
		console.log("done");
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
