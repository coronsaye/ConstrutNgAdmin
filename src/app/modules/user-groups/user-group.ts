import { User } from '../user/user';

export class UserGroup {
    constructor(
        public id,
        public name,
        public users: User[]
    ) { }
}
