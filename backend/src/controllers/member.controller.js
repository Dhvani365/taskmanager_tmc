import Member from "../models/member.model.js";

export const getAllMembers = async(req,res) => {
  const {projectName, taskName} = req.body;
  
  if (!projectName || !taskName ){
    return res.status(400).json({
      message: "projectName or taskName not found"
    });
  }
    const members = await Member.find({"projectName":projectName,
                                    "taskName":taskName})

    if (!members){
      return res.status(400).json({message:"no members exist"});
    }
    const transformedData = {
        data: members.map(({ userId, userName }) => ({ userId, userName })),
      };
    return res.status(200).json(transformedData);

}

