import { socketIo } from "../app";
import prismaClient from "../prisma"

class CreateMessageService {
  async execute(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id
      },
      include: {
        user: true
      }
    });

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      created_at: message.created_at
    }
    
    socketIo.emit("")


    return message;
  }
}

export { CreateMessageService }