$(function(){
    $.ajax({
        url: "api/headers",
        type: "GET",
        success: res => {
            console.log(res);
        }
    })
})