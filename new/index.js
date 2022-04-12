// var dxiUserTextColor;
// var dxiUserBorderColor;
// //variable declaration for bot chat
// var dxiBotTextColor;
// var dxiBotBorderColor;

//import temp from 'dxi-chat';

function start(){
    const temp = require("./node_modules/dxi-chat/library.js");
    //create body and input box 
    temp.dxiCreateMainInterface("pink","green");

    //initialise variables (textcolor,bordercolor)
    temp.dxiUserChatInterface("lightgreen","white");
    temp.dxiBotChatInterface("white","lightgreen");

    //after this dxiUserChat triggered based on the askQuest() function trigger
    for(let i=0;i<15;i++){
        temp.dxiUserChat("some sample user chat");
        temp.dxiBotChat("some sample bot chat");
    }

}