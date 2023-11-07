// blur-effect.js

document.getElementById('button1').addEventListener('click', function() {
    var label1 = document.getElementById('label1');
    var body = document.body;

    // Toggle the visibility of label1
    if (label1.style.display === 'none' || label1.style.display === '') {
        label1.style.display = 'block';
    } else {
        label1.style.display = 'none';
    }

    // Toggle the blur effect on the body
    body.classList.toggle('blur');
});
