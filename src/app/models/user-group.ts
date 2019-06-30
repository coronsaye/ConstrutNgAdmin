import { User } from '../modules/user/user';

export class UserGroup {
  public get updated_at() {
    return this._updated_at;
  }
  public set updated_at(value) {
    this._updated_at = value;
  }
  public get created_at() {
    return this._created_at;
  }
  public set created_at(value) {
    this._created_at = value;
  }
  public get name() {
    return this._name;
  }
  public set name(value) {
    this._name = value;
  }
  public get id() {
    return this._id;
  }
  public set id(value) {
    this._id = value;
  }
    constructor(
        private _id,
        private _name,
        private _created_at,
        private _updated_at
    ) { }
}
