function changeButton(btn)
{
  let button = document.getElementById(btn);

  if (button.textContent === '+')
  {
    button.textContent = '-';
    button.style.backgroundColor = 'hsl(292, 42%, 14%)';
    button.style.paddingLeft = '8px';
    button.style.paddingRight = '8px';
  }
  else
  {
    button.textContent = '+';
    button.style.backgroundColor = 'rgb(91, 91, 225)';
    button.style.paddingLeft = '6px';
    button.style.paddingRight = '6px';
  }
}

function showHideContent(para) {
  let paragraph = document.getElementById(para);
  let computedStyle = window.getComputedStyle(paragraph);

  if (computedStyle.display === 'none')
  {
    paragraph.style.display = 'block';
  }
  else
  {
    paragraph.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function () {

  let firstButton = document.getElementById('btn1');
  let firstQuestion = document.getElementById('question1');

  let secondButton = document.getElementById('btn2');
  let secondQuestion = document.getElementById('question2');
  
  let thirdButton = document.getElementById('btn3');
  let thirdQuestion = document.getElementById('question3');
  
  let fourthButton = document.getElementById('btn4');
  let fourthQuestion = document.getElementById('question4');
  

  firstButton.addEventListener('click', () => {
    console.log('Question 1 clicked');
    showHideContent('desc1');
    changeButton('btn1');
  });

  firstQuestion.addEventListener('click', () => {
    console.log('Question 1 clicked');
    showHideContent('desc1');
    changeButton('btn1');
  });


  secondButton.addEventListener('click', () => {
    showHideContent('desc2');
    changeButton('btn2');
  });

  secondQuestion.addEventListener('click', () => {
    showHideContent('desc2');
    changeButton('btn2');
  });


  thirdButton.addEventListener('click', () => {
    showHideContent('desc3');
    changeButton('btn3');
  });

  thirdQuestion.addEventListener('click', () => {
    showHideContent('desc3');
    changeButton('btn3');
  });


  fourthButton.addEventListener('click', () => {
    showHideContent('desc4');
    changeButton('btn4');
  });

  fourthQuestion.addEventListener('click', () => {
    showHideContent('desc4');
    changeButton('btn4');
  });

  

});