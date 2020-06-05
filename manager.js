const cliche1 = [
    "I didn’t see the incident. ",
    "At the end of the day. ",
    "The referee needs to take a long, hard look at himself. ",
    "I accept responsibility for the loss. ",
    "There was a lot of honesty in that dressing room. ",
    "I think the better team lost. ",
    "I think we edged it. ",
    "I’m sorry, I’m not having that. ",
    "I prefer to focus on my team. ",
    "I couldn’t be prouder of the lads today. ",
    "He’ll learn from that. ",
    "The referee seemed determined to be the centre of attention today. ",
    "To be fair. "
]

const cliche2 = [
    "I thought the support we got was first-class today. ",
    "There are no easy games in this league. ",
    "We have to play how we’re capable of playing. ",
    "The game was really a lot closer than the final score would suggest. ",
    "It was a game of two halves. ",
    "It's a six pointer. ",
    "It comes with the territory. ",
    "I’m going to get myself in trouble. ",
    "I don't want to say too much, because I'll get into trouble, but ",
    "I don't care if I get into trouble, ",
    "Football is a results business. ",
    "Ultimately, I will be judged on results. "
]

const cliche3 = [
    "We’re just focused on the next game.",
    "He's not that sort of player.",
    "We never seem get the big decisions.",
    "We never seem get the rub of the green.",
    "Those decisions even themselves out over the course of a season.",
    "The important thing is we got the three points.",
    "All I'm interested in is preparing for the next game on Tuesday.",
    "I've never walked away from anything in my life, and I'm not going to start now.",
    "Both myself and the board want what's best for this football club.",
    "The fans were magnificent today. They deserve better.",
    "The fans pay their money and they have every right to make their feelings known."
]

document.getElementById("button").addEventListener("click", randomCliche);
function randomCliche() {document.getElementById("result").innerHTML = cliche1[Math.floor(Math.random()*cliche1.length)] +
    cliche2[Math.floor(Math.random()*cliche2.length)] +
    cliche3[Math.floor(Math.random()*cliche3.length)]};

