import { UserGroup } from '../user-groups/user-group';

export class User {
    constructor(
        public id,
        public username,
        public email,
        public phone,
        public Roles: UserGroup
    ) { }
}
