document.addEventListener('DOMContentLoaded', (event) => {

    const menu_button = document.getElementById('menu-button'); // Assuming you have a button to toggle the menu
    const menu = document.getElementById('menu');
    const logo = document.getElementById("logo");
    const mediaQuery = window.matchMedia('(min-width: 950px)');

    // Membership page script
    // Get the modal
    var modal = document.getElementById('pdfModal');

    // Get the button that opens the modal
    var btn = document.getElementById('openBtn');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('closeBtn')[0];

    // Toggle menu visibility on button click
    menu_button.onclick = function () {

        if (menu.style.display == "block") {

            menu.style.visibility = "hidden";
            menu.style.opacity = 0;
            setTimeout(() => {
                menu.style.display = "none";
            }, 500);


        } else {
            menu.style.display = "block";
            setTimeout(() => {
                menu.style.visibility = "visible";
                menu.style.opacity = 1;
            }, 50);
        }
    }

    // Close the menu when clicking outside of it
    window.onclick = function (event) {
        if (!menu_button.contains(event.target)) {

            menu.style.opacity = 0;
            menu.style.visibility = "hidden";
            setTimeout(() => {
                menu.style.display = "none";
            }, 500);
        }
        // When the user clicks anywhere outside of IFNJ Membership Form PDF, close it
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    window.onload = function () {
        var buttons = document.querySelectorAll('#navbar .navbar-button');
        var maxWidth = 0;

        // Calculate the maximum width
        buttons.forEach(function (button) {
            var buttonWidth = button.offsetWidth;
            if (buttonWidth > maxWidth) {
                maxWidth = buttonWidth;
            }
        });

        // Set all buttons to the maximum width
        buttons.forEach(function (button) {
            button.style.width = maxWidth + 'px';
        });
    };


    let currentIndex = 0; const images = document.querySelectorAll('.hero img');
    const caption = document.getElementById('slogan');
    const captions = [
        '<h2>Paterson Jalalabad Jam-E Masjid<br><address style="font-size:15px;">61 Van Houten St, Paterson, NJ 07505</address></h2>',
        '<h2>Proposed Mosque Rehabilitation<br><address style="font-size:15px;">53-63 Van Houten St, Paterson, NJ 07505</address></h2>'
    ];
    const totalImages = images.length;
    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add('active');
        caption.innerHTML = captions[currentIndex];
    }, 5000); // Change image and caption every 10 seconds
    
    


    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.addEventListener('scroll', () => {
        const targetElement = document.getElementById('#navbar-logo');
        const rect = targetElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
    
        if (rect.top < windowHeight || rect.bottom >= 0) {
            targetElement.style.display = "block";
        } else {
            targetElement.style.display = "none";
        }
    
    });

    document.addEventListener("DOMContentLoaded", function () {
        var marquee = document.getElementById('audio-container');
        var label = document.getElementById('audio-label');
        
        if (label.scrollWidth <= marquee.clientWidth) {
            marquee.classList.add('marquee');
        }
    });

    // set prayer times
    Array.from(document.getElementsByClassName("fajr-iqamah")).forEach(element => {
        element.innerHTML = `${prayertimes.fajr}`;
    });
    Array.from(document.getElementsByClassName("dhuhr-iqamah")).forEach(element => {
        element.innerHTML = `${prayertimes.dhuhr}`;
    });
    Array.from(document.getElementsByClassName("asr-iqamah")).forEach(element => {
        element.innerHTML = `${prayertimes.asr}`;
    });
    Array.from(document.getElementsByClassName("magrib-iqamah")).forEach(element => {
        element.innerHTML = `${prayertimes.magrib}`;
    });
    Array.from(document.getElementsByClassName("isha-iqamah")).forEach(element => {
        element.innerHTML = `${prayertimes.isha}`;
    });
    Array.from(document.getElementsByClassName("jumuah-iqamah")).forEach(element => {
        element.innerHTML = `${prayertimes.jumuah}`;
    });

    Array.from(document.getElementsByClassName("last-updated")).forEach(element => {
        element.innerHTML = countDaysLastUpdated();
    });
});

function toggleContent(contentId) {
    var contents = document.getElementsByClassName("page-content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    document.getElementById(contentId).style.display = "block";
    window.scrollTo(0, 0);
}

function toggleContentAndJumpToSection(contentId, sectionId) {
    var contents = document.getElementsByClassName("page-content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    document.getElementById(contentId).style.display = "block";
    window.location.href = sectionId;
    
}


// Function to calculate the difference in days

function calculateDaysBetweenDates(date1, date2) {
    // Get the time difference in milliseconds
    var timeDifference = Math.abs(date2.getTime() - date1.getTime());
    // Convert the time difference from milliseconds to days
    var dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return dayDifference;
}

function countDaysLastUpdated() {
    return calculateDaysBetweenDates(new Date(prayertimes.date_updated), new Date());
}


function playAudio(file_path) {
    var container = document.getElementById('audio-container')
    var audio = document.getElementById('audio');
    var label = document.getElementById('audio-label');
    var file_name = file_path.split('\\').pop().split('/').pop().replace(/_/g, ' ').replace(/(\d{2})-(\d{2})-(\d{2})/g, '$1/$2/$3');

    var sticky_donate_button = document.getElementById('sticky-donate-button');

    container.style.display = "block";
    audio.style.display = "block";
    sticky_donate_button.style.bottom = "196px";
    
    if ( file_name.length > label.clientWidth) {
        label.classList.add('marqueeLabel');
    }
    else {
        label.classList.remove('marqueeLabel');
    }

    label.innerHTML = file_name;
    audio.src = file_path;
    audio.load();
    audio.play();
}

function closePlayer() {
    var container = document.getElementById('audio-container')
    var audio = document.getElementById('audio');
    var sticky_donate_button = document.getElementById('sticky-donate-button');

    audio.src = "";
    audio.load();
    audio.pause();

    audio.style.display = "none";
    container.style.display = "none";
    sticky_donate_button.style.bottom = "74px";
}


// var audio = document.getElementById('audio');
// var seekBar = document.getElementById('seek-bar');

// audio.addEventListener('timeupdate', function () {
//     var value = (audio.currentTime / audio.duration) * 100;
//     seekBar.value = value;
// });

// function play() {
//     audio.play();
// }

// function pauseAudio() {
//     var audio = document.getElementById('audio');
//     audio.pause();
// }

// function stopAudio() {
//     audio.pause();
//     audio.currentTime = 0;
//     seekBar.value = 0;
// }

// function volumeUp() {
//     if (audio.volume < 1) audio.volume += 0.1;
// }

// function volumeDown() {
//     if (audio.volume > 0) audio.volume -= 0.1;
// }

// function seekAudio() {
//     var seekTo = audio.duration * (seekBar.value / 100);
//     audio.currentTime = seekTo;
// }



  




