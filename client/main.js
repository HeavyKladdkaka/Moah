import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()){
    console.log('utloggad');
    FlowRouter.go('login');
    console.log('gick till login');
  }
  else {
    console.log('inloggad');
  }
}]);

FlowRouter.route('/', {
  name: 'login',
  action(){
    BlazeLayout.render('iphone', {main: 'login'});
  }
});

FlowRouter.route('/joinGame', {
  name: 'joinGame',
  action(){
    BlazeLayout.render('iphone', {main: 'joinGame'});
  }
});

FlowRouter.route('/settings', {
  name: 'settings',
  action(){
    BlazeLayout.render('iphone', {main: 'settings'});
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


FlowRouter.route('/login', {
  name: 'login',
  action(){
    BlazeLayout.render('iphone', {main: 'login'});
    if(Meteor.userId()){
      FlowRouter.go('joinGame');
    }
  }
});

FlowRouter.route('/inGameHighscore', {
  name: 'inGameHighscore',
  action(){
    BlazeLayout.render('iphone', {main: 'inGameHighscore'});
  }
});

/**/
Template.profile.helpers({
  profileName: function(){
    var name = (Meteor.user().profile.name).split(' ');
    return name[0];
  }
});

$(document).on('click', '.login-buttons-dropdown-align-', function(){
    $(this).hide();
    setTimeout(function(){
      console.log('hej1');
      document.location.reload(true);
    },1000);
});

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {

        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "" + seconds : seconds;
        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if (timer == 0){
          FlowRouter.go('readyForGame');
          document.location.reload(true);
        }

    }, 1000);

}

window.onload = function () {
    var fiveMinutes = 10,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
