export class Task {

  constructor(
    name: string,
    date: string,
    importance: string,
    completed: boolean,
    description?: string,
    _id?: any,
    userId?: string) {

      this._id = _id;
      this.userId = userId;
      this.name = name;
      this.date = date.toLocaleString();
      this.importance = importance;
      this.description = description;
      this.completed = completed;
    }



  _id?: {$oid: string};
  userId: string;
  name: string;
  date: string;
  importance: string;
  description: string;
  completed: boolean;
}
