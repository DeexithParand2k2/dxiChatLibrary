//variable which the user inputs
var dxiBackColor = "#0c0e0c";
var dxiBoxColor = "#d8323c";

//Can these be declared as global variables
//variable declaration for user chat
var dxiUserTextColor;
var dxiUserBorderColor;
//variable declaration for bot chat
var dxiBotTextColor;
var dxiBotBorderColor;

//All you need to start with is just body tag
function start(){

    //create body and input box 
    dxiCreateMainInterface(dxiBackColor,dxiBoxColor);

    //initialise variables (textcolor,bordercolor)
    dxiUserChatInterface("lightgreen","white");
    dxiBotChatInterface("white","lightgreen");

    //after this dxiUserChat triggered based on the askQuest() function trigger
    for(let i=0;i<15;i++){
        dxiUserChat("some sample user chat");
        dxiBotChat("some sample bot chat");
    }

}


