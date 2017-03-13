var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('standard');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');


  $urlRouterProvider.otherwise("/tab/xinwen");

  $stateProvider.state("tab" , {
    url:"/tab",
    abstract:true,
    templateUrl:"templates/tabs.html"
  })
  $stateProvider.state("tab.xinwen" , {
    url:"/xinwen",
    views:{
      "xinwen":{
        templateUrl:"templates/xinwen.html",
        controller:"xinwenC"
      }
    }
  });
//配置详情页面的路由
  $stateProvider.state("tab.twoNews" , {
    url:"/twoNews",
    views:{
      "xinwen":{
        templateUrl:"templates/twoNews.html",
        controller:"twoNewsC"
      }
    }
  });

  $stateProvider.state("tab.threeNews" , {
    url:"/threeNews",
    views:{
      "xinwen":{
        templateUrl:"templates/threeNews.html",
        controller:"threeNewsC"
      }
    },
    params:{
      expertId:""
    }
  });




  $stateProvider.state("tab.shipin" , {
    url:"/shipin",
    views:{
      "shipin":{
        templateUrl:"templates/shipin.html",
        controller:"shipinC"
      }
    }
  });

  $stateProvider.state("tab.twoshipin" , {
    url:"/twoshipin",
    views:{
      "shipin":{
        templateUrl:"templates/twoshipin.html",
        controller:"twoshipinC"
      }
    }
  });

  $stateProvider.state("tab.shishang" , {
    url:"/shishang",
    views:{
      "shishang":{
        templateUrl:"templates/shishang.html",
        controller:"shishangC"
      }
    }
  });

  $stateProvider.state("tab.twoshishang" , {
    url:"/twoshishang",
    views:{
      "shishang":{
        templateUrl:"templates/twoshishang.html",
        controller:"twoshishangC"
      }
    },
    params:{
      lvurl:""
    }
  });

  // $stateProvider.state("tab.wode" , {
  //   url:"/wode",
  //   views:{
  //     "wode":{
  //       templateUrl:"templates/wode.html",
  //       controller:"wodeC"
  //     }
  //   }
  // });

  $stateProvider.state("tab.picture" , {
    url:"/picture",
    views:{
      "picture":{
        templateUrl:"templates/picture.html",
        controller:"pictureC"
      }
    }
  });

  $stateProvider.state("tab.twoPicture" , {
    url:"/twoPicture",
    views:{
      "picture":{
        templateUrl:"templates/twoPicture.html",
        controller:"twoPictureC"
      }
    },
    params:{
      id:"",
      picture:""
    }
  });

  $stateProvider.state("tab.pictureDetail" , {
    url:"/threePicture",
    views:{
      "picture":{
        templateUrl:"templates/threePicture.html",
        controller:"threePictureC"
      }
    },
    params:{
      hotId:"",
      newId:""
    }
  });

});

app.value("myMainData" , {
  mpurl:"",
  index:"",
  title:""
});
