var scrollY = 0;
var distance = 20;
var speed = 25;

function moveTop(alg) {
    var currentY   = window.pageYOffset;
    var div        = document.getElementById(alg);
    var targetY    = div.offsetTop;

    console.log('currentY   = ' + currentY);
    console.log('targetY    = ' + targetY);

    var animate = setTimeout('moveTop(\''+alg+'\')', speed);

    // Zabezpieczenie przed drganiami
    // --------------------------------
    // Gdy currentY < targetY. Sytuacja gdy warunek nie zostanie spełniony
    // animacja nie jest wyzrowana. Trzeba wymusi zerowanie animacji
    var bodyHeight = document.body.offsetHeight;
    // +1 ponieważ drgania s gdy jest właczona - Console
    var yPos       = currentY + window.innerHeight + 1;
    console.log('bodyHeight = ' + bodyHeight);
    console.log('yPos       = ' + yPos);
    if(yPos > bodyHeight) {
        clearTimeout(animate);
    }

    // Warunek animacji
    // --------------------------------
    if(currentY < targetY) {
        scrollY = currentY + distance;
        window.scroll(0, scrollY);
    } else {
        // Warunek dokładnego dociagniecia DIV z Tytułem Video
        // ---------------------------------------------------
        console.log('clearTimeout currentY   = ' + currentY);
        while(currentY > targetY) {
            currentY--;
        }
        window.scroll(0, currentY);
        console.log('WHILE Finish. clearTimeout currentY   = ' + currentY);
        clearTimeout(animate);
        
    };
}

function moveDown(wrapper) {
    var currentY   = window.pageYOffset;
    var div        = document.getElementById(wrapper);
    var targetY    = div.offsetTop;

    console.log('currentY   = ' + currentY);
    console.log('targetY    = ' + targetY);

    var animate = setTimeout('moveDown(\''+wrapper+'\')', speed);

    if(currentY > targetY) {
        scrollY = currentY - distance;
        console.log('scrollY = ' + scrollY);
        window.scroll(0, scrollY);
        console.log('currentY = ' + window.pageYOffset);

    } else {
        clearTimeout(animate);
    }
    console.log('====================================');
}	