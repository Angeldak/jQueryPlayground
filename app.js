$(document).ready(function () {
    //Reset events and add grey colors on click
    $("#greyBtn").on("click", () => {
        $(".colorGrid").off("click");
        $(".colorGrid").on("click", (e) => {
            $(e.target).toggleClass("colorGrey");
        })
    })
    //Reset events and add rotating color wheel on click
    $("#colorWheelBtn").on("click", () => {
        $(".colorGrid").off("click");
        $(".colorGrid").on("click", () => {
            const colorList = document.querySelectorAll('[data-info="colorbox"]');
            for (item of colorList) {
                const nextVarClass = "color" + (parseInt(item.classList[0][item.classList[0].length - 1]) + 1);
                const currentVarClass = item.classList[0];
                if (nextVarClass === "color7") {
                    $(item).removeClass()
                    $(item).addClass("color1")
                } else {
                    $(item).removeClass()
                    $(item).addClass(nextVarClass)
                }
            }
        })
    })
    $("#resetColorGrid").on("click", () => {
        $(".colorGrid").off("click");
        const colorList = document.querySelectorAll('[data-info="colorbox"]');
        for (item of colorList) {
            const currentVarClass = item.classList[0];
            $(item).removeClass()
            $(item).addClass(item.id)
        }
    })
});