
// alert("First Line");

// setTimeout(()=>{

//     alert("Second Line");
    
// },2000)

// alert("Third Line");

// let promise = new Promise((res,rej)=>{

//     setTimeout(()=>{

//         return res();

//     },1000);

// })

// promise
// .then( (res)=>{

//     console.log("Promise resolved.");

// })

// .catch( ()=>{

//     console.log("Promise rejected.");

// })




//fetch() method => 

    let api = "https://apis.ccbp.in/jokes/random";

    //  1st method:-

    // let response = fetch(api);

    // response
    // .then( (res)=>{

    //     return res.json();

    // })
    // .then( (data)=>{

    //     console.log(data);

    // })
    // .catch( (e)=>{

    //     console.log(`the error is here: ${e}`);

    // })

    
    
    //2nd method:-
    async function fetchApi(){

        try {
            
            let response = await fetch (api);

        let data = await response.json();

        document.getElementById("jokes").textContent = data.value;

        } catch (error) {
            
            console.log(`the error is here:${error}`);

        }

    }

    fetchApi();
