const paragraph = document.getElementById("colorToggleParagraph");
        let clickCount = 0;

        paragraph.addEventListener("click", function () {
            clickCount++;

            if (clickCount % 3 === 0) {
                paragraph.style.color = "red";
            } else {
                paragraph.style.color = "green";
            }
        });