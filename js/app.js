'use strict';

let name = prompt('What is your name?');

if (name){
  alert('Nice to meet you ' + name + ' I hope you enjoy my quiz all about me!');
}
else{
  alert('I suppose you don\'t need to provide your name. Please enjoy my quiz anyways');
  name = 'visitor';
}

let res1 = confirm('For the next five questions, click "OK" for yes and "Cancel" for no. Do I live in the Seattle area?');

