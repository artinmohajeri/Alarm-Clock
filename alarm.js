const audio = document.querySelector("#audioPlayer")
let date
let houre
let minute
let second
let userHoure
let userMinute
let userSecond
let userMusic

// this code is for showing the top clock.
setInterval(() => {
    date = new Date;
    houre = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    document.querySelector(".houre").innerHTML = houre + " :";
    document.querySelector(".minute").innerHTML = minute + " :";
    document.querySelector(".second").innerHTML = second;
    if (second.toString().length === 1) {
        document.querySelector(".second").innerHTML = "0" + second;
    };
    if (minute.toString().length === 1) {
        document.querySelector(".minute").innerHTML = "0" + minute;
    };
    if (houre.toString().length === 1) {
        document.querySelector(".houre").innerHTML = "0" + houre;
    };

}, 1000);


// cheks if the real time is equal with the user input time. so it rings!
document.querySelector("#set").addEventListener("click", function () {
    document.querySelector(".form-box").classList.remove("d-none");

    document.querySelector("button[type=submit]").addEventListener("click", function () {
        userHoure = Number(document.querySelector("input[name=houre]").value);
        userMinute = Number(document.querySelector("input[name=minute]").value);
        userSecond = Number(document.querySelector("input[name=second]").value);
        userMusic = document.querySelector("input[type=file]")
        if (userHoure && userMinute && userSecond && userMusic) {
            const file = userMusic.files[0]
            const fileURL = URL.createObjectURL(file)
            audio.setAttribute("src", fileURL)

            setInterval(function () {
                if (userHoure === houre && userMinute === minute && userSecond === second) {
                    setInterval(function(){audio.play()},10)
                    document.querySelector(".alert").classList.remove("d-none")
                }
            }, 1000)


        } else if (userHoure || userMinute || userSecond === 0) {
            const file = userMusic.files[0]
            const fileURL = URL.createObjectURL(file)
            audio.setAttribute("src", fileURL)
            setInterval(function () {
                if (userHoure === houre && userMinute === minute && userSecond === second) {
                    setInterval(function(){audio.play()},10)
                    document.querySelector(".alert").classList.remove("d-none")
                }
            }, 1000)
        }

    });

});


// reloading the page if you click on refresh button
document.querySelector("#refresh").addEventListener("click",function(){
    location.reload()
})
