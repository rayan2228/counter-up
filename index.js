    ;(() => {
        const endDateElm = document.querySelector(".dateInput");
        let endDateElmValue = new Date(JSON.parse(localStorage.getItem("endDate"))) || new Date();
        endDateElm.value = endDateElmValue.toISOString().slice(0, 10);
        const countDownValueElm = Array.from(document.querySelectorAll(".countDownValue"));
        let countDownClear;
        endDateElm.addEventListener("change", () => {
            endDateElmValue = new Date(endDateElm.value);
            localStorage.setItem("endDate", JSON.stringify(endDateElmValue));
            clearInterval(countDownClear);
            countDownClear = setInterval(countDown, 1000);
        })
        function countDown() {
            const startDate = new Date();
            const dateDiff = (endDateElmValue - startDate) / 1000;
            if (dateDiff > 0) {
                const days = Math.floor(dateDiff / 3600 / 24);
                const hours = Math.floor((dateDiff / 3600) % 24);
                const minutes = Math.floor((dateDiff / 60) % 60);
                const seconds = Math.floor(dateDiff % 60);

                countDownValueElm.map((item, index) => {
                    switch (index) {
                        case 0:
                            item.textContent = days;
                            break;
                        case 1:
                            item.textContent = hours;
                            break;
                        case 2:
                            item.textContent = minutes;
                            break;
                        case 3:
                            item.textContent = seconds;
                            break;
                    }
                });
            } else {
                clearInterval(countDownClear);
                countDownValueElm.map(item => item.textContent = "0");
            }
        }
        countDownClear = setInterval(countDown, 1000);
    })()