export const videoReducer =(state,{type,payload})=>{
switch(type){
case "CATEGORY":
    return{
        ...state,
       clickedCategory: payload
    }
case "LIKED_VIDEO":
    return{
        ...state,
        likedVideo:payload
    }
default:
    return state
}
}