'use strict';

let person = [];
let tic = new Array(3).fill(0);
let correct = new Array(3).fill(0);
let plants = ['cucumber', 'lettuce', 'pumpkin', 'dahlia', 'radish', 'spinach', 'tomato'];

function myQuiz() {
  tic[0] = 1;
  correct[0] = 0;
  person[0] = prompt('What is your name?');

  if (person[0]) {
    alert('Nice to meet you, ' + person[0] + ', I hope you enjoy my quiz all about me! Press okay to continue.');
  }
  else {
    alert('I suppose you don\'t need to provide your name. I\'ll just refer to you as "Visitor." Please enjoy my quiz anyways. Press OK to continue.');
    person[0] = 'Visitor';
  }

  person[1] = confirm(person[0] + ', for the next five questions, click "OK" for yes and "Cancel" for no.\nDo I live in the Seattle area?');

  if (person[1]) {
    alert('I do in fact live in Seattle');
    correct[0]++;
  }
  else { alert('Actually, I have been living in the Seattle area most of my life. Technically I live in Bellingham, but Bellingham in often considered part of the greater Seattle area.'); }

  person[2] = confirm('Do I speak French?');

  if (person[2]) {
    alert('I don\'t actually. However, I do know a few words in French.');
  }
  else {
    alert('You\'re right, but I wish I did. I am currently learning Italian.');
    correct[0]++;
  }

  person[3] = confirm('Did I attend Western Washington University for undergraduate?');

  if (person[3]) {
    alert('Correct! I\'m sure it helped knowing that I live in Bellingham.');
    correct[0]++;
  }
  else { alert('Nope, I am a Western Alumnus'); }

  person[4] = confirm('Am I married?');

  if (person[4]) {
    alert('No, not yet. I am engaged though!');
  }
  else {
    alert('You are correct. But I will be married on August 20th!!!');
    correct[0]++;
  }

  person[5] = confirm('Am I over the age of thirty?');

  if (person[5]) {
    alert('I\'m actually not. But I\'m getting dangerously close.');
  }
  else {
    alert('Correct, I\'m still in my third decade.');
    correct[0]++;
  }

  if (correct[0] >= 3) {
    alert('You answered ' + correct[0] + ' questions correctly. You know me pretty well!');
  }
  else { alert('You answered ' + correct[0] + ' questions correctly. Now that you know me a little better, maybe next time you will receive a higher score'); }

}

function numberGuess() {
  tic[1] = 1;
  correct[1] = 0;

  for (let i = 0; i < 4; i++) {
    let ans = prompt('Guess a number between 1 and 10.');
    if (ans === '6' && i === 0) {
      alert('Spot on! You got it on your first try!');
      correct[1]++;
      break;
    }
    else if (ans === '6' && i > 0) {
      alert('Nice, it only took you ' + (i + 1) + ' guesses.');
      correct[1]++;
      break;
    }
    else if (ans > '6') {
      if (i < 3) {
        alert('Your guess was too high');
      }
      else {
        alert('You exhausted all your attempts, refresh to try again.\nHint: The answer is 6.');
      }
    }
    else if (ans < '6') {
      if (i < 3) {
        alert('Your guess was too low');
      }
      else {
        alert('You exhausted all your attempts, refresh to try again.\nHint: The answer is 6.');
      }
    }
  }
}

function myGarden() {
  tic[2] = 1;
  correct[2] = 0;

  for (let i = 0; i < 6; i++) {
    let state = false;
    let ans;

    if (i === 0) {
      ans = prompt('Name one type of plant growing in my vegetable garden (singular).').toLowerCase();
    }
    else if (i === 5) {
      ans = prompt('Nope, try again.\nThis is your last guess, make it count!.\nName one type of plant growing in my vegetable garden (singular).').toLowerCase();
    }
    else {
      ans = prompt('Nope, try again.\nYou have ' + (6 - i) + ' more guesses.\nName one type of plant growing in my vegetable garden (singular).').toLowerCase();
    }

    for (let i = 0; i < plants.length; i++) {
      if (ans === plants[i]) {
        alert('You must be a plant connoisseur!\nIn all, I planted: cucumber, lettuce, pumpkin, dahlia, radish, spinach, and tomato.');
        correct[2]++;
        state = true;
        break;
      }
    }

    if (state) {
      break;
    }
    else if (i === (plants.length - 2)) {
      alert('I didn\'t sow any of those plants. Instead, I planted these: cucumber, lettuce, pumpkin, dahlia, radish, spinach, and tomato.');
    }
  }
}

function arraySum(array){
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

function scoreCheck() {
  let ansCount = arraySum(tic);
  console.log(tic[0]);
  console.log(tic[1]);
  console.log(tic[2]);
  console.log(ansCount);
  if (ansCount === 3){
    let total = arraySum(correct);
    alert('Your total score is: ' + total + '/7.');
  }
  else{
    alert('You haven\'t completed all of the quizzes yet');
  }
}
