function shout (Hello) {
    return Hello.toUpperCase();
  }

function whisper (Hello) {
    return Hello.toLowerCase();
}

function logShout (Hello) {
    console.log(Hello.toUpperCase());
}

function logWhisper (Hello) {
    console.log(Hello.toLowerCase());
}

function sayHiToHeadphonedRoommate (Hello) {
    const cantHear = "I can't hear you!";
    const yesIndeed = "YES INDEED!";
    const loveYou = "I would love to!";
    if (Hello.toLowerCase(Hello) === Hello) {
      return cantHear;
    }
    else if (Hello.toUpperCase(Hello) === Hello) {
      return yesIndeed;
    }
    else if ("Let's have dinner together!" === Hello) {
      return loveYou;
    }
  }