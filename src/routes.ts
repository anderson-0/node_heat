import { Router } from "express";
import { Request, Response } from "express";

import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLastMessagesController } from "./controllers/GetLastMessagesController";
import { UserProfileController } from "./controllers/UserProfileController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.post("/messages", ensureAuthenticated,new CreateMessageController().handle)
router.get("/messages/last/:numMessages", new GetLastMessagesController().handle);
router.get("/profile", ensureAuthenticated, new UserProfileController().handle);


router.get("/github", (req: Request, res: Response) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

router.get("/signin/callback", (req: Request, res: Response) => {
  const { code } = req.query;

  return res.json(code);
});

export { router };