import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

FlowRouter.route('/', {
  name: 'hej',
  action(){
    BlazeLayout.render('iphone');
  }
});

FlowRouter.route('/joinGame', {
  name: 'joinGame',
  action(){
    BlazeLayout.render('iphone', {main: 'joinGame'});
  }
});

FlowRouter.route('/noGamesAvailable', {
  name: 'noGamesAvailable',
  action(){
    BlazeLayout.render('iphone', {main: 'noGamesAvailable'});
  }
});

FlowRouter.route('/profile', {
  name: 'profile',
  action(){
    BlazeLayout.render('iphone', {main: 'profile'});
  }
});

FlowRouter.route('/chatt', {
  name: 'chatt',
  action(){
    BlazeLayout.render('iphone', {main: 'chatt'});
  }
});

FlowRouter.route('/achievements', {
  name: 'achievements',
  action(){
    BlazeLayout.render('iphone', {main: 'achievements'});
  }
});

FlowRouter.route('/achievement', {
  name: 'achievement',
  action(){
    BlazeLayout.render('iphone', {main: 'achievement'});
  }
});

FlowRouter.route('/chooseAvatar', {
  name: 'chooseAvatar',
  action(){
    BlazeLayout.render('iphone', {main: 'chooseAvatar'});
  }
});

FlowRouter.route('/waitingForPlayer', {
  name: 'waitingForPlayer',
  action(){
    BlazeLayout.render('iphone', {main: 'waitingForPlayer'});
  }
});

FlowRouter.route('/im-ready', {
  name: 'im-ready',
  action(){
    BlazeLayout.render('iphone', {main: 'im-ready'});
  }
});

FlowRouter.route('/readyForGame', {
  name: 'ready-for-game',
  action(){
    BlazeLayout.render('iphone', {main: 'readyForGame'});
  }
});

FlowRouter.route('/inGame', {
  name: 'inGame',
  action(){
    BlazeLayout.render('iphone', {main: 'inGame'});
  }
});

FlowRouter.route('/inGameKeyboard', {
  name: 'inGameKeyboard',
  action(){
    BlazeLayout.render('iphone', {main: 'inGameKeyboard'});
  }
});

FlowRouter.route('/inGameChatt', {
  name: 'inGameChatt',
  action(){
    BlazeLayout.render('iphone', {main: 'inGameChatt'});
  }
});

FlowRouter.route('/inGameAnswers', {
  name: 'inGameAnswers',
  action(){
    BlazeLayout.render('iphone', {main: 'inGameAnswers'});
  }
});

FlowRouter.route('/inGameHighscore', {
  name: 'inGameHighscore',
  action(){
    BlazeLayout.render('iphone', {main: 'inGameHighscore'});
  }
});
