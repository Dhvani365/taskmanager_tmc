import { db } from "../lib/db";

export const getOrCreateConversation = async (
    memberOneId, memberTwoId
) => {
    let conversation = await findCoversation(memberOneId, memberTwoId) || await findCoversation(memberTwoId, memberOneId);

    if(!conversation){
        conversation = createNewConversation(memberOneId, memberTwoId);
    }

    return conversation;
}

const findCoversation = async (memberOneId, memberTwoId)=>{
    try{
        return await db.conversation.findFirst({
            where:{
                AND: [
                    {memberOneId: memberOneId},
                    {memberTwoId: memberTwoId}
                ]
            },
            include:{
                memberOne:{
                    include:{
                        profile:true,
                    }
                },
                memberTwo:{
                    include:{
                        profile: true,
                    }
                }
            }
        });
    }catch{
        return null;
    }
}

const createNewConversation = async (
    memberOneId, memberTwoId
) => {
    try{
        return await db.conversation.create({
            data: {
                memberOneId,
                memberTwoId,
            },
            include:{
                memberOne:{
                    include:{
                        profile: true
                    }
                },
                memberTwo:{
                    include:{
                        profile: true
                    }
                },
            }
        })
    }catch{
        return null;
    }
}