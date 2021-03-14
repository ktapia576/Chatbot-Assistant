var botui = new BotUI('hello-world');

botui.message.add({

  delay: 1000,
  photo: "img/icon.png",
  content: 'Hi, there. I am ABC Bank financial Chabot.'

}).then(function(){

  botui.message.add({

    delay: 1500,
    photo: "img/icon.png",
    content: 'You’ll have financial questions long before retirement. I can help you answer them. Where do you want to start?'

  }).then(function(){

    return botui.action.button({

      delay: 1000,
      action:[
        {text: 'Planning my retirement', value: 'r'},
        {text: 'Saving and Budgeting',value: 's'}
    ]

    }).then(function(res){

      if(res.value == 's'){

        printSavings(true)

      }else if(res.value == 'r'){

        printRetirement(true);

      }

    })

  })

})

function printSavings(isFirst){

  botui.message.add({

    delay: 1000,
    photo: "img/icon.png",
    content: "Saving enough can be hard to do. I will help you set goals you can stick to. Saving and budgeting can help you realize your long term goals and pursue financial freedom. I am here to help you along the way."

  }).then(function(){

    botui.message.add({

      delay: 5000,
      photo: "img/icon.png",
      content: "Important budgeting technique is the 50/30/20 rule. It involves dividing your monthly income into three “buckets”"

    }).then(function(){

      botui.action.button({

        delay: 1500,
        action:[
          {text: "Continue"}
        ]

      }).then(function(){
    
      botui.message.add({

        delay: 1500,
        photo: "img/icon.png",
        content: "50% (or less) goes to necessities such as housing, student loans and utilities. These are expenses you have to pay every month."

      }).then(function(){

        botui.message.add({

          delay: 1500,
          photo: "img/icon.png",
          content: "30% (or less) goes to nice-to-haves, such as entertainment, hobbies and travel."

        }).then(function(){

          botui.message.add({
  
            delay: 1500,
            photo: "img/icon.png",
            content: "20% (or more, if possible) goes toward savings and paying down debt"
  
          }).then(function(){

            botui.message.add({
    
              delay: 1500,
              photo: "img/icon.png",
              content: "The 50/30/20 rule can be adjusted based on your short- and long-term goals, but be careful about confusing “nice-to-haves” for “necessities.” Several dinners out each week and unlimited data plans may be nice to have, but they aren’t essential."
    
            }).then(function(){

              
              if(isFirst){
                botui.message.add({

                  delay: 5000,
                  photo: "img/icon.png",
                  content: "Now would you like to talk about planning retirement?"

                }).then(function(){

                  botui.action.button({
  
                    delay: 1000,
                    action: [
  
                      {text: "Okay", value: "yes"},
                      {text: "No", value: "no"}
  
                    ]
  
                  }).then(function(res){
  
                    if(res.value == 'yes'){
  
                      printRetirement(false);
  
                    }else if(res.value == 'no'){
  
                      printEnd();
  
                    }
                  
                  })
                })
              }else{

                printEnd();

              }
            })
            })
          }) 
        })
      })
    })             
  })          
}

function printRetirement(isFirst){

  botui.message.add({

    delay: 1000,
    photo: "img/icon.png",
    content: "You don’t have to tackle retirement alone. I can help you along the way."

  }).then(function(){

    botui.message.add({

      delay: 1500,
      photo: "img/icon.png",
      content: "For nearly 100 years, ABC Bank has been helping people like you pursue a retirement they can enjoy. Now, it’s your turn. No matter who you are, or where you are in your journey, I can help."

    }).then(function(){

      botui.action.button({

        delay: 1500,
        action: [

          {text: "Sounds Good!"}

        ]

      }).then(function(){

      botui.message.add({

        delay: 1500,
        photo: "img/icon.png",
        content: "Create a retirement vision and potential budget. A more precise approach to estimating for then is to start with what you spend now. Make a list of your monthly expenses: rent or mortgage (including property taxes), utilities, groceries, health insurance and entertainment. Don’t forget miscellaneous expenses like your gym membership, haircuts and vet bills."

      }).then(function(){

        botui.action.button({

          delay: 5000,
          action: [
            {text: 'Continue'}
          ]

        }).then(function(){

          botui.message.add({

            delay: 500,
            photo: "img/icon.png",
            content: "If you have a spouse or partner, it’s important to plan together for your retirement, including expenses."
  
          }).then(function(){
  
            botui.message.add({
  
              delay: 1500,
              photo: "img/icon.png",
              content: "Review questions like what health and medical considerations need to be considered into your decisions?"
  
            }).then(function(){
  
              botui.message.add({
  
                delay: 1500,
                photo: "img/icon.png",
                content: "Or where do you want to live? Geographic location, proximity to family, climate and cost of living should all be considerations, as well as ideas about social life, friends, and community."
  
              }).then(function(){
  
                botui.message.add({
  
                  delay: 2000,
                  photo: "img/icon.png",
                  content: "Revisit your “shared vision” once a year so it’s always in sync with your current situation."
  
                }).then(function(){

                  if(isFirst){
                    botui.message.add({
  
                      delay: 1000,
                      photo: "img/icon.png",
                      content: "Would you like talk about saving and budgeting?"
  
                    }).then(function(){
  
                      botui.action.button({
  
                        delay: 500,
                        action: [
  
                          {text: "Okay", value: "yes"},
                          {text: "No", value: "no"}
  
                        ]
  
                      }).then(function(res){
  
                        if(res.value == 'yes'){

                          printSavings(false);

                        }else if(res.value == 'no'){

                          printEnd();

                        }
  
                      })
  
                    })
                  }else{

                    printEnd();

                  }
                })
                })
  
              })
  
            })
  
          })
  
        })
  
      })
  
    })
          
  })
        

}

function printEnd(){

  botui.message.add({

    delay: 1000,
    photo: "img/icon.png",
    content: "It was nice chatting with you. Just text me if you want to know more about saving, investing and retirement."

  }).then(function(){

    botui.message.add({

      delay: 1500,
      photo: "img/icon.png",
      content: "Have a great day. Bye!"
  
    }).then(function(){

    })

  })

}