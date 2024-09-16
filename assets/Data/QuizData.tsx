//Link for these quizs
//https://ministry-to-children.com/wp-content/uploads/2009/09/Bible-Trivia-Questions-and-Answers.pdf

const quizAboutBible = [
    {
        id: 1,
        question: "What is the first book in the Bible?",
        answer: "Genesis"
    },
    {
        id: 2,
        question: "What is the last book in the Bible?",
        answer: "Revelation"
    },
    {
        id: 3,
        question: "What four books tell about Jesus' life on Earth?",
        answer: "Matthew, Mark, Luke, John"
    },
    {
        id: 4,
        question: "Which book did Jesus directly write?",
        answer: "None"
    },
    {
        id: 5,
        question: "What is the longest book in the Bible?",
        answer: "Psalms"
    },
    {
        id: 6,
        question: "True or False: David wrote the entire book of Psalms.",
        answer: "False: The Psalms are a collection by many writers, but David contributed the most."
    },
    {
        id: 7,
        question: "What is the shortest book in the Bible?",
        answer: "3 John"
    },
    {
        id: 8,
        question: "How many books are in the Bible?",
        answer: "66"
    },
    {
        id: 9,
        question: "How many books are in the Old Testament?",
        answer: "39 books in the OT"
    },
    {
        id: 10,
        question: "How many books are in the New Testament?",
        answer: "27 books in the NT"
    },
    {
        id: 11,
        question: "Which NT book has Jesus' Sermon on the Mount?",
        answer: "Matthew"
    },
    {
        id: 12,
        question: "True or False: The Bible was first written in the English language?",
        answer: "False"
    },
    {
        id: 13,
        question: "In what language was most of the Old Testament given?",
        answer: "Hebrew"
    },
    {
        id: 14,
        question: "In what language was most of the New Testament given?",
        answer: "Greek"
    },
    {
        id: 15,
        question: "Which human author wrote the most books?",
        answer: "Paul wrote 13 books."
    },
    {
        id: 16,
        question: "Which human author wrote the most words in the Bible?",
        answer: "Moses wrote 125,139 words."
    },
    {
        id: 17,
        question: "What was most likely the first Gospel written?",
        answer: "Mark"
    },
    {
        id: 18,
        question: "What was most likely the last Gospel written?",
        answer: "John"
    },
    {
        id: 19,
        question: "What was most likely the first of Paul's letters written?",
        answer: "1 Thessalonians"
    },
    {
        id: 20,
        question: "What was most likely the last New Testament book written?",
        answer: "Revelation"
    }
];

const quizAboutGenesis = [
    { id: 1, question: "How many days did God take to create the world?", answer: "6" },
    { id: 2, question: "What day did God create man?", answer: "6th" },
    { id: 3, question: "Who was the first man?", answer: "Adam" },
    { id: 4, question: "Who was the first woman?", answer: "Eve" },
    { id: 5, question: "Where did they live at the beginning of the world?", answer: "Garden of Eden" },
    { id: 6, question: "Who were their three sons listed in the Bible?", answer: "Cain, Abel, Seth" },
    { id: 7, question: "Who did God tell to build an ark?", answer: "Noah" },
    { id: 8, question: "Who were Noah’s three sons?", answer: "Shem, Ham, Japheth" },
    { id: 9, question: "How many days and nights did it rain when Noah was on the ark?", answer: "40" },
    { id: 10, question: "How many people were saved on the ark?", answer: "8" },
    { id: 11, question: "What was God’s sign to Noah that he would never destroy the earth again?", answer: "A rainbow" },
    { id: 12, question: "What were men trying to do at the Tower of Babel?", answer: "Built a tower to reach to Heaven." },
    { id: 13, question: "How did God make them spread out across the earth?", answer: "Confused their languages." },
    { id: 14, question: "Who did God call out of Ur to move to Canaan?", answer: "Abram" },
    { id: 15, question: "Who was Abram’s wife?", answer: "Sarai" },
    { id: 16, question: "Even though Abram and Sarah were too old, what did God promise them?", answer: "A son" },
    { id: 17, question: "When God showed Abram the stars in the sky, what did he promise?", answer: "That Abram would have more descendants than the number of stars." },
    { id: 18, question: "Who was Abram’s handmaid?", answer: "Hagar" },
    { id: 19, question: "What was Sarah’s idea for Abram to have a child?", answer: "For Abram to have a child with Hagar." },
    { id: 20, question: "Who was the first son he had?", answer: "Ishmael." },
    { id: 21, question: "What was Abram’s name changed to?", answer: "Abraham" },
    { id: 22, question: "What was Sarai’s name changed to?", answer: "Sarah" },
    { id: 23, question: "What was the second son Abraham had?", answer: "Isaac" },
    { id: 24, question: "Who did Abraham have his second son with?", answer: "Sarah" },
    { id: 25, question: "Where did Hagar and her son leave to?", answer: "Into the desert" },
    { id: 26, question: "Who did Abraham send to find Isaac a wife?", answer: "His oldest servant" },
    { id: 27, question: "Who did the servant choose?", answer: "Rebekah" },
    { id: 28, question: "What were Isaac’s sons’ names?", answer: "Jacob and Esau" },
    { id: 29, question: "Who was born first?", answer: "Esau came first, with Jacob grabbing his heel." },
    { id: 30, question: "How did Esau provide food for the family?", answer: "He hunted." },
    { id: 31, question: "Who did Isaac favor of his two sons?", answer: "Esau" },
    { id: 32, question: "What did Jacob do most of the time?", answer: "Stayed in the home with his mother." },
    { id: 33, question: "What did Esau receive in exchange for his birthright?", answer: "Some stew." },
    { id: 34, question: "As Isaac was dying and blind, who suggested that Jacob should steal the blessing?", answer: "Rebekah." },
    { id: 35, question: "How did Esau respond when his birthright was taken?", answer: "Threatened to kill Jacob." },
    { id: 36, question: "When Jacob met Laban, which daughter did he want to marry?", answer: "Rachel." },
    { id: 37, question: "Who did Laban trick Jacob into marrying?", answer: "Leah." },
    { id: 38, question: "What did Laban make Jacob do to finally marry Rachel?", answer: "Work another seven years." },
    { id: 39, question: "Who was the first son Jacob had with Rachel?", answer: "Joseph" },
    { id: 40, question: "What did God change Jacob’s name to before his meeting with Esau?", answer: "Israel" },
    { id: 41, question: "How many brothers did Joseph have?", answer: "12" },
    { id: 42, question: "What did Jacob give Joseph that sparked jealousy from his siblings?", answer: "A coat of many colors." },
    { id: 43, question: "What did Joseph tell his brothers about his dreams that upset them?", answer: "The dreams said he would become greater and rule over them." },
    { id: 44, question: "How did the brothers get rid of Joseph?", answer: "Sold him to slave traders." },
    { id: 45, question: "What did Joseph’s brothers tell their father had happened to him?", answer: "They said Joseph was killed by a wild animal." },
    { id: 46, question: "Where did the slave traders take Joseph?", answer: "Egypt" },
    { id: 47, question: "Who bought Joseph?", answer: "Potiphar, captain of the Pharaoh’s guards" },
    { id: 48, question: "Who got Joseph thrown into prison by lying about him?", answer: "Potiphar’s wife" },
    { id: 49, question: "Who else was in prison with Joseph?", answer: "The Pharaoh’s cupbearer and chief baker." },
    { id: 50, question: "What did Joseph do for them?", answer: "Interpreted their dreams." },
    { id: 51, question: "Why was Joseph summoned out of prison by the Pharaoh?", answer: "To interpret his dream." },
    { id: 52, question: "What position of power was Joseph given by the Pharaoh?", answer: "Second in command of Egypt." },
    { id: 53, question: "What catastrophe did Joseph predict by interpreting the Pharaoh’s dream?", answer: "A severe, seven-year famine." },
    { id: 54, question: "Who came to Egypt that Joseph recognized because of the famine?", answer: "His brothers." },
    { id: 55, question: "Who was Jacob’s second son with Rachel?", answer: "Benjamin" },
    { id: 56, question: "What did Joseph tell the brothers to do next time they came back to Egypt?", answer: "To bring Benjamin with them." },
    { id: 57, question: "Which brother volunteered to stay in Egypt instead of Benjamin?", answer: "Judah" },
    { id: 58, question: "What did Joseph tell his brothers to do when they returned to Canaan?", answer: "Bring their families and their father to Egypt." }
];

const quizAboutExodus = [
    { id: 1, question: "How did Moses’ mother save him from the Egyptian soldiers?", answer: "Put him in a basket in the river." },
    { id: 2, question: "What did Moses do after he killed an Egyptian?", answer: "Ran away into the desert." },
    { id: 3, question: "Through what did God speak to Moses in the desert?", answer: "A burning bush" },
    { id: 4, question: "When Moses confronted the Pharaoh, what did his staff turn into when he threw it on the ground?", answer: "A snake" },
    { id: 5, question: "What did Moses say God commanded the Pharaoh to do?", answer: "Let the Israelite slaves go free." },
    { id: 6, question: "How many plagues did God send on Egypt?", answer: "10" },
    { id: 7, question: "What was the final plague that convinced Pharaoh to let the slaves go?", answer: "The firstborn son of all Egyptian families died." },
    { id: 8, question: "When Pharaoh changed his mind and sent his army after the slaves, where did they meet at?", answer: "By the Red Sea" },
    { id: 9, question: "What did God through Moses do to save the slaves?", answer: "Parted the Red Sea" },
    { id: 10, question: "When the Egyptians tried to follow the Israelites through the Red Sea, what happened?", answer: "The water crashed on them and killed them all." },
    { id: 11, question: "What did God send to feed the Israelites in the desert?", answer: "Quail and manna" },
    { id: 12, question: "Where did God give Moses the Ten Commandments?", answer: "Mt. Sinai" },
    { id: 13, question: "What golden image did the Israelites make at Mt. Sinai?", answer: "A golden calf" },
    { id: 14, question: "What did the spies sent into Canaan see that made them scared?", answer: "Giants in the land" },
    { id: 15, question: "Who were the only two Israelites allowed to go into the Promised Land after many years?", answer: "Joshua and Caleb" },
    { id: 16, question: "What city did God make the walls fall so Joshua and the Israelites could conquer it?", answer: "Jericho" },
    { id: 17, question: "After they took over the Promised Land and Joshua died, who ruled Israel?", answer: "Judges" },
    { id: 18, question: "Who was the woman judge who led Israel to victory?", answer: "Deborah" },
    { id: 19, question: "Who was the judge who defeated the Midianites with only 300 men using torches and horns?", answer: "Gideon" },
    { id: 20, question: "Who was the judge who took a Nazarite vow from birth and fought against the Philistines?", answer: "Samson" },
    { id: 21, question: "With what did Samson kill 1,000 Philistines?", answer: "A donkey’s jawbone" },
    { id: 22, question: "What Philistine woman asked Samson what his power came from?", answer: "Delilah" },
    { id: 23, question: "How did Samson die?", answer: "Pushing over the temple pillars, killing himself and many Philistines." }
];

const quizAboutEarlyKingdom = [
    { id: 1, question: "Who was the first king of Israel?", answer: "Saul" },
    { id: 2, question: "Who anointed him king?", answer: "Samuel" },
    { id: 3, question: "Who was the enemy who took the Ark of the Covenant?", answer: "Philistines" },
    { id: 4, question: "What happened to the idol which was beside the Ark in the enemy’s temple?", answer: "The idol fell over and broke" },
    { id: 5, question: "When the people demanded Saul make a sacrifice to God that only priests should make, what did he do?", answer: "Made the sacrifice anyways" },
    { id: 6, question: "When Saul conquered the Amalekites, what person did he keep as a prisoner instead of killing like God said to?", answer: "The king, Agag" },
    { id: 7, question: "What was Saul’s punishment for disobeying?", answer: "God took his kingdom away" },
    { id: 8, question: "Who was the king of Israel anointed by Samuel after Saul?", answer: "David" },
    { id: 9, question: "What did David work as for his father?", answer: "A shepherd" },
    { id: 10, question: "When the Philistines came to attack the Israelites, who mocked God and challenged them?", answer: "Goliath the giant." },
    { id: 11, question: "When David wanted to fight Goliath, what did Saul try to give him?", answer: "His armor" },
    { id: 12, question: "What did David take from the brook to fight Goliath with?", answer: "Five stones" },
    { id: 13, question: "How many sling-throws did it take David to hit Goliath?", answer: "One" },
    { id: 14, question: "Who was Saul’s son that David befriended?", answer: "Jonathan" },
    { id: 15, question: "What did Saul throw to try to kill David?", answer: "A javelin/spear" },
    { id: 16, question: "What did Jonathan do to save David’s life from Saul?", answer: "Warned him that Saul would try to kill him" },
    { id: 17, question: "What foreign country did David run away to?", answer: "Land of the Philistines/Philistia" },
    { id: 18, question: "Did Saul give up on chasing David when David went into the wilderness?", answer: "No" },
    { id: 19, question: "How many times did David spare Saul’s life?", answer: "Twice" },
    { id: 20, question: "Where did David spare Saul’s life the first time?", answer: "In a cave" },
    { id: 21, question: "Where did David spare Saul’s life the second time?", answer: "In the camp where Saul was sleeping" },
    { id: 22, question: "What last judge of Israel died after Saul made a temporary peace with David?", answer: "Samuel" },
    { id: 23, question: "Where did David go after Saul continued to hunt him?", answer: "The Land of the Philistines/Philistia" },
    { id: 24, question: "Where did Saul turn to for advice when he couldn’t sense God’s will?", answer: "A witch" },
    { id: 25, question: "What prophet did he ask to speak to?", answer: "Samuel" },
    { id: 26, question: "How did Saul die?", answer: "Fell on his own sword" },
    { id: 27, question: "How many of his sons died in the same battle?", answer: "All of them" }
];

const quizAboutJesus = [
    { id: 1, question: "Who was Jesus' human mother?", answer: "Mary" },
    { id: 2, question: "Who was Jesus’ adoptive father on Earth?", answer: "Joseph" },
    { id: 3, question: "Who was Jesus’ birth father?", answer: "God the Holy Spirit – see Matt 1:20" },
    { id: 4, question: "Name the city where Jesus was born?", answer: "Bethlehem" },
    { id: 5, question: "Where did Jesus’ family go when Herod wanted to harm him as a baby?", answer: "Egypt" },
    { id: 6, question: "True or False: Because Jesus was God, he didn’t obey his parents’ rules.", answer: "False – Jesus obeyed his parents – see Luke 2:51" },
    { id: 7, question: "True or False: Jesus was an only child.", answer: "False - Jesus had brothers and sisters - see Mark 6:3" },
    { id: 8, question: "How many of Jesus’ brothers are named in the Bible?", answer: "Four" },
    { id: 9, question: "How many of Jesus’ sisters are named in the Bible?", answer: "None" },
    { id: 10, question: "Name one of Jesus’ brothers?", answer: "James, Joseph, Simon, or Judas" },
    { id: 11, question: "Who was Jesus' most famous cousin?", answer: "John the Baptist" },
    { id: 12, question: "True or False: John the Baptist wore clothes made of goat hair?", answer: "False – it was camel hair" },
    { id: 13, question: "Who baptized Jesus?", answer: "John the Baptist" },
    { id: 14, question: "Who spoke from the sky when Jesus was baptized?", answer: "God" },
    { id: 15, question: "What did God say?", answer: "That he was well-pleased with his son." },
    { id: 16, question: "What happened when Jesus went into the wilderness?", answer: "He was tempted by Satan" },
    { id: 17, question: "Before Jesus started preaching, what was his normal job?", answer: "Carpenter (construction worker) – See Mark 6:3" },
    { id: 18, question: "Name Jesus’ hometown.", answer: "Nazareth" },
    { id: 19, question: "True or False: Jesus turned water into Coca-Cola?", answer: "False, Jesus turned water into wine." },
    { id: 20, question: "Besides preaching, name an activity Jesus did while traveling in Galilee.", answer: "Healing the sick and casting out demons." },
    { id: 21, question: "True or False: Jesus stayed away from people with bad reputations?", answer: "False – He often ate with 'sinners.'" },
    { id: 22, question: "Name the place where Jesus walked on water?", answer: "Sea of Galilee" },
    { id: 23, question: "True or False: At first, Jesus' family tried to stop his ministry and said he was crazy.", answer: "True - see Mark 3:11" },
    { id: 24, question: "True or False: Jesus said his true family was anyone who obeys God.", answer: "True – see Mark 3:34-35" },
    { id: 25, question: "True or False: Everywhere he went, people loved Jesus and believed his message?", answer: "False – many times Jesus was rejected." },
    { id: 26, question: "Which member of the Jewish ruling council came to ask Jesus questions at night?", answer: "Nicodemus" },
    { id: 27, question: "True or False: Jesus didn’t like the people because they worshiped God the wrong way?", answer: "False – Jesus welcomed all to follow him" },
    { id: 28, question: "How many disciples did Jesus choose?", answer: "12" },
    { id: 29, question: "What was Matthew before he followed Jesus?", answer: "A tax collector" },
    { id: 30, question: "True or False: Jesus would sometimes 'spit' as part of his healing miracles.", answer: "True - Three times the Bible describes him spitting. – see Mark 7:33, Mark 8:23, John 9:6" },
    { id: 31, question: "What is the shortest verse in the Bible?", answer: "John 11:35 Jesus wept." },
    { id: 32, question: "Why did Jesus weep in that verse?", answer: "Because his friend Lazarus died." },
    { id: 33, question: "How many days was Lazarus dead before Jesus came to visit?", answer: "Four days" },
    { id: 34, question: "What 2 things did Jesus do to raise Lazarus back to life?", answer: "He prayed and then told Lazarus to come out." },
    { id: 35, question: "Who helped pay the bills for Jesus and the disciples' ministry?", answer: "Several women who he had healed – see Luke 8:1-3" },
    { id: 36, question: "Name the demon Jesus cast out in the region of the Gerasenes?", answer: "Legion" },
    { id: 37, question: "True or False: While on Earth, Jesus had the power to raise dead people back to life?", answer: "True – several examples" },
    { id: 38, question: "How much bread and fish did Jesus use to feed over 5000 people?", answer: "Five loaves of bread —and two fish" },
    { id: 39, question: "True or False: Jesus said washing hands is never important.", answer: "False – he said dirty hands don’t make a person spiritually unclean. You can still get germs!" },
    { id: 40, question: "What was Peter and Andrew doing when Jesus called them to follow him?", answer: "Fishing" },
    { id: 41, question: "Name the two Old Testament people who appeared when Jesus was transfigured?", answer: "Elijah and Moses" },
    { id: 42, question: "True or False: Jesus asked the children to stay back while he was teaching important things to grown-ups.", answer: "False – Jesus welcomed children" },
    { id: 43, question: "What problem did Bartimaeus have that Jesus fixed?", answer: "He was blind" },
    { id: 44, question: "True or False: When Jesus went to the Temple, he always used his inside voice.", answer: "False – Jesus drove out the money changers" },
    { id: 45, question: "How many people did Jesus feed with fish and bread?", answer: "5,000 people" },
    { id: 46, question: "How many lepers did Jesus heal when only 1 returned?", answer: "10" },
    { id: 47, question: "What did Jesus do at the Last Supper to his disciples?", answer: "Washed their feet" },
    { id: 48, question: "True or False: Jesus said only big money offerings were important to God.", answer: "False – See the Widow’s Offering" },
    { id: 49, question: "What did the woman pour on Jesus’ feet at the home of Simon the Leper?", answer: "Jar of expensive perfume" },
    { id: 50, question: "Name the disciple who betrayed Jesus.", answer: "Judas Iscariot" },
    { id: 51, question: "What garden did Jesus go to when he prayed after the Last Supper?", answer: "Garden of Gethsemane" },
    { id: 52, question: "True or False: The Jewish leaders tried to set Jesus free.", answer: "False – They lobbied for his crucifixion" },
    { id: 53, question: "Who gave Jesus a crown made of thorns?", answer: "Roman soldiers" },
    { id: 54, question: "Name the Roman Governor who sat over Jesus' trial?", answer: "Pilate" },
    { id: 55, question: "What did Pilate do to 'cleanse himself' of the crucifixion?", answer: "Washed his hands" },
    { id: 56, question: "Who cut off a soldier’s ear when Jesus was being arrested?", answer: "Peter" },
    { id: 57, question: "True or False: Jesus didn’t know that he was going to be arrested and killed in Jerusalem.", answer: "False – He knew and told his disciples before it happened." },
    { id: 58, question: "Which disciple denied Jesus three times?", answer: "Peter" },
    { id: 59, question: "What happened to the temple curtain when Jesus was killed?", answer: "It was ripped" },
    { id: 60, question: "What happened after Jesus was buried in the tomb?", answer: "He rose again" },
    { id: 61, question: "What was rolled away from the entrance of the tomb?", answer: "A large stone" },
    { id: 62, question: "What day of the week did Jesus rise back to life?", answer: "Sunday – the first day of the week" },
    { id: 63, question: "How many days before Jesus returned to Heaven?", answer: "40 days" },
    { id: 64, question: "How did Jesus leave Earth and go to Heaven?", answer: "He rose up into the clouds" },
    { id: 65, question: "How many people saw Jesus after he came back from the dead?", answer: "More than 500 – see 1 Cor 15:3–8" }
];

const quizAboutLordPrayer = [
    { id: 1, question: "Where in the Bible can you find the Lord’s Prayer?", answer: "Matthew 6" },
    { id: 2, question: "Who taught the Lord’s Prayer?", answer: "Jesus" },
    { id: 3, question: "How many requests are in the Lord’s Prayer?", answer: "Seven" },
    { id: 4, question: "What is the 1st petition?", answer: "Hallowed be your name" },
    { id: 5, question: "What is the 2nd petition?", answer: "Your kingdom come" },
    { id: 6, question: "What is the 3rd petition?", answer: "Your will be done on Earth" },
    { id: 7, question: "What is the 4th petition?", answer: "Give us our daily bread" },
    { id: 8, question: "What is the 5th petition?", answer: "Forgive our debts" },
    { id: 9, question: "What is the 6th petition?", answer: "Don’t lead us into temptation" },
    { id: 10, question: "What is the 7th petition?", answer: "Deliver us from evil" },
    { id: 11, question: "True or False: The more words we say makes our prayers better.", answer: "False – Jesus said God already knows what we need" }
];







