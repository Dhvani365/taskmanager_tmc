import task from "../models/task.model.js";

export const getTask = async(req,res) => {
  const {projectId,projectName} = req.body;
  
  if (!projectName || !projectId ){
    return res.status(400).json({
      message: "projectName or projectId not found"
    });
  }
    const tasks = await task.find({"projectName":projectName,
                                    "projectId":projectId})

    if (!tasks){
      return res.status(400).json({message:"no tasks exist"});
    }
    const transformedData = {
        data: tasks.map(({ _id, taskName, taskDescription }) => ({
          taskId: _id, // Use `_id` as `taskId`
          taskName,
          taskDescription,
        }))}
    return res.status(200).json(transformedData);

}

