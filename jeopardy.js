
const EarthQuestions = [
    {
        question: 'Earth is also know as *blank rock* from the sun',
        answer: 'a',
        choices: 'a',
        points: 100,
    },
    {
        question: 'Earths Deepest Trech is the ',
        answer: 'Mariana Trench',
        choices: 'Your Mom , Grand Canyon, Mariana Trench, or The Nile River Basin',
        points: 200,
    },
    {
        question: 'This is, by volume, the largest body of fresh water',
        answer: 'Lake Bikyal',
        choices: 'Lake Okechobee,Lake Bikyal, Lake Huron, Lake Michigan',
        points: 300,
    },
    {
        question: 'Earth, Water, Fire and wind, all said in unison with silly rings summons this fictious super-hero',
        answer: 'Captain Planet',
        choices: 'Capt-n Crunch, Captain Planet, Xenu... you know, that Scientology guy, or Lucifer',
        points: 400,
    },
];

elementGetById.('100A').onclick = alert;
$('.earth100').on('click', function() {
    $(this).addClass('disabled');
    const y = $.prompt(earthQuestions[0].question, `Type ${earthQuestions[0].choices}`);
    if (y === earthQuestions[0].answer) {
        alert('Correct!');
        score += earthQuestions[0].points;
        $('.scoreUpdate').html(score);
    }
    else {
        alert('Incorrect');
        score -= earthQuestions[0].points;
        $('.scoreUpdate').html(score);
    }
});

