const countries = ['India', 'Paris', 'Tokyo', 'London', 'Berlin', 'Sydney'];
function changeCountryName() {
    const placenameElement = document.getElementById('placename');
    let index = 0;
    setInterval(() => {
        placenameElement.textContent = countries[index];
        index = (index + 1) % countries.length;
    }, 200);
}
window.onload = changeCountryName;



//Form validation JavaScript

const today = new Date();
const formattedDate = today.toISOString().split('T')[0];
document.getElementById('startDate').setAttribute('min', formattedDate);
document.getElementById('startDate').value = formattedDate;
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    if (endDate <= startDate) {
        alert('End date must be greater than start date.');
        return;
    }
    alert('Booking Successful!');
});





$(document).ready(function () {
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay interval to 3 seconds
        arrows: true, // Enable next/prev buttons
        dots: false, // Enable dots for pagination
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});


