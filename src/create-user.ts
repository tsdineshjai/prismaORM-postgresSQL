import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	// ... you will write your Prisma Client queries here

	//creating a user, should match the schema and doing posts as well
	await prisma.user.create({
		data: {
			name: "dummy usser",
			email: "dummy@gmail.com",

			profile: {
				create: { bio: "dummy likes anything" },
			},
			posts: {
				create: {
					title: "a wild hog",
					content: "a story that aynone can inspire on",
				},
			},
		},
	});
}

main()
	.then(async () => {
		console.log(`user was created succesfully`);
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

/* 
  Here's a quick overview of the different parts of the code snippet:

    Import the PrismaClient constructor from the @prisma/client node module
    Instantiate PrismaClient
    Define an async function named main to send queries to the database
    Call the main function
    Close the database connections when the script terminates

  */
