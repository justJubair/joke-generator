const jokes = [
    {
      joke: "Want to know how you make any salad into a caesar salad? Stab it twenty-three times.",
      comedian: "Anonymous"
    },
    {
      joke: "My grief counselor died. He was so good, I don't even care.",
      comedian: "Anonymous"
    },
    {
      joke: "A man wakes from a coma. His wife changes out of her black clothes and, irritated, remarks, “I really cannot depend on you in anything, can I!",
      comedian: "Anonymous"
    },
    {
      joke: "I was digging in our garden and found a chest full of gold coins. I wanted to run straight home to tell my wife about it. Then I remembered why I was digging in our garden.",
      comedian: "Anonymous"
    },
    {
      joke: "My mom died when we couldn not remember her blood type. As she died, she kept telling us to “be positive,” but it is hard without her.",
      comedian: "Anonymous"
    },
    {
      joke: "What does my dad have in common with Nemo? They both cannot be found.",
      comedian: "Anonymous"
    },
    {
      joke: "Do you know the phrase “One man's trash is another man's treasure”? Wonderful saying, horrible way to find out that you were adopted.",
      comedian: "Anonymous"
    },
    {
      joke: "Why did the man miss the funeral? He wasn't a mourning person.",
      comedian: "Anonymous"
    },
    {
      joke: "Give a man a match, and he'll be warm for a few hours. Set him on fire, and he will be warm for the rest of his life.",
      comedian: "Mitch Hedberg"
    },
    {
      joke: "The doctor gave me one year to live, so I shot him with my gun. The judge gave me 15 years. Problem solved.",
      comedian: "Anonymous"
    },
    {
      joke: "What did the Titanic say as it sank? I'm nominating all passengers for the Ice Bucket Challenge!",
      comedian: "Anonymous"
    },
    {
      joke: "My husband and I have reached the difficult decision that we do not want children. If anybody does, please just send me your contact details and we can drop them off tomorrow.",
      comedian: "Anonymous"
    },
    {
      joke: "I have many jokes about unemployed people—sadly none of them work.",
      comedian: "Anonymous"
    },
    {
      joke: "You're not completely useless. You can always be used as a bad example.",
      comedian: "Anonymous"
    },
    {
      joke: "I threw a boomerang a few years ago. I now live in constant fear.",
      comedian: "Anonymous"
    }
  ];
     
document.getElementById('btn').addEventListener('click', () => {
    const joke = document.getElementById('joke');
    const comedian = document.getElementById('comedian');

    // random index
    const randomIndex = Math.floor(Math.random() * jokes.length);
    joke.innerText = jokes[randomIndex].joke;
    comedian.innerText = jokes[randomIndex].comedian;
});