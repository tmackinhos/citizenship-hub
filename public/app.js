// Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Fake Login
function login() {
    alert("Login successful! Welcome to your dashboard.");
    showPage('dashboard');
}

// Flashcard Logic (I have added 5 to start, you can easily add the other 95 here)
const civicsQuestions = [
    // Principles of American Democracy
    { q: "What is the supreme law of the land?", a: "The Constitution" },
    { q: "What does the Constitution do?", a: "Sets up the government / Defines the government / Protects basic rights of Americans" },
    { q: "The idea of self-government is in the first three words of the Constitution. What are these words?", a: "We the People" },
    { q: "What is an amendment?", a: "A change (to the Constitution) / An addition (to the Constitution)" },
    { q: "What do we call the first ten amendments to the Constitution?", a: "The Bill of Rights" },
    { q: "What is one right or freedom from the First Amendment?", a: "Speech / Religion / Assembly / Press / Petition the government" },
    { q: "How many amendments does the Constitution have?", a: "Twenty-seven (27)" },
    { q: "What did the Declaration of Independence do?", a: "Announced our independence (from Great Britain) / Declared our independence / Said that the US is free" },
    { q: "What are two rights in the Declaration of Independence?", a: "Life / Liberty / Pursuit of happiness" },
    { q: "What is freedom of religion?", a: "You can practice any religion, or not practice a religion." },
    { q: "What is the economic system in the United States?", a: "Capitalist economy / Market economy" },
    { q: "The 'rule of law' means:", a: "Everyone must follow the law / Leaders must obey the law / Government must obey the law / No one is above the law" },

    // System of Government
    { q: "Name one branch or part of the government.", a: "Congress / Legislative / President / Executive / The courts / Judicial" },
    { q: "What stops one branch of government from becoming too powerful?", a: "Checks and balances / Separation of powers" },
    { q: "Who is in charge of the executive branch?", a: "The President" },
    { q: "Who makes federal laws?", a: "Congress / Senate and House of Representatives / (U.S. or national) legislature" },
    { q: "What are the two parts of the U.S. Congress?", a: "The Senate and House of Representatives" },
    { q: "How many U.S. Senators are there?", a: "One hundred (100)" },
    { q: "We elect a U.S. Senator for how many years?", a: "Six (6)" },
    { q: "Who is one of your state’s U.S. Senators now?", a: "Answers will vary. [Depends on the state]" },
    { q: "The House of Representatives has how many voting members?", a: "Four hundred thirty-five (435)" },
    { q: "We elect a U.S. Representative for how many years?", a: "Two (2)" },
    { q: "Name your U.S. Representative.", a: "Answers will vary. [Depends on local district]" },
    { q: "Who does a U.S. Senator represent?", a: "All people of the state" },
    { q: "Why do some states have more Representatives than other states?", a: "Because of the state's population / Because they have more people" },
    { q: "We elect a President for how many years?", a: "Four (4)" },
    { q: "In what month do we vote for President?", a: "November" },
    { q: "What is the name of the President of the United States now?", a: "Visit uscis.gov for current updates" },
    { q: "What is the name of the Vice President of the United States now?", a: "Visit uscis.gov for current updates" },
    { q: "If the President can no longer serve, who becomes President?", a: "The Vice President" },
    { q: "If both the President and the Vice President can no longer serve, who becomes President?", a: "The Speaker of the House" },
    { q: "Who is the Commander in Chief of the military?", a: "The President" },
    { q: "Who signs bills to become laws?", a: "The President" },
    { q: "Who vetoes bills?", a: "The President" },
    { q: "What does the President’s Cabinet do?", a: "Advises the President" },
    { q: "What are two Cabinet-level positions?", a: "Secretary of State / Secretary of Defense / Attorney General / Vice President (among others)" },
    { q: "What does the judicial branch do?", a: "Reviews laws / Explains laws / Resolves disputes (disagreements) / Decides if a law goes against the Constitution" },
    { q: "What is the highest court in the United States?", a: "The Supreme Court" },
    { q: "How many justices are on the Supreme Court?", a: "Nine (9)" },
    { q: "Who is the Chief Justice of the United States now?", a: "Visit uscis.gov for current updates" },
    { q: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", a: "To print money / To declare war / To create an army / To make treaties" },
    { q: "Under our Constitution, some powers belong to the states. What is one power of the states?", a: "Provide schooling and education / Provide protection (police) / Provide safety (fire departments) / Give a driver's license / Approve zoning and land use" },
    { q: "Who is the Governor of your state now?", a: "Answers will vary." },
    { q: "What is the capital of your state?", a: "Answers will vary." },
    { q: "What are the two major political parties in the United States?", a: "Democratic and Republican" },
    { q: "What is the political party of the President now?", a: "Visit uscis.gov for current updates" },
    { q: "What is the name of the Speaker of the House of Representatives now?", a: "Visit uscis.gov for current updates" },

    // Rights and Responsibilities
    { q: "There are four amendments to the Constitution about who can vote. Describe one of them.", a: "Citizens eighteen (18) and older (can vote) / You don't have to pay a poll tax to vote / Any citizen can vote (Women and men can vote) / A male citizen of any race (can vote)" },
    { q: "What is one responsibility that is only for United States citizens?", a: "Serve on a jury / Vote in a federal election" },
    { q: "Name one right only for United States citizens.", a: "Vote in a federal election / Run for federal office" },
    { q: "What are two rights of everyone living in the United States?", a: "Freedom of expression / Freedom of speech / Freedom of assembly / Freedom to petition the government / Freedom of religion / The right to bear arms" },
    { q: "What do we show loyalty to when we say the Pledge of Allegiance?", a: "The United States / The flag" },
    { q: "What is one promise you make when you become a United States citizen?", a: "Give up loyalty to other countries / Defend the Constitution and laws of the United States / Obey the laws of the United States / Serve in the U.S. military (if needed) / Serve the nation / Be loyal to the United States" },
    { q: "How old do citizens have to be to vote for President?", a: "Eighteen (18) and older" },
    { q: "What are two ways that Americans can participate in their democracy?", a: "Vote / Join a political party / Help with a campaign / Join a civic group / Join a community group / Give an elected official your opinion / Call Senators and Representatives / Publicly support or oppose an issue / Run for office / Write to a newspaper" },
    { q: "When is the last day you can send in federal income tax forms?", a: "April 15" },
    { q: "When must all men register for the Selective Service?", a: "At age eighteen (18) / Between eighteen (18) and twenty-six (26)" },

    // American History (Colonial Period and Independence)
    { q: "What is one reason colonists came to America?", a: "Freedom / Political liberty / Religious freedom / Economic opportunity / Practice their religion / Escape persecution" },
    { q: "Who lived in America before the Europeans arrived?", a: "American Indians / Native Americans" },
    { q: "What group of people was taken to America and sold as slaves?", a: "Africans / People from Africa" },
    { q: "Why did the colonists fight the British?", a: "Because of high taxes (taxation without representation) / Because the British army stayed in their houses (boarding, quartering) / Because they didn't have self-government" },
    { q: "Who wrote the Declaration of Independence?", a: "Thomas Jefferson" },
    { q: "When was the Declaration of Independence adopted?", a: "July 4, 1776" },
    { q: "There were 13 original states. Name three.", a: "New Hampshire / Massachusetts / Rhode Island / Connecticut / New York / New Jersey / Pennsylvania / Delaware / Maryland / Virginia / North Carolina / South Carolina / Georgia" },
    { q: "What happened at the Constitutional Convention?", a: "The Constitution was written / The Founding Fathers wrote the Constitution" },
    { q: "When was the Constitution written?", a: "1787" },
    { q: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.", a: "James Madison / Alexander Hamilton / John Jay / Publius" },
    { q: "What is one thing Benjamin Franklin is famous for?", a: "U.S. diplomat / Oldest member of the Constitutional Convention / First Postmaster General of the United States / Writer of 'Poor Richard’s Almanac' / Started the first free libraries" },
    { q: "Who is the 'Father of Our Country'?", a: "George Washington" },
    { q: "Who was the first President?", a: "George Washington" },

    // 1800s
    { q: "What territory did the United States buy from France in 1803?", a: "The Louisiana Territory / Louisiana" },
    { q: "Name one war fought by the United States in the 1800s.", a: "War of 1812 / Mexican-American War / Civil War / Spanish-American War" },
    { q: "Name the U.S. war between the North and the South.", a: "The Civil War / The War between the States" },
    { q: "Name one problem that led to the Civil War.", a: "Slavery / Economic reasons / States' rights" },
    { q: "What was one important thing that Abraham Lincoln did?", a: "Freed the slaves (Emancipation Proclamation) / Saved (or preserved) the Union / Led the United States during the Civil War" },
    { q: "What did the Emancipation Proclamation do?", a: "Freed the slaves / Freed slaves in the Confederacy / Freed slaves in the Confederate states / Freed slaves in most Southern states" },
    { q: "What did Susan B. Anthony do?", a: "Fought for women's rights / Fought for civil rights" },

    // Recent American History and Other Important Historical Information
    { q: "Name one war fought by the United States in the 1900s.", a: "World War I / World War II / Korean War / Vietnam War / (Persian) Gulf War" },
    { q: "Who was President during World War I?", a: "Woodrow Wilson" },
    { q: "Who was President during the Great Depression and World War II?", a: "Franklin Roosevelt" },
    { q: "Who did the United States fight in World War II?", a: "Japan, Germany, and Italy" },
    { q: "Before he was President, Eisenhower was a general. What war was he in?", a: "World War II" },
    { q: "During the Cold War, what was the main concern of the United States?", a: "Communism" },
    { q: "What movement tried to end racial discrimination?", a: "Civil rights (movement)" },
    { q: "What did Martin Luther King, Jr. do?", a: "Fought for civil rights / Worked for equality for all Americans" },
    { q: "What major event happened on September 11, 2001, in the United States?", a: "Terrorists attacked the United States" },
    { q: "Name one American Indian tribe in the United States.", a: "Cherokee / Navajo / Sioux / Chippewa / Choctaw / Pueblo / Apache / Iroquois / Creek / Blackfeet / Seminole / Cheyenne / Arawak / Shawnee / Mohegan / Huron / Oneida / Lakota / Crow / Teton / Hopi / Inuit" },

    // Integrated Civics (Geography)
    { q: "Name one of the two longest rivers in the United States.", a: "Missouri (River) / Mississippi (River)" },
    { q: "What ocean is on the West Coast of the United States?", a: "Pacific (Ocean)" },
    { q: "What ocean is on the East Coast of the United States?", a: "Atlantic (Ocean)" },
    { q: "Name one U.S. territory.", a: "Puerto Rico / U.S. Virgin Islands / American Samoa / Northern Mariana Islands / Guam" },
    { q: "Name one state that borders Canada.", a: "Maine / New Hampshire / Vermont / New York / Pennsylvania / Ohio / Michigan / Minnesota / North Dakota / Montana / Idaho / Washington / Alaska" },
    { q: "Name one state that borders Mexico.", a: "California / Arizona / New Mexico / Texas" },
    { q: "What is the capital of the United States?", a: "Washington, D.C." },
    { q: "Where is the Statue of Liberty?", a: "New York (Harbor) / Liberty Island" },

    // Symbols
    { q: "Why does the flag have 13 stripes?", a: "Because there were 13 original colonies / Because the stripes represent the original colonies" },
    { q: "Why does the flag have 50 stars?", a: "Because there is one star for each state / Because each star represents a state / Because there are 50 states" },
    { q: "What is the name of the national anthem?", a: "The Star-Spangled Banner" },

    // Holidays
    { q: "When do we celebrate Independence Day?", a: "July 4" },
    { q: "Name two national U.S. holidays.", a: "New Year's Day / Martin Luther King, Jr. Day / Presidents' Day / Memorial Day / Independence Day / Labor Day / Columbus Day / Veterans Day / Thanksgiving / Christmas" }
];

let currentCardIndex = 0;

function loadCard() {
    const card = civicsQuestions[currentCardIndex];
    document.getElementById('card-question').innerText = card.q;
    document.getElementById('card-answer').innerText = card.a;
    document.getElementById('flashcard-container').classList.remove('flipped');
}

function flipCard() {
    document.getElementById('flashcard-container').classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % civicsQuestions.length;
    loadCard();
}

// Initialize first card
window.onload = loadCard;

// Mock AI Interview Logic
function sendMessage() {
    const input = document.getElementById('user-msg');
    const chatBox = document.getElementById('chat-box');
    
    if (input.value.trim() === "") return;

    // Add user message
    chatBox.innerHTML += `<div class="message user">${input.value}</div>`;
    
    // Auto-scroll
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate AI thinking and replying
    setTimeout(() => {
        chatBox.innerHTML += `<div class="message ai"><strong>Officer:</strong> Good. Now, can you tell me why you want to become a US Citizen?</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1500);

    input.value = "";
}
