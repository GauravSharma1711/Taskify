
import {Project} from '../models/project.model.js'
import {ProjectMember} from '../models/projectmember.model.js'
import {User} from  '../models/user.model.js'

const getProjectsByMe = async (req, res) => {
    try {
      
      const userId = req.user.id;
      const user = await User.findById(userId);

      const projects = await Project.find({
        createdBy:userId
      })

      if(!projects){
        return res.status(404).json({error:"no project by this user"});
      }

      return res.status(200).json({projects});


    } catch (error) {
      console.log("error in getProjectsByME controller",error);
      return res.status(500).json({error:"Intrnal server error"});
      
    }
};

const getProjects = async (req, res) => {
    try {
      
      const projects = await Project.find({ })

      if(!projects){
        return res.status(404).json({error:"no project"});
      }

      return res.status(200).json({projects});


    } catch (error) {
      console.log("error in getProjects controller",error);
      return res.status(500).json({error:"Intrnal server error"});
      
    }
};


const getProjectById = async (req, res) => {
   try {
    const projectId = req.params.projectId;

    const project = await Project.findById(projectId);
    if(!project){
      return res.status(404).json({error:"Project not found"});
    }

    return res.status(200).json({project});

   } catch (error) {
    console.log("error in getProjectById controller",error);
      return res.status(500).json({error:"Intrnal server error"});
      
   }
};


const createProject = async (req, res) => {
 
  try {
     const {name , description} = req.body;

     const userId = req.user.id;

   const existingProject = await Project.findOne({name});

     if(existingProject){
        return res.status(400).json({message:"project already exists"});
     }

      const project = await Project.create({
        name,
        description,
        createdBy:userId
     })

     return res.status(200).json({project})

  } catch (error) {
   console.log("error in create project controller",error);
      return res.status(500).json({error:"Intrnal server error"});
      
  }

};

const updateProject = async (req, res) => {
  try {
        const { name, description } = req.body;
    const curUserId = req.user.id;
  
    const projectId = req.params.projectId;

    const project = await Project.findById(projectId);
  
    if (!project) {
      return res.status(404).json("Project not found");
    }


  
  if(!project.createdBy || project.createdBy.toString()!==curUserId.toString()){
    return res.status(403).json("you are not authorized to update this project");
  }
  
    project.name = name;
    project.description = description;
  
    await project.save();

      return res.status(200).json({ message: "Project updated successfully" })
  
  } catch (error) {
    console.log("error in update Project controller",error);
      return res.status(500).json({error:"Intrnal server error"});
  }
};

const deleteProject = async (req, res) => {
  try {
    const curUserId = req.user.id;
  
    const projectId = req.params.projectId;

    const project = await Project.findById(projectId);
  
    if (!project) {
      return res.status(404).json("Project not found");
    }


  
  if(!project.createdBy || project.createdBy.toString()!==curUserId.toString()){
    return res.status(403).json("you are not authorized to delete this project");
  }
    
   const deletedProject = await Project.findByIdAndDelete(projectId);


   return res.status(200).json({message:"project deleted successfully"});


  } catch (error) {
        console.log("error in delete Project controller",error);
      return res.status(500).json({error:"Intrnal server error"});
  }
};



const getProjectMembers = async (req, res) => {
  try {

    const projectId = req.params.projectId;
    const project = Project.findById(projectId);
    if(!project){
      return res.status(404).json({message:"Project not found"});
    }

    const curentLoggedInUser = req.user.id;

    if(project.createdBy.toString()!==curentLoggedInUser.toString()){
      return res.status(403).json({error:"you are not authorized to see project member"});
    }

    const projectMembers = await ProjectMember.find({
      project:projectId
    })

    if(!projectMembers){
      return res.status(404).json({error:"no member found"})
    }

    return res.status(200).json({projectMembers});

    
  } catch (error) {
    console.log("Error in getProjectMember controller",error);
    return res.status(500).json({error:"Internal server errror"});
    
  }

  
};

const addMemberToProject = async (req, res) => {
            try {

              const {role} = req.body;

            const projectId = req.params.projectId;
            const memberId = req.params.memberId;

     const project = Project.findById(projectId);
    if(!project){
      return res.status(404).json({message:"Project not found"});
    }

    const curentLoggedInUser = req.user.id;

  if(project.createdBy.toString()!==curentLoggedInUser.toString()){
   return res.status(403).json({error:"you are not authorized to add member to project member"});
   }

   const existingMember = await ProjectMember.findOne({
    user:memberId,
    project:projectId,
});



              if (existingMember) {
    return res.status(409).json("User is already a member of this project");
}

const newMember = await ProjectMember.create({
    user: memberId,
    project: projectId,
    role: role || UserRolesEnum.MEMBER,
})




            } catch (error) {
        console.log("Error in addMemberToProject controller",error);
        return res.status(500).json({error:"Internal server errror"});  
            }
};



const deleteMember = async (req, res) => {
  
         try {
        const memberId = req.params.memberId;
        const projectId = req.params.projectId;
      const project = await Project.findById(projectId);

        const currentLoggedInUserId = req.user.Id;

        const projectMember = await ProjectMember.find({
          user:memberId,
          project:projectId
        })


        if(!projectMember){
          return res.status(404).json({error:"ProjectMember not found"})
        }

        if(project.createdBy.toString()!==currentLoggedInUserId.toString()){
          return res.status(403).json({error:"you are not auhorized to delete member"});
        }

    await ProjectMember.deleteOne({ _id:projectMember._id });

  return res.status(200).json({message:"member deleted successfully"})
    

         } catch (error) {
          console.log("error in deleteMember controller",error);
          return res.status(500).json({error:"Internal server error"});      
         }

};

const updateMemberRole = async (req, res) => {
  try {
        const memberId = req.params.memberId;
        const projectId = req.params.projectId;
      const project = await Project.findById(projectId);

      const {role} = req.body;

        const currentLoggedInUserId = req.user.Id;

        const projectMember = await ProjectMember.find({
          user:memberId,
          project:projectId
        })


        if(!projectMember){
          return res.status(404).json({error:"ProjectMember not found"})
        }

        if(project.createdBy.toString()!==currentLoggedInUserId.toString()){
          return res.status(403).json({error:"you are not auhorized to update member role"});
        }

        projectMember.role = role;
        await projectMember.save();

        return res.status(200).json({messge:"Project member updated successfully",projectMember})

  } catch (error) {
       console.log("error in updateMemberRole controller",error);
      return res.status(500).json({error:"Internal server error"}); 
  }
};

export {
  addMemberToProject,
  createProject,
  deleteMember,
  deleteProject,
  getProjectById,
  getProjectMembers,
  getProjects,
  updateMemberRole,
  updateProject,
  getProjectsByMe
};
