'use strict';

let person = [];
let correct = 0;

person[0] = prompt('What is your name?');

function quiz(){
  if (person[0]){
    alert('Nice to meet you, ' + person[0] + ', I hope you enjoy my quiz all about me! Press okay to continue.');
  }
  else{
    alert('I suppose you don\'t need to provide your name. I\'ll just refer to you as "Visitor." Please enjoy my quiz anyways. Press OK to continue.');
    person[0] = 'Visitor';
  }
  
  person[1] = confirm(person[0] + ', for the next five questions, click "OK" for yes and "Cancel" for no.\nDo I live in the Seattle area?');
  
  if (person[1]){
    alert('I do in fact live in Seattle');
    correct++;
  }
  else{alert('Actually, I have been living in the Seattle area most of my life. Technically I live in Bellingham, but Bellingham in often considered part of the greater Seattle area.');}
  
  person[2] = confirm('Do I speak French?');
  
  if (person[2]){
    alert('I don\'t actually. However, I do know a few words in French.');
  }
  else{alert('You\'re right, but I wish I did. I am currently learning Italian.');
    correct++;
  }
  
  person[3] = confirm('Did I attend Western Washington University for undergraduate?');
  
  if (person[3]){
    alert('Correct! I\'m sure it helped knowing that I live in Bellingham.');
    correct++;
  }
  else{alert('');}
  
  person[4] = confirm('Am I married?');
  
  if (person[4]){
    alert('No, not yet. I am engaged though!');
  }
  else{alert('You are correct. But I will be married on August 20th!!!');
    correct++;
  }
  
  person[5] = confirm('Am I over the age of thirty?');
  
  if (person[5]){
    alert('I\'m actually not. But I\'m getting dangerously close.');
  }
  else{alert('Correct, I\'m still in my third decade.');
    correct++;
  }
  
  if (correct >=3){
    alert('You answered ' + correct + ' questions correctly. You know me pretty well!');
  }
  else{alert('You answered ' + correct + ' questions correctly. Now that you know me a little better, maybe next time you will receive a higher score')}
  
}
quiz();

