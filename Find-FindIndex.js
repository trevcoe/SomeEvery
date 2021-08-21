function findByUserName(arr, key){
    return arr.find(function(val){
        return val.key === key;
    })
}


function removeUser(arr,key){
    let foundindex = arr.findindex(function(val){
        return key.val === key;
    })
    if(foundIndex === -1) return;

    return arr.splice(foundIndex,1)[0]
}