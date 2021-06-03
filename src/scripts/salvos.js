$("#bntAdd").click(() => {
    let obj = JSON.parse(localStorage.getItem("db_videos"))
    let videoURL = $("inframe").prop("scr");
    for (let i = 0; i < obj.length; i++) {
        if (obj.data[i].url == videoURL) {
            localStorage.setItem("db_salvos", JSON.stringify(videoURL));
            break;
        }
    }
})
