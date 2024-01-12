
function minifyUrl(event) {
    event.preventDefault()
    const inpLongUrl = document.getElementById("inpLongUrl")
    const message = document.getElementById("message")
    
    // var reUrl = /^((https?|ftp|smtp):\/\/)?([a-z0-9]+(\.[a-z]{2,}){1,3}|www\.[a-z0-9]+(\.[a-z]{2,}){1,3})(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    // const inpLongUrlValue = inpLongUrl.value
    // if (!inpLongUrlValue.match(reUrl)) {
    //     inpLongUrl.style.color = "red";
    //     return false;
    // } else {
    //     email.style.color = "#1e3932";

        axios.post('/minify-url', { url: inpLongUrl.value}).then(() => {
            swal({
                title: 'Url Minified',
                icon: 'success',

            }).then(() => {
                window.location.href = 'minify-url'
            })
      
        }).catch(() => {
            message.innerHTML = 'Url already minified'
        })

    // }

}


