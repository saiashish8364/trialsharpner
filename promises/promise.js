const posts = [{title: 'POST1'}];
var userlastactive=new Date();
function updateLastUserActivityTime() {
    return new Promise((resolve,reject)=>{
        userlastactive=new Date()
        resolve(userlastactive);
    })
}
function createpost(post) {
    updateLastUserActivityTime()
    return new Promise( (resolve, reject) => {
        
            posts.push({title: post});
            resolve()
    })
    
}

function printPost() {
    posts.forEach((post) => {
        console.log(post.title)
    })
}

function deletePost(){
    updateLastUserActivityTime()
    return new Promise((resolve, reject) => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement.title);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
    })
}

//Modify the lines below and use .then and .catch smartly to get the correct output.
createpost('POST2')
    .then(createpost('POST3'))
    .then(printPost)
    .then(updateLastUserActivityTime)
    .then(msg=>{
        console.log(msg)
    })
    .then(deletePost)
    .then(msg=>{
        console.log(msg)
    })
    .then(updateLastUserActivityTime)
    .then(msg=>{
        console.log(msg)
    })

