export const githubBaseUrl = 'https://sweickel.github.io';
export interface IProject {
  imgSrc: string;
  url: string;
  title: string;
  body: string;
}

export function projects():IProject[] { 
  return [
    {
      imgSrc: 'assets/images/Calculator.png',
      url: `${githubBaseUrl}/calculator/`,
      title: 'Calculator',
      body: 'Simple Calculator built with Javascript.',
    },
    {
      imgSrc: 'assets/images/scissors.png',
      url: `${githubBaseUrl}/rock-paper-scissors/`,
      title: 'Rock, Paper, Scissors',
      body: 'This is a fun Rock, Paper, Scissors browser console game.'
    },
    {
      imgSrc: 'assets/images/etch-a-sketch.png',
      url: `${githubBaseUrl}/etch-a-sketch`,
      title: 'Make-a-Sketch',
      body: 'HTML/CSS/Javascript implementation of the kids\' toy Etch-a-Sketch.'
    },
    {
      imgSrc: 'assets/images/tic-tac-toe.png',
      url: `${githubBaseUrl}/tic-tac-toe`,
      title: 'Tic-Tac-Toe',
      body: 'HTML/CSS/Javascript implementation of Tic-Tac-Toe.'
    },
    {
      imgSrc: 'assets/images/restaurant.png',
      url: `${githubBaseUrl}/restaurant`,
      title: 'Restaurant website satire',
      body: 'Goofy restaurant website satire.'
    },
  ]
};