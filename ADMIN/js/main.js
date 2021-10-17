window.addEventListener("load", event => {

    // Expand Left Side
    var icon = document.querySelector('.left__icon'),
        left = document.querySelector('.left');

    icon.addEventListener('click', expand);

    function expand() {
        if (left.classList.contains('show')) {
            left.classList.remove('show')
        } else {
            left.classList.add('show')
        }
    }

    var menuItem = document.querySelectorAll('.left__menuItem');

    menuItem.forEach(function (el) {
        el.addEventListener("click", openMenu);
    });

    function openMenu(event) {
        var currentmenuItem = event.currentTarget;

        if (currentmenuItem.classList.contains('open')) {
            currentmenuItem.classList.remove('open');
        } else {
            currentmenuItem.classList.add('open');
        }
    };
})

let manufacturerList = ["Course 1", "Course 2", "Course 3"]
let audio_name = document.getElementById("audio_name");

audio_name.onchange = function () {
    let input = this.files[0];
    if (input) {
        var courses_name = document.getElementById('courses_name')
        courses_name.innerHTML = ''
        if (audio_name.value != null) {
            for (var i of manufacturerList) {
                courses_name.innerHTML += `<option value='${[i]}'>${[i]}</option>`
            }
        }
    }
};

