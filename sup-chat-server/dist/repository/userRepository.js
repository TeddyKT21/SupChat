//import { User } from "../models/user.js";
import { User } from "../schemas/user.js";
import { Repository } from "./repository.js";
export class UserRepository extends Repository {
    constructor(model) {
        super(model);
    }
    async findByEmail(email) {
        const user = await User.findOne({ email })
            .populate('friends')
            .populate({
            path: 'chats',
            model: 'Chat',
            populate: {
                path: 'messages',
                populate: { path: 'user', select: 'username email' },
                model: 'Message'
            }
        });
        return user;
    }
    async findById(id) {
        const user = await User.findOne({ id })
            .populate('friends')
            .populate({
            path: 'chats',
            model: 'Chat',
            populate: {
                path: 'messages',
                populate: { path: 'user', select: 'username email' },
                model: 'Message'
            }
        });
        return user;
    }
}
//# sourceMappingURL=userRepository.js.map