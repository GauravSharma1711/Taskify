import mongoose from "mongoose"

import {TaskStatusEnum,AvailableTaskStatus} from '../utils/constants.js'

const taskSchema = new mongoose.Schema({
  title:{
   type:String,
   required:true,
   trim:true,
  },
description:{
   type:String,
   required:true,
},
project:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"Project"
},
assignedTo:{
 type:mongoose.Schema.Types.ObjectId,
   ref:"User"
},
assignedBy:{
 type:mongoose.Schema.Types.ObjectId,
   ref:"User"
},
status:{
   type:String,
   enum:AvailableTaskStatus,
   default:TaskStatusEnum.TODO,
},
attachments:{
   type:[
      {
         url:String,
         mimetype:String,
         type:Number,
      }
   ],
   default:[],

}


   },
   
   {timestamps:true})

   export const Task = mongoose.model("Task",taskSchema);