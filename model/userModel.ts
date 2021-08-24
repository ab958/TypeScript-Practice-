import mongoose,{ Aggregate, Document } from "mongoose";

// interface IUser extends Document {
//     name: string;
//     age: number;
//     lastName?: string;
// }

const userSch = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    }    
},
{
  timestamps: true,
})

export const User = mongoose.model('User', userSch);
// const User1 = mongoose.model('User', userSch);
// export default User;

// const build = ( att : IUser) =>{
//     return new User1(att)
// }

// build({
//     name:"1",
//     age :"erf",
// })

// new User({
//     name:1,
//     age:"fdfs"
// })