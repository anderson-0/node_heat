import { Request, Response } from "express";
import { GetLastMessagesService } from "../services/GetLastMessagesService";


class GetLastMessagesController {
  async handle(req: Request, res: Response) {
    const numMessages = parseInt(req.params.numMessages,10);
    const service = new GetLastMessagesService();

    try {
      const result = await service.execute(numMessages);
      return res. json(result);
    } catch (error) {
      return res.json({ error: error.message });
    }
  }
}

export { GetLastMessagesController }