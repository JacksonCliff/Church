//Source
//https://lifehopeandtruth.com/bible/bible-study/encouraging-bible-verses/
//ChatgpT prompts used to generate data
// How can this verse be applied to a Christian's life today when facing difficult situations?
// Explain this verse in a single passage and make it empathetic
// How can I comfort someone who needs to be reminded of God's protection and help?

const comfortVerses = [
    {
        id: 1,
        verse: "Yea, though I walk through the valley of the shadow of death, I will fear no evil; for You are with me; Your rod and Your staff, they comfort me. … Surely goodness and mercy shall follow me all the days of my life; and I will dwell in the house of the LORD forever.",
        meditation: "No matter how difficult life becomes, we are never alone. God walks with us through every trial, and His comfort can give us peace even in the midst of pain. The promise of His presence—\"for You are with me\"—means that fear loses its power, because we know that God is by our side, protecting and guiding us.His love and faithfulness are constant, and they will continue to be with us throughout our lives. This leads to the ultimate promise: \"I will dwell in the house of the LORD forever.\" This assurance of eternal life with God provides hope beyond any temporary hardship we face here on earth.",
        reference : "Psalm 23:4, 6"
    },
    {
        id : 2,
        verse : "For His anger is but for a moment, His favor is for life; weeping may endure for a night, but joy comes in the morning.",
        meditation : "God's anger or the difficulties He allows us to go through are temporary and serve a purpose—often to refine, teach, or correct us. However, His favor, love, and grace are lasting and constant. His favor remains over our lives, even in the midst of struggles.The imagery of \"night\" represents times of sadness, hardship, or suffering. It acknowledges that there will be times in life where we face real sorrow, and it’s okay to grieve or struggle in those moments. However, the promise is that this weeping is temporary—it lasts for a \"night,\" but joy is coming. The \"morning\" symbolizes a new beginning, hope, and the restoration of joy.hold on through the tough times, knowing that God’s joy and deliverance will come." ,
        reference : "Psalm 30:5",
    },
    {
        id : 3,
        verse : "He heals the brokenhearted and binds up their wounds.",
        meditation : "In life, we all experience emotional pain, loss, and brokenness—whether through grief, rejection, disappointment, or other struggles.God sees our pain and is actively working to heal our hearts. His healing is not superficial but addresses the deep wounds that we carry, offering restoration and wholeness where we feel shattered.When life feels overwhelming, and we are emotionally wounded, we can trust that God is the ultimate healer of our hearts. He doesn’t ignore our pain or dismiss it. Instead, He walks with us through it, offering healing and restoration. It is also a call to be patient with the healing process, knowing that God’s care is both tender and thorough, and He will bring about full restoration in His time.",
        reference : "Psalm 147:3",
    },
    {
        id : 4,
        verse : "‘Comfort, yes, comfort My people!’ says your God.",
        meditation : "God is aware of our suffering and calls us to come to Him for peace and reassurance. This comfort can come through prayer, reading Scripture, the encouragement of fellow believers, or simply resting in the knowledge that God is in control, even when circumstances seem out of our hands.Just as God desires to comfort His people, He often uses us to provide comfort to others. We are called to extend God’s comfort to those around us who are going through difficult times. As we receive comfort from God, we can share that same comfort with others, becoming a source of peace and support.We can seek His peace through prayer, trust in His promises, and allow His presence to soothe our anxieties and fears. Furthermore, we are reminded that we don’t have to bear our burdens alone. God is with us, offering the comfort and strength we need to get through any challenge.",
        reference : "Isaiah 40:1",
    },
    {
        id : 5,
        verse : "Blessed are those who mourn, for they shall be comforted.",
        meditation : "Mourning and sorrow are real parts of life. Jesus doesn’t dismiss or overlook pain; instead, He promises that those who experience it are blessed—not because mourning itself is a blessing, but because of the divine comfort that follows. Mourning can take many forms: grief over the loss of a loved one, sadness over personal struggles, or even a sense of brokenness over the state of the world. The promise here is that God sees this pain and responds with comfort.",
        reference : "Matthew 5:4",
    },
    {
        id : 6,
        verse : "Come to Me, all you who labor and are heavy laden, and I will give you rest.",
        meditation : "Whether it's the weight of responsibilities, personal struggles, emotional pain, or spiritual weariness, Jesus calls people to bring these burdens to Him.He offers rest not only for the body but for the soul—a deep, spiritual peace that comes from trusting in His care and provision.Seek his presence through prayer, worship, and Scripture, allowing His peace to replace anxiety and exhaustion. Jesus’ promise of rest is an invitation to trust Him with the things that weigh heavily on us, knowing that He can bring calm, perspective, and strength to face whatever challenges come our way.",
        reference : "Matthew 11:28",
    },
    {
        id : 7,
        verse : "For whatever things were written before were written for our learning, that we through the patience and comfort of the Scriptures might have hope.",
        meditation : "Find hope in the Scriptures. The Bible contains countless promises of God’s love, faithfulness, and ultimate victory over trials. Through reading, studying, and meditating on Scripture, believers can gain strength and endurance to face life’s hardships. When life feels overwhelming, God's Word offers both patience (helping us to endure and wait on Him) and comfort (reminding us of His presence and promises).",
        reference : "Romans 15:4",
    },
    {
        id : 8,
        verse : "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our tribulation, that we may be able to comfort those who are in any trouble, with the comfort with which we ourselves are comforted by God.",
        meditation : "When overwhelmed by difficult circumstances, remember that God can use the trial for a greater purpose. Trust that He is working through the situation, both for personal growth and to enable service to others.Pause and pray, seeking God’s comfort, trusting that He is present and will provide peace in the midst of hardship.",
        reference : "2 Corinthians 1:3-4",
    },
    {
        id : 9,
        verse : "You shall increase my greatness, and comfort me on every side.",
        meditation : "Despite current struggles or setbacks, God has the power to restore, elevate, and improve a person's situation.Difficulties are not the end, and God can bring about growth, advancement, or new opportunities through them.Approach difficult situations with confidence in God's promises. Even when circumstances seem dire, lean on the assurance that God is with you, providing comfort and working for your good.",
        reference : "Psalm 71:21",
    },
    {
        id : 10,
        verse : "This is my comfort in my affliction, for Your word has given me life.",
        meditation : "When facing difficult situations, turn to Scripture for comfort. Meditating on passages that speak of God's faithfulness, protection, and love can bring peace to a troubled heart. Make reading the Bible a regular part of your day to experience the comfort it offers.When you don’t know what to do in difficult situations, seek direction from God’s Word. Pray for insight and let the teachings of the Bible guide your decisions and responses to challenges.",
        reference : "Psalm 119:50",
    },
    {
        id : 11,
        verse : "And in that day you will say: ‘O LORD, I will praise You; though You were angry with me, Your anger is turned away, and You comfort me.’",
        meditation : "The verse begins with an acknowledgment of God’s anger, reflecting moments when God may discipline His people for their sins. However, it quickly transitions to God's mercy, showing that His anger does not last forever and that His ultimate desire is to restore and comfort.When you feel distant from God or are experiencing hardship, remember that His anger or discipline is temporary and motivated by love. Trust in His plan for restoration and reconciliation, knowing that He always desires to comfort and restore His people.",
        reference : "Isaiah 12:1",
    },
    {
        id : 12,
        verse : "Sing, O heavens! Be joyful, O earth! And break out in singing, O mountains! For the LORD has comforted His people, and will have mercy on His afflicted.",
        meditation : "The verse calls all creation to rejoice because God has comforted His people and shown mercy to those in affliction. This teaches that even in the midst of difficult situations, there is a reason to find joy because God’s comfort is near. Focus on the bigger picture of God’s mercy and comfort. Allow that to spark joy, even when circumstances feel overwhelming. Praise and worship during times of trouble can shift perspective, bringing hope and strength.",
        reference : "Isaiah 49:13",
    },
    {
        id : 13,
        verse : "For the LORD will comfort Zion, He will comfort all her waste places; He will make her wilderness like Eden, and her desert like the garden of the LORD; joy and gladness will be found in it, thanksgiving and the voice of melody.",
        meditation : "The verse twice emphasizes that God will “comfort” Zion and all its waste places. This indicates that God’s comfort is not only emotional but also involves healing, restoration, and renewal. It’s a reminder that in times of suffering, God is actively present, offering not just words of comfort but tangible relief and healing.Cultivate a heart of thanksgiving, even during difficult times. Focus on small blessings and the ways in which God is working in your life, even if they seem hidden. Gratitude fosters a sense of peace and helps align your heart with God’s purposes.",
        reference : "Isaiah 51:3",
    },
    {
        id : 14,
        verse : "I, even I, am He who comforts you. Who are you that you should be afraid of a man who will die, and of the son of a man who will be made like grass?",
        meditation : "Human threats or challenges are fleeting compared to God's eternal power. When faced with intimidation, persecution, or fear of others' opinions, this verse encourages believers to put their trust in God, who is far greater and more lasting than any earthly opposition.",
        reference : "Isaiah 51:12",
    },
    {
        id : 15,
        verse : "To proclaim the acceptable year of the LORD, and the day of vengeance of our God; to comfort all who mourn, to console those who mourn in Zion, to give them beauty for ashes, the oil of joy for mourning, the garment of praise for the spirit of heaviness; that they may be called trees of righteousness, the planting of the LORD, that He may be glorified.",
        meditation : "When we mourn, God is near, offering His presence to comfort and heal our hearts. He promises to turn our ashes—our losses and brokenness—into something beautiful. Even in our deepest sorrow, He brings joy, not by denying our pain, but by giving us hope beyond it.God also invites us to praise Him, even when we feel burdened and heavy. When we lift our eyes to Him in worship, we find peace, and our hearts are lightened. Through all our trials, He is shaping us into \"trees of righteousness\"—strong, stable, and deeply rooted in His love—so that our lives become a testimony to His goodness.In the midst of our hardest moments, we can trust that God is working, bringing comfort, joy, and renewal, ultimately making something beautiful out of every hardship.",
        reference : "Isaiah 61:2-3",
    },
    {
        id : 16,
        verse : "As one whom his mother comforts, so I will comfort you; and you shall be comforted in Jerusalem.",
        meditation : "In those moments when we feel alone or burdened, God’s comfort is not distant but deeply personal. He knows exactly what we need and wraps us in His care. And beyond the immediate comfort, this verse reminds us of the hope we have in Him—a future of restoration and healing, just like the comfort promised in Jerusalem. Even when life feels heavy, God is working towards our peace and joy.",
        reference : "Isaiah 66:13",
    },
    {
        id : 17,
        verse : "Then shall the virgin rejoice in the dance, and the young men and the old, together; for I will turn their mourning to joy, will comfort them, and make them rejoice rather than sorrow.",
        meditation : "God promises that He will turn our mourning into joy, just as He envisions the young and old rejoicing together in dance. This verse reminds us that no matter how heavy our grief feels right now, God has the power to bring joy back into our lives. He promises to comfort us, not just by easing our pain, but by transforming it into something that leads to rejoicing. It's a reminder that even in the darkest times, God is working toward our healing, and there is hope for joy beyond the sorrow we now feel.",
        reference : "Jeremiah 31:13",
    },
    {
        id : 18,
        verse : "Then the churches throughout all Judea, Galilee, and Samaria had peace and were edified. And walking in the fear of the Lord and in the comfort of the Holy Spirit, they were multiplied.",
        meditation : " After facing persecution and hardship, the churches in Judea, Galilee, and Samaria found peace and were strengthened. This verse reminds us that even after seasons of difficulty, God can bring calm and renewal. Walking in the \"fear of the Lord\" means living with a deep respect for God, and through the \"comfort of the Holy Spirit,\" believers experience His presence and guidance. As they trusted God and felt His peace, the church grew and multiplied. It’s a powerful reminder that even in challenging times, when we rely on God's strength and follow His leading, He can bring both peace and growth into our lives.",
        reference : "Acts 9:31",
    },
    {
        id : 19,
        verse : "Nevertheless God, who comforts the downcast, comforted us by the coming of Titus.",
        meditation : "God uses people to bring encouragement and relief during tough times. When we’re feeling low or burdened, God often sends the right person at the right moment to uplift us, reminding us that He sees our pain and is actively working to bring us comfort. It reassures us that, no matter how downcast we feel, God’s care is constant, and He often shows His love through the kindness and presence of others.",
        reference : "2 Corinthians 7:6",
    },
    {
        id : 20,
        verse : "Therefore comfort each other and edify one another, just as you also are doing.",
        meditation : "It reminds us that we’re not meant to go through life’s challenges alone. Instead, God calls us to \"comfort each other and edify one another.\" This means building each other up, offering words of encouragement, and being a support system. The verse acknowledges that we already do this, but encourages us to continue, knowing that our words and actions can lift someone’s spirits and strengthen their faith. It’s a reminder that we each play a role in helping others find comfort, peace, and growth, just as God comforts us.",
        reference : "1 Thessalonians 5:11",
    },
    {
        id : 21,
        verse : "Now may our Lord Jesus Christ Himself, and our God and Father, who has loved us and given us everlasting consolation and good hope by grace, comfort your hearts and establish you in every good word and work.",
        meditation : " Jesus Christ and God the Father, in their boundless love, offer us eternal comfort and hope, not because we deserve it, but because of their grace. It reassures us that, no matter what we face, God is there to bring peace to our hearts and guide us in all that we do. The message is one of deep care and encouragement, urging us to trust in God's love as a steady source of strength, so that we may continue to speak and act in ways that reflect His goodness.",
        reference : "2 Thessalonians 2:16-17",
    }

]

const helpVerses = [
    {
        id: 1,
        verse: "God is our refuge and strength, a very present help in trouble.",
        reference: "Psalm 46:1",
        meditation: "In moments of fear, uncertainty, or hardship, God is like a safe shelter we can run to. He is not distant, but close by, offering strength and support right when we need it most. No matter how overwhelming life may feel, God is always there—steady, protective, and ready to help us through whatever we are facing. It’s a message of comfort, letting us know that we are never alone in our struggles."
    },
    {
        id: 2,
        verse: "God sets the solitary in families; He brings out those who are bound into prosperity; but the rebellious dwell in a dry land.",
        reference: "Psalm 68:6",
        meditation: "God places the lonely into the warmth of community and family, giving them a sense of belonging. For those who feel bound by hardship, He leads them toward freedom and better days. However, it also gently warns that those who turn away from love and grace may find themselves in a barren, unfulfilled place. It's a message of hope, showing how God longs to bring everyone into a place of love, care, and abundance, but it also calls us to remain open to His guidance."
    },
    {
        id: 3,
        verse: "Trust in the LORD with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths.",
        reference: "Proverbs 3:5-6",
        meditation: "This verse invites us to let go of the pressure to figure everything out on our own. It’s a call to trust God completely, even when life feels uncertain or confusing. Instead of relying solely on our limited understanding, we are encouraged to acknowledge God in every part of our lives. When we do this, we’re reassured that He will guide us on the right path, leading us with love and wisdom. It’s a comforting reminder that we don’t have to carry the weight of every decision alone—God is there to help us every step of the way."
    },
    {
        id: 4,
        verse: "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.",
        reference: "Matthew 7:7",
        meditation: "When we reach out to God with our needs, desires, or questions, He listens. If we ask, He will respond; if we seek, He will help us find what we’re searching for; and if we knock, He will open doors of opportunity and understanding. It’s an encouraging message that God is approachable and eager to provide for us, as long as we come to Him with trust. It assures us that we are never ignored or forgotten—God is always ready to answer when we reach out."
    },
    {
        id: 5,
        verse: "For we do not have a High Priest who cannot sympathize with our weaknesses, but was in all points tempted as we are, yet without sin. Let us therefore come boldly to the throne of grace, that we may obtain mercy and find grace to help in time of need.",
        reference: "Hebrews 4:15-16",
        meditation: "Jesus, our High Priest, fully understands our struggles. He isn’t distant or unaware of our human weaknesses—He experienced temptation and hardship just as we do, yet He remained without sin. Because of this, we can approach God with confidence, knowing that we will be met with compassion, mercy, and grace. It reassures us that in our moments of need, we don’t have to hesitate or feel unworthy. God is ready to meet us with love, offering the strength and help we need to get through anything we face."
    },
    {
        id: 6,
        verse: "Let your conduct be without covetousness; be content with such things as you have. For He Himself has said, 'I will never leave you nor forsake you.' So we may boldly say: 'The LORD is my helper; I will not fear. What can man do to me?'",
        reference: "Hebrews 13:5-6",
        meditation: "Live with a heart free from envy, finding contentment in what we already have. It reminds us that true security doesn’t come from material things but from God’s unwavering presence. God promises that He will never leave or abandon us, giving us the courage to face life without fear. With God as our helper, we can feel safe and confident, knowing that no human challenge or threat can ever take away the peace and protection He provides. It’s a message of reassurance, letting us know that we are never alone and can trust in God’s constant care."
    },
    {
        id: 7,
        verse: "There is no one like the God of Jeshurun, who rides the heavens to help you, and in His excellency on the clouds.",
        reference: "Deuteronomy 33:26",
        meditation: "There is no one like God, who moves with power and majesty, riding the heavens to come to our aid. He is not distant or unreachable—He is actively watching over us from above, ready to step in with His strength when we need Him. The imagery of God on the clouds speaks to His divine authority and the tender care He provides for His people. It’s a comforting reminder that no matter how vast the universe is, God is personally invested in helping and protecting us."
    },
    {
        id: 8,
        verse: "And Jabez called on the God of Israel saying, 'Oh, that You would bless me indeed, and enlarge my territory, that Your hand would be with me, and that You would keep me from evil, that I may not cause pain!' So God granted him what he requested.",
        reference: "1 Chronicles 4:10",
        meditation: "Jabez, who humbly calls on God for blessings and guidance,asks not only for growth and opportunity in his life but also for God's constant presence and protection. Jabez desires to live in a way that avoids harm and brings no pain to others. His prayer is both bold and sincere, trusting in God's goodness and mercy. The beautiful part is that God responds with compassion, granting Jabez's requests. This verse shows us that God hears our honest, heartfelt prayers and is willing to bless and guide us when we seek His help with a pure heart."
    },
    {
        id: 9,
        verse: "And Asa cried out to the LORD his God, and said, 'LORD, it is nothing for You to help, whether with many or with those who have no power; help us, O LORD our God, for we rest on You, and in Your name we go against this multitude. O LORD, You are our God; do not let man prevail against You!'",
        reference: "2 Chronicles 14:11",
        meditation: "Asa turns to God in a moment of great need, recognizing that God’s power isn’t limited by human strength or numbers. Asa acknowledges that whether facing a strong force or standing with little power, God can still bring victory. His prayer is one of trust and dependence, as he places everything in God’s hands, knowing that it’s not by human ability but by God's might that they can succeed. Asa rests in the assurance that they are not fighting alone, but with God leading them. His plea is a cry for divine help, knowing that, with God on their side, no earthly power can prevail. It’s a reminder that even when we feel powerless, we can rely on God’s strength, and He will carry us through."
    },
    {
        id: 10,
        verse: "But You have seen, for You observe trouble and grief, to repay it by Your hand. The helpless commits himself to You; You are the helper of the fatherless.",
        reference: "Psalm 10:14",
        meditation: "God sees the pain, trouble, and grief experienced by those who are suffering, especially those who feel powerless or abandoned. In times of helplessness, when people have no one else to turn to, they can commit themselves to God, trusting that He will act as their helper and protector. It is a message of hope for those who feel vulnerable, reminding them that they are not forgotten and that God will bring relief in His time. It speaks to the comfort found in knowing that even in the darkest moments, God cares and will respond with compassion."
    },
    {
        id: 11,
        verse: "Do not hide Your face from me; do not turn Your servant away in anger; You have been my help; do not leave me nor forsake me, O God of my salvation.",
        reference: "Psalm 27:9",
        meditation: "The speaker asks God not to turn away or abandon them in their time of need. The cry comes from someone who has experienced God's help in the past and now, in fear of losing that support, calls out desperately for God to stay close. It’s an expression of both trust and anxiety—trusting in God as their salvation but feeling the weight of uncertainty. At its core, it conveys the longing for reassurance, the comfort of knowing that even when life is overwhelming, God will not forsake them."
    },
    {
        id: 12,
        verse: "And the LORD shall help them and deliver them; He shall deliver them from the wicked, and save them, because they trust in Him.",
        reference: "Psalm 37:40",
        meditation: "God will come to the aid of those who place their trust in Him. It speaks to the reassurance that no matter the challenges or the presence of wickedness around them, God will intervene and provide protection and deliverance. For those who feel oppressed or overwhelmed, this verse encourages them to hold onto their faith, reminding them that their trust in God is not in vain. It’s a promise that they are not alone in their struggles—God sees their trust and will act to save them in His care and timing."
    },
    {
        id: 13,
        verse: "But I am poor and needy; yet the LORD thinks upon me. You are my help and my deliverer; do not delay, O my God.",
        reference: "Psalm 40:17",
        meditation: "This verse expresses a humble, heartfelt cry from someone who feels poor and needy, not just in material things but perhaps emotionally or spiritually as well. Despite their vulnerability, there is a deep comfort in knowing that God cares for them and is mindful of their situation. It’s a reminder that even in their lowliest state, they are not forgotten. The speaker acknowledges God as their only source of help and deliverance, urgently asking for God not to delay in bringing relief. It’s a message of both humility and hope, showing that even when we feel small or insignificant, God is attentive and ready to respond."
    },
    {
        id: 14,
        verse: "Give us help from trouble, for the help of man is useless.",
        reference: "Psalm 60:11",
        meditation: "Human efforts alone are often insufficient in times of deep trouble. It reflects a moment of vulnerability and realization that when faced with overwhelming challenges, relying solely on others or on human solutions may not bring the needed relief. Instead, the speaker turns to God, acknowledging that true, dependable help comes from Him. It’s an empathetic reminder for anyone who feels let down by earthly solutions that they can find strength and hope by turning to a higher power, trusting that God's help is unwavering and powerful when human help falls short."
    },
    {
        id: 15,
        verse: "Because You have been my help, therefore in the shadow of Your wings I will rejoice.",
        reference: "Psalm 63:7",
        meditation: "The speaker acknowledges that God has been a source of help in the past, and because of that, they find comfort and safety in His presence. The imagery of \"the shadow of Your wings\" conveys a sense of closeness, warmth, and refuge—like a child being sheltered by a loving parent. It’s a statement of faith that, even in difficult times, they can rejoice and find peace under God’s care. For anyone feeling weary or in need of safety, this verse reassures them that they can find joy and solace in the protective embrace of God, who has always been their help."
    },
    {
        id: 16,
        verse: "For He will deliver the needy when he cries, the poor also, and him who has no helper.",
        reference: "Psalm 72:12",
        meditation: "This verse is a compassionate reminder of God's deep care for those in need, especially for the vulnerable and powerless. It promises that God listens and responds to the cries of those who are suffering, particularly the poor and those who have no one else to help them. It reflects the idea that in moments of desperation, when people feel abandoned or helpless, God is there to deliver them. It offers hope to anyone who feels alone in their struggles, reminding them that they are not forgotten—God sees their pain and will come to their aid, providing the help and relief they need."
    },
    {
        id: 17,
        verse: "You who fear the LORD, trust in the LORD; He is their help and their shield.",
        reference: "Psalm 115:11",
        meditation: "Those who revere and respect God,place your full trust in Him.For he is not only your source of help in times of need but also a shield, providing safety and defense against life's challenges. For those who fear or face uncertainty, be reminded that you are not alone—God is both your guide and protector, and you can trust in His care."
    },
    {
        id: 18,
        verse: "My help comes from the LORD, who made heaven and earth.",
        reference: "Psalm 121:2",
        meditation: "In moments of uncertainty, it can be easy to feel overwhelmed, but remember that your help comes from the One who created everything—the heavens and the earth. The same God who crafted the universe is watching over you with love and care. You are not facing this alone. Just as He holds the stars in place, He is holding you in His hands, ready to guide and protect you. Trust that His power is greater than any struggle, and His love is deeper than any fear you may face. You can find peace in knowing that the Creator is your helper, always by your side."
    },
    {
        id: 19,
        verse: "Happy is he who has the God of Jacob for his help, whose hope is in the LORD his God.",
        reference: "Psalm 146:5",
        meditation: "True happiness and peace come from trusting in God. It speaks to the deep sense of security and joy we experience when we realize that we don’t have to rely solely on our own strength. God, who has been faithful through generations, is our helper. Just as He helped Jacob, He helps us now, guiding and protecting us. When our hope is placed in the Lord, we can rest assured that no matter the challenges we face, He is with us, offering His strength and love. This verse reassures us that happiness is found in leaning on God, who is always present to support us."
    },
    {
        id: 20,
        verse: "Fear not, for I am with you; be not dismayed, for I am your God. I will strengthen you, yes, I will help you, I will uphold you with My righteous right hand.",
        reference: "Isaiah 41:10",
        meditation: "I know you’re feeling overwhelmed, and it’s understandable to feel that way, but God’s promise is clear—He’s with you, even in this difficult moment. You don’t have to carry this weight on your own.God has always kept His promises, and He’ll keep them now. No matter what you’re going through, He is holding you with His righteous hand, and He won’t let you fall.",
        prayer : "Lord, we thank You for Your promise to be with us. Please strengthen us right now. Help us to feel Your presence and remind us that You are holding us up, just as You’ve promised in Your word. We trust You, Lord, to give the peace and strength we need. Amen."
    },
    {
        id: 21,
        verse: "For I, the LORD your God, will hold your right hand, saying to you, 'Fear not, I will help you.'",
        reference: "Isaiah 41:13",
        meditation: "It’s natural to feel afraid or overwhelmed right now, but God promises to hold your hand through it all. He sees your struggle, and He’s saying, ‘Fear not, I’m here to help you.’ You’re not alone.God’s holding your hand every step of the way. When things feel too hard to handle, remember that He’s right there with you, whispering, ‘Don’t be afraid—I’m going to help you through this.’",
        prayer : "Lord, we thank You that You are holding our hands right now. Help them to feel Your presence, to know that You are near, and to trust in Your promise to help. Remind them, Lord, that they don't need to be afraid because You are their strength and their guide. Amen."
    },
    {
        id: 22,
        verse: "Immediately the father of the child cried out and said with tears, 'Lord, I believe; help my unbelief!'",
        reference: "Mark 9:24",
        meditation: "I know it’s hard to always feel strong in faith, especially when life feels overwhelming. But even when you’re struggling, like the father in this story, God hears your cry for help. He’s not asking for perfect faith—He’s just asking for you to trust Him, even in your doubt.It’s okay to bring your doubts to God—He’s not disappointed in you. Just like the father in this story, you can cry out, ‘Lord, I believe, but help my unbelief!’ And God, in His love, will help you through it.",
        prayer : "Lord, we believe, but sometimes it’s hard to hold onto faith in difficult times. Please help us in their moments of doubt, and remind them that You are still with them, even when they feel uncertain. Strengthen their faith and comfort them with Your presence. Amen."
    },
    {
        id: 23,
        verse: "But the Helper, the Holy Spirit, whom the Father will send in My name, He will teach you all things, and bring to your remembrance all things that I said to you.",
        reference: "John 14:26",
        meditation: "Jesus promised, ‘But the Helper, the Holy Spirit, whom the Father will send in My name, He will teach you all things, and bring to your remembrance all things that I said to you.’ This means that God has already given you His Spirit to guide and comfort you, especially in times of trouble.You don’t have to face this situation alone. The Holy Spirit, who Jesus promised to us, is right there with you. He’s your Helper, sent by the Father to guide you through difficult times, to remind you of God’s promises, and to give you the wisdom you need.",
        prayer : "Lord, we thank You for sending the Holy Spirit to be our Helper and Comforter. I ask that You fill us with Your Spirit, giving us the peace and wisdom we need right now. Help us to feel Your presence and to trust that You are with us, guiding and protecting us. Amen."
    }
];

const loveVerses = [
    {
        id : 1,
        verse : "He administers justice for the fatherless and the widow, and loves the stranger, giving him food and clothing.",
        reference : "Deuteronomy 10:18",
        meditation : "This verse shows that God sees and cares for those who are hurting, lost, or struggling. Just like He cares for the orphan, widow, and stranger, He cares for you. He is actively working to protect, provide, and surround you with His love, even in difficult times.God’s love for you is unwavering. Just as He takes care of the most vulnerable, He is right there with you, offering His protection, justice, and provision. You are never outside of His care, and He won’t leave you in your time of need.",
        prayer : "Lord, we thank You for Your deep compassion for those who are hurting. Just as You care for the orphan and the widow, we ask that You surround us with Your love and protection right now. Provide for their needs, Lord, and remind them that You are a God of justice, who never forgets Your children. Amen."
    },
    {
        id : 2,
        verse : "How precious is Your lovingkindness, O God! Therefore the children of men put their trust under the shadow of Your wings.",
        reference : "Psalm 36:7",
        meditation : "God’s love for you is precious, and just like a mother bird protects her young under her wings, God shelters you from harm. No matter what you’re going through, His arms are open to hold and protect you. You can find peace and safety in His care.",
        prayer : "Lord, we thank You for Your precious love and protection. Please wrap us in the shelter of Your wings right now, giving them peace, strength, and reassurance. Remind them of Your constant presence and help them trust in Your loving care. Amen."
    },
    {
        id : 3,
        verse : "Because Your lovingkindness is better than life, my lips shall praise You.",
        reference : "Psalm 63:3",
        meditation : "God’s lovingkindness is greater than life itself—it’s better than any challenge we face, any fear we might have. His love is constant, unchanging, and stronger than whatever you're going through. In His love, you can find peace and security.Even when life feels overwhelming, remembering God’s incredible love for you can shift your heart. As the psalmist says, ‘My lips shall praise You’—sometimes praising God in the storm helps us remember that His love is greater than any challenge we face.",
        prayer : "Lord, we thank You for Your lovingkindness that is better than life itself. I pray that we feels surrounded by Your love and that they find comfort knowing You are always with them. Help them to rest in the assurance of Your presence, knowing You are protecting and guiding them. Amen."
    },
    {
        id : 4,
        verse : "As a father pities his children, so the LORD pities those who fear Him. For He knows our frame; He remembers that we are dust.",
        reference : "Psalm 103:13-14",
        meditation : "God knows how fragile we are—He knows our weaknesses and struggles, and He doesn’t expect us to be perfect. Like a loving father who is gentle with his children, God sees your pain and offers His compassion and protection.God’s compassion never fails. He knows exactly how you’re feeling, and He’s not distant or indifferent—He’s right there with you, offering His understanding, comfort, and protection. You can lean on Him, knowing He’ll always treat you with the gentleness of a loving Father.",
        prayer : "Lord, we thank You that You are a compassionate Father, who knows our weaknesses and loves us through them. I ask that You wrap [Name] in Your loving arms right now, showing them Your kindness and protection. Help them to feel Your mercy and trust that You understand their every need. Amen."
    },
    {
        id : 5,
        verse : "I will worship toward Your holy temple, and praise Your name for Your lovingkindness and Your truth; for You have magnified Your word above all Your name.",
        reference : "Psalm 138:2",
        meditation : "God values His word and promises so highly that He magnifies them above all else. That means He will always be faithful to what He has promised you. His lovingkindness and truth are constant, and you can trust that He will protect and help you, just as He has said in His Word.",
        prayer : "Lord, we praise You for Your lovingkindness and faithfulness. We thank You that Your promises are sure and that You have magnified Your Word above all. I pray that [Name] would feel the strength of Your love and truth right now, trusting in Your promises and resting in Your protection. Amen."
    },
    {
        id : 6,
        verse : "The LORD has appeared of old to me, saying, 'Yes, I have loved you with an everlasting love; therefore with lovingkindness I have drawn you.'",
        reference : "Jeremiah 31:3",
        meditation : "God’s love is not dependent on circumstances—it is everlasting. He loves you just as much now, in your time of need, as He always has. His love is a secure foundation that never changes, and you are always safe in His care.",
        prayer : "Lord, thank You for loving us with an everlasting love and for surrounding us with Your lovingkindness. I ask that [Name] would feel Your deep love and protection right now. Remind them that You are always near, drawing them close with Your gentle and caring presence. Amen."
    },
    {
        id : 7,
        verse : "The LORD your God in your midst, the Mighty One, will save; He will rejoice over you with gladness, He will quiet you with His love, He will rejoice over you with singing.",
        reference : "Zephaniah 3:17",
        meditation : ""
    },
    {
        id : 8,
        verse : "Now hope does not disappoint, because the love of God has been poured out in our hearts by the Holy Spirit which was given to us.",
        reference : "Romans 5:5",
        meditation : "God’s love isn’t far away—it’s right there in your heart. The Holy Spirit has poured it into you, and that’s why you can have hope even when things feel hard. His love is real and present, comforting and protecting you in every situation.Your hope in God is not in vain—His love ensures that you will never be disappointed. You can trust in His care and protection, knowing that the love He has poured into your heart through the Holy Spirit is greater than any challenge you face.",
        prayer : "Lord, we thank You for the hope You have given us through Your love, poured out in our hearts by the Holy Spirit. I ask that [Name] would feel that love in a deep and comforting way right now, reminding them that You are protecting and guiding them every step of the way. Amen."
    },
    {
        id : 9,
        verse : "But God demonstrates His own love toward us, in that while we were still sinners, Christ died for us.",
        reference : "Romans 5:8",
        meditation : "God’s protection and help are rooted in the most powerful display of love—Christ’s death on the cross. This means you can trust that if God was willing to give His own Son for you, He will also protect, guide, and help you through whatever you're facing.You don’t have to be perfect to receive God’s love and protection. Even while we were still sinners, God loved us enough to send Jesus. That same love covers you now, offering you the strength, guidance, and protection you need, no matter what you're going through.",
        prayer : "Lord, we thank You for showing Your love for us through Jesus’ sacrifice, even while we were still sinners. I ask that [Name] would feel the depth of that love right now and know that You are protecting and helping them in every moment of their life. Let them rest in the security of Your grace. Amen."
    },
    {
        id : 10,
        verse : "And we know that all things work together for good to those who love God, to those who are the called according to His purpose.",
        reference : "Romans 8:28",
        meditation : "God sees the bigger picture, even when we can’t. He is using every part of your life—the good and the difficult—to bring about something beautiful. You may not see it now, but you can trust that God is working all things together for your good.",
        prayer : "Lord, we thank You that You are always working all things together for good for those who love You. I ask that [Name] would feel peace and trust in Your plan, knowing that You are guiding and protecting them through every part of their life, even when it’s hard to see. Help them to rest in the knowledge that You are in control. Amen."
    },
    {
        id : 11,
        verse : "Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?",
        reference : "Romans 8:35",
        meditation : "No amount of tribulation, distress, or danger can ever separate you from Christ’s love. He is right there with you, protecting and sustaining you through every hardship. His love is stronger than anything life can throw your way.",
        prayer : "Lord, we thank You for Your unbreakable love, which nothing in this world can separate us from. I pray that [Name] would feel the strength of that love right now, knowing that no trial or hardship can remove them from Your care. Help them to rest in Your protection and trust that Your love will carry them through. Amen."
    },
    {
        id : 12,
        verse : "Yet in all these things we are more than conquerors through Him who loved us. For I am persuaded that neither death nor life, nor angels nor principalities nor powers, nor things present nor things to come, nor height nor depth, nor any other created thing, shall be able to separate us from the love of God which is in Christ Jesus our Lord.",
        reference : "Romans 8:37-39",
        meditation : "You are more than a conqueror. That means through God’s love, you have the strength to overcome whatever you're going through. His love makes you victorious, even when the battle feels tough. You’re not alone, and God’s power is carrying you through.",
        prayer : "Lord, we thank You for the victory You have given us through Your love. I ask that [Name] would feel the power of that love right now, knowing that nothing in this world can separate them from You. Help them to stand firm, trusting that Your love will protect and guide them in every moment. Amen."
    },
    {
        id : 13,
        verse : "But as it is written: 'Eye has not seen, nor ear heard, nor have entered into the heart of man the things which God has prepared for those who love Him.'",
        reference : "1 Corinthians 2:9",
        meditation : "No matter what you're going through, know that God has amazing things in store for you. His plans are far greater than anything we can see or understand. Even when it’s hard to see the way forward, trust that He is working on something beautiful for your future.",
        prayer : "Lord, we thank You for the incredible things You have prepared for those who love You. I pray that [Name] would feel hope and peace knowing that Your plans for them are greater than anything they can see right now. Help them to trust in Your protection and to rest in the knowledge that You are working for their good. Amen."
    },
    {
        id : 14,
        verse : "But God, who is rich in mercy, because of His great love with which He loved us...",
        reference : "Ephesians 2:4",
        meditation : "God’s love for you is so great that He is always pouring out mercy and protection, even when life feels overwhelming. His love never fails, and you can trust that He is watching over you with deep care and compassion.",
        prayer : "Lord, we thank You for Your rich mercy and great love. I ask that [Name] would feel the comfort of Your presence and protection right now. May they be assured that Your love is unfailing and Your mercy is lifting them up in every difficult moment. Amen."
    },
    {
        id : 15,
        verse : "To know the love of Christ which passes knowledge; that you may be filled with all the fullness of God.",
        reference : "Ephesians 3:19",
        meditation : "In a small, quiet village nestled between rolling hills, there lived a young woman named Miriam. She had always believed in God, but recently, she felt distant and unsure. Life’s burdens weighed heavy on her heart, and she wondered if God truly loved her. One evening, as the sun set, casting a golden glow over the fields, Miriam wandered into the village chapel. It was a place she hadn’t visited in a long time.\n" +
            "Sitting in the stillness, Miriam whispered a prayer. “God, I want to feel Your love again, but I don’t know how.” She bowed her head, and as she did, an old, worn Bible caught her eye on the altar. She picked it up and flipped through its pages until her eyes landed on a verse: “To know the love of Christ which passes knowledge; that you may be filled with all the fullness of God.”\n" +
            "\n" +
            "She read the words aloud, slowly. As she did, something stirred in her heart. It was as if a warmth she couldn’t explain was filling her from within. Tears welled up in her eyes—not from sadness, but from a sense of being embraced by something far bigger and more profound than she could ever comprehend. It wasn’t just words on a page; it was the love of Christ, a love that was deeper than knowledge or understanding, pouring into her soul.\n" +
            "\n" +
            "Miriam didn’t need to understand everything. She realized that God’s love wasn’t something to be fully grasped by her mind but something to be experienced in her heart. In that quiet moment, she felt God’s fullness filling every empty corner of her being. And she knew—she was loved, always had been, and always would be.",
        prayer : "Heavenly Father,I thank You for Your love that surpasses all understanding. I may not always comprehend it fully, but I trust that it is deeper, wider, and more powerful than I could ever imagine. Fill me with the love of Christ, that my heart would overflow with Your presence and peace. Help me to rest in the truth that Your love is constant, even when I feel far away. May I be filled with all the fullness of God, knowing that Your love sustains me, protects me, and carries me through every moment of life.In Jesus' name, Amen."
    },
    {
        id : 16,
        verse : "And walk in love, as Christ also has loved us and given Himself for us, an offering and a sacrifice to God for a sweet-smelling aroma.",
        reference : "Ephesians 5:2",
        meditation : "There was a man named Samuel who lived in a busy city. Each day, the hustle and demands of life pulled him in every direction. He worked hard, took care of his family, and tried to be kind to those around him. But lately, he felt something was missing. He couldn’t shake the feeling that he was going through the motions, losing sight of what truly mattered.\n" +
            "\n" +
            "One day, as he walked through a quiet park to escape the noise of the city, Samuel overheard a group talking about a Bible verse: “And walk in love, as Christ also has loved us and given Himself for us, an offering and a sacrifice to God for a sweet-smelling aroma.” The words stayed with him, stirring something deep in his heart. He thought about how Christ loved so deeply that He gave everything—even His own life. And here Samuel was, feeling overwhelmed, yet forgetting that the most important thing he could do was to love.\n" +
            "\n" +
            "That evening, Samuel sat quietly in his room, reflecting on the verse. He realized that walking in love meant more than just being kind—it meant living sacrificially, just as Christ had done. Christ’s love wasn’t just a fleeting emotion, but a lifelong offering, one that gave Samuel hope and showed him how to live. The love Christ gave was like a sweet-smelling aroma to God, a beautiful act of worship.\n" +
            "\n" +
            "Samuel made a decision that night. He would no longer rush through life out of obligation, but would walk in love, seeking to reflect Christ’s sacrificial love in his actions. The next day, when his neighbor needed help, Samuel offered his time. When his coworker was stressed, he listened with care. These small acts, given in love, filled his heart in a way that nothing else had. He began to understand what it meant to live as an offering, just as Christ had done for him.",
        prayer : "Heavenly Father,\n" +
            "\n" +
            "Thank You for the love of Christ, who gave Himself for us as an offering and a sacrifice. Help me to walk in that same love, not just in words but in my actions. Teach me to live sacrificially, just as Jesus did, offering myself in love to those around me. May my life be like a sweet-smelling aroma to You, an act of worship that brings glory to Your name. Strengthen me to love as Christ loves, so that others may see Your goodness through my life.\n" +
            "\n" +
            "In Jesus' name, Amen."
    },
    {
        id : 17,
        verse : "Therefore humble yourselves under the mighty hand of God, that He may exalt you in due time, casting all your care upon Him, for He cares for you.",
        reference : "1 Peter 5:6-7",
        meditation : "Sometimes, it’s hard to wait, but God’s timing is always perfect. He knows exactly when to lift you up and provide what you need. Trust that under His mighty hand, you are safe, and He will act at the right moment. Until then, rest in His love and care for you.",
        prayer : "Lord, we thank You for Your mighty hand that holds us and for Your deep care for [Name]. I pray that they would feel Your presence and protection right now, and that they would find peace in casting all their cares upon You. Help them to trust Your timing and rest in the knowledge that You are working all things for their good. Amen."
    },
    {
        id : 18,
        verse : "If we confess our sins, He is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.",
        reference : "1 John 1:9",
        meditation : "When God forgives, He doesn’t just stop at forgiveness. He also cleanses us, removing all the things that separate us from Him. That cleansing brings protection—because when you’re walking in His grace, you are shielded by His love and care. You can trust that He is watching over you, keeping you safe, and guiding you through every step.",
        prayer : "Lord, we thank You for Your faithfulness to forgive and cleanse us when we confess our sins. I pray that [Name] would feel the peace that comes from knowing they are fully forgiven and made new by Your grace. Let them rest in the assurance that You are protecting and guiding them, even through the toughest times. Amen."
    },
    {
        id : 19,
        verse : "Behold what manner of love the Father has bestowed on us, that we should be called children of God! Therefore the world does not know us, because it did not know Him.",
        reference : "1 John 3:1",
        meditation : "You can always find peace in the fact that you are God’s beloved child. His love for you is a safe place where you can rest, knowing that He is watching over you and will never let go of you. Even when the world feels uncertain, God’s love remains steadfast.",
        prayer : "Heavenly Father,\n" +
            "\n" +
            "Thank You for the amazing love You have shown us by calling us Your children. Help us to always remember that we belong to You, even when the world doesn’t understand us. Fill our hearts with peace and confidence in Your love, knowing that being Your child is the greatest blessing we could ever receive. Guide us to live in the fullness of that love each day.\n" +
            "\n" +
            "In Jesus' name, Amen."
    },
    {
        id : 20,
        verse : "He who does not love does not know God, for God is love. In this the love of God was manifested toward us, that God has sent His only begotten Son into the world, that we might live through Him. In this is love, not that we loved God, but that He loved us and sent His Son to be the propitiation for our sins.",
        reference : "1 John 4:8-10",
        meditation : "As you recognize God’s love in your life, it gives you strength to face challenges and to love others, too. You are part of a larger story of love, and that love can be a source of hope and comfort in your life. Remember, God’s love is what sustains you and provides the help you need.",
        prayer : "Heavenly Father,\n" +
            "\n" +
            "Thank You for Your love, a love so deep and pure that You sent Your only Son to be the sacrifice for our sins. Help me to fully understand that this love is not based on what I have done, but on who You are. Fill my heart with Your love, and let that love flow through me to others. Teach me to walk in the truth that You loved me first, and because of that, I can live with peace, hope, and joy. Help me to never forget that You are love, and that I am surrounded by Your presence every day.\n" +
            "\n" +
            "In Jesus’ name, Amen."
    },
    {
        id : 21,
        verse : "And we have known and believed the love that God has for us. God is love, and he who abides in love abides in God, and God in him.",
        reference : "1 John 4:16",
        meditation : "no matter how difficult or overwhelming life may feel, God surrounds us with His love. To abide in love is to live in the shelter of God’s presence, where we can find comfort, safety, and peace. When you feel lost or uncertain, remember that His love is unchanging and ever-present, holding you close, guiding you through every challenge. You are deeply loved, and in that love, God is always with you.",
        prayer : "\"Lord, we trust in Your love and protection. Please surround [name] with Your peace and remind them that You are always with them. Strengthen their faith and give them courage, knowing that You are their refuge.Amen."
    }
];

const protectionVerses = [
    {
        id : 1,
        verse : "And Moses said to the people, ‘Do not be afraid. Stand still, and see the salvation of the LORD, which He will accomplish for you today. For the Egyptians whom you see today, you shall see again no more forever. The LORD will fight for you, and you shall hold your peace.’",
        reference : "Exodus 14:13-14",
        meditation : "Moses said to the Israelites, 'Do not be afraid. Stand still, and see the salvation of the LORD… The LORD will fight for you, and you shall hold your peace.' Just like the Israelites, God is fighting for you, even when things seem impossible.In that moment, the Israelites couldn't see a way out, but God made a way where there seemed to be none. He parted the sea and led them to safety. God’s power hasn't changed—He’s still able to do the impossible in your life.",
        prayer : "Let’s pray together: ‘Lord, we trust You to fight for us. Even when we can’t see the way forward, we believe You are working on our behalf. Give us peace and help us to hold on to Your promises. Amen.’"
    },
    {
        id : 2,
        verse : "For the LORD your God is He who goes with you, to fight for you against your enemies, to save you.",
        reference : "Deuteronomy 20:4",
        meditation : "God isn't just watching your struggle from afar—He’s with you, fighting for you. Even when you feel powerless, He is strong and able to overcome whatever you’re facing.God’s timing might not be what we expect, but His deliverance is certain. Keep trusting Him, even if you can’t see the full picture right now.",
        prayer : "Let’s pray together: ‘Lord, we come before You, trusting that You are with us in every battle. Help us to rest in Your strength and find peace in knowing You are fighting for us. Give us the faith to trust You through this. Amen.’"
    },
    {
        id : 3,
        verse : "Then Jonathan said to the young man who bore his armor, ‘Come, let us go over to the garrison of these uncircumcised; it may be that the LORD will work for us. For nothing restrains the LORD from saving by many or by few.’",
        reference : "1 Samuel 14:6",
        meditation : "Sometimes, all we can do is take one step forward, trusting that God will meet us there. Jonathan didn’t know exactly what would happen, but he moved forward in faith, knowing that God could work in ways beyond what he could see.",
        prayer : "Let’s pray together: ‘Lord, we trust that You are not limited by what we see. Give us the courage to take steps of faith, knowing that You are with us and that You can bring victory in any situation. Help us to trust You, no matter what. Amen.’"
    },
    {
        id : 4,
        verse : "The God of my strength, in whom I will trust; my shield and the horn of my salvation, my stronghold and my refuge; my Savior, You save me from violence. I will call upon the LORD, who is worthy to be praised; so shall I be saved from my enemies.",
        reference : "2 Samuel 22:3-4",
        meditation : "In 2 Samuel, David calls God 'the God of my strength, my shield, my stronghold, and my refuge.' He knew that God was his protector, his Savior. In the same way, God is your strength, your shield, and your Savior.God is your stronghold, the place where you can find safety and security, even in the middle of a storm. He’s your shield, defending you from harm. No matter what comes against you, God is covering you.",
        prayer : "Let’s pray: ‘Lord, You are our stronghold and refuge. When we feel overwhelmed, remind us that You are our shield, our strength, and our Savior. We trust You to protect and guide us, even when we don’t see a way forward. Amen.’"
    },
    {
        id : 5,
        verse : "Show Your marvelous lovingkindness by Your right hand, O You who save those who trust in You from those who rise up against them. Keep me as the apple of Your eye; hide me under the shadow of Your wings.",
        reference : "Psalm 17:7-8",
        meditation : "God’s wings symbolize His protection and closeness. He hides you under His wings, keeping you safe and sheltered, just like a mother bird protects her young. He is your refuge, and no harm can come to you that He is not aware of.You are the apple of God’s eye—that means you are precious to Him. He watches over you with the deepest care and attention. Even when you feel unseen, God always has His eye on you, protecting and loving you.",
        prayer : "Let’s pray: ‘Lord, we thank You for Your lovingkindness that never fails. We ask You to hide us under the shadow of Your wings, to keep us safe as the apple of Your eye. Give us peace, knowing that You are always watching over us and protecting us. Amen.’"
    },
    {
        id : 6,
        verse : "This poor man cried out, and the LORD heard him, and saved him out of all his troubles.",
        reference : "Psalm 34:6",
        meditation : "The Bible tells us, ‘This poor man cried out, and the LORD heard him, and saved him out of all his troubles.’ This verse shows us that when we cry out to God, no matter how desperate we feel, He hears us. He sees your pain, and He’s already at work to help you.I know it’s hard when things don’t change overnight, but God is faithful. He promises to save us from our troubles, and His timing is always perfect. Keep trusting Him, even when the road seems long.",
        prayer : "Let’s pray: ‘Lord, we cry out to You, knowing that You hear us and care for us. Please bring peace and deliverance in this situation. Help us to trust in Your protection and timing, knowing You will save us from all our troubles. Amen.’"
    },
    {
        id : 7,
        verse : "The righteous cry out, and the LORD hears, and delivers them out of all their troubles. The LORD is near to those who have a broken heart, and saves such as have a contrite spirit.",
        reference : "Psalm 34:17-18",
        meditation : "God hears you. Every time you pray, even when it feels like your prayers are quiet or unsure, He is listening. He never turns away from those who cry out to Him.When your heart is broken, God is even closer to you. He doesn’t leave you to struggle alone—He draws near to comfort and strengthen you. You are never alone in this.",
        prayer : "Let’s pray: ‘Lord, we thank You that You hear us when we cry out to You. Be near in this moment, especially to the brokenhearted. Bring comfort, deliverance, and peace in ways only You can. Help us trust that You are working, even in the midst of trouble. Amen.’"
    },
    {
        id : 8,
        verse : "Many are the afflictions of the righteous, but the LORD delivers him out of them all.",
        reference : "Psalm 34:19",
        meditation : "Challenges and hardships are a natural part of life, even for those who strive to live faithfully. But the key part is God’s promise to deliver us from all those afflictions.It’s hard to wait for God’s answers, but remember that He is always on time. He sees what we can’t and knows exactly when and how to bring deliverance.Think about the times God has come through for you before. Just as He was with you then, He is with you now.",
        prayer : "Heavenly Father,\n" +
            "\n" +
            "We come before You, asking for Your peace and protection over us. Remind us that even though we face many challenges, You are our refuge and will deliver us from all our troubles. Strengthen our faith, help us to trust in Your timing, and surround us with Your love and comfort. We place our hope in Your promises.\n" +
            "\n" +
            "In Jesus’ name,\n" +
            "Amen."
    },
    {
        id : 9,
        verse : "He shall send from heaven and save me; He reproaches the one who would swallow me up. Selah. God shall send forth His mercy and His truth.",
        reference : "Psalm 57:3",
        meditation : "Pray for God’s Intervention: When facing challenges, pray confidently, trusting that God hears from heaven and will send help in His perfect way.\n" +
            "Rest in His Protection: Remind yourself that God is protecting you from all forces that seek to harm you, even when it feels overwhelming.\n" +
            "Cling to His Mercy and Truth: Rely on God’s grace to get through each day and meditate on His Word for guidance and reassurance.\n" +
            "Pause to Reflect: Take time to remember God’s faithfulness in the past and trust Him for the future, even in the middle of your struggles.",
        prayer : "Heavenly Father,\n" +
            "\n" +
            "We trust in Your promise to save us from the challenges we face. Send Your mercy and truth to guide us, and protect us from anything that seeks to overwhelm us. Help us rest in Your presence and trust that You will deliver us in Your perfect time.\n" +
            "\n" +
            "In Jesus' name,\n" +
            "Amen."
    },
    {
        id : 10,
        verse : "He will bring justice to the poor of the people; He will save the children of the needy, and will break in pieces the oppressor.",
        reference : "Psalm 72:4",
        meditation : "Trust in God's Justice: When faced with unfairness or oppression, you can rest in the knowledge that God will bring justice and act on behalf of those who are suffering.\n" +
            "Seek God's Protection: In times of need, believers can look to God as their protector, knowing that He cares deeply for the vulnerable and promises to rescue those in distress.\n" +
            "Act with Compassion: You are called to reflect God's heart for the needy by showing kindness and offering help to those in difficult circumstances.\n" +
            "Stand Against Oppression: This verse also inspires believers to actively stand up against oppression and injustice, both personally and in society.",
        prayer : "Heavenly Father,\n" +
            "\n" +
            "We thank You for being a God of justice and mercy. Please bring justice to those who are oppressed and protect the vulnerable. Save those in need, and break the power of those who seek to harm others. Help us to trust in Your justice and to be Your hands of compassion in the world.\n" +
            "\n" +
            "In Jesus’ name,\n" +
            "Amen."
    },
    {
        id : 11,
        verse : "A thousand may fall at your side, and ten thousand at your right hand; but it shall not come near you.",
        reference : "Psalm 91:7",
        meditation : "The imagery of \"a thousand may fall at your side, and ten thousand at your right hand\" shows that even when chaos, destruction, or danger surrounds a believer, God can keep them safe. In times of crisis—whether that’s a health scare, danger in the workplace, personal struggles, or global challenges like pandemics or natural disasters—this verse reminds Christians to trust that God is their protector.\n" +
            "\n" +
            "It assures believers that while trouble may come close and affect others, God is able to shield them from harm according to His will. This doesn’t mean they are immune to all difficulties, but it affirms that God is in control, and nothing happens outside of His care.",
        prayer : "Heavenly Father,\n" +
            "\n" +
            "Thank You for Your promise of protection. In times of danger and uncertainty, we trust that even if a thousand fall around us, You will keep us safe. Help us to rest in Your presence and find peace in Your sovereignty. Strengthen our faith and remind us that You are always with us, guarding us from harm.\n" +
            "\n" +
            "In Jesus’ name,\n" +
            "Amen."
    },
    {
        id : 12,
        verse : "Though I walk in the midst of trouble, You will revive me; You will stretch out Your hand against the wrath of my enemies, and Your right hand will save me.",
        reference : "Psalm 138:7",
        meditation : ""
    },
    {
        id : 13,
        verse : "He will fulfill the desire of those who fear Him; He also will hear their cry and save them.",
        reference : "Psalm 145:19",
        meditation : ""
    },
    {
        id : 14,
        verse : "The name of the LORD is a strong tower; the righteous run to it and are safe.",
        reference : "Proverbs 18:10",
        meditation : ""
    },
    {
        id : 15,
        verse : "Do not say, ‘I will recompense evil’; wait for the LORD, and He will save you.",
        reference : "Proverbs 20:22",
        meditation : ""
    },
    {
        id : 16,
        verse : "The fear of man brings a snare, but whoever trusts in the LORD shall be safe.",
        reference : "Proverbs 29:25",
        meditation : ""
    },
    {
        id : 17,
        verse : "The LORD is good, a stronghold in the day of trouble; and He knows those who trust in Him.",
        reference : "Nahum 1:7",
        meditation : ""
    },
    {
        id : 18,
        verse : "The LORD your God in your midst, the Mighty One, will save; He will rejoice over you with gladness, He will quiet you with His love, He will rejoice over you with singing.",
        reference : "Zephaniah 3:17",
        meditation : ""
    },
    {
        id : 19,
        verse : "Yet in all these things we are more than conquerors through Him who loved us.",
        reference : "Romans 8:37",
        meditation : ""
    },
    {
        id : 20,
        verse : "We are hard-pressed on every side, yet not crushed; we are perplexed, but not in despair; persecuted, but not forsaken; struck down, but not destroyed.",
        reference : "2 Corinthians 4:8-9",
        meditation : ""
    },
    {
        id : 21,
        verse : "Therefore take up the whole armor of God, that you may be able to withstand in the evil day, and having done all, to stand.",
        reference : "Ephesians 6:13",
        meditation : ""
    },
    {
        id : 22,
        verse : "So we may boldly say: ‘The LORD is my helper; I will not fear. What can man do to me?’",
        reference : "Hebrews 13:6",
        meditation : ""
    }
];

const peaceVerses  = [
    { id: 1, verse: "When a man’s ways please the LORD, He makes even his enemies to be at peace with him.", reference: "Proverbs 16:7" , meditation : ""},
    { id: 2, verse: "You will keep him in perfect peace, whose mind is stayed on You, because he trusts in You.", reference: "Isaiah 26:3" , meditation : ""},
    { id: 3, verse: "Peace I leave with you, My peace I give to you; not as the world gives do I give to you. Let not your heart be troubled, neither let it be afraid.", reference: "John 14:27" , meditation : ""},
    { id: 4, verse: "These things I have spoken to you, that in Me you may have peace. In the world you will have tribulation; but be of good cheer, I have overcome the world.", reference: "John 16:33" , meditation : ""},
    { id: 5, verse: "Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God; and the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus.", reference: "Philippians 4:6-7" , meditation : ""},
    { id: 6, verse: "I will give peace in the land, and you shall lie down, and none will make you afraid; I will rid the land of evil beasts, and the sword will not go through your land.", reference: "Leviticus 26:6" , meditation : ""},
    { id: 7, verse: "The LORD lift up His countenance upon you, and give you peace.", reference: "Numbers 6:26" , meditation : ""},
    { id: 8, verse: "I will both lie down in peace, and sleep; for You alone, O LORD, make me dwell in safety.", reference: "Psalm 4:8" , meditation : ""},
    { id: 9, verse: "But the meek shall inherit the earth, and shall delight themselves in the abundance of peace.", reference: "Psalm 37:11" , meditation : ""},
    { id: 10, verse: "He has redeemed my soul in peace from the battle that was against me, for there were many against me.", reference: "Psalm 55:18" , meditation : ""},
    { id: 11, verse: "Mercy and truth have met together; righteousness and peace have kissed.", reference: "Psalm 85:10" , meditation : ""},
    { id: 12, verse: "Great peace have those who love Your law, and nothing causes them to stumble.", reference: "Psalm 119:165" , meditation : ""},
    { id: 13, verse: "For length of days and long life and peace they will add to you.", reference: "Proverbs 3:2" , meditation : ""},
    { id: 14, verse: "For unto us a Child is born, unto us a Son is given; and the government will be upon His shoulder. And His name will be called Wonderful, Counselor, Mighty God, Everlasting Father, Prince of Peace. Of the increase of His government and peace there will be no end, upon the throne of David and over His kingdom, to order it and establish it with judgment and justice from that time forward, even forever. The zeal of the LORD of hosts will perform this.", reference: "Isaiah 9:6-7" , meditation : ""},
    { id: 15, verse: "The work of righteousness will be peace, and the effect of righteousness, quietness and assurance forever.", reference: "Isaiah 32:17" , meditation : ""},
    { id: 16, verse: "How beautiful upon the mountains are the feet of him who brings good news, who proclaims peace, who brings glad tidings of good things, who proclaims salvation, who says to Zion, ‘Your God reigns!’", reference: "Isaiah 52:7" , meditation : ""},
    { id: 17, verse: "All your children shall be taught by the LORD, and great shall be the peace of your children.", reference: "Isaiah 54:13" , meditation : ""},
    { id: 18, verse: "For you shall go out with joy, and be led out with peace; the mountains and the hills shall break forth into singing before you, and all the trees of the field shall clap their hands.", reference: "Isaiah 55:12" , meditation : ""},
    { id: 19, verse: "For I know the thoughts that I think toward you, says the LORD, thoughts of peace and not of evil, to give you a future and a hope.", reference: "Jeremiah 29:11" , meditation : ""},
    { id: 20, verse: "Behold, I will bring it health and healing; I will heal them and reveal to them the abundance of peace and truth.", reference: "Jeremiah 33:6" , meditation : ""},
    { id: 21, verse: "Then He arose and rebuked the wind, and said to the sea, ‘Peace, be still!’ And the wind ceased and there was a great calm.", reference: "Mark 4:39" , meditation : ""},
    { id: 22, verse: "To give light to those who sit in darkness and the shadow of death, to guide our feet into the way of peace.", reference: "Luke 1:79" , meditation : ""},
    { id: 23, verse: "Therefore, having been justified by faith, we have peace with God through our Lord Jesus Christ.", reference: "Romans 5:1" , meditation : ""},
    { id: 24, verse: "For to be carnally minded is death, but to be spiritually minded is life and peace.", reference: "Romans 8:6" , meditation : ""},
    { id: 25, verse: "For the kingdom of God is not eating and drinking, but righteousness and peace and joy in the Holy Spirit.", reference: "Romans 14:17" , meditation : ""},
    { id: 26, verse: "And the God of peace will crush Satan under your feet shortly. The grace of our Lord Jesus Christ be with you. Amen.", reference: "Romans 16:20" , meditation : ""},
    { id: 27, verse: "For God is not the author of confusion but of peace, as in all the churches of the saints.", reference: "1 Corinthians 14:33" , meditation : ""},
    { id: 28, verse: "Finally, brethren, farewell. Become complete. Be of good comfort, be of one mind, live in peace; and the God of love and peace will be with you.", reference: "2 Corinthians 13:11" , meditation : ""},
    { id: 29, verse: "But the fruit of the Spirit is love, joy, peace, longsuffering, kindness, goodness, faithfulness.", reference: "Galatians 5:22" , meditation : ""},
    { id: 30, verse: "For He Himself is our peace, who has made both one, and has broken down the middle wall of separation.", reference: "Ephesians 2:14" , meditation : ""},
    { id: 31, verse: "Endeavoring to keep the unity of the Spirit in the bond of peace.", reference: "Ephesians 4:3" , meditation : ""},
    { id: 32, verse: "And having shod your feet with the preparation of the gospel of peace.", reference: "Ephesians 6:15" , meditation : ""},
    { id: 33, verse: "And let the peace of God rule in your hearts, to which also you were called in one body; and be thankful.", reference: "Colossians 3:15" , meditation : ""},
    { id: 34, verse: "Now may the God of peace Himself sanctify you completely; and may your whole spirit, soul, and body be preserved blameless at the coming of our Lord Jesus Christ.", reference: "1 Thessalonians 5:23" , meditation : ""},
    { id: 35, verse: "Now may the Lord of peace Himself give you peace always in every way. The Lord be with you all.", reference: "2 Thessalonians 3:16" , meditation : ""},
    { id: 36, verse: "Now the fruit of righteousness is sown in peace by those who make peace.", reference: "James 3:18" , meditation : ""}
];

const strengthVerses = [
    { id: 1, verse: "The LORD is my light and my salvation; whom shall I fear? The LORD is the strength of my life; of whom shall I be afraid?", reference: "Psalm 27:1" , meditation : ""},
    { id: 2, verse: "But the salvation of the righteous is from the LORD; He is their strength in time of trouble.", reference: "Psalm 37:39" , meditation : ""},
    { id: 3, verse: "In the day when I cried out, You answered me, and made me bold with strength in my soul.", reference: "Psalm 138:3" , meditation : ""},
    { id: 4, verse: "But Jesus looked at them and said to them, ‘With men this is impossible, but with God all things are possible.’", reference: "Matthew 19:26" , meditation : ""},
    { id: 5, verse: "Therefore we do not lose heart. Even though our outward man is perishing, yet the inward man is being renewed day by day.", reference: "2 Corinthians 4:16" , meditation : ""},
    { id: 6, verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" , meditation : ""},
    { id: 7, verse: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.", reference: "2 Timothy 1:7" , meditation : ""},
    { id: 8, verse: "Out of the mouth of babes and nursing infants You have ordained strength, because of Your enemies, that You may silence the enemy and the avenger.", reference: "Psalm 8:2" , meditation : ""},
    { id: 9, verse: "I will love You, O LORD, my strength. The LORD is my rock and my fortress and my deliverer; my God, my strength, in whom I will trust; my shield and the horn of my salvation, my stronghold.", reference: "Psalm 18:1-2" , meditation : ""},
    { id: 10, verse: "It is God who arms me with strength, and makes my way perfect.", reference: "Psalm 18:32" , meditation : ""},
    { id: 11, verse: "Let the words of my mouth and the meditation of my heart be acceptable in Your sight, O LORD, my strength and my Redeemer.", reference: "Psalm 19:14" , meditation : ""},
    { id: 12, verse: "But You, O LORD, do not be far from Me; O My Strength, hasten to help Me!", reference: "Psalm 22:19" , meditation : ""},
    { id: 13, verse: "The LORD is my strength and my shield; my heart trusted in Him, and I am helped; therefore my heart greatly rejoices, and with my song I will praise Him. The LORD is their strength, and He is the saving refuge of His anointed.", reference: "Psalm 28:7-8" , meditation : ""},
    { id: 14, verse: "The LORD will give strength to His people; the LORD will bless His people with peace.", reference: "Psalm 29:11" , meditation : ""},
    { id: 15, verse: "God is our refuge and strength, a very present help in trouble.", reference: "Psalm 46:1" , meditation : ""},
    { id: 16, verse: "Save me, O God, by Your name, and vindicate me by Your strength.", reference: "Psalm 54:1" , meditation : ""},
    { id: 17, verse: "Who established the mountains by His strength, being clothed with power.", reference: "Psalm 65:6" , meditation : ""},
    { id: 18, verse: "I will go in the strength of the Lord GOD; I will make mention of Your righteousness, of Yours only.", reference: "Psalm 71:16" , meditation : ""},
    { id: 19, verse: "My flesh and my heart fail; but God is the strength of my heart and my portion forever.", reference: "Psalm 73:26" , meditation : ""},
    { id: 20, verse: "The LORD is my strength and song, and He has become my salvation.", reference: "Psalm 118:14" , meditation : ""},
    { id: 21, verse: "The LORD is my strength and song, and He has become my salvation; He is my God, and I will praise Him; my father’s God, and I will exalt Him.", reference: "Exodus 15:2" , meditation : ""},
    { id: 22, verse: "The God of my strength, in whom I will trust; my shield and the horn of my salvation, my stronghold and my refuge; my Savior, You save me from violence.", reference: "2 Samuel 22:3" , meditation : ""},
    { id: 23, verse: "Seek the LORD and His strength; seek His face evermore!", reference: "1 Chronicles 16:11" , meditation : ""},
    { id: 24, verse: "Both riches and honor come from You, and You reign over all. In Your hand is power and might; in Your hand it is to make great and to give strength to all.", reference: "1 Chronicles 29:12" , meditation : ""},
    { id: 25, verse: "Then he said to them, ‘Go your way, eat the fat, drink the sweet, and send portions to those for whom nothing is prepared; for this day is holy to our Lord. Do not sorrow, for the joy of the LORD is your strength.’", reference: "Nehemiah 8:10" , meditation : ""},
    { id: 26, verse: "Behold, God is my salvation, I will trust and not be afraid; ‘For YAH, the LORD, is my strength and song; He also has become my salvation.’", reference: "Isaiah 12:2" , meditation : ""},
    { id: 27, verse: "For You have been a strength to the poor, a strength to the needy in his distress, a refuge from the storm, a shade from the heat; for the blast of the terrible ones is as a storm against the wall.", reference: "Isaiah 25:4" , meditation : ""},
    { id: 28, verse: "He gives power to the weak, and to those who have no might He increases strength. … But those who wait on the LORD shall renew their strength; they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint.", reference: "Isaiah 40:29, 31" , meditation : ""},
    { id: 29, verse: "Fear not, for I am with you; be not dismayed, for I am your God. I will strengthen you, yes, I will help you, I will uphold you with My righteous right hand.", reference: "Isaiah 41:10" , meditation : ""},
    { id: 30, verse: "Ah, Lord GOD! Behold, You have made the heavens and the earth by Your great power and outstretched arm. There is nothing too hard for You.", reference: "Jeremiah 32:17" , meditation : ""},
    { id: 31, verse: "The LORD God is my strength; He will make my feet like deer’s feet, and He will make me walk on my high hills.", reference: "Habakkuk 3:19" , meditation : ""},
    { id: 32, verse: "‘Not by might nor by power, but by My Spirit,’ says the LORD of hosts.", reference: "Zechariah 4:6" , meditation : ""},
    { id: 33, verse: "But you shall receive power when the Holy Spirit has come upon you; and you shall be witnesses to Me in Jerusalem, and in all Judea and Samaria, and to the end of the earth.", reference: "Acts 1:8" , meditation : ""},
    { id: 34, verse: "That He would grant you, according to the riches of His glory, to be strengthened with might through His Spirit in the inner man.", reference: "Ephesians 3:16" , meditation : ""},
    { id: 35, verse: "Now to Him who is able to do exceedingly abundantly above all that we ask or think, according to the power that works in us, to Him be the glory in the church by Christ Jesus to all generations, forever and ever. Amen.", reference: "Ephesians 3:20-21" , meditation : ""},
    { id: 36, verse: "Finally, my brethren, be strong in the Lord and in the power of His might.", reference: "Ephesians 6:10" , meditation : ""},
    { id: 37, verse: "But the Lord is faithful, who will establish you and guard you from the evil one.", reference: "2 Thessalonians 3:3" , meditation : ""}
];

const hopeVerses = [
    { id: 1, verse: "Therefore my heart is glad, and my glory rejoices; my flesh also will rest in hope.", reference: "Psalm 16:9" , meditation : ""},
    { id: 2, verse: "You are my hiding place and my shield; I hope in Your word.", reference: "Psalm 119:114" , meditation : ""},
    { id: 3, verse: "O Israel, hope in the LORD; for with the LORD there is mercy, and with Him is abundant redemption.", reference: "Psalm 130:7" , meditation : ""},
    { id: 4, verse: "The LORD takes pleasure in those who fear Him, in those who hope in His mercy.", reference: "Psalm 147:11" , meditation : ""},
    { id: 5, verse: "For surely there is a hereafter, and your hope will not be cut off.", reference: "Proverbs 23:18" , meditation : ""},
    { id: 6, verse: "Of the increase of His government and peace there will be no end, upon the throne of David and over His kingdom, to order it and establish it with judgment and justice from that time forward, even forever more. The zeal of the Lord of hosts will perform this.", reference: "Isaiah 9:7" , meditation : ""},
    { id: 7, verse: "They shall not hurt nor destroy in all My holy mountain, for the earth shall be full of the knowledge of the LORD as the waters cover the sea.", reference: "Isaiah 11:9" , meditation : ""},
    { id: 8, verse: "Blessed is the man who trusts in the LORD, and whose hope is the LORD.", reference: "Jeremiah 17:7" , meditation : ""},
    { id: 9, verse: "For I know the thoughts that I think toward you, says the LORD, thoughts of peace and not of evil, to give you a future and a hope.", reference: "Jeremiah 29:11" , meditation : ""},
    { id: 10, verse: "'The LORD is my portion,' says my soul, 'therefore I hope in Him!'", reference: "Lamentations 3:24" , meditation : ""},
    { id: 11, verse: "And in the days of these kings the God of heaven will set up a kingdom which shall never be destroyed; and the kingdom shall not be left to other people; it shall break in pieces and consume all these kingdoms, and it shall stand forever.", reference: "Daniel 2:44" , meditation : ""},
    { id: 12, verse: "Those who are wise shall shine like the brightness of the firmament, and those who turn many to righteousness like the stars forever and ever.", reference: "Daniel 12:3" , meditation : ""},
    { id: 13, verse: "But everyone shall sit under his vine and under his fig tree, and no one shall make them afraid; for the mouth of the LORD of hosts has spoken.", reference: "Micah 4:4" , meditation : ""},
    { id: 14, verse: "The LORD your God in your midst, the Mighty One, will save; He will rejoice over you with gladness, He will quiet you with His love, He will rejoice over you with singing.", reference: "Zephaniah 3:17" , meditation : ""},
    { id: 15, verse: "Then those who feared the LORD spoke to one another, and the LORD listened and heard them; so a book of remembrance was written before Him for those who fear the LORD and who meditate on His name.", reference: "Malachi 3:16" , meditation : ""},
    { id: 16, verse: "His lord said to him, ‘Well done, good and faithful servant; you were faithful over a few things, I will make you ruler over many things. Enter into the joy of your lord.'", reference: "Matthew 25:21" , meditation : ""},
    { id: 17, verse: "Now hope does not disappoint, because the love of God has been poured out in our hearts by the Holy Spirit which was given to us.", reference: "Romans 5:5" , meditation : ""},
    { id: 18, verse: "Rejoicing in hope, patient in tribulation, continuing steadfastly in prayer.", reference: "Romans 12:12" , meditation : ""},
    { id: 19, verse: "For whatever things were written before were written for our learning, that we through the patience and comfort of the Scriptures might have hope.", reference: "Romans 15:4" , meditation : ""},
    { id: 20, verse: "Now may the God of hope fill you with all joy and peace in believing, that you may abound in hope by the power of the Holy Spirit.", reference: "Romans 15:13" , meditation : ""},
    { id: 21, verse: "Eye has not seen, nor ear heard, nor have entered into the heart of man the things which God has prepared for those who love Him.", reference: "1 Corinthians 2:9" , meditation : ""},
    { id: 22, verse: "The eyes of your understanding being enlightened; that you may know what is the hope of His calling, what are the riches of the glory of His inheritance in the saints.", reference: "Ephesians 1:18" , meditation : ""},
    { id: 23, verse: "To them God willed to make known what are the riches of the glory of this mystery among the Gentiles: which is Christ in you, the hope of glory.", reference: "Colossians 1:27" , meditation : ""},
    { id: 24, verse: "But let us who are of the day be sober, putting on the breastplate of faith and love, and as a helmet the hope of salvation.", reference: "1 Thessalonians 5:8" , meditation : ""},
    { id: 25, verse: "In hope of eternal life which God, who cannot lie, promised before time began.", reference: "Titus 1:2" , meditation : ""},
    { id: 26, verse: "Looking for the blessed hope and glorious appearing of our great God and Savior Jesus Christ.", reference: "Titus 2:13" , meditation : ""},
    { id: 27, verse: "Therefore, brethren, be even more diligent to make your call and election sure, for if you do these things you will never stumble; for so an entrance will be supplied to you abundantly into the everlasting kingdom of our Lord and Savior Jesus Christ.", reference: "2 Peter 1:10-11" , meditation : ""},
    { id: 28, verse: "Beloved, now we are children of God; and it has not yet been revealed what we shall be, but we know that when He is revealed, we shall be like Him, for we shall see Him as He is.", reference: "1 John 3:2" , meditation : ""},
    { id: 29, verse: "And everyone who has this hope in Him purifies himself, just as He is pure.", reference: "1 John 3:3" , meditation : ""},
    { id: 30, verse: "And God will wipe away every tear from their eyes; there shall be no more death, nor sorrow, nor crying. There shall be no more pain, for the former things have passed away.", reference: "Revelation 21:4" , meditation : ""}
];
