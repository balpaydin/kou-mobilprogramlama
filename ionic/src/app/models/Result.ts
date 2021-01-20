export default class Result<T>{

    constructor(public success : boolean ,public  message : string ,public  data : T){
    }

}