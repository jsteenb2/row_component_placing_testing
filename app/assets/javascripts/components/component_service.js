app.factory('componentService', ["_", "Restangular",
function(_, Restangular){
  var componentService = {};
  var _id = 1;

  var componentTypes = {
    toggleButton: {
      type: "toggleButton",
      content: '<button type="button" ng-keydown="moveComponent($event)" ng-class="{ \'hovered\': hovered}" ng-click="onClick($event)" ng-dblclick="dblClick($event)" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" data-head="head"> Single toggle</button>'
    },
    authorBox: {
      type: "authorBox",
      content: '<!--Section: Author box--><section class="m-b-4" ng-keydown="moveComponent($event)" ng-click="onClick($event)" ng-class="{ \'hovered\': hovered}" ng-dblclick="dblClick($event)"  data-head="head"><!--Author box--><div class="author-box"><div class="row"><!--Name--><h3 class="h3-responsive text-xs-center">About author</h3><hr><!--Avatar--><div class="col-xs-12 col-sm-2"><img src="http://2.gravatar.com/avatar/e9de252843e9ff541060127dac7126ed?s=150&d=mm&r=g" class="img-fluid img-circle z-depth-2"></div><!--Author Data--><div class=" col-xs-12 col-sm-10"><p><strong>Michal Szymanski</strong></p><div class="personal-sm"><a class="email-ic"><i class="fa fa-home"> </i></a><a class="fb-ic"><i class="fa fa-facebook"> </i></a><a class="tw-ic"><i class="fa fa-twitter"> </i></a><a class="gplus-ic"><i class="fa fa-google-plus"> </i></a><a class="li-ic"><i class="fa fa-linkedin"> </i></a><a class="email-ic"><i class="fa fa-envelope-o"> </i></a></div><p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p><p class="hidden-md-down">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint esse nulla quia quam veniam commodi dicta, iusto inventore. Voluptatum pariatur eveniet ea, officiis vitae praesentium beatae quas libero, essefacere.</p></div></div></div><!--/.Author box--></section><!--/Section: Author box-->'
    }
  };

  componentService.buildComponent = function(componentType){
    var component = angular.copy(componentTypes[componentType], {});
    component.id = _id;
    _id++;
    return component;
  };

  return componentService;
}]);
