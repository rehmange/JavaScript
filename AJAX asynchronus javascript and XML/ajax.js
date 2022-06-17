console.log("AJAX Tutorial")

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log("You have clicked on Fetch Button")
    // intantiated a object of XMLHttpRequest
    const xhr = new XMLHttpRequest()
    // Open mean where chunk come form GET mean it will only take data not send but POST mean Send send data and get response| True mean asynchronus and false mean synchronus
    // xhr.open('GET','abdul.txt',true)

    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)


    // POST 
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true)
    xhr.setRequestHeader("Content-type", "application/json");

    
    //Optional It uses for spinner ETC
    xhr.onprogress = function(){
        console.log('in progress')
    }

    // THis show the state such that open loading and more please search on google onreadystatechange code value . It's old function
    // xhr.onreadystatechange = function(){
    //     console.log('ready state',this.readyState)
    // }


    // onload mean when data come what we want to do with it. that we will in onload()  defined
    xhr.onload = function(){

        if(this.status==200){
        console.log(this.responseText)}
        else{
            console.log("Some error occured")
        }
    }


// Please remember this to write otherwise you will *** | Send Request
    let params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params)
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}


// Search on Google fake json data then play with it😊