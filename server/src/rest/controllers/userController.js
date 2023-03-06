import models from '../../db/models';
const { User } = models;
import { userService } from '../../services';

const post = async (req, res) => {
  res.json(await userService.createUser(req.body));
  console.log(req.body);
};

export default {
  post,
};
