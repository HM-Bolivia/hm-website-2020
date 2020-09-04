var clock;

jQuery(document).ready(function() {

    var currentDate = new Date();
    var futureDate  = new Date(0);
    futureDate.setUTCSeconds(1568988000);

    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
    clock = jQuery('.cuentaregresiva').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true,
        language: 'spanish'
    });
});
