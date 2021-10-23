import prismaClient from "../prisma"

class GetLastMessagesService {
  async execute(numMessages: number) {
    const messages = await prismaClient.message.findMany({
      take: numMessages,
      orderBy: {
        created_at: "desc"
      },
      include: {
        user: true
      }
    });

    return messages;
  }
}

export { GetLastMessagesService }