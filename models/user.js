const mongoose=require('mongoose')
const { Schema } = mongoose;
const UserSchema=new Schema({
    name:  {type:String,
            required:true
        },
    email: {type:String,
            required: true,
            unique:true
        },
    password:   {type:String, 
                required:true
            },
    isactive:{
        type:Boolean,
        default:false
    }

});
const user=mongoose.model('userData',UserSchema);
module.exports=user