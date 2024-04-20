import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	// ... you will write your Prisma Client queries here

	//creating a user, should match the schema
	await prisma.user.create({
		data: {
			name: "shreya sri",
			email: "shereya@gmail.com",

			profile: {
				create: { bio: "she likes movies" },
			},
			posts: {
				create: {
					title: "a beautiful programming journey",
					content: "A life thats happily ever",
				},
			},
		},
	});

	const allUsers = await prisma.user.findMany({
		include: {
			posts: true,
			profile: true,
		},
	});
	//checks the records of the user table and returns the records in an array
	console.log(allUsers);
}

main()
	.then(async () => {
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
