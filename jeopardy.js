
const earthQuestions = [
    {
        question: 'Earth is also know as *blank rock* from the sun',
        answer: '4th',
        choices:'1st, 3ed, 4th, 5th',
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
   
 const windQuestions = [
        {
            question: 'Wind is caused by',
            answer: 'Atmospheric Pressure',
            choices:'Atmospheric pressure, God blowing dandelions, butterfly wings, Hurricanes',
            points: 100,
        },
        {
            question: 'This mountain recorded the highest wind speed  ',
            answer: 'Mount Washington',
            choices: 'Mount Everest , Mount Kilamanjaro, Mount Trashmoore, Mount Washington',
            points: 200,
        },
        {
            question: 'This is city has the moniker of the Windy city',
            answer: 'Chicago',
            choices: 'Boston, Windyton, Chicago, New York',
            points: 300,
        },
        {
            question: 'All we are is dust in the wind is a ling from which stately band',
            answer: 'Kansas',
            choices: 'Georgia, Florida, Kansas, California',
            points: 400,
        },
];

 $('.earthOneHundred').click( function($event) {
    $('.earthOneHundred').addClass('disabled');
    const y = prompt(earthQuestions[0].question, `Type ${earthQuestions[0].choices}`);
    if (y === earthQuestions[0].answer) {
        alert('Correct!');
        score += Questions[0].points;
        $('.scoreUpdate').html(score);
    }
    else {
        alert('Incorrect');
        score -= Questions[0].points;
        $('.scoreUpdate').html(score);
    }
});

$('.earthTwoHundred').click( function($event) {
    $('.earthTwoHundred').addClass('disabled');
    const y = prompt(earthQuestions[1].question, `Type ${earthQuestions[1].choices}`);
    if (y === earthQuestions[1].answer) {
        alert('Correct!');
        score += Questions[1].points;
        $('.scoreUpdate').html(score);
    }
    else {
        alert('Incorrect');
        score -= Questions[1].points;
        $('.scoreUpdate').html(score);
    }
});
$('.earthThreeHundred').click( function($event) {
    $('.earthThreeHundred').addClass('disabled');
    const y = prompt(earthQuestions[2].question, `Type ${earthQuestions[2].choices}`);
    if (y === earthQuestions[2].answer) {
        alert('Correct!');
        score += Questions[2].points;
        $('.scoreUpdate').html(score);
    }
    else {
        alert('Incorrect');
        score -= Questions[2].points;
        $('.scoreUpdate').html(score);
    }
});
$('.earthFourHundred').click( function($event) {
    $('.earthFourHundred').addClass('disabled');
    const y = prompt(earthQuestions[3].question, `Type ${earthQuestions[3].choices}`);
    if (y === earthQuestions[3].answer) {
        alert('Correct!');
        score += Questions[3].points;
        $('.scoreUpdate').html(score);
    }
    else {
        alert('Incorrect');
        score -= Questions[3].points;
        $('.scoreUpdate').html(score);
    }
});
// Functions about Wind
$('.winOneHundred').click( function($event) {
    $('.windOneHundred').addClass('disabled');
    const y = prompt(windQuestions[0].question, `Type ${windQuestions[0].choices}`);
    if (y === windQuestions[0].answer) {
        alert('Correct!');
        score += Questions[0].points;
        $('.scoreUpdate').html(score);
    }
    else {
        alert('Incorrect');
        score -= Questions[0].points;
        $('.scoreUpdate').html(score);
    }
});