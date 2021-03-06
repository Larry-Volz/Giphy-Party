/*
GIPHY API Requirements/contact info
- Docs at: https://developers.giphy.com/docs/api#quick-start-guide
- need an API key by creating an app
- to do that I logged in with facebook
- Once done supposed to go back and click 'upgrade to production' to get new API key
- I chose the SDK for more features
- I named the app Giphy Party
- My API key: Mpo1SYtELMIvSDUUDEjn1wCqKF5Jnixi

- their example code for search using jQuery:
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
xhr.done(function(data) { console.log("success got data", data); });


*/

function getBtn(){
    $("#searchButton").on("click", async function(evt) {
        res = await searchGiphy($("#searchTopic").val());
        const firstGif = res.data.data[0].images.original.url;

        //later learn to submit with enter or a button press
        // if(evt.target instanceof HTMLButtonElement) {
        //     console.log(`target: ${evt.target}`);
        // }

        /*
        NOTE: In Springboard's solution they did a submit instead of button and 
        $().on("submit") which has the advantage that an enter or a click both
        trigger the event.  Just have to rememver to do an evt.preventDefault()
        to prevenet screen refreshing if I do an .on("submit")
        */


        gifToPage(firstGif);
        // $("#searchTopic").val() ="";
        document.querySelector('#searchTopic').value = "";
        return firstGif;
        
    });
};

 async function searchGiphy(searchString) {
    const str = `https://api.giphy.com/v1/gifs/search?q=${searchString}&api_key=Mpo1SYtELMIvSDUUDEjn1wCqKF5Jnixi&limit=5`
    const res = await axios.get(str);
    return res;
}

function gifToPage(gif){

    //create img tag
    const image = document.createElement('img')
    
    //add bootstrap class to put into columns
    // image.classList.add("col-md-4 col-12 mb-4")
    $(image).addClass("col-xs-12 col-sm-4");

    //add src to imag tag
    image.src  = gif;

    //add to div
    document.querySelector('#displayMemes').appendChild(image)

   
}


function deleteGifs(){
    // const delBtn = document.querySelector('#delBtn');
    $('#delBtn').on("click", () => {
        const memes = document.querySelectorAll('img');
        memes.forEach(element => {
            element.remove();
        });
    });

}


let gif = getBtn();

deleteGifs();
