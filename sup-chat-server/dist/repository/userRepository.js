//import { User } from "../models/user.js";
import { User } from "../schemas/user.js";
import { Repository } from "./repository.js";
export class UserRepository extends Repository {
    constructor(model) {
        super(model);
    }
    async findByEmail(email) {
        const user = await User.findOne({ email }).exec();
        return user;
    }
}
//# sourceMappingURL=userRepository.js.map