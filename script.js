let btn = document.getElementById('btn');
let output = document.getElementById('output');

btn.addEventListener('click', function() {

    let str = document.getElementById('word').value;

    if (str.length <= 10) {

        output.innerHTML = ('This is too short make your password longer than ' + str.length + (' characters.'));

    } else {

        output.innerHTML = (' Good Job 10 or more characters are needed for a strong password you have ' + str.length);

    }
});