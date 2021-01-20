import User from "./User";

export default class ClassRoom{
    public name : string;
    public lessonName : string;
    public description : string;
    public users : User[];
    constructor(name : string,lessonName : string,description : string){
        this.name = name;
        this.lessonName = lessonName;
        this.description = description;
    }
}