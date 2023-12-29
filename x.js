let quesJSON = [
    
      {
        correctAnswer: "int",
        options: [
          "string",
          "float",
          "int",
          "double"
        ],
        question: "What data type is used to represent whole numbers in C++?",
        score: 0,
        clicked: ""
      },
      
      {
        correctAnswer: "if-else",
        options: [
          "while",
          "for",
          "switch",
          "if-else"
        ],
        question: "Which C++ control structure is used for decision-making?",
        score: 0,
        clicked: ""
      }
      ,
      {
        correctAnswer: "cin",
        options: [
          "input",
          "console.in",
          "read",
          "cin"
        ],
        question: "What is used in C++ to accept input from the user?",
        score: 0,
        clicked: ""
      }
      ,
      {
        correctAnswer: "class",
        options: [
          "object",
          "method",
          "class",
          "function"
        ],
        question: "In C++, what is used to create a blueprint for objects?",
        score: 0,
        clicked: ""
      }
      ,
      {
        correctAnswer: "++i",
        options: [
          "i++",
          "--i",
          "++i",
          "i--"
        ],
        question: "Which C++ increment operator increases the value of the variable before returning the result?",
        score: 0,
        clicked: ""
      }
      
  ];
    let Finalscore=0;
    let Totalscore=quesJSON.length;
    const q=document.getElementById('question');
    const optdiv=document.getElementById('options');
    const scorediv=document.getElementById("score");
    const next=document.getElementById('next');
    const back=document.getElementById('back');
    const submit=document.getElementById('submit');
    
//Destructuring
function showQues(questionObj){
    let {question,correctAnswer,options,score,clicked}=questionObj;
    const newoptions=shuffleOptions(options);
    q.textContent=question;
    //Question gets displayed
    
    newoptions.forEach((op)=>{
        const opt=document.createElement('button');
        opt.textContent=op;
        optdiv.appendChild(opt);
        opt.addEventListener('click',()=>{
            // console.log(correctAnswer===op);
            if(op==correctAnswer){
                quesJSON[curr].score=1;
            }
            else{
              quesJSON[curr].score=-0.25;
            }
            quesJSON[curr].clicked=op;
            clicked=op;
            var children=optdiv.children;
            for(var i=0;i<children.length;i++){
              if(children[i].textContent==op){
                // console.log(op);
                children[i].style.backgroundColor="rgb(255, 136, 0)";
                continue;
              }
              children[i].style.backgroundColor="white";
            }
            // opt.backgroundColor="rgb(255, 136, 0)";
            // console.log(score);

            // scorediv.textContent=`Score:${score}`;
            
            // nextQues();
        })
        if(op==clicked){
          opt.style.backgroundColor="rgb(255, 136, 0)";
        }
    });
    // newoptions.forEach((xo)=>{
    //   if()
    // })
}
function nextQues(){
    // curr++;
    if(curr==quesJSON.length-1){
        return;
    }
    curr++;
    optdiv.textContent="";
    showQues(quesJSON[curr]);
}
let curr=0;
showQues(quesJSON[curr]);
submit.addEventListener('click',()=>{
  q.textContent="Quiz completed!!";
  optdiv.textContent="";
  next.remove();
  back.remove();
  submit.remove();
  quesJSON.forEach((ques)=>{
    Finalscore+=ques.score;
  });
  scorediv.textContent=`Score:${Finalscore}/${Totalscore}`;
});
next.addEventListener('click',()=>{
  nextQues();
});
back.addEventListener('click',()=>{
  if(curr>0){
    curr--;
    optdiv.textContent="";
    showQues(quesJSON[curr]);
  }
});
function shuffleOptions(options){
    for(let i=options.length-1;i>=0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [options[j],options[i]]=[options[i],options[j]];
    }
    return options;
}
