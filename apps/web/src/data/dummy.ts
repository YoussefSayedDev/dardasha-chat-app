import type { Chat, MediaContent, Message, User } from "@/types";

// Sample data arrays for realistic generation
const firstNames = [
  "Alex",
  "Sam",
  "Jordan",
  "Taylor",
  "Morgan",
  "Casey",
  "Riley",
  "Avery",
  "Quinn",
  "Sage",
  "Emma",
  "Liam",
  "Olivia",
  "Noah",
  "Ava",
  "Oliver",
  "Sophia",
  "Elijah",
  "Charlotte",
  "William",
  "Amelia",
  "James",
  "Isabella",
  "Lucas",
  "Mia",
  "Henry",
  "Harper",
  "Alexander",
  "Evelyn",
  "Mason",
  "Luna",
  "Michael",
  "Ella",
  "Ethan",
  "Elizabeth",
  "Daniel",
  "Sofia",
  "Matthew",
  "Emily",
  "Jackson",
  "Madison",
  "Sebastian",
  "Scarlett",
  "Jack",
  "Victoria",
  "Aiden",
  "Aria",
  "Owen",
  "Grace",
  "Samuel",
  "Chloe",
  "Joseph",
  "Camila",
  "John",
  "Penelope",
  "David",
  "Riley",
  "Wyatt",
  "Layla",
  "Carter",
  "Nora",
  "Luke",
  "Zoey",
  "Jayden",
  "Mila",
  "Dylan",
  "Aubrey",
  "Grayson",
  "Hannah",
  "Levi",
  "Lily",
  "Isaac",
  "Addison",
  "Gabriel",
  "Eleanor",
  "Julian",
  "Natalie",
  "Mateo",
  "Anna",
  "Anthony",
  "Stella",
  "Jaxon",
  "Zoe",
  "Lincoln",
  "Leah",
  "Joshua",
  "Hazel",
  "Christopher",
  "Violet",
  "Andrew",
  "Aurora",
  "Theodore",
  "Savannah",
  "Caleb",
  "Audrey",
  "Ryan",
  "Brooklyn",
  "Asher",
  "Bella",
  "Nathan",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
  "Walker",
  "Young",
  "Allen",
  "King",
  "Wright",
  "Scott",
  "Torres",
  "Nguyen",
  "Hill",
  "Flores",
  "Green",
  "Adams",
  "Nelson",
  "Baker",
  "Hall",
  "Rivera",
  "Campbell",
  "Mitchell",
  "Carter",
  "Roberts",
];

const textMessages = [
  "Hey, how's it going?",
  "What's up?",
  "Good morning!",
  "Have a great day!",
  "Thanks!",
  "You're welcome",
  "See you later",
  "Talk soon",
  "That's awesome!",
  "Congratulations!",
  "I'm so excited!",
  "Can't wait!",
  "Let me know",
  "Sounds good",
  "Perfect!",
  "Absolutely",
  "For sure",
  "Maybe later",
  "Not sure yet",
  "I'll think about it",
  "What do you think?",
  "Any thoughts?",
  "Makes sense",
  "Good point",
  "Exactly!",
  "Haha that's funny",
  "LOL",
  "😂",
  "That's hilarious",
  "OMG",
  "No way!",
  "Really?",
  "Seriously?",
  "I can't believe it",
  "That's crazy",
  "Wow",
  "Amazing!",
  "Incredible",
  "Fantastic",
  "Wonderful",
  "How was your day?",
  "What are you up to?",
  "Busy day today",
  "Almost done with work",
  "Finally weekend!",
  "Any plans for tonight?",
  "Want to hang out?",
  "Let's grab coffee",
  "Dinner sounds great",
  "I'm free",
  "Running late",
  "On my way",
  "Almost there",
  "Just arrived",
  "Where are you?",
  "Coming now",
  "Thanks for the help",
  "I appreciate it",
  "You're the best",
  "Thanks so much",
  "I owe you one",
  "No problem",
  "Happy to help",
  "Anytime",
  "Don't mention it",
  "My pleasure",
  "Glad I could help",
  "Good luck!",
  "Hope it goes well",
  "You've got this",
  "Thinking of you",
  "Take care",
  "Be safe",
  "Miss you",
  "Love you",
  "Sweet dreams",
  "Good night",
  "Sleep well",
  "See you tomorrow",
  "Have a good trip",
  "Safe travels",
  "Enjoy your vacation",
  "Have fun!",
  "Wish I could be there",
  "Looks like fun",
  "Sounds like a blast",
  "Hope you're having a great time",
  "Can't wait to hear about it",
];

const groupNames = [
  "Family Group",
  "Work Team",
  "College Friends",
  "Weekend Warriors",
  "Book Club",
  "Gym Buddies",
  "Travel Squad",
  "Gaming Crew",
  "Neighbors",
  "Study Group",
  "Project Alpha",
  "Marketing Team",
  "Dev Squad",
  "Design Team",
  "Sales Force",
  "HR Circle",
  "Finance Friends",
  "Planning Committee",
  "Event Organizers",
  "Sports Club",
  "Photography Group",
  "Music Lovers",
  "Foodies",
  "Pet Parents",
  "Running Club",
  "Yoga Friends",
  "Hiking Group",
  "Movie Night",
  "Trivia Team",
  "Art Enthusiasts",
];

const domains = [
  "example.com",
  "media.net",
  "cdn.site",
  "storage.app",
  "files.io",
];

// Utility functions
function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

function generateTimestamp(daysAgo: number = 0, hoursAgo: number = 0): string {
  const now = new Date();
  now.setDate(now.getDate() - daysAgo);
  now.setHours(now.getHours() - hoursAgo);
  now.setMinutes(now.getMinutes() - randomInt(0, 59));
  return now.toISOString();
}

function generateMediaContent(type: Message["type"]): MediaContent {
  const domain = randomChoice(domains);
  const fileId = generateId();

  switch (type) {
    case "image":
      return {
        url: `https://${domain}/images/${fileId}.jpg`,
        caption: Math.random() > 0.7 ? randomChoice(textMessages) : undefined,
      };
    case "video":
      return {
        url: `https://${domain}/videos/${fileId}.mp4`,
        caption: Math.random() > 0.7 ? randomChoice(textMessages) : undefined,
        duration: randomInt(5, 300),
      };
    case "audio":
      return {
        url: `https://${domain}/audio/${fileId}.mp3`,
        duration: randomInt(1, 180),
      };
    case "file": {
      const extensions = ["pdf", "doc", "xlsx", "zip", "txt"];
      return {
        url: `https://${domain}/files/${fileId}.${randomChoice(extensions)}`,
      };
    }
    default:
      return { url: "" };
  }
}

// Generate Users
function generateUsers(count: number): User[] {
  const users: User[] = [];
  const usedNames = new Set<string>();

  for (let i = 0; i < count; i++) {
    let name: string;
    do {
      name = `${randomChoice(firstNames)} ${randomChoice(lastNames)}`;
    } while (usedNames.has(name));
    usedNames.add(name);

    users.push({
      id: generateId(),
      name,
      avatar:
        Math.random() > 0.3
          ? `https://avatar.site/avatar/${generateId()}.jpg`
          : null,
      lastSeen: generateTimestamp(randomInt(0, 7), randomInt(0, 24)),
      status: Math.random() > 0.5 ? "online" : "offline",
    });
  }

  return users;
}

// Generate Chats
function generateChats(users: User[], chatCount: number): Chat[] {
  const chats: Chat[] = [];

  for (let i = 0; i < chatCount; i++) {
    const isGroup = Math.random() > 0.3; // 70% chance of group chat
    let participants: User[] = [];
    let name: string;

    if (isGroup) {
      const participantCount = randomInt(3, 12);
      const shuffled = [...users].sort(() => 0.5 - Math.random());
      participants = shuffled.slice(0, participantCount);
      name = randomChoice(groupNames);
    } else {
      participants = [users[0], users[randomInt(1, users.length - 1)]];
      name = participants[1].name; // For 1-on-1, name is the other person's name
    }

    // Create a temporary last message (will be updated when we generate actual messages)
    const tempLastMessage: Message = {
      id: generateId(),
      senderId: randomChoice(participants).id,
      chatId: generateId(),
      type: "text",
      content: randomChoice(textMessages),
      timestamp: generateTimestamp(randomInt(0, 30)),
      status: randomChoice(["sent", "delivered", "seen"]),
    };

    const chat: Chat = {
      id: generateId(),
      isGroup,
      name,
      participants,
      lastMessage: tempLastMessage,
      updatedAt: tempLastMessage.timestamp,
      favorite: Math.random() > 0.5,
      unread: Math.floor(Math.random() * 10),
    };

    // Update the chatId in the temp message
    tempLastMessage.chatId = chat.id;

    chats.push(chat);
  }

  return chats;
}

// Generate Messages
function generateMessages(chats: Chat[], messageCount: number): Message[] {
  const messages: Message[] = [];
  const messageTypes: Message["type"][] = [
    "text",
    "image",
    "video",
    "audio",
    "file",
  ];
  const statuses: Message["status"][] = ["sent", "delivered", "seen"];

  // Distribute messages across chats (more active chats get more messages)
  const chatWeights = chats.map(() => Math.random() * 0.8 + 0.2); // Random weights between 0.2 and 1.0
  const totalWeight = chatWeights.reduce((sum, weight) => sum + weight, 0);

  for (let i = 0; i < messageCount; i++) {
    // Select chat based on weights
    const random = Math.random() * totalWeight;
    let weightSum = 0;
    let selectedChatIndex = 0;

    for (let j = 0; j < chatWeights.length; j++) {
      weightSum += chatWeights[j];
      if (random <= weightSum) {
        selectedChatIndex = j;
        break;
      }
    }

    const chat = chats[selectedChatIndex];
    const messageType = randomChoice(messageTypes);

    // Weight text messages more heavily (80% of messages)
    const actualType = Math.random() > 0.8 ? messageType : "text";

    const message: Message = {
      id: generateId(),
      senderId: randomChoice(chat.participants).id,
      chatId: chat.id,
      type: actualType,
      content:
        actualType === "text"
          ? randomChoice(textMessages)
          : generateMediaContent(actualType),
      timestamp: generateTimestamp(randomInt(0, 90), randomInt(0, 24)), // Up to 90 days ago
      status: randomChoice(statuses),
    };

    messages.push(message);
  }

  // Sort messages by timestamp (newest first)
  messages.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
  );

  // Update chat last messages and timestamps
  const chatLastMessages = new Map<string, Message>();

  messages.forEach((message) => {
    if (!chatLastMessages.has(message.chatId)) {
      chatLastMessages.set(message.chatId, message);
    }
  });

  chats.forEach((chat) => {
    const lastMessage = chatLastMessages.get(chat.id);
    if (lastMessage) {
      chat.lastMessage = lastMessage;
      chat.updatedAt = lastMessage.timestamp;
    }
  });

  return messages;
}

// Generate the complete dataset
console.log("Generating chat data...");
console.time("Data generation");

const users = generateUsers(100);
console.log(`✓ Generated ${users.length} users`);

const chats = generateChats(users, 50);
console.log(`✓ Generated ${chats.length} chats`);

const messages = generateMessages(chats, 100000);
console.log(`✓ Generated ${messages.length} messages`);

console.timeEnd("Data generation");

// Statistics
const groupChats = chats.filter((c) => c.isGroup).length;
const oneOnOneChats = chats.filter((c) => !c.isGroup).length;
const messagesByType = {
  text: messages.filter((m) => m.type === "text").length,
  image: messages.filter((m) => m.type === "image").length,
  video: messages.filter((m) => m.type === "video").length,
  audio: messages.filter((m) => m.type === "audio").length,
  file: messages.filter((m) => m.type === "file").length,
};

console.log("\n📊 Dataset Statistics:");
console.log(`👥 Users: ${users.length}`);
console.log(`💬 Total Chats: ${chats.length}`);
console.log(`   - Group chats: ${groupChats}`);
console.log(`   - One-on-one chats: ${oneOnOneChats}`);
console.log(`📝 Total Messages: ${messages.length}`);
console.log(`   - Text: ${messagesByType.text}`);
console.log(`   - Images: ${messagesByType.image}`);
console.log(`   - Videos: ${messagesByType.video}`);
console.log(`   - Audio: ${messagesByType.audio}`);
console.log(`   - Files: ${messagesByType.file}`);

// Example usage - accessing the data
console.log("\n🔍 Sample Data:");
console.log("First user:", users[0]);
console.log("First chat:", chats[0]);
console.log("First message:", messages[0]);

// Export individual arrays for easy access
export { chats, messages, users };
