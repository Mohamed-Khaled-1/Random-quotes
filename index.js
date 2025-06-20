function showQuote() {
  var quotes = [
    "The best way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "If you are working on something exciting, it will keep you motivated. - Steve Jobs",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Great things never come from comfort zones.",
    "Push yourself, because no one else is going to do it for you.",
    "Sometimes later becomes never. Do it now.",
    "Success doesn't just find you. You have to go out and get it.",
    "The harder you work, the luckier you get. - Gary Player",
    "Dream it. Wish it. Do it.",
    "Don't stop when you're tired. Stop when you're done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It's going to be hard, but hard does not mean impossible.",
    "Don't wait for opportunity. Create it.",
    "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
    "The key to success is to focus on goals, not obstacles.",
    "Work hard in silence. Let your success be your noise. - Frank Ocean",
    "Don't wish it were easier. Wish you were better. - Jim Rohn",
    "The only limit to our realization of tomorrow is our doubts of today. - FDR",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "I never dreamed about success. I worked for it. - Estée Lauder",
    "Act as if what you do makes a difference. It does. - William James",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "Hard work beats talent when talent doesn't work hard. - Tim Notke",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Stay hungry. Stay foolish. - Steve Jobs",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "A goal without a plan is just a wish. - Antoine de Saint-Exupéry",
    "Keep going. Everything you need will come to you at the perfect time.",
  ];
  var randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randomIndex];
}
