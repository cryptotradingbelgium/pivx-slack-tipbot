'use strict';

const tipbotTxt = {
// HELPTEXT
    'helpText': [
//'title':
        '* CryptoBeleggers` tippy : Een overzicht van mogelijke functies* \n',

//'help_balance':
        '*balance*\t\tVraag de huidige balans van je PivX portefeuille.\n' +
'> vb:\t\t\t`@tippy wat is mijn balance`',

//'help_send':
        '*send*\t\t\tVerstuur een aantal munten naar een gebruiker die het verdient heeft! (_Aliassen:_ `give` en `tip`)\n' +
'> vb:\t\t\t`@tippy send 0.1 PIV naar @someone` \n',

// 'help_deposit':
        '*deposit*\t\tVraag het huidige adress van je portefeuille\n> vb:\t\t\t `@tippy waarheen stuur ik mijn deposit?`',

// 'help_withdraw':
        '*withdraw*\t\tStuur (een deel van)  je fondsen naar een andere (jouw eigen) portefuille.\n' +
'> vb:\t\t\t`@tippy withdraw 1 PIV naar D8Sf2wpaMyarjCbnwqskXaGAS6jwKSBA1B`',

// 'help_price':
        '*price*\t\t\t\tWat zou de huidige prijs van PIVX zijn? (Info via Coinmarketcap)\n' +
'> vb:\t\t\t`@tippy wat is de huidige price in USD?`'
    ],
    'helpAdminOnly':
'===== *ENKEL VOOR ADMINS* =====\n' +
'*emergency restart*\tHerstarten van de Slack connectie van de bot. *Gebruik enkel in noodgevallen*\n'+
'*balance all*\tToon de balans van alle portefeuilles\n' +
'*balance check <username>*\tToons te balans van een specifieke gebruiker.\n' +
'> vb:\t\t`@tippy balance check @amnesiacu` \n' +
'*whisper*\tVerstuur een privat bericht naar een gebruiker als tippy.\n' +
'> vb:\t\t`@tippy whisper @amnesiacu Braaf zijn eh!`\n' +
'\n' 
,

    'tx_fee': 'De transactie kost (Tx Fee) staat op ',
    'HelpRandom1': 'Ziehier een voorbeeld van een van mijn commandos. Type "@tippy help" om de volledige lijst te zien.',
// NEW USER
    'WarningNewUser1': 'Hey, ',
    'WarningNewUser2': '. Welkom bij  CryptoBeleggers. Kijk gerust rond, er zijn kanalen voor iedere gelegenheid. Gelieve ook een avatar te kiezen.\nUit veiligheidsoverwegingen raden we gebruikers aan niet hun (volledige) echte naam in hun Slack profiel te zetten.\nVoor hulp m.b.t mijn mogelijke commandos type `@tippy help`!',
// USER LEFT
    'WarnUserLeft1': 'Gebruiker ',
    'WarnUserLeft2': ' heeft het slack team verlaten. Denk aan zijn/haar portefeuille.',
// ALL BALANCES
    'RetrievingAllBalancesDisabled': 'Ophalen van alle balansen is uitgeschakeld.',
    'RetrievingAllBalancesAdminOnly': 'Alleen admins kunnen alle balansen zien.',
    'RetrievingAllBalancesWait': 'Ophalen van alle portefeuilles... Dit kan even duren - afh van aantal gebruikers!',
// CHECK BALANCE
    'CheckBalanceDisabled': 'Checking balance of an other user is disabled!',
    'CheckBalanceAdminOnly': 'Only admins can check other balances!',
    'CheckBalanceNoUserFound': 'No user found to check. Did you use the prefix @ ?',
// GENERAL
    'NoAmountFound': ' couldn\'t\'t find the amount. Did you forget the decimal ?',
    'NoValidAddress': ' that\'s not a valid address!',
    'MoreThen1Address': ' I can\'t do a withdraw to more than 1 address',
    'NoAddress': ' I need to know an address to withdraw to.',
    'NoAmountOrCurrency': ' I need to know much you want to withdraw and the currency.',
    'UnsupportedCurrency': ': we don\'t support that currency yet!',
    'InvalidAmount': ': that\'s an invalid amount',
// WITHDRAW
    'WithdrawQuestion': ['You want to withdraw ', ' to ', '.\n Is this correct (yes/no) ?'],
// SEND
    'Hello': 'Hello there ',
    'NoUserFoundForTip': ', I didn\'t catch the user you want to tip. You surely didn\'t want to tip yourself, did you ?',
    'SendMessageUsed': '\nThis message what used to send the tip : \n',
// REQUEST
    'RequestingDisabled': 'Requesting coins is disabled!',
// MENTIONS MULTIPLE USERS
    'ToMuchUsers': ' but you\'re mentioning too many people!',
// CONVERT
    'NotEnoughCurrencies': ': not enough currencies!',
    'ToMuchCurrencies': ': too many currencies!',

// PRICE
    'PriceBase': '1 PIV is ',
    'PriceInfoFrom': ' (price of coinmarketcap)',
    'LocationOfPriceList1': 'Hi, I\'ve posted the price information in the #',
    'LocationOfPriceList2': ' channel to prevent a lot of text in the other channels.',

// CURRENCIES
    'CurrenciesTitle': 'Price info from coinmarketcap \n',
    'SupportedCurrenciesFull': 'Supported currencies: ',
    'SupportedSymbols': 'use these currency abbreviations/symbols in your message: *',
    'SupportedBase': 'And does it need saying: *PIVX* is supported !',

// // RAIN
    'RainReplacedBySun': 'Really you want rain? It\'s summertime ! _sorry southern hemisphere_ \n ' +
'You want *sun* my dear human friend.',

//'RainThreshold': 'Rain threshold is: ',
// 'RainThresholdNotSet': 'Dear Rain God, the rain threshold isn\'t set yet. \n You can do that with the *rain threshold _amount_* command.',
// 'Rainimminent': ':cloud: :cloud: :cloud: \n _When will those clouds all disappear?_ Will it rain soon? \n:cloud: :cloud: :cloud:',
// 'RainTimer': ' It will rain random in the next *',
// 'RainTimerUnit': ' minute(s)* ',
// 'RainTimerNotSet': 'Dear Rain God, the rain timer not set yet.\n You can do that with the *rain timer _minutes_* command.',
// 'RainAvailibleAmount': 'Available rain : ',
// 'RainPerUserNow': 'If you let it rain *now* ',
// 'RainDropSizeWithThreshold': 'If you wait for the rain *threshold* of ',
// 'RainPerUser1': ' raindrops of ',
// 'RainPerUser2': ' pivx would fall',
// 'RainClouds': ':rain_cloud: :rain_cloud: :rain_cloud:',
// 'RainNow': '*And the Pivx Rain Gods said _LET IT RAIN PIVX_* \n' +
// '_Each current online user will get a raindrop of_',
// 'RainCannotFindRainAccount1': 'Could not find the Rain user : '*',
// 'RainCannotFindRainAccount2': '*' \n Ask the Slack Admin(s) if the Rain feature is correctly setup.',
// 'RainCannotFindRainBalance': 'Could not find the Rain balance for ',
// 'RainReqDonation1': 'If you feel generous tip the_@',
// 'RainReqDonation2': '_ user.\nThe complete balance of this Rain user will be redistributed via raindrops.',
// 'RainEmpty': 'Not a cloud in the sky, not rain available to fall down.',
// 'RainRecieved': ':droplet: \n You got splashed with a Pivx raindrop of ',

// SUN
    'SunThreshold1': 'Sun threshold is: ',
    'SunThreshold2': 'Sun will shine and distribute sunrays when sun balance is more then the set threshold.',
    'SunThresholdNotSet': 'Dear PIVX God, the Sun threshold isn\'t set yet. \n' +
' You can do that with the *sun threshold _amount_* command.',
// 'SunTimer': 'Sunshine will be checked every *',
// 'SunTimerUnit': ' minute(s)*',
// 'SunTimerNotSet': 'Dear Pivx God, the sun timer is not set yet.\n' +
// ' You can do that with the *sun timer _minutes_* command.',
    'SunAvailibleAmount': 'Available sunrays: ',
    'SunExplain': 'Each user that has tipped an other user will receive a _sunray_ from the sun fund.',
    'SunAmountEligibleUsers': ' users are at the moment eligible for a sunray.',
    'SunRay': ':sunny: :sunny: :sunny:',
    'SunCannotFindSunAccount1': 'Could not find the Sun user : \'*',
    'SunCannotFindSunAccount2': '*\' \n Ask the Slack Admin(s) if the Sun feature is correctly setup.',
    'SunCannotFindSunBalance': 'Could not find the Sun balance for ',
    'SunReqDonation1': 'If you feel generous tip_@',
    'SunReqDonation2': 'The complete balance of _@',
    'SunReqDonation3': '_ will be redistributed as _sunrays_ (aka free PIV).',
    'SunEmpty': ':sun_behind_cloud:no sunrays available to cast. :disappointed:',
    'SunRecieved': 'As reward of tipping your fellow PIVX user(s) you received a sunray of ',
    'SunEligibleUsersList': '*These users have tipped* \n',
    'SunErrorResettingCounter': 'Error cannot reset counts. Inform the admin.',
    'SunCountIsReset': 'All tip count records are removed.',

//QUIZ
    'QuizAddQuestion': 'Enter your new question.',
    'QuizAddAnOtherQuestion': 'Will you add an other question (yes/no) ?',
    'QuizAddAnser': 'Enter the answer to your question.',
    'QuizConfirmNewQA': 'Is this the correct question and answer (yes/no) ?',
    'QuizSavedToDb': 'Ok, I\'ve saved your new question, a moderator will review it and set an appropriate bounty.',
    'QuizAbortedSaving': 'Ok, I will ignore that question.',
    'QuizListQuestions': '*I know about this questions:* \n',
    'QuizListReward_1' : '\tReward',
    'QuizListReward_2' : ' points.',
    'QuizQ' : 'Q: ',
    'QuizA' : 'A: ',
    'QuizDeleteQuestion': 'To delete a question: *quiz delete _question number_*',
    'QuizChangeReward': 'To change the reward of a question: *quiz reward _question number_*',
    'QuizNoQAnumber': 'I didn\'t find the question number',
    'QuizDeleteNOK': 'I couldn\'t delete question ',
    'QuizDeleteOk': 'Question is removed',

    'QuizAnswerCorrect': 'Super ! You got that correct.',
    'QuizAnswerWrong': 'Bummer, that was close but still wrong.\nRety plz.',

    'QuizNoQuestionsYet': 'There aren\'t any question yet. Why don\'t you add one now?',

    'QuizReview_1': 'This question don\'t have a reward set:\n',
    'QuizReview_2': 'Use *quiz reward _question number_* to set a reward.',
    'QuizRewardQuestion_1': 'To approve a question set a reward with * @' ,
    'QuizRewardQuestion_2' : ' quiz reward _question number_ *',
    'QuizUnreviewed': '*This are the question that need to be reviewed*:\n',
    'QuizSetReward': 'What should the reward be for this question ?',
    'QuizSetRewardNoAmountFound': 'Cannot find the reward amount !',
    'QuizSetRewardOk': 'Reward set, thanks for reviewing this question.',

    'QuizErrorStarting': 'Sorry cannot start a quiz because: ',

    'QuizStarted1': 'A quiz has started !',
    'QuizStarted2': 'Go to the ',
    'QuizStarted3': ' channel to participate.',

    'QuizEnded': 'The quiz has ended. \nScoreboard :\n',
// 'QuizShowCorrectAnswers': 'These where the questions and correct answers: \n',
    'QuizAborted': 'The quiz has been aborted.',
    'QuizAskQuestion1': '*To answer say: @',
    'QuizAskQuestion2': ' quiz answer _your answer_*',
    'QuizScored' : ' scored ',
    'QuizThanks': 'Thanks for participating !',

// OOPS
    'Oops': 'Use the *help* command to see the valid options.',
    'NoCommandFound': [
        'Remember it\'s never the machine it\'s always the operator. Check your syntax and try again.',
        'Of course, this error isn\'t your fault. Maybe you should consider buying a new keyboard.',
        'Ker chunk, ker chunk,,,blaaahhhh.Ran out of gas.Try again.',
        'What was that?Can you hear me now?Nope.Try again.',
        'Wa wa wa wa wak wak. Game over Pac Man. Try again.',
        'You\'ve lost the battle but you can win the war. Try again!',
        'What language is that?That makes no sense to me.',
        'Stop collaborate and listen, ice is back with a brand new invention....but not with that syntax.',
        'Syntax Error. That\'s all I am going to say about that.',
        'Gibberish is not accepted.English please.',
        'You talking to me? Try again.'
    ],

    'ERRORreadingDb': 'ERROR reading db:'
};

const quizTxt = {
    'alreadyRunning' : 'Already in a quiz',
    'notStarted_noApprovedQ' :'Cannot start a quiz because there are no (approved) questions.\nCheck with the _quiz list_ command.',
    'done': 'All questions in this quiz are answered.',
    'notRunning':'Quiz isn\'t running at the moment',
    'alreadyAnswered' : ' ,you already tried to answer this question, let the others have a try.'
};

const userTxt = {
// GENERAL
    'Locked': ' , sorry you\re already doing a transaction. \n Wait a moment before starting a new one.',

// GET BALANCES
    'BaseCurrency': 'PIVX',
    'BalanceIs': ' your tip jar contains: ',
    'UnconfirmedBalance1': 'you have an unconfirmed balance (less than ',
    'UnconfirmedBalance2': ' confirmations) of ',
    'BalanceWarningHigh': 'This tip jar is filling up. Please consider withdrawing some PIVX.',
// WITHDRAW
    'Withdrawal1': 'Withdrawal of ',
    'WithdrawalTransaction': ' transaction: ',
    'InsufficientBalance1': 'Sorry ',
    'InsufficientBalance2': ' insufficient balance.',
// SEND
    'SendPublicMessage1': ':clap: ',
    'SendPublicMessage2': ' tipped ',
    'SendPrivateMssSendingUser': ' you\'re a great PIVX Chat user :thumbsup: \nLets see how much there is left in your tip jar now: \n',
    'SendPrivateMssRecievingUser1': 'Hi there ',
    'SendPrivateMssRecievingUser2': ', you just received ',
    'SendPrivateMssRecievingUser3': ' from ',
    'SendOops1': 'Oops could not tip ',
    'SendOops2': ' to '

};

module.exports = { tipbotTxt, userTxt, quizTxt };
