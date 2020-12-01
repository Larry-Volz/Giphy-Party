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


$("#searchButton").on("click", function(evt) {
    res = searchGiphy($("#searchTopic").val());
    console.log(res);
    console.log(res.data[0].images.original.url,)
 });





 async function searchGiphy(searchString) {
    const str = `http://api.giphy.com/v1/gifs/search?q=${searchString}&api_key=Mpo1SYtELMIvSDUUDEjn1wCqKF5Jnixi&limit=5`
    const res = await axios.get(str);
    return res;
}


