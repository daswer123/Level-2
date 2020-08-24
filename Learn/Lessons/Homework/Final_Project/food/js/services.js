const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

const getContent = async (url) =>{ 

    let request = await fetch(url);
 
    if(request.ok == false){
        throw new Error("Не получилось зафетчить " + request.status);
    }
 
    return await request.json();
 };

export {postData};
export {getContent};