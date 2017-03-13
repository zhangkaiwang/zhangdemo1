angular.module('starter.controllers', ["ngCordova"])
  .controller('xinwenC', function($scope , $http ,$ionicSlideBoxDelegate ,$state , myMainData) {
    $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/classification.html")
    console.log($scope.url);
    $http({
      url: "http://59.110.139.104:3000/wy?myUrl=" + $scope.url,
      method: "GET"
    })
      .then(function (res) {
        $scope.biaoti = res.data.data

        $scope.typeFn = function (index) {
          $scope.yyy = true;
          console.log(index)
          $scope.myType = index

          xx.style.overflow = "hidden";
          xx.style.height = "100px";
          $scope.shat = true;
          $scope.unwind = true;

          $state.go("tab.twoNews")
          myMainData.index = $scope.myType,
          myMainData.title = $scope.biaoti[index].name

        }

      }).then()

    var xx = document.getElementsByClassName("aaa")[0];
    $scope.shat = true;
    $scope.unwind = true;
    $scope.dianji = function () {
      if ($scope.shat) {
        // xx.style.overflow = "visible";
        xx.style.overflow = "hidden";
        xx.style.height = "300px";
        $scope.shat = false;
        $scope.unwind = false;
      } else {
        xx.style.overflow = "hidden";
        xx.style.height = "100px";
        $scope.shat = true;
        $scope.unwind = true;
      }
    }
     $scope.page = 4;
    function jiazai() {
      $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/law/" + $scope.page + "-10.html")
      $http({
        url: "http://59.110.139.104:3000/wy?myUrl=" + $scope.url,
        method: "GET"
      })
        .then(function (res) {
          if ($scope.loading) {
            $scope.data = $scope.data.concat(res.data.data.expertList);
            $scope.$broadcast('scroll.infiniteScrollComplete');
          } else {
            $scope.data = res.data.data.expertList;
          }
        })
    }
    jiazai();
    $scope.loading = false;
      $scope.loadMore = function () {
        if($scope.page>3 && $scope.page<9){
          $scope.page ++;
        }else if($scope.page>9){
          $scope.page --;
        }
        jiazai();
        $scope.loading = true;
      }


    $scope.newDetail = function (index) {
      $state.go("tab.threeNews" , {
        expertId:$scope.data[index].expertId
      })
    }
  })
  .controller("twoNewsC" , function ( myMainData,$http,$scope,$stateParams ,$state) {
    $scope.title = myMainData.title;
    $scope.index = myMainData.index;

        $scope.page = 0
        switch ($scope.index) {
          case 0 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/law/" + $scope.page + "-10.html")
            break;
          case 1 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/health2/" + $scope.page + "-10.html")
            break;
          case 2 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/auto/" + $scope.page + "-10.html")
            break;
          case 3 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/finance/" + $scope.page + "-10.html")
            break;
          case 4 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/history/" + $scope.page + "-10.html")
            break;
          case 5 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/politic/" + $scope.page + "-10.html")
            break;
          case 6 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/sport/0-10.html")
            break;
          case 7 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/military/" + $scope.page + "-10.html")
            break;
          case 8 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/travel/" + $scope.page + "-10.html")
            break;
          case 9 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/house/" + $scope.page + "-10.html")
            break;
          case 10 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/science/" + $scope.page + "-10.html")
            break;
          case 11 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/education/" + $scope.page + "-10.html")
            break;
          case 12 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/entertainment/" + $scope.page + "-10.html")
            break;
          case 13 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/health/" + $scope.page + "-10.html")
            break;
          case 14 :
            $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/list/expert/classification/fashion/" + $scope.page + "-10.html")
            break;
        }

      function shuju() {
        $http({
          url: "http://59.110.139.104:3000/wy?myUrl=" + $scope.url,
          method: "GET"
        })
          .then(function (res) {
            console.log(res)
            console.log($scope.loading)
            if ($scope.loading) {
              $scope.data = $scope.data.concat(res.data.data.expertList);
              $scope.$broadcast('scroll.infiniteScrollComplete');
            } else {
              $scope.data = res.data.data.expertList;
            }
          })

        $scope.newDetail = function (index) {
          console.log("frui")
          $state.go("tab.threeNews" , {
            // picture:$scope.data[index].picurl,
            expertId:$scope.data[index].expertId
          })
        }
    }
    shuju()
    $scope.loading = false;
    $scope.loadMore = function () {
      if($scope.page>-1 && $scope.page<3){
        $scope.page ++;
      }else if($scope.page>3){
        $scope.page --;
      }
      shuju();
      $scope.loading = true;
    }

    console.log($scope.title)
  })
  .controller("threeNewsC" , function ($scope , $http , $state ,$stateParams ,$ionicScrollDelegate ) {

    //沉浸式导航栏
    $scope.show=false;//控制标题栏是否显示
    $scope.transrate=0;//控制标题栏透明度
    $scope.xxx = function(){
      var position=$ionicScrollDelegate.getScrollPosition().top;//取滑动TOP值
      if (position<=40)//小于等于40像素时隐藏标题
      {
        $scope.transrate=0;
        $scope.show=false;
        console.log("xiaoyu 40");
      }else if (position<=200){//大于40、小于200时显示标题栏，并设置透明度
        $scope.transrate=position/200;
        $scope.show=true;
        console.log("40到200之间");
      }else{
        $scope.transrate=1;
        $scope.show=true;
        console.log("大于200");
      }
      $scope.$apply();
      console.log("开始引用");
    }


    $scope.$on("$ionicView.afterEnter" , function () {
      console.log("jinlail");
      $(function () {
        console.log($("#myP"));
        $("#myP").css({"color":"green" ,
          "overflow":"hidden" ,
          "display":"box" ,
          "lineClamp":"2" ,
          "webkitBoxOrient":"vertical",
          "wordBreak":"break-all" ,
          "position":"absolute" ,
          "top":"100px" ,
          "margin":"0px 50px"
        });
      });
    });


    $scope.expertId = $stateParams.expertId;
    console.log($scope.expertId)
    $scope.url = encodeURIComponent("http://c.m.163.com/newstopic/qa/"+$scope.expertId+".html")
    $http({
      url:"http://59.110.139.104:3000/wy?myUrl=" + $scope.url,
      method:"GET"
    })
      .then(function (res) {
        console.log(res)
        $scope.expert= res.data.data.expert;
    })

    function  shuju() {
      $scope.url = encodeURIComponent("http://c.3g.163.com/newstopic/list/latestqa/"+$scope.expertId+"/0-10.html")
      $http({
        url:"http://59.110.139.104:3000/wy?myUrl=" + $scope.url,
        method:"GET"
      })
        .then(function (res) {
          console.log(res.data.data[0].question.userHeadPicUrl)
          $scope.pinglun= res.data.data;
        })
    }
    shuju()
    $scope.goBack = function () {
      window.history.go(-1)
    }

  })
  .controller('shipinC', function($scope ,$http , $state , myMainData) {

    $scope.page = 22;
    function videoData() {
      $scope.url=encodeURIComponent("http://vcis.ifeng.com/api/homePageList?platformType=androidPhone&channelId="+$scope.page+"&pageSize=20&requireTime=&isNotModified=0&adapterNo=7.2.3&protocol=1.0.1&operation=default&userId=&deviceId=bde5ee81c11b735e396e4e3892a4aad4")
      console.log($scope.url);
      $http({
        url:"http://59.110.139.104:3000/wy?myUrl=" + $scope.url,
        method:"GET"
      })
        .then(function (res) {

          if ($scope.isLoad) {
            $scope.shuju = $scope.shuju.concat(res.data.bodyList);
            console.log("上啦加载之后的数据");
            console.log($scope.shuju);
            $scope.$broadcast('scroll.infiniteScrollComplete');
          } else {
            $scope.shuju = res.data.bodyList;
            console.log($scope.shuju);
          }

        })
    }

    videoData();
    $scope.bvideo = function (index) {
      console.log("jlkasdfds");
      $state.go("tab.twoshipin" );
      // mpurl:$scope.shuju[index].memberItem.videoFiles[2].mediaUrl
      myMainData.mpurl = $scope.shuju[index].memberItem.videoFiles[2].mediaUrl;
    }
    $scope.isLoad = false;
    $scope.doRefresh = function () {
      $scope.page = 20 + Math.floor(Math.random() * (50 - 20 + 1));
      console.log($scope.page);
      videoData($scope.page)
      $scope.isLoad = false;
      $scope.$broadcast('scroll.refreshComplete');
    }
    $scope.isLoad = false;
    $scope.loadMore = function () {
      console.log("dewiu")
      if(20 < $scope.page && $scope.page <50){
        $scope.page++;
      }else if($scope.page>49){
        $scope.page--
      }
      videoData()
      $scope.isLoad = true;

    }


  })
  .controller("twoshipinC" , function ($cordovaMedia , $http , $scope , $stateParams , myMainData) {

    $scope.$on("$ionicView.afterEnter" , function () {
      console.log("jinlaile");

      setTimeout(function () {

        var sha = document.getElementById("myVideoContent");
        // $scope.mp4Url = $stateParams.mpurl;
        // var url = $scope.mp4Url;
        var url = myMainData.mpurl;
        console.log(url);

        console.log(sha);


          sha.innerHTML = '<iframe src="' + url + '" height=498 width=100% id="iframe" frameborder=2></iframe>';



        console.log(sha);
      },1000)


    });



    $scope.$on("$ionicView.leave" , function () {
      console.log("走了");

      var sha = document.getElementById("myVideoContent");

      sha.innerHTML = "";

    });



  })

  .controller('shishangC', function($scope , $http ,$ionicSlideBoxDelegate , $state) {

    function shuju() {
      console.log("我刚进来");
      $scope.url = encodeURIComponent("http://api.iclient.ifeng.com/ClientNews?id=SS78,FOCUSSS78&page="+$scope.page+"&gv=5.5.0&av=5.5.0&uid=863363039530132&deviceid=863363039530132&proid=ifengnews&os=android_23&df=androidphone&vt=5&screen=1080x1920&publishid=6102&nw=wifi")
      $http({
        url:"http://59.110.139.104:3000/wy?myUrl=" + $scope.url,
        method:"GET"
      })
        .then(function (res) {

          if ($scope.isLoad) {
            $scope.shuju = $scope.shuju.concat(res.data[0].item);
            console.log("上啦加载之后的数据");
            console.log($scope.shuju);
            $scope.$broadcast('scroll.infiniteScrollComplete');
          } else {
            $scope.shuju = res.data[0].item;
            console.log($scope.shuju);
          }

          console.log("数据加载出来");
          console.log($scope.shuju);

          $scope.lvyouFn = function (index) {
            console.log("wo shi dayin");
            console.log(res.data[0].item[index]);
            $state.go("tab.twoshishang" , {
              lvurl:$scope.shuju[index]
            })
          }
        })
        .then()
    }
    shuju(2)
    $scope.page = 2
    $scope.isLoad = false;
    $scope.doRefresh = function () {
      $scope.isLoad = false;
      $scope.page =Math.floor(Math.random()*10+1);
      shuju()
      $scope.$broadcast('scroll.refreshComplete');
    }

    $scope.isLoad = false;
    $scope.loadMore = function() {
      $scope.page++;
      $scope.isLoad = true;
      shuju();
    }




    $scope.$watch("shuju" , function (newValue , oldValue) {
      if(newValue && newValue.length > 1){
        $ionicSlideBoxDelegate.update();
        $ionicSlideBoxDelegate.loop(true);
      }
    });
  })
  .controller("twoshishangC" , function ($scope , $stateParams , $http) {
    $scope.url = $stateParams.lvurl;
    console.log($scope.url.commentsUrl)
    $http({
      url:"http://59.110.139.104:3000/wy?myUrl=" + $scope.url.link.url,
      method:"GET"
    })
      .then(function (res) {
        console.log(res.data);
        $scope.title = res.data.body.title;
        $scope.thumbnail = res.data.body.thumbnail;
        $scope.text = res.data.body.text;
        document.getElementById("contents").innerHTML = $scope.text;
        // console.log($scope.text);

        $scope.shareUrl = res.data.body.shareurl;
        $scope.title = res.data.body.title;
        $scope.disclaimer = res.data.disclaimer;
        console.log($scope.shareUrl)
        $scope.shareFn = function () {
          var args = {};
          args.scene = QQSDK.Scene.QQ;//QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
          args.url = $scope.shareUrl;
          args.title = $scope.title;
          args.description = $scope.disclaimer;
          // args.image = "https://cordova.apache.org/static/img/cordova_bot.png";
          QQSDK.shareNews(function () {
          }, function (failReason) {
          },args);
        }
      })
      .then()

  })

  .controller('wodeC', function($scope , $http) {

    console.log("我来到我的控制器了");

    document.addEventListener("deviceready" , function () {
      console.log("设备准备好了");
    } , false);


    $scope.touxiang = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3610704133,3947436040&fm=21&gp=0.jpg"
    $scope.denglu = "登录";
    $scope.loginFn = function () {
      QQSDK.ssoLogin(function (args) {
        $scope.url = "https://graph.qq.com/user/get_user_info?access_token=" + args.access_token + "&oauth_consumer_key=1105927439&openid=" + args.userid;
        $scope.url = encodeURIComponent($scope.url);
        $http({
          url:"http://59.110.139.104:3000/wy?myUrl=" + $scope.url,
          method:"GET"
        })
          .then(function (res) {
            $scope.touxiang = res.data.figureurl_qq_2;
            $scope.denglu = res.data.nickname;
          })

      }, function (failReason) {

      });
    }

  })

  .controller('pictureC', function($scope , $http , $ionicPopup , $state,$ionicActionSheet) {


    $scope.getFullYear= new Date().getFullYear()
    $scope.getMonth= new Date().getMonth()+1
    $scope.getDate= new Date().getDate();


    var yyy=['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];

    $scope.xiangqi = yyy[new Date().getDay()-1]
    $scope.day=new Date().getDay();


    function phtoData() {
      $scope.url = encodeURIComponent("http://ic.snssdk.com/2/all/recent/?category=image_funny&count=20&item_type=1&iid=8261377683&device_id=34754732919&ac=wifi&channel=wandoujia&aid=1096&app_name=news_article&version_code=364&device_platform=android&device_type=OPPO%20R9s&os_api=23&os_version=6.0.1&uuid=863363039530132&openudid=345483eab85a8bc4&aid=1096")
      $http({
        url:"http://59.110.139.104:3000/wy?myUrl=" + $scope.url,
        method:"GET"
      })
        .then(function (res) {

          if(res.data.data ==""){
            return;
          }else{

            if ($scope.isLoad) {
              $scope.data = $scope.data.concat(res.data.data);
              console.log("上啦加载之后的数据");
              console.log($scope.shuju);
              $scope.$broadcast('scroll.infiniteScrollComplete');

              $scope.thumbFn = function (index) {
                $scope.data[index].digg_count++;
              }

              $scope.thumbDownFn = function (index) {
                $scope.data[index].bury_count++
              }

              $scope.startFn = function (index) {
                $scope.data[index].comment_count++;
              }
              //分享
              $scope.showPopup = function(index) {

                // 点击按钮触发，或一些其他的触发条件
                // 显示操作表
                $ionicActionSheet.show({
                  buttons: [
                    { text: ' <div><img src="img/fenxiang.png"></div>' },
                  ],
                  cancelText: '取消',
                  buttonClicked: function() {

                    var args = {};
                    args.scene = QQSDK.Scene.QQ;//QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
                    args.url = $scope.data[index].share_url;
                    args.title = "这个是Cordova QQ图片分享的标题";
                    args.description = "这个是Cordova QQ图片分享的描述";
                    args.image = "https://cordova.apache.org/static/img/cordova_bot.png";
                    QQSDK.shareNews(function () {
                    }, function (failReason) {
                    },args);
                  }
                });
              };

            } else {
              $scope.data = res.data.data;


              $scope.thumbFn = function (index) {
                $scope.data[index].digg_count++;
              }

              $scope.thumbDownFn = function (index) {
                $scope.data[index].bury_count++
              }

              $scope.startFn = function (index) {
                $scope.data[index].comment_count++;
              }
              //分享
              $scope.showPopup = function(index) {

                console.log(res.data.data[index].share_url)
                // 点击按钮触发，或一些其他的触发条件
                // 显示操作表
                $ionicActionSheet.show({
                  buttons: [
                    { text: ' <div><img src="img/fenxiang.png"></div>' },
                  ],
                  cancelText: '取消',
                  buttonClicked: function() {

                    var args = {};
                    args.scene = QQSDK.Scene.QQ;//QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
                    args.url = res.data.data[index].share_url;
                    args.title = "这个是Cordova QQ图片分享的标题";
                    args.description = "这个是Cordova QQ图片分享的描述";
                    args.image = "https://cordova.apache.org/static/img/cordova_bot.png";
                    QQSDK.shareNews(function () {
                    }, function (failReason) {
                    },args);
                  }
                });
              };
            }


            $scope.twopFn = function (index) {
              // console.log($scope.data[index].group_id);
              $state.go("tab.twoPicture" ,{
                id:$scope.data[index].group_id,
                picture:$scope.data[index].large_image.url_list[0].url,
              })
            }
          }
        })
    }

    phtoData();
    $scope.isLoad = false;
    $scope.doRefresh = function () {
      $scope.isLoad = false;
      phtoData();
        $scope.$broadcast('scroll.refreshComplete');
    }
    $scope.isLoad = false;
    $scope.loadMore = function () {
      phtoData();
      $scope.isLoad = true;
    }

  })
  .controller("twoPictureC" , function ($scope, $stateParams , $http , $state) {
    $scope.id = $stateParams.id;
    $scope.picture = $stateParams.picture;

    function pinglun() {
      $scope.url = encodeURIComponent("http://ic.snssdk.com/2/article/v3/all_comments/?group_id="+$scope.id+"&tpl_version=3&iid=8261377683&device_id=34754732919&ac=wifi&channel=wandoujia&aid=1096&app_name=news_article&version_code=364&device_platform=android&device_type=OPPO%20R9s&os_api=23&os_version=6.0.1&uuid=863363039530132&openudid=345483eab85a8bc4&aid=1096")
      $http({
        url:"http://59.110.139.104:3000/wy?myUrl=" + $scope.url,
        method:"GET"
      })
        .then(function (res) {
          console.log(res)
          $scope.hotData = res.data.data.hot_comments.comments;
          if($scope.data){
            // $scope.hotData =$scope.hotData.concat(res.data.data.hot_comments.comments)
            $scope.newData =$scope.newData.concat(res.data.data.recent_comments.comments);

            console.log($scope.hotData[0].digg_count);

            $scope.zanFn = function (index) {
              console.log(index)
              $scope.hotData[index].digg_count++
            }
            $scope.$broadcast('scroll.infiniteScrollComplete');

          }else {
            $scope.newData = res.data.data.recent_comments.comments;
          }

          $scope.hotpictureDetailFn = function (index) {
            $state.go("tab.pictureDetail" , {
              hotId:$scope.hotData[index].user_id
            })
          }

          $scope.pictureDetailFn = function(index){
            $state.go("tab.pictureDetail" , {
              newId:$scope.newData[index].user_id
            })
          }


          angular.forEach($scope.hotData, function(value , key){

            if($scope.newData[key].user_profile_image_url ==""){
              $scope.newData[key].user_profile_image_url = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3610704133,3947436040&fm=21&gp=0.jpg"
            }
          });

        })
    }


          pinglun()
          $scope.data = false;
          $scope.loadMore = function () {
            pinglun()
            $scope.data = true;
          }


  })
  .controller("threePictureC" , function($scope , $http,  $stateParams){
    $scope.hotId = $stateParams.hotId;
    console.log($scope.hotId);
    $scope.newId = $stateParams.newId;
    console.log($scope.newId)

    if($scope.hotId){
      $scope.url = encodeURIComponent("http://isub.snssdk.com/2/user/profile/?user_id="+$scope.hotId+"&iid=8261377683&device_id=34754732919&ac=wifi&channel=wandoujia&aid=1096&app_name=news_article&version_code=364&device_platform=android&device_type=OPPO%20R9s&os_api=23&os_version=6.0.1&uuid=863363039530132&openudid=345483eab85a8bc4&aid=1096")

    }else if ($scope.newId){
      $scope.url = encodeURIComponent("http://isub.snssdk.com/2/user/profile/?user_id="+$scope.newId+"&iid=8261377683&device_id=34754732919&ac=wifi&channel=wandoujia&aid=1096&app_name=news_article&version_code=364&device_platform=android&device_type=OPPO%20R9s&os_api=23&os_version=6.0.1&uuid=863363039530132&openudid=345483eab85a8bc4&aid=1096")

    }
    $http({
      url:"http://59.110.139.104:3000/wy?myUrl=" + $scope.url,
      method:"GET"
    })
      .then(function (res) {
          console.log(res)
         $scope.data = res.data.data;
    })
  });

