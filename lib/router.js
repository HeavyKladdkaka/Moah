FlowRouter.route('/',{
  name: 'login'
  action(){
    BlazeLayout.render('login');
  }
});

FlowRouter.route('/profile',{
  name: 'profile'
  action(){
    BlazeLayout.render('profile');
  }
});
