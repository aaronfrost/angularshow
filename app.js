var peeps = [
  {name: 'Ayşegül Yönet', pic: 'pics/aysugal.jpg'},
  {name: 'Carmen Popoviciu', pic: 'pics/carmen.jpg'},
  {name: 'Stephen Fluin', pic: 'pics/stephen.jpg'},
  {name: 'John Papa', pic: 'pics/johnp.png'},
  {name: 'Lukas Ruebbelke', pic: 'pics/lukas.jpg'},
  {name: 'Pascal Precht', pic: 'pics/pascal.jpg'},
  {name: 'Jules Kremer', pic: 'pics/jules.jpg'},
  {name: 'Jeff Cross', pic: 'pics/jeffc.jpg'},
  {name: 'Mike Brocchi', pic: 'pics/mikeb.jpg'},
  {name: 'Uri Shaked', pic: 'pics/uri.png'},
  {name: 'Shai Reznik', pic: 'pics/shai.jpg'},
  {name: 'Aaron\'s Mom', pic: 'pics/mom.png'},
];
var peepsContent = peeps.map(p=>{
  return `
        <div class="pure-u-1-4 pure-u-sm-1-6 pure-u-md-1-6 pure-u-lg-1-12 pure-u-xl-1-12">
          <h5 style="display:block;height:12px;">${p.name}</h5>
          <img class="pure-img" src="${p.pic}"/>
        </div>
        `;
}).join('');
$(()=>$(peepsContent).appendTo('.peeps-container'))

var questions = [
  {id: 1, question: "If you were a product, what would your marketing tagline be?", video: "videos/question2.mp4"},
  {id: 2, question: "Without sounding too much like a stalker, who is your favorite person in the Angular community?", video: "videos/question3(2).mp4"},
  {id: 3, question: "What is the quickest way to get kicked out of an Angular event?", video: "videos/question4.mp4"},
  {id: 4, question: "Which speaker will most likely be seasick and vomit during their talk?", video: "videos/question5.mp4"},
  {id: 5, question: "What is the most impactful experience you have had in the Angular community?", video: "videos/question6.mp4"},
  {id: 6, question: "How many official RC versions did Angular 2.0 have?", video: "videos/question7.mp4"},
  {id: 7, question: "Which decorator do you add to each Angular service?", video: "videos/question8.mp4"},
  {id: 8, question: "What is the slang term for the parens, surrounded by braces, on an ngModel?", video: "videos/question9.mp4"},
  {id: 9, question: "What is your favorite decorator?", video: "videos/question10.mp4"},
];
var questionsContent = questions.map(q=>{
  return `
        <tr>
          <td>${q.id}</td>
          <td>${q.question}</td>
          <td>
            <a href="${q.video}" target="_blank">Link</a>
          </td>
        </tr>

      `;
}).join('');
$(()=>$(questionsContent).appendTo('.questions-table tbody'));