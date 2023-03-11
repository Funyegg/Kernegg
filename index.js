const discord = require("discord.js-selfbot-v13");
const bot = new discord.Client();
const base = [
    "you [EMPHASIS]{INSULT}",
    "{NAME} needs to stop [EMPHASIS]{VERB}ing {GOOD}",
    "you [EMPHASIS]{INSULT} with a [ADJECTIVE]{NOUN}",
    "{NAME} more like [EMPHASIS][ADJECTIVE]{INSULT} {NOUN}",
    "go to {EMPHASIS} {NOUN}",
    "did you just {VERB} [GADJECTIVE]{GOOD}? go back to {ADJECTIVE} {INSULT} [THREAT-]",
    "your {VERB}ed {NOUN} be like ",
    "you send {NOUN} everywhere",
    "spreading misinformation",
    "you probably date {NAME} and [EMPHASIS]{VERB} with him",
    "{VERB} on {ADJECTIVE} [INSULT]{NOUN}",
    "{INSULT} with {NOUN} on your {NOUN} go [EMPHASIS]{VERB} on {GOOD}",
    "{GOOD} is not [EMPHASIS]{INSULT} are you [EMPHASIS]{INSULT} you {NOUN}",
    "your {NOUN} is with [EMPHASIS]{INSULT}",
    "go [EMPHASIS]{VERB}",
    "stop [EMPHASIS]{VERB}ing",
    "your [EMPHASIS]{NOUN}less ass is {VERB}ing",
    "i bet your [EMPHASIS]{NOUN} is not as {GADJECTIVE} like [EMPHASIS]{GOOD}'s",
    "your [EMPHASIS]{NOUN} should go vc {GOOD} [THREAT-]",
    "stop {VERB}ing [EMPHASIS]{GOOD} {THREAT}",
    "i bet your [EMPHASIS]{NOUN} is {INSULT} [THREAT-]",
    "{NAME} is a [EMPHASIS][ADJECTIVE]{INSULT} from {NOUN}",
    "[EMPHASIS]{INSULT} will {VERB} with {NOUN} up {NAME}",
    "your {NOUN} left you",
    "{NAME} is a [EMPHASIS][ADJECTIVE]{INSULT} ass [ADJECTIVE]{INSULT}",
    "[EMPHASIS]{NAME} can't {VERB} doggis lol",
    "me and {GOOD} [EMPHASIS]hacked doggis",
    "[EMPHASIS]doxx doggis {THREAT}",
    "stop {VERB}ing you [EMPHASIS]{INSULT} [THREAT-]",
    "[EMPHASIS]accusing me of {VERB}ing huh",
    "{NAME}'s {NOUN} be like: [EMPHASIS]{ADJECTIVE} {INSULT}",
    "[EMPHASIS]{NOUN} is {VERB}ing {NAME}'s [ADJECTIVE]{NOUN}",
    "{GOOD} never [EMPHASIS]did {VERB} you {INSULT} he is {GADJECTIVE}",
    "because you {VERB}ed [EMPHASIS]{NOUN}",
    "you aint from {NOUN}",
    "i will ignore you",
    "keep {VERB}ing like a [EMPHASIS]{INSULT} dating {NAME}"
]

const questions = [
    "[DEMAND][WHY]are you [EMPHASIS][ADJECTIVE]{INSULT} you [ADJECTIVE]{INSULT}?",
    "[DEMAND][WHY]did you [EMPHASIS]{VERB} {GOOD}?",
    "[DEMAND][WHY]is your [EMPHASIS]{NOUN} so {ADJECTIVE}?",
    "[DEMAND][WHY]is {NAME} a [EMPHASIS][ADJECTIVE]{INSULT}?",
    "[DEMAND][WHY]are you so [EMPHASIS]{ADJECTIVE}?",
    "[DEMAND][WHY]are you going to [EMPHASIS]{VERB}?"
]

const handles = {
    "EMPHASIS": ["fucking"],
    "NAME":  ["jy","fuckune","ran","polskasoft","doggis","fune","ziggy","diogo"],
    "INSULT": ["bass","satanist","demon","mosquito","retard","{NOUN} muncher","skiddie","nigerian","racist","microwave","indian","scared","bozoworlder","hippopotamus","bitch","troll","emo","monkey","furry","dumbfuck","doggis", "fujitsu","pyramid"],
    "VERB": ["twerk","spread misinformation", "munch","attack","doxx","live","expose","ask","sleep","eat","use","impersonate","accuse"],
    "ADJECTIVE":["bad","evil","small","weak","built","shriveled","dirty","toshiba","dirtyminded","braindamaged","wet","depressed","broke","poor","cold"],
    "NOUN":["pyramid","warshit","cart","bass","femboy","pickle","mosquito","skiddie","bullshit","israel","mountain","microwave","fridge","troll","huawei","liver","father","grandma","kfc","family","amazon box","sauce bottle","cockroach","orphanage","antarctica","house","beaver","trash can","palestine"],
    "GOOD":["combine","xoly","miso","fleur","catg"],
    "THREAT":["or else i will {VERB} {NAME}","or {GOOD} will [EMPHASIS]{VERB} {NAME}","or you will pay","or you will regret","or i will [EMPHASIS]eat your {NOUN}"],
    "GADJECTIVE": ["chad","good","cool","not retarded","based"],
    "WHY":["why"],
    "DEMAND": ["say","tell me","tell us"]
}

function handlehandles(totranslate){
    Object.keys(handles).forEach(handle=>{
    //Replace all required handles with a random item from the handle
    if(totranslate.includes("{"+handle+"}")) totranslate = totranslate.replace("{"+handle+"}", handles[handle][Math.floor(Math.random() * handles[handle].length)]);

    if(totranslate.includes("["+handle+"]")){
    //Replace all 50% chance handles with either the corresponding random item, or nothing
    if(Math.random() < 0.5) totranslate = totranslate.replace("["+handle+"]",handles[handle][Math.floor(Math.random() * handles[handle].length)]+" ");
    else totranslate = totranslate.replace("["+handle+"]","");
    } 
    
    if(totranslate.includes("["+handle+"-]")){
    //Replace all 50% chance handles with either the corresponding random item, or nothing (dont end with a space)
    if(Math.random() < 0.5) totranslate = totranslate.replace("["+handle+"-]",handles[handle][Math.floor(Math.random() * handles[handle].length)]);
    else totranslate = totranslate.replace("["+handle+"-]","");
    }
    })

    return totranslate;
}

function generate(numer){
    //Generate the unhandled string
    var startstring = "";
    for(i=0;i<numer;i++){
        startstring+=base[Math.floor(Math.random() * base.length)]+" ";
        if(Math.random() < 0.1) startstring+="[EMPHASIS][ADJECTIVE]{INSULT} ";
    }

    //Translate the unhandled string
    while(startstring.includes("{") || startstring.includes("[")) startstring = handlehandles(startstring);
    return startstring;
}

function ask(){
    var startstring = questions[Math.floor(Math.random()*questions.length)];

    //Translate the unhandled string
    while(startstring.includes("{") || startstring.includes("[")) startstring = handlehandles(startstring);
    return startstring;
}

bot.login("your token");

bot.on("ready",()=>{
    bot.user.setPresence({activities:[{name:"kernegg moment",type:"PLAYING",details:"kern3l#9076 is a fake kernegg."}], status:"dnd"});
})

bot.on("messageCreate",message=>{
    if(message.author.id == "owners id" && message.content == "k!restart") process.exit();
    if(message.author.id == bot.user.id) return;
    if(message.content.toLowerCase().includes("kernegg")){
        preresponse = "";
        if(Math.random < 0.5) preresponse = ask();
        else preresponse = generate(1);
        message.channel.send("<@"+message.author.id+"> "+preresponse);
    }
    else if(Math.random() < 0.05) message.channel.send("<@"+message.author.id+"> "+generate(Math.round(Math.random() * 15) + 5));
    else if(Math.random() < 0.2) message.channel.send("<@"+message.author.id+"> "+ask());
})
