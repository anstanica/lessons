
    $(function ()
    {
        $(".sidebar-link").click(function ()
        {
            $(".sidebar-link").removeClass("is-active");

            $(this).addClass("is-active");

        });
    });

    $(window)
        .resize(function ()
        {
            if ($(window).width() < 768)
            {
                // remove .sidebar-link span if it exists
                $(".sidebar-link span").css("display", "none");
                // Decrease the .sidebar-wrapper width to 60px
                $(".sidebar").css("width", "40px");
                $(".side-menu").css("width", "40px");
                $(".side-wrapper").css("width", "50px");
                $(" a.logo-expand").css("display", "none");
                
                $(".sidebar").css("margin", "auto");
                $(".sidebar").css("padding", "0");

            } else
            {
            //    display block
                $(".sidebar-link span").css("display", "block");
                $(" a.logo-expand").css("display", "block");
                $(" a.logo-expand").css("top", "30px");

                // Increase the .sidebar-wrapper width to 250px
                $(".sidebar").css("width", "220px");
                $(".sidebar").css("margin", "0");
                $(".sidebar").css("padding", "0 20px");
                $(".side-wrapper").css("width", "145px");
                $(".side-menu").css("width", "145px");
            }
            

        })
        .resize();

        
// add scroll to top button
// Get the button jquery

// get the download buttons and style them 


 
    // get strong tags  and add border-y class to it use javascript
    // const strongTags = document.querySelectorAll("strong");
    //  strongTags.forEach((s) => {
    //     if (!s.classList.contains("border-y") || !s.classList.contains("border-2") || !s.classList.contains("py-2")) {
    //         s.classList.add("border-y") && s.classList.add("py-3");
    //     }

    // });




    




    // const strongTags = document.querySelectorAll("strong");

    // if (!$("strong").hasClass("border-y"))
    // {
    //     $("strong").addClass("border-y");
    // }


    // const allVideos = document.querySelectorAll(".video");

    // allVideos.forEach((v) =>
    // {
    //     v.addEventListener("mouseover", () =>
    //     {
    //         const video = v.querySelector("video");
    //         video.play();
    //     });
    //     v.addEventListener("mouseleave", () =>
    //     {
    //         const video = v.querySelector("video");
    //         video.pause();
    //     });
    // });

    $(function ()
    {
        $(".sidebar-link").click(function ()
        {
            $(".main-container").removeClass("show");
            $(".main-container").scrollTop(0);
            $(".video-p-subtitle").addClass("hide");

            $(this).addClass("show");
            $(this).removeClass("hide");

        });
    });

// can you refactor this code to make it more readable and reusable?



$(document).ready(function ()
    {
     
        $(".logo, .logo-expand, .discover").on("click", function (e)
        {
            $(".main-container").removeClass("show");
            $(".main-container").scrollTop(0);
            $(".sidebar-link").removeClass("is-active");
            // $(".video-p-subtitle").load("animal/animal.html #about");
            // href = "#food";
            // $("title").text ($("#food .video-p-title").text());
        });
    
        $(".trending, .video").click(function ()
            {
            
                $(".main-container").scrollTop(0);
                $("title").text("Body Parts");
            
                $(".video-stream").load("body/body.html #about");
                $(".main-container").addClass("show");
        
            });

            $(".days, .video").click(function ()
            {
                $(".main-container").scrollTop(0);
                $("title").text("Days of the week");
                $(".video-stream").load("days-of-the-week/days.html #about");
                $(".main-container").addClass("show");
                
            });

        $(".food").click(function ()
        {
            $(".main-container").scrollTop(0);
            $("title").text("Food & Drinks");
            $(".video-stream").load("food/food.html #about");
            $(".main-container").addClass("show");
            
        });

        $(".family").click(function ()
        {
            $(".main-container").scrollTop(0);
            $("title").text("Family Members");
            $(".video-stream").load("family/family.html #about");
            $(".main-container").addClass("show");
            
        });

        $(".colors").click(function ()
        {
            $(".main-container").scrollTop(0);
            $("title").text("Colors");
            $(".video-stream").load("colors/colors.html #about");
            $(".main-container").addClass("show");
            
        });
        $(".weather").click(function ()
        {
            $(".main-container").scrollTop(0);
            $("title").text("Weather");
            $(".video-stream").load("weather/weather.html #about");
            $(".main-container").addClass("show");
            
        });
        $(".sidebar-link").click(function ()
        {
            $("#about").css("margin", "10px");
            $("#about").css("padding", "10px");
           
        //    $("#about #downloads").addClass("download");
            $(".video-stream").css("marginBottom", "80px");
            $("button").replaceClass("download-custom", "download");
            $("#downloads").removeClass(".download-custom");

        }

        );


        // $(".days-topic, .video").on("click", function (e)
        // {
        //     $(".main-container").addClass("show");
        //     $(".main-container").scrollTop(0);
        //     $("title").text($("#days .video-p-title").text());
        //     $(".sidebar-link").removeClass("is-active");
        //     $("#days").removeClass("hide");
        //     $(".days-topic").addClass("is-active");
        //     // add .hide to the rest of .main-container classes
        //     // $(".main-container").nextAll().addClass("hide");
        // });
        // $(".family, .video").on("click", function (e)
        // {
            
        //     $(".main-container").addClass("show");
        // //    replace the page title with .video-p-title
        //     $("title").text($("#family .video-p-title").text());
        //     // $(".days-topic").addClass("hide");
        //     $(".main-container").scrollTop(0);
        //     $(".sidebar-link").removeClass("is-active");
        //     $(".family").addClass("is-active");
        //     $("#family").removeClass("hide");

    });
    


















   
    $(function () {
        $(".video").click(function ()
        {
            var source = $(this).find("source").attr("src");
            var title = $(this).find(".video-name").text();
            var person = $(this).find(".video-by").text();
            var img = $(this).find(".author-img").attr("src");
            $(".video-stream video").stop();
            $(".video-stream source").attr("src", source);
            $(".video-stream video").load();
            $(".video-p-title").text(title);
            $(".video-p-name").text(person);
            $(".video-detail .author-img").attr("src", img);
        });
    });


const vdSub = document.querySelector(".video-stream");
// for each vdSub child if it doesn't have the class of py-2 then add it
$(vdSub).children().each(function ()
{
    if (!$(this).hasClass("py-2"))
    {
        $(this).addClass("py-2");
    }
});

// liked counter
// const likeBtn = document.querySelector(".like");
const savedData = localStorage.getItem("clicks");
var clicks = savedData;
document.getElementById("clicks").innerHTML = clicks;
$(document).ready(function () {
    $(".like").click(function () {
        document.getElementById("clicks").innerHTML = clicks;
        clicks++;
        localStorage.setItem("clicks", clicks);
    });

    if (localStorage && localStorage.getItem("clicks"))
    {
        clicks = localStorage.getItem("clicks");
    }
});
// save clicks to local storage
localStorage.setItem("clicks", clicks);

// get the id share and add click event to it and show the share modal
const  ShareBtn = document.querySelector("#share");

    ShareBtn.addEventListener('click', () => {
            // share the page that the user is on
            navigator.share({
                title: document.title,
                // text: the text that the user has selected
                text: window.getSelection().toString(),

                url: location.href
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    });


