import Homework from "./Homework";
import User from "./User";

export default class Response{
    public id : String;
    public user : User;
    public homework : Homework;
    public response : String;
    public createdAt : Date;
}