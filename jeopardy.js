
const earthQuestions = [
    {
        question: 'Earth is also know as *blank rock* from the sun',
        answer: '4th',
        choices: '1st, 3ed, 4th, 5th',
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
        choices: 'Atmospheric pressure, God blowing dandelions, butterfly wings, Hurricanes',
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
        question: 'All we are is dust in the wind is a line from which stately band',
        answer: 'Kansas',
        choices: 'Georgia, Florida, Kansas, California',
        points: 400,
    },
];
const fireQuestions = [
    {
        question: 'This Ray Bradbury book is titled for the tempeture at which fire burns paper',
        answer: 'Farenheint 451',
        choices: '100K, fahrenheit 451, 212C, 98 degrees',
        points: 100,
    },
    {
        question: ' Only this bear says you can prevent forest fires ',
        answer: 'Smokey the Bear',
        choices: 'Winnie the pooh, Smoke the Bear, Yogi Bear, Beaver Bear',
        points: 200,
    },
    {
        question: 'Which "Earth Wind and Fire" band member was the self proclaimed "fire" of the group',
        answer: 'Ralph Johnson',
        choices: 'Phillip Baily, Ralph Johnson, Vernable white, I made this up',
        points: 300,
    },
    {
        question: 'This top "Earth Wind and Fire single is also a Month',
        answer: 'September',
        choices: 'Novemeber, September, December, August',
        points: 400,
    },
];
const potentPotablesQuestions = [
    {
        question: 'Usually made from a base of apricot pits, which sweet, almond-flavored Italian liqueur is popularized by the Disaronno brand?',
        answer: 'Amaretto',
        choices: 'Sambuca, Amaretto, Absinth, Ramazzotti',
        points: 100,
    },
    {
        question: ' Sharing its name with a NYC borough, which cocktail is made with whiskey, sweet vermouth, bitters, and typically garnished with a Maraschino cherry? ',
        answer: 'Manhattan',
        choices: 'Manhattan, Brooklyn, Yonkers, Harlem',
        points: 200,
    },
    {
        question: 'What is the base spirit in an "Industry Sour"',
        answer: 'Fernet',
        choices: 'Fernet, Chartreuce, Vodka, Whiskey',
        points: 300,
    },
    {
        question: 'In the 2003 movie "Lost in Translation", which whiskey brand is Bob Harris (portrayed by Bill Murray) hired to advertise in Tokyo for $2 million?',
        answer: 'Jameson, Nikka, Suntory, Courvoisi',

        choices: 'Novemeber, September, December, August',
        points: 400,
    },
];


$('.earthOneHundred').click(function ($event) {
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

$('.earthTwoHundred').click(function ($event) {
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
$('.earthThreeHundred').click(function ($event) {
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
$('.earthFourHundred').click(function ($event) {
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
$('.windOneHundred').click(function ($event) {
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
$('.windTwoHundred').click(function ($event) {
    $('.windTwoHundred').addClass('disabled');
    const y = prompt(windQuestions[1].question, `Type ${windQuestions[1].choices}`);
    if (y === windQuestions[1].answer) {
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
$('.windThreeHundred').click(function ($event) {
    $('.windThreeHundred').addClass('disabled');
    const y = prompt(windQuestions[2].question, `Type ${windQuestions[2].choices}`);
    if (y === windQuestions[2].answer) {
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
$('.windFourHundred').click(function ($event) {
    $('.windFourHundred').addClass('disabled');
    const y = prompt(windQuestions[3].question, `Type ${windQuestions[3].choices}`);
    if (y === windQuestions[3].answer) {
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
$('.fireOneHundred').click(function ($event) {
    $('.fireOneHundred').addClass('disabled');
    const y = prompt(fireQuestions[0].question, `Type ${fireQuestions[0].choices}`);
    if (y === fireQuestions[0].answer) {
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

$('.fireTwoHundred').click(function ($event) {
    $('.fireTwoHundred').addClass('disabled');
    const y = prompt(fireQuestions[1].question, `Type ${fireQuestions[1].choices}`);
    if (y === fireQuestions[1].answer) {
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
$('.fireThreeHundred').click(function ($event) {
    $('.fireThreeHundred').addClass('disabled');
    const y = prompt(fireQuestions[2].question, `Type ${fireQuestions[2].choices}`);
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
$('.fireFourHundred').click(function ($event) {
    $('.fireFourHundred').addClass('disabled');
    const y = prompt(fireQuestions[3].question, `Type ${fireQuestions[3].choices}`);
    if (y === fireQuestions[3].answer) {
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
$('.potentPotablesOneHundred').click(function ($event) {
    $('.potentPotablesThreeHundred').addClass('disabled');
    const y = prompt(potentPotablesQuestions[0].question, `Type ${potentPotablesQuestions[0].choices}`);
    if (y === potentPotablesQuestions[0].answer) {
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

$('.potentPotablesOneHundred').click(function ($event) {
    $('.potentPotablesOneHundred').addClass('disabled');
    const y = prompt(potentPotablesQuestions[1].question, `Type ${potentPotablesQuestions[1].choices}`);
    if (y === potentPotablesQuestions[1].answer) {
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

$('.potentPotablesTwoHundred').click(function ($event) {
    $('.potentPotablesTwoHundred').addClass('disabled');
    const y = prompt(potentPotablesQuestions[2].question, `Type ${potentPotablesQuestions[2].choices}`);
    if (y === potentPotablesQuestions[2].answer) {
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

$('.potentPotablesFourHundred').click(function ($event) {
    $('.potentPotablesFourHundred').addClass('disabled');
    const y = prompt(potentPotablesQuestions[3].question, `Type ${potentPotablesQuestions[3].choices}`);
    if (y === potentPotablesQuestions[3].answer) {
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

