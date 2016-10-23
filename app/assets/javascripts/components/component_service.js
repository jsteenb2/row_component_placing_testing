app.factory('componentService', ["_", "Restangular",
function(_, Restangular){
  var componentService = {};

  var componentTypes = {
    toggleButton: {
      type: "toggleButton",
      content: '<button type="button" ng-click="onClick($event)" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"> Single toggle</button>'
    },
    authorBox: {
      type: "authorBox",
      content: '<!--Section: Author box--><section class="m-b-4"><!--Author box--><div class="author-box" ng-click="onClick($event)"><div class="row"><!--Name--><h3 class="h3-responsive text-xs-center">About author</h3><hr><!--Avatar--><div class="col-xs-12 col-sm-2"><img src="http://2.gravatar.com/avatar/e9de252843e9ff541060127dac7126ed?s=150&d=mm&r=g" class="img-fluid img-circle z-depth-2"></div><!--Author Data--><div class=" col-xs-12 col-sm-10"><p><strong>Michal Szymanski</strong></p><div class="personal-sm"><a class="email-ic"><i class="fa fa-home"> </i></a><a class="fb-ic"><i class="fa fa-facebook"> </i></a><a class="tw-ic"><i class="fa fa-twitter"> </i></a><a class="gplus-ic"><i class="fa fa-google-plus"> </i></a><a class="li-ic"><i class="fa fa-linkedin"> </i></a><a class="email-ic"><i class="fa fa-envelope-o"> </i></a></div><p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p><p class="hidden-md-down">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint esse nulla quia quam veniam commodi dicta, iusto inventore. Voluptatum pariatur eveniet ea, officiis vitae praesentium beatae quas libero, essefacere.</p></div></div></div><!--/.Author box--></section><!--/Section: Author box-->'
    }
  };

  componentService.buildComponent = function(componentType){
    return componentTypes[componentType];
  };

  return componentService;
}]);
