import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const deletePosts = await prisma.profile.deleteMany({
		where: {
			userId: 3,
		},
	});

	const deleteUser = await prisma.user.delete({
		where: {
			email: "dummy@gmail.com",
		},
	});
	console.log(deleteUser);
}

main()
	.then(async () => {
		console.log(`user has been deleted successfully`);
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});

/* We cant delete a user if he is connected to the posts, so first we need to delete the posts created by him */
