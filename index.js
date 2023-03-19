const discord = require("discord.js-selfbot-v13");
const bot = new discord.Client();
const base = [
    "you [EMPHASIS]{INSULT}( from {PLACE})",
    "{NAME} needs to stop [EMPHASIS]{VERB}ing {GOOD}",
    "you [EMPHASIS]{INSULT} with a [ADJECTIVE]{NOUN}",
    "{NAME} more like [EMPHASIS][ADJECTIVE]{INSULT} {NOUN}",
    "go to {EMPHASIS} {PLACE}( you [ADJECTIVE]{INSULT})",
    "did you just {VERB} [GADJECTIVE]{GOOD}?( go back to [ADJECTIVE]{PLACE} [THREAT-])",
    "you send {NOUN} everywhere( like a {INSULT})",
    "you probably date {NAME} and [EMPHASIS]{AVERB} with him",
    "{VERB} on {ADJECTIVE} [INSULT]{NOUN}",
    "{INSULT} with {NOUN} on your {NOUN} go [EMPHASIS]{VERB} on {GOOD}",
    "{GOOD} is not [EMPHASIS]{INSULT} are you [EMPHASIS]{INSULT}( you {NOUN} from {PLACE})",
    "your {NOUN} is with [EMPHASIS]{INSULT}",
    "go [EMPHASIS]{AVERB}( like a [ADJECTIVE]{INSULT})",
    "stop [EMPHASIS]{VERB}ing",
    "your [EMPHASIS]{NOUN}less ass is {VERB}ing",
    "i bet your [EMPHASIS]{NOUN} is not as {GADJECTIVE} like [EMPHASIS]{GOOD}'s",
    "your [EMPHASIS]{NOUN} should go vc {GOOD} [THREAT-]",
    "stop {VERB}ing [EMPHASIS]{GOOD} {THREAT}",
    "i bet your [EMPHASIS]{NOUN} is {ADJECTIVE}( you {INSULT})",
    "{NAME} is a [EMPHASIS]({ADJECTIVE} [ASS]){INSULT} from [ADJECTIVE]{PLACE}",
    "[EMPHASIS]{INSULT} will {AVERB} with {NOUN} up {NAME}",
    "your {NOUN}( from [EMPHASIS]{PLACE}) left you",
    "{NAME} is a [EMPHASIS][ADJECTIVE]{INSULT} ass [ADJECTIVE]{INSULT}",
    "[EMPHASIS]{NAME}( from {PLACE}) can't {VERB} doggis lol",
    "me and {GOOD} [EMPHASIS]hacked doggis",
    "[EMPHASIS]doxx doggis (you {ADJECTIVE} ass {INSULT}){THREAT}",
    "stop {VERB}ing you [EMPHASIS]{INSULT} [THREAT-]",
    "{NAME}'s {NOUN} is [EMPHASIS]{ADJECTIVE}",
    "[EMPHASIS]{NOUN} is {VERB}ing {NAME}'s [ADJECTIVE]{NOUN}",
    "{GOOD} never [EMPHASIS]did {VERB}( you {INSULT})( he is {GADJECTIVE})",
    "because you {VERB}ed [EMPHASIS]{NOUN}",
    "you aint from [EMPHASIS]{PLACE}( you {INSULT})",
    "i will [EMPHASIS]ignore you",
    "keep {VERB}ing like a [EMPHASIS]{INSULT} dating {NAME}",
    "don't lie, you {AVERB} you [EMPHASIS]({ADJECTIVE} [ASS]){INSULT}",
    "go back to [EMPHASIS][ADJECTIVE]){PLACE} you {NAME} supporting ({ADJECTIVE} [ASS]){INSULT}",
    "{NAME} is from [ADJECTIVE]{PLACE}",
    "{AVERB} if [EMPHASIS]{INSULT}",
    "you have gone too [EMPHASIS]far you [ADJECTIVE]{INSULT}",
    "more like fake you [EMPHASIS]{INSULT}",
    "you are saying {GOOD} is not [EMPHASIS]{GADJECTIVE} you ({ADJECTIVE} [ASS]){INSULT}",
    "admit it you [EMPHASIS]{AVERB} with {NAME} you [EMPHASIS][ADJECTIVE]{INSULT}",
    "dont lie {NAME} is [ADJECTIVE]{INSULT}( that lives in {PLACE})",
    "{GOOD}'s {NOUN} is better than [EMPHASIS]{NAME}'s",
    "my {NOUN} is better than yours you [EMPHASIS][ADJECTIVE]{INSULT}( from [EMPHASIS]{PLACE})",
    "{NAME} will [EMPHASIS]ask \"{QUESTION}\"",
    "you will [EMPHASIS]ask \"{QUESTION}\" like [ADJECTIVE]{INSULT}",
    "{NAME} is out of their [EMPHASIS]mind",
    "you're a [EMPHASIS]{ADJECTIVE} ass {INSULT}( from {PLACE})"
]

const images = [
    "bus filled with [EMPHASIS]{NAME} fans: https://media.discordapp.net/attachments/1080946380941557800/1085893120337657927/Kuvatommis_20230228_151521.png?width=376&height=286",
    "{NAME}'s [EMPHASIS][ADJECTIVE]{NOUN}: https://media.discordapp.net/attachments/1080946380941557800/1085893246045134889/Kuvatommis_20230228_152455.png?width=669&height=427",
    "{NAME}'s [EMPHASIS]{NOUN} when {GOOD}: https://media.discordapp.net/attachments/1080946380941557800/1085099456560640040/samochud_on_phone.png?width=510&height=384",
    "{NAME}'s [EMPHASIS]face: https://media.discordapp.net/attachments/1080946380941557800/1083531394069844079/3903e1cfde9929df333b26047b66b4c6.jpg?width=400&height=356",
    "https://media.discordapp.net/attachments/1080946380941557800/1086752540533731439/91Xx0DlfwEQP5kOkGiy2wAAAABJRU5ErkJggg.png?width=443&height=360",
    "my computer is better than {NAME}'s https://media.discordapp.net/attachments/1080946380941557800/1086749464288563240/DSC_0356.jpg?width=240&height=426",
    "https://media.discordapp.net/attachments/1083432215490334760/1083479542573842502/ezgif.com-gif-maker13.gif?width=601&height=427",
    "https://media.discordapp.net/attachments/1080946380941557800/1084894889998819338/image.png?width=759&height=427",
    "https://media.discordapp.net/attachments/1080946380941557800/1084410267598848050/20230312_112904.jpg?width=474&height=427",
    "https://media.discordapp.net/attachments/1080946380941557800/1084406273279271002/DSC_0338.jpg?width=240&height=426",
    "https://media.discordapp.net/attachments/1080946380941557800/1083857302211285102/image.png?width=398&height=427",
    "{NAME} will [EMPHASIS]see this: {SCARYROBLOX}",
    "{NAME}'s house {SCARYROBLOX}",
    "https://media.discordapp.net/attachments/1080946380941557800/1083523566907179200/image-47.png?width=929&height=427",
    "https://media.discordapp.net/attachments/1080946380941557800/1082643224897781781/2023-02-2612.08.24PM.png?width=759&height=427",
    "https://media.discordapp.net/attachments/1080946380941557800/1086755338021253270/Screenshot_2023-03-18_154857.jpg?width=632&height=427",
    "{NAME}'s pc: https://media.discordapp.net/attachments/1080946380941557800/1086772168286818426/d-photo-u1.png?width=581&height=427"
]

const questions = [
    "[DEMAND](why )are you [EMPHASIS][ADJECTIVE]{INSULT}( from [ADJECTIVE]{PLACE})?",
    "[DEMAND](why )did you [EMPHASIS]{VERB} {GOOD}?",
    "[DEMAND](why )is your [EMPHASIS]{NOUN} so {ADJECTIVE}?",
    "[DEMAND](why )is {NAME} a [EMPHASIS][ADJECTIVE]{INSULT}( from {PLACE})?",
    "[DEMAND](why )are you so [EMPHASIS]{ADJECTIVE}?",
    "[DEMAND](why )are you going to [EMPHASIS]{VERB} {GOOD}?",
    "[DEMAND](why )are you going to [EMPHASIS]{AVERB}?",
    "[DEMAND](why )do you think {NOUN} is a [EMPHASIS]{INSULT}?",
    "[DEMAND](why )do you live in [EMPHASIS][ADJECTIVE]{PLACE}?",
    "[DEMAND](why )do you [EMPHASIS]{AVERB}?",
    "[DEMAND](why )do you say {GOOD} is not {GADJECTIVE}?",
    "[DEMAND]what is the [EMPHASIS]meaning of this you [ADJECTIVE]{INSULT}?",
    "[DEMAND]what is your {NOUN}( you [EMPHASIS]{INSULT})?",
    "[DEMAND]what( the fuck) is this( you [EMPHASIS]{INSULT})?",
    "[DEMAND](why )is {NAME} going to ask this \"{QUESTION}\"",
    "[DEMAND](why )are you going to ask this one \"{QUESTION}\""
]

const handles = {
    "EMPHASIS": ["fucking"],
    "NAME":  ["jy","fuckune","ran","polskasoft","doggis","fune","ziggy","diogo","im cat"],
    "INSULT": ["bass","satanist","demon","mosquito","retard","{NOUN} muncher","skiddie","nigerian","racist","microwave","indian","bozoworlder","hippopotamus","bitch","troll","emo","monkey","furry","dumbfuck","doggis", "fujitsu","pyramid","fart","muncher","lardass"],
    "VERB": ["munch","attack","doxx","expose","ask","eat","manipulate","impersonate","accuse","report","false report","insult"],
    "AVERB": ["twerk", "spread misinformation","live","sleep","manipulate","accuse","harass","masturbate","jerk off"],
    "ADJECTIVE":["bad","evil","small","weak","dumb","shriveled","dirty","toshiba","dirtyminded","braindamaged","wet","depressed","broke","poor","coldest","disabled","gay","cringe"],
    "NOUN":["cart","bass","femboy","pickle","mosquito","skiddie","bullshit","microwave","fridge","troll","huawei","liver","father","grandma","kfc","family","amazon box","sauce bottle","cockroach","beaver","trash can","gay porn","ip grabber","behaviour","computer","computer mouse","phone"],
    "PLACE":["pyramid","warshit","israel","mountain","orphanage","antarctica","house","palestine"],
    "GOOD":["combine","xoly","miso","fleur","catg","katarzyna"],
    "THREAT":["or else i will {VERB} {NAME}","or {GOOD} will [EMPHASIS]{VERB} {NAME}","or you will pay","or you will regret","or i will [EMPHASIS]eat your {NOUN}"],
    "GADJECTIVE": ["chad","good","cool","based"],
    "WHY":["why"],
    "SCARYROBLOX": ["https://media.discordapp.net/attachments/1080946380941557800/1083857302211285102/image.png?width=398&height=427","https://media.discordapp.net/attachments/1080946380941557800/1083856521668079667/image.png?width=759&height=427","https://media.discordapp.net/attachments/1080946380941557800/1084088902240980992/download_4.jpg?width=284&height=427","https://media.discordapp.net/attachments/1080946380941557800/1083533020830642246/Picsart_23-02-25_16-41-54-750.jpg?width=623&height=426"],
    "DEMAND": ["say","tell me","tell us","admit it"],
    "QUESTION": ["[WHY]does {GOOD} like gay porn?","[WHY]is {GOOD} such a [EMPHASIS][ADJECTIVE]{INSULT}?","[WHY]is {GOOD} not [EMPHASIS]{GADJECTIVE}?","why doesn't {GOOD} believe my [EMPHASIS]lies?","why does {GOOD} [EMPHASIS]hate {NAME}?","should i live in the [ADJECTIVE]{PLACE}?","why is {GOOD}'s [EMPHASIS]huawei so {ADJECTIVE}?"],
    "RESPONSE": ["cap","spreading misinformation( huh)?","(hey {GOOD} )look at this [ADJECTIVE]{INSULT} making up lies","you have 1 day left for lies you [EMPHASIS]{INSULT}","fake","false","more like you","cope","they ain't you [EMPHASIS]{INSULT}","says the {ADJECTIVE}{INSULT}( from [EMPHASIS]{PLACE})","(no )proof(?)","[DEMAND]are you out of your [EMPHASIS]mind( you {INSULT})?","{INSULT}","[EMPHASIS]prove it"],
    "ANSWER": ["no","stfu","they are not [EMPHASIS]{INSULT}( like you think)","are you going to [EMPHASIS]ask \"{QUESTION}\" next?","they ain't","im not","(just )wow","bruh","LOL YOU ([EMPHASIS]{INSULT} )DON'T KNOW?","you are","im not wasting my [EMPHASIS]time on this( shit)( you [ADJECTIVE]{INSULT})","I will ignore this( you {INSULT})"],
    "ASS":["as fuck","ass"]
}

const bots = [
    "stfu [EMPHASIS]bot( ass {INSULT})",
    "fake [EMPHASIS]kernegg",
    "impersonating me( huh)?",
    "(you're )fuckune's {ADJECTIVE} [ASS]bot",
    "go back to {PLACE} fuckune's ({ADJECTIVE} [ASS])bot",
    "self botting is against TOS( you {ADJECTIVE} [ASS]bot)",
    "reported for self botting( like fuckune's {ADJECTIVE} ass {NOUN})"
]

//Determines if the bot is typing or if it's ready
let botready = true;

function handlehandles(totranslate){
    Object.keys(handles).forEach(handle=>{
    //50% chance of something in () brackets
    if(totranslate.includes("(")){
        var full = totranslate.substring(totranslate.indexOf("("), totranslate.indexOf(")")+1);
        //It is important to only replace 1 of each bracket.
        if(Math.random() < 0.5) totranslate = totranslate.replace("(","").replace(")","");
        else totranslate = totranslate.replace(full,"");
    }

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
    while(startstring.includes("{") || startstring.includes("[") || startstring.includes("(")) startstring = handlehandles(startstring);
    return startstring;
}

function ask(){
    var startstring = questions[Math.floor(Math.random()*questions.length)];

    //Translate the unhandled string
    while(startstring.includes("{") || startstring.includes("[") || startstring.includes("(")) startstring = handlehandles(startstring);
    return startstring;
}

function imagegen(){
    var startstring = images[Math.floor(Math.random()*images.length)];

    //Translate the unhandled string
    while(startstring.includes("{") || startstring.includes("[") || startstring.includes("(")) startstring = handlehandles(startstring);
    return startstring;
}

function respond(){
    var startstring = "{RESPONSE}";

    //Translate the unhandled string
    while(startstring.includes("{") || startstring.includes("[") || startstring.includes("(")) startstring = handlehandles(startstring);
    return startstring;
}

function answer(){
    var startstring = "{ANSWER}";

    //Translate the unhandled string
    while(startstring.includes("{") || startstring.includes("[") || startstring.includes("(")) startstring = handlehandles(startstring);
    return startstring;
}

function sinarray(strr, arry){
    var toret = false;
    arry.forEach(subword=>{
        if(strr.toLowerCase().includes(subword)) toret = true;
    })
    return toret;
}

bot.login("token here");

bot.on("ready",()=>{
    bot.user.setPresence({activities:[{name:"kernegg moment",type:"PLAYING",details:"kern3l#9076 is a fake kernegg. Join https://discord.gg/NfuTEnxk2W"}], status:"dnd"});
})

bot.on("messageCreate",message=>{
    if(message.author.id == "owner user id" && message.content == "k!restart") process.exit();
    if(message.author.id == bot.user.id || message.author.id == "1084433014093795329" || !botready) return;
    if(message.author.id == "973222656910446602"){
        var preresponse = bots[Math.floor(Math.random()*bots.length)];
        var typeseed = Math.round(Math.random()*1000)+1000;
        botready = false;
        message.channel.sendTyping();
        while(preresponse.includes("{") || preresponse.includes("[") || preresponse.includes("(")) preresponse = handlehandles(preresponse);
        setTimeout(()=>{
            //Send it
            message.reply(preresponse);
            botready = true;
        },typeseed)
        return;
    }
    var preresponse = "";
    
    if(message.content.includes("?")){
        var typeseed = Math.round(Math.random()*1000)+1000;
        botready = false;
        preresponse = answer();
        message.channel.sendTyping();

        setTimeout(()=>{
            //Send it
            message.reply(preresponse);
            botready = true;
        },typeseed)
    }
    else if((sinarray(message.content, handles["GOOD"]) || message.content.toLowerCase().includes("kernegg")) && (sinarray(message.content, handles["ADJECTIVE"]) || sinarray(message.content, handles["INSULT"]))){
        var typeseed = Math.round(Math.random()*1000)+1000;
        botready = false;
        preresponse = respond();
        message.channel.sendTyping();

        setTimeout(()=>{
            //Send it
            message.reply(preresponse);
            botready = true;
        },typeseed)
    }
    else if(message.content.includes(bot.user.id) || Math.random() < 0.2){
        botready = false;
        //Generate the message
        var typeseed = Math.round(Math.random()*2000)+1000;
        if(Math.random() < 0.45) preresponse = ask();
        else if(Math.random() < 0.45) preresponse = generate(1);
        else if(Math.random() < 0.05){
            //Also, type more since its a long one
            typeseed = Math.round(Math.random()*3000)+6000;
            preresponse = generate(Math.round(Math.random() * 15) + 5);
        }
        else preresponse = imagegen();

        message.channel.sendTyping();
        setTimeout(()=>{
            //Send it
            if(Math.random() < 0.4) message.reply(preresponse);
            else if(Math.random()<0.15) message.channel.send("<@"+message.author.id+"> "+preresponse);
            else message.channel.send(preresponse);
            botready = true;
        },typeseed)
    }
})
