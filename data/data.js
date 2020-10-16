export default [
    {
        id: 'beywichRoad',
        title: 'Hitting the Road Again',
        map: {
            top: '89%',
            left: '44%'
        },
        image: 'monsters.jpg',
        description: `
        You set off onto the main road, Beywich Road which you hear gets a lots of bandits 
        but you do want to go to to Testead you get supplies so you start hitting the road again.
        A while into traveling you meet a little orphan girl on the side of the road. What do you do?
    `,
        choices: [{
            id: 'ignore',
            description: 'Ignore the Girl because nobody has time for that',
            result: `
            You seeing the girl there all hungry looking, but you're on a quest to reach the king.
            You say to yourself I don't have time for this and straight up leave her to die alone in a ditch you heartless monster that you are.
            You have -2 Karma.
        `,
            hp: 0,
            gold: 0,
            karma: -2
        }, {
            id: 'seeWhatsWrong',
            description: 'You up to the girl to see what\'s up with her!',
            result: `
            You being not a heartless cold blooded monster you are, you decide to see if the girl is alright.
            You go up to the girl and see that she has her arms in a cloak but is breathing quite heavily.
            You ask her what is wrong but she stays quiet.
            You get in closer.
            And closer.
            You  came into quite possibly an arms length from the girl smell the faint stench of blood.
            You have a bad feeling that this girl was involved in something.
            While in deep thought the girl gets up from her crouch position and ran straight into you.
            You look down and see that you got stabbed. Cool! She also took some of your gold FUN!
            You lose -20 hp and 20 Gold.
        `,
            hp: -20,
            gold: -20,
            karma: +3
        }, {
            id: 'stealFromOrphan',
            description: 'Steal From Orphan',
            result: `
            You have the bright idea! If You are to become the hero which would get the king.
            You'll need money to finance your spending.
            She seems like and easy target and no one is around. 
            You add two and two together and went up and pickpocketed the orphan like the greedy person you are.
            You have +3 Gold and -8 Karma

        `,
            hp: 0,
            gold: 3,
            karma: -8
        }]
    },
    {
        id: 'loadUp',
        title: 'Load Up On Supplies first',
        map: {
            top: '17%',
            left: '37%'
        },
        image: 'dragon.jpg',
        audio: 'dragon.wav',
        action: 'dragon-growl.aiff',
        description: `
        After traveling through Beywich Road, you arrived at the smaller city outside of Testead, There you can see hundreds of people. What Do You Do?
    `,
        choices: [{
            id: 'goToPub',
            description: 'Gimme a drink',
            result: `
            You had the bright idea to go to the pub even though its only 9am. Suprisinly the pub is acutally packed.
            You go up to the bar and order your favorite drink, Spicy Water. Drinking it was delightful but you fear for what will come after consuming this.
            You have -1 Hp and -3 gold.
        `,
            hp: -1,
            gold: -3,
            karma: 0
        }, {
            id: 'stealingFromStrangers',
            description: 'Steal From Strangers!',
            result: `
            You being the kleptomanicac that you are, goes and tries to steal. It worked out. Wait It worked out? That's not right this should be where you die?!?!?
            You have +35 gold and -3 karma.
        `,
            hp: 0,
            gold: 35,
            karma: -3
        }, {
            id: 'getFood',
            description: 'Become a food critic!',
            result: `
            Inspired by the legend of Rordon Gamsey the chef, you notice a
            food stand by the wall in a secluded alley way. You smell that it seem at least edible so you went up to the stand.
            You read that they are only serving free samples of a weird looking cheese.
            You eat that cheese because like lets face it, you like free stuff.
            It tasted horrible and then you had the urge to channel your inner RORDAN GAMSEY and you belittle the sweet old babuska.
            You make her so sad that you hated the cheese so much she gave you her all her money she made from donations and packed up her things and ran away crying.
            You are a monster and should feel bad.
            You have +4 gold -13 Karma you evil person.
        `,
            hp: 0,
            gold: 4,
            karma: -13
        }]
    },
    {
        id: 'Ignore everything and run straight for no reason',
        title: 'This is the way, if you don\'t click this you are a fool!',
        map: {
            top: '31%',
            left: '5%'
        },
        image: 'treasure-chests.png',
        audio: 'treasure-chests.wav',
        action: 'chest-opening.wav',
        description: `
        You have the sudden urge to run, not even knowing what direction to go in just like Forest Gump,
    `,
        choices: [{
            id: 'keepErGoing',
            description: 'Gotta Keep ERrrr Going!',
            result: 'Ignoring all the pain, all the hunger, all those people seeing a strange person running through. You fall down from seems like death. You have -30 hp and -30 Gold',
            hp: -30,
            gold: -30,
            karma: 0
        }, {
            id: 'reThink',
            description: 'Rethink Life',
            result: 'You thought about why you wanted to run, why you wanted to go on this journey, why you even should suffer for this when suffereing is all around you, no one from the rich to the poor can not get away from suffering, suffering can go in all sorts of forms. Yet we all share common trait of dying at the end, trait of suffering, trait of green. You don\'t care anymore. You have speedrunned getting enlightened in a very weird and fake way. You have gained infinite Karma.',
            hp: 0,
            gold: 0,
            karma: +1000000
        }, {
            id: 'stranger',
            description: 'Seeing a stranger!',
            result: 'You see a stranger in a dark clothing from head to toe. You feel that the stranger is pulling onto you somehow. You get closer and closer to the stranger. You start seeing a face, from under the hood you start seeing lips that are curled up, nose that looked a little deformed. eyes that are glowing like fire. At this point you finally realize that the persons size was massive. You finally added it together, That was the King. He has some sort of voodoo magic hoppity do hah type stuff and is making you under his control. You start the fall unconcoiuss. You wake up what seems like couple of seconds later but you look and you see you are back at Alchemity and everything was on fire, things chopped up, bodies everywhere. You look down and see you child. Your child had gotten stabbed. A special knife with an engraving on it lodged in your child\'s chest. You reconize the knife, its the one that you always had in you back left pocket. The knife had a special enchantment that made it so you are the only one that can wield it. Like some sort of bootleg knife Mojnir. YOout think the unthinkable. You feel dread, you see your arms are covered in blood, what looks like tear marks are on your chest. you add everything together and you came to the conclution you didnt want to be true.',
            hp: -16,
            gold: +90,
            karma: - 100000000000
        }]
    }
]; 




// You can go from one thing to another
// {
//     id: 'Ignore everything and run straight for no reason',
//     title: 'This is the way, if you don\'t click this you are a fool!',
//     map: {
//         top: '31%',
//         left: '5%'
//     },
//     prerequisites: ['dragon', 'monsters'],
//     image: 'treasure-chests.png',
//     audio: 'treasure-chests.wav',
//     action: 'chest-opening.wav',
//     description: `
//     As you enter the quest chamber you notice three chests before you.
//     Just as you start to imagine the wealth, you see a giant serpent
//     emerge from the back of the chamber. You'll need to make a run for it,
//     but you have time to open one chest before you take off. Which one 
//     do you choose?
// `,
//     choices: [{
//         id: 'wooden',
//         description: 'A Wooden Chest',
//         result: 'You grab 40 gold pieces!',
//         hp: 0,
//         gold: 40
//     }, {
//         id: 'golden',
//         description: 'A Golden Chest',
//         result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
//         hp: -50,
//         gold: 0
//     }, {
//         id: 'jeweled',
//         description: 'A Jeweled Chest',
//         result: 'A warm light engulfs you and you gain 35 hp',
//         hp: 35,
//         gold: 0
//     }]
// }




