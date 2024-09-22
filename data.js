const events = [
  {
    title: "Summer Music Fest",
    description:
      "A weekend-long festival with live performances from top artists across genres like pop, rock, and hip-hop. Fun for the whole family!",
    eventDate: "2024-06-20",
    organizer: "Global Beats Inc.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
    participants: [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        birthDate: "1990-05-15",
        reason: "Friends",
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        birthDate: "1988-10-22",
        reason: "Social media",
      },
      {
        name: "Mike Johnson",
        email: "mike.johnson@example.com",
        birthDate: "1992-07-10",
        reason: "Found myself",
      },
    ],
  },
  {
    title: "Comedy Night Extravaganza",
    description:
      "An evening filled with laughter featuring top comedians from around the country.",
    eventDate: "2024-07-15",
    organizer: "Laugh Factory Productions",
    imageUrl: "https://example.com/comedy-night.jpg",
    participants: [
      {
        name: "Alex Brown",
        email: "alex.brown@example.com",
        birthDate: "1995-03-05",
        reason: "Social media",
      },
      {
        name: "Linda White",
        email: "linda.white@example.com",
        birthDate: "1986-09-14",
        reason: "Friends",
      },
    ],
  },
  {
    title: "Gaming Marathon: Battle Royale Edition",
    description:
      "Join the ultimate battle royale tournament with exciting prizes for top players.",
    eventDate: "2024-08-05",
    organizer: "Gamer's Paradise",
    imageUrl: "https://example.com/gaming-marathon.jpg",
    participants: [
      {
        name: "Tom Hanks",
        email: "tom.hanks@example.com",
        birthDate: "1993-01-11",
        reason: "Found myself",
      },
      {
        name: "Emily Watson",
        email: "emily.watson@example.com",
        birthDate: "1990-04-30",
        reason: "Social media",
      },
      {
        name: "James Brown",
        email: "james.brown@example.com",
        birthDate: "1996-06-09",
        reason: "Friends",
      },
    ],
  },
  {
    title: "Outdoor Movie Night",
    description:
      "Enjoy a classic adventure movie under the stars with free popcorn for all.",
    eventDate: "2024-06-30",
    organizer: "CineWorld Events",
    imageUrl: "https://example.com/outdoor-movie-night.jpg",
    participants: [
      {
        name: "Alice Davis",
        email: "alice.davis@example.com",
        birthDate: "1989-07-07",
        reason: "Social media",
      },
      {
        name: "Robert Miller",
        email: "robert.miller@example.com",
        birthDate: "1994-02-18",
        reason: "Found myself",
      },
    ],
  },
  {
    title: "Art & Wine Festival",
    description:
      "Local art exhibitions paired with wine tastings from top vineyards.",
    eventDate: "2024-09-10",
    organizer: "Creative Minds Collective",
    imageUrl: "https://example.com/art-wine-festival.jpg",
    participants: [
      {
        name: "Sophia Wilson",
        email: "sophia.wilson@example.com",
        birthDate: "1987-11-12",
        reason: "Friends",
      },
      {
        name: "Brian Johnson",
        email: "brian.johnson@example.com",
        birthDate: "1991-08-19",
        reason: "Social media",
      },
      {
        name: "Chloe Lee",
        email: "chloe.lee@example.com",
        birthDate: "1998-12-01",
        reason: "Found myself",
      },
      {
        name: "Matthew Taylor",
        email: "matthew.taylor@example.com",
        birthDate: "1992-06-14",
        reason: "Friends",
      },
    ],
  },
  {
    title: "Halloween Costume Bash",
    description:
      "A massive costume party with music, games, and a contest for the best costume.",
    eventDate: "2024-10-31",
    organizer: "Fright Fest Crew",
    imageUrl: "https://example.com/halloween-bash.jpg",
    participants: [
      {
        name: "Olivia Martinez",
        email: "olivia.martinez@example.com",
        birthDate: "1985-03-22",
        reason: "Friends",
      },
      {
        name: "Liam Harris",
        email: "liam.harris@example.com",
        birthDate: "1993-12-15",
        reason: "Social media",
      },
      {
        name: "Zoe Moore",
        email: "zoe.moore@example.com",
        birthDate: "1997-08-09",
        reason: "Found myself",
      },
    ],
  },
  {
    title: "Retro Video Game Tournament",
    description:
      "A throwback gaming tournament featuring classics from the '90s.",
    eventDate: "2024-11-05",
    organizer: "Old School Gamers",
    imageUrl: "https://example.com/retro-gaming-tournament.jpg",
    participants: [
      {
        name: "Lucas Walker",
        email: "lucas.walker@example.com",
        birthDate: "1995-09-28",
        reason: "Social media",
      },
      {
        name: "Isabella Anderson",
        email: "isabella.anderson@example.com",
        birthDate: "1988-02-05",
        reason: "Friends",
      },
    ],
  },
  {
    title: "Winter Wonderland Parade",
    description:
      "A holiday parade with floats, performers, and a giant Christmas tree lighting.",
    eventDate: "2024-12-20",
    organizer: "Holiday Spirit Association",
    imageUrl: "https://example.com/winter-parade.jpg",
    participants: [
      {
        name: "Ethan Young",
        email: "ethan.young@example.com",
        birthDate: "1992-10-12",
        reason: "Friends",
      },
      {
        name: "Ava Scott",
        email: "ava.scott@example.com",
        birthDate: "1996-04-21",
        reason: "Found myself",
      },
      {
        name: "Mia Robinson",
        email: "mia.robinson@example.com",
        birthDate: "1990-08-11",
        reason: "Social media",
      },
    ],
  },
  {
    title: "New Year's Eve Fireworks Show",
    description:
      "Ring in the New Year with a fireworks show at the city's central park.",
    eventDate: "2024-12-31",
    organizer: "City of Entertainment",
    imageUrl: "https://example.com/new-year-fireworks.jpg",
    participants: [
      {
        name: "William Hall",
        email: "william.hall@example.com",
        birthDate: "1989-05-19",
        reason: "Found myself",
      },
      {
        name: "Sophie Wright",
        email: "sophie.wright@example.com",
        birthDate: "1997-03-16",
        reason: "Social media",
      },
      {
        name: "Ella King",
        email: "ella.king@example.com",
        birthDate: "1993-11-23",
        reason: "Friends",
      },
    ],
  },
  {
    title: "Spring Dance Party",
    description:
      "An outdoor dance party to celebrate the start of spring with top DJs.",
    eventDate: "2025-03-20",
    organizer: "Dance Nation",
    imageUrl: "https://example.com/spring-dance-party.jpg",
    participants: [
      {
        name: "Henry Lewis",
        email: "henry.lewis@example.com",
        birthDate: "1991-06-25",
        reason: "Social media",
      },
      {
        name: "Grace Harris",
        email: "grace.harris@example.com",
        birthDate: "1994-09-07",
        reason: "Found myself",
      },
    ],
  },
  {
    title: "International Food Festival",
    description: "Taste food from around the world with over 100 food stalls.",
    eventDate: "2024-07-10",
    organizer: "Culinary Explorers",
    imageUrl: "https://example.com/food-festival.jpg",
    participants: [
      {
        name: "Daniel Allen",
        email: "daniel.allen@example.com",
        birthDate: "1992-11-04",
        reason: "Friends",
      },
      {
        name: "Madison Brooks",
        email: "madison.brooks@example.com",
        birthDate: "1987-12-09",
        reason: "Social media",
      },
      {
        name: "Amelia Ross",
        email: "amelia.ross@example.com",
        birthDate: "1995-02-14",
        reason: "Found myself",
      },
    ],
  },
  {
    title: "Jazz by the Lake",
    description: "A serene evening with live jazz performances by the lake.",
    eventDate: "2024-08-15",
    organizer: "Smooth Sounds Inc.",
    imageUrl: "https://example.com/jazz-lake.jpg",
    participants: [
      {
        name: "Nathan Sanders",
        email: "nathan.sanders@example.com",
        birthDate: "1990-07-03",
        reason: "Social media",
      },
      {
        name: "Hannah Collins",
        email: "hannah.collins@example.com",
        birthDate: "1996-03-11",
        reason: "Found myself",
      },
    ],
  },
  {
    title: "Charity Run for Education",
    description:
      "A 5K run to raise money for educational programs in underserved communities.",
    eventDate: "2024-09-20",
    organizer: "Education for All",
    imageUrl: "https://example.com/charity-run.jpg",
    participants: [
      {
        name: "Jack Parker",
        email: "jack.parker@example.com",
        birthDate: "1988-04-13",
        reason: "Friends",
      },
      {
        name: "Isla Turner",
        email: "isla.turner@example.com",
        birthDate: "1994-01-23",
        reason: "Social media",
      },
    ],
  },
  {
    title: "Book Fair & Author Meet",
    description:
      "A large-scale book fair where visitors can meet their favorite authors.",
    eventDate: "2024-10-05",
    organizer: "Readers Delight",
    imageUrl: "https://example.com/book-fair.jpg",
    participants: [
      {
        name: "Dylan Edwards",
        email: "dylan.edwards@example.com",
        birthDate: "1991-12-22",
        reason: "Found myself",
      },
      {
        name: "Emma Brooks",
        email: "emma.brooks@example.com",
        birthDate: "1993-05-30",
        reason: "Friends",
      },
      {
        name: "Olivia Cox",
        email: "olivia.cox@example.com",
        birthDate: "1995-06-19",
        reason: "Social media",
      },
    ],
  },
  {
    title: "Rock Climbing Workshop",
    description:
      "An outdoor rock climbing workshop for beginners and enthusiasts alike.",
    eventDate: "2024-11-10",
    organizer: "Adventure Seekers",
    imageUrl: "https://example.com/rock-climbing.jpg",
    participants: [
      {
        name: "Lucas Hill",
        email: "lucas.hill@example.com",
        birthDate: "1997-10-28",
        reason: "Found myself",
      },
      {
        name: "Ella Ramirez",
        email: "ella.ramirez@example.com",
        birthDate: "1991-01-15",
        reason: "Social media",
      },
    ],
  },
];

export default events;

// const events = [
// 	{
// 		title: "Summer Music Fest",
// 		description: "A weekend-long festival with live performances from top artists across genres like pop, rock, and hip-hop. Fun for the whole family!",
// 		eventDate: "2024-06-20",
// 		organizer: "Global Beats Inc.",
// 		participants: [
// 			{
// 				name: "John Doe",
// 				email: "john.doe@example.com",
// 				birthDate: "1990-05-15",
// 				reason: "Friends"
// 			},
// 			{
// 				name: "Jane Smith",
// 				email: "jane.smith@example.com",
// 				birthDate: "1988-10-22",
// 				reason: "Social media"
// 			},
// 			{
// 				name: "Mike Johnson",
// 				email: "mike.johnson@example.com",
// 				birthDate: "1992-07-10",
// 				reason: "Found myself"
// 			}
// 		]
// 	},
// 	{
// 		title: "Comedy Night Extravaganza",
// 		description: "An evening filled with laughter featuring top comedians from around the country.",
// 		eventDate: "2024-07-15",
// 		organizer: "Laugh Factory Productions",
// 		participants: [
// 			{
// 				name: "Alex Brown",
// 				email: "alex.brown@example.com",
// 				birthDate: "1995-03-05",
// 				reason: "Social media"
// 			},
// 			{
// 				name: "Linda White",
// 				email: "linda.white@example.com",
// 				birthDate: "1986-09-14",
// 				reason: "Friends"
// 			}
// 		]
// 	},
// 	{
// 		title: "Gaming Marathon: Battle Royale Edition",
// 		description: "Join the ultimate battle royale tournament with exciting prizes for top players.",
// 		eventDate: "2024-08-05",
// 		organizer: "Gamer's Paradise",
// 		participants: [
// 			{
// 				name: "Tom Hanks",
// 				email: "tom.hanks@example.com",
// 				birthDate: "1993-01-11",
// 				reason: "Found myself"
// 			},
// 			{
// 				name: "Emily Watson",
// 				email: "emily.watson@example.com",
// 				birthDate: "1990-04-30",
// 				reason: "Social media"
// 			},
// 			{
// 				name: "James Brown",
// 				email: "james.brown@example.com",
// 				birthDate: "1996-06-09",
// 				reason: "Friends"
// 			}
// 		]
// 	},
// 	{
// 		title: "Outdoor Movie Night",
// 		description: "Enjoy a classic adventure movie under the stars with free popcorn for all.",
// 		eventDate: "2024-06-30",
// 		organizer: "CineWorld Events",
// 		participants: [
// 			{
// 				name: "Alice Davis",
// 				email: "alice.davis@example.com",
// 				birthDate: "1989-07-07",
// 				reason: "Social media"
// 			},
// 			{
// 				name: "Robert Miller",
// 				email: "robert.miller@example.com",
// 				birthDate: "1994-02-18",
// 				reason: "Found myself"
// 			}
// 		]
// 	},
// 	{
// 		title: "Art & Wine Festival",
// 		description: "Local art exhibitions paired with wine tastings from top vineyards.",
// 		eventDate: "2024-09-10",
// 		organizer: "Creative Minds Collective",
// 		participants: [
// 			{
// 				name: "Sophia Wilson",
// 				email: "sophia.wilson@example.com",
// 				birthDate: "1987-11-12",
// 				reason: "Friends"
// 			},
// 			{
// 				name: "Brian Johnson",
// 				email: "brian.johnson@example.com",
// 				birthDate: "1991-08-19",
// 				reason: "Social media"
// 			},
// 			{
// 				name: "Chloe Lee",
// 				email: "chloe.lee@example.com",
// 				birthDate: "1998-12-01",
// 				reason: "Found myself"
// 			},
// 			{
// 				name: "Matthew Taylor",
// 				email: "matthew.taylor@example.com",
// 				birthDate: "1992-06-14",
// 				reason: "Friends"
// 			}
// 		]
// 	},
// 	{
// 		title: "Halloween Costume Bash",
// 		description: "A massive costume party with music, games, and a contest for the best costume.",
// 		eventDate: "2024-10-31",
// 		organizer: "Fright Fest Crew",
// 		participants: [
// 			{
// 				name: "Olivia Martinez",
// 				email: "olivia.martinez@example.com",
// 				birthDate: "1985-03-22",
// 				reason: "Friends"
// 			},
// 			{
// 				name: "Liam Harris",
// 				email: "liam.harris@example.com",
// 				birthDate: "1993-12-15",
// 				reason: "Social media"
// 			},
// 			{
// 				name: "Zoe Moore",
// 				email: "zoe.moore@example.com",
// 				birthDate: "1997-08-09",
// 				reason: "Found myself"
// 			}
// 		]
// 	},
// 	{
// 		title: "Retro Video Game Tournament",
// 		description: "A throwback gaming tournament featuring classics from the '90s.",
// 		eventDate: "2024-11-05",
// 		organizer: "Old School Gamers",
// 		participants: [
// 			{
// 				name: "Lucas Walker",
// 				email: "lucas.walker@example.com",
// 				birthDate: "1995-09-28",
// 				reason: "Social media"
// 			},
// 			{
// 				name: "Isabella Anderson",
// 				email: "isabella.anderson@example.com",
// 				birthDate: "1988-02-05",
// 				reason: "Friends"
// 			}
// 		]
// 	},
// 	{
// 		title: "Winter Wonderland Parade",
// 		description: "A holiday parade with floats, performers, and a giant Christmas tree lighting.",
// 		eventDate: "2024-12-20",
// 		organizer: "Holiday Spirit Association",
// 		participants: [
// 			{
// 				name: "Ethan Young",
// 				email: "ethan.young@example.com",
// 				birthDate: "1992-10-12",
// 				reason: "Friends"
// 			},
// 			{
// 				name: "Ava Scott",
// 				email: "ava.scott@example.com",
// 				birthDate: "1996-04-21",
// 				reason: "Found myself"
// 			},
// 			{
// 				name: "Mia Robinson",
// 				email: "mia.robinson@example.com",
// 				birthDate: "1990-08-11",
// 				reason: "Social media"
// 			}
// 		]
// 	},
// 	{
// 		title: "New Year's Eve Fireworks Show",
// 		description: "Ring in the New Year with a fireworks show at the city's central park.",
// 		eventDate: "2024-12-31",
// 		organizer: "City of Entertainment",
// 		participants: [
// 			{
// 				name: "William Hall",
// 				email: "william.hall@example.com",
// 				birthDate: "1989-05-19",
// 				reason: "Found myself"
// 			},
// 			{
// 				name: "Sophie Wright",
// 				email: "sophie.wright@example.com",
// 				birthDate: "1997-03-16",
// 				reason: "Social media"
// 			},
// 			{
// 				name: "Ella King",
// 				email: "ella.king@example.com",
// 				birthDate: "1993-11-23",
// 				reason: "Friends"
// 			}
// 		]
// 	},
// 	{
// 		title: "Spring Dance Party",
// 		description: "An outdoor dance party to celebrate the start of spring with top DJs.",
// 		eventDate: "2025-03-20",
// 		organizer: "Dance Nation",
// 		participants: [
// 			{
// 				name: "Henry Lewis",
// 				email: "henry.lewis@example.com",
// 				birthDate: "1991-06-25",
// 				reason: "Social media"
// 			},
// 			{
// 				name: "Grace Harris",
// 				email: "grace.harris@example.com",
// 				birthDate: "1994-09-07",
// 				reason: "Found myself"
// 			}
// 		]
// 	},
// 	{
// 		title: "International Food Festival",
// 		description: "Taste food from around the world with over 100 food stalls.",
// 		eventDate: "2024-07-10",
// 		organizer: "Culinary Explorers",
// 		participants: [
// 			{
// 				name: "Daniel Allen",
// 				email: "daniel.allen@example.com",
// 				birthDate: "1992-11-04",
// 				reason: "Friends"
// 			},
// 			{
// 				name: "Madison Brooks",
// 				email: "madison.brooks@example.com",
// 				birthDate: "1987-12-09",
// 				reason: "Social media"
// 			},
// 			{
// 				name: "Amelia Ross",
// 				email: "amelia.ross@example.com",
// 				birthDate: "1995-02-14",
// 				reason: "Found myself"
// 			}
// 		]
// 	},
// 	{
// 		title: "Jazz by the Lake",
// 		description: "A serene evening with live jazz performances by the lake.",
// 		eventDate: "2024-08-15",
// 		organizer: "Smooth Sounds Inc.",
// 		participants: [
// 			{
// 				name: "Nathan Sanders",
// 				email: "nathan.sanders@example.com",
// 				birthDate: "1990-07-03",
// 				reason: "Social media"
// 			},
// 			{
// 				name: "Hannah Collins",
// 				email: "hannah.collins@example.com",
// 				birthDate: "1996-03-11",
// 				reason: "Found myself"
// 			}
// 		]
// 	},
// 	{
// 		title: "Charity Run for Education",
// 		description: "A 5K run to raise money for educational programs in underserved communities.",
// 		eventDate: "2024-09-20",
// 		organizer: "Education for All",
// 		participants: [
// 			{
// 				name: "Jack Parker",
// 				email: "jack.parker@example.com",
// 				birthDate: "1988-04-13",
// 				reason: "Friends"
// 			},
// 			{
// 				name: "Isla Turner",
// 				email: "isla.turner@example.com",
// 				birthDate: "1994-01-23",
// 				reason: "Social media"
// 			}
// 		]
// 	},
// 	{
// 		title: "Book Fair & Author Meet",
// 		description: "A large-scale book fair where visitors can meet their favorite authors.",
// 		eventDate: "2024-10-05",
// 		organizer: "Readers Delight",
// 		participants: [
// 			{
// 				name: "Dylan Edwards",
// 				email: "dylan.edwards@example.com",
// 				birthDate: "1991-12-22",
// 				reason: "Found myself"
// 			},
// 			{
// 				name: "Emma Brooks",
// 				email: "emma.brooks@example.com",
// 				birthDate: "1993-05-30",
// 				reason: "Friends"
// 			},
// 			{
// 				name: "Olivia Cox",
// 				email: "olivia.cox@example.com",
// 				birthDate: "1995-06-19",
// 				reason: "Social media"
// 			}
// 		]
// 	},
// 	{
// 		title: "Rock Climbing Workshop",
// 		description: "An outdoor rock climbing workshop for beginners and enthusiasts alike.",
// 		eventDate: "2024-11-10",
// 		organizer: "Adventure Seekers",
// 		participants: [
// 			{
// 				name: "Lucas Hill",
// 				email: "lucas.hill@example.com",
// 				birthDate: "1997-10-28",
// 				reason: "Found myself"
// 			},
// 			{
// 				name: "Ella Ramirez",
// 				email: "ella.ramirez@example.com",
// 				birthDate: "1991-01-15",
// 				reason: "Social media"
// 			}
// 		]
// 	}
// ];

// export default events
