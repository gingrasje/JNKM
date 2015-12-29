/**
 * AngularJS 
 * @author Jeffrey Gingras, Ran Gao
 * 
 * JNKM
 */

//declaring Strict Mode, enforcing stricter syntax on JavaScript codes
'use strict';

//main module for the Envision project
angular.module('jnkm', [
  'ui.router', 'ngCookies'
])
    
    //---Routing for partials and templates using UI-Router---------------------       
    .config(['$stateProvider',
     function($stateProvider) {
       $stateProvider
        .state('home', {url: '/home',templateUrl: 'partials/home.html', controller: 'home'})        
        .state('portfolio', {url: '/portfolio',templateUrl: 'partials/portfolio.html', controller: 'portfolio'});
        }
    ])
    
    .config(['$urlRouterProvider',
          function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
          }
        ])

    .run(function($rootScope){
        $rootScope.$on('$stateChangeSuccess',function(){
            $("html, body").animate({ scrollTop: 0 }, 10);
        })
     })
        
    .controller('home', function() {
           // var dynamicWs = document.createElement("script");
           //       dynamicWs.innerHTML = "$(function(){ $(\"#elastic_grid_demo\").elastic_grid({ 'showAllText' : 'All', 'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup 'hoverDirection': true, 'hoverDelay': 0, 'hoverInverse': false, 'expandingSpeed': 500, 'expandingHeight': 500, 'items' : [ { 'title' : 'HOMELIFE REALTY OFFICE', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/1.jpg'], 'large' : ['images/small/1.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] }, { 'title' : 'KATARINA', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/2.jpg'], 'large' : ['images/small/2.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] }, { 'title' : 'HOMELIFE REALTY OFFICE', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/3.jpg'], 'large' : ['images/small/3.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] }, { 'title' : 'KATARINA', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/4.jpg'], 'large' : ['images/small/4.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] }, { 'title' : 'HOMELIFE REALTY OFFICE', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/5.jpg'], 'large' : ['images/small/5.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] }, { 'title' : 'KATARINA', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/6.jpg'], 'large' : ['images/small/6.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] }, { 'title' : 'HOMELIFE REALTY OFFICE', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/7.jpg'], 'large' : ['images/small/7.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] }, { 'title' : 'KATARINA', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/8.jpg'], 'large' : ['images/small/8.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] }, { 'title' : 'HOMELIFE REALTY OFFICE', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/9.jpg'], 'large' : ['images/small/9.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] }, { 'title' : 'KATARINA', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/10.jpg'], 'large' : ['images/small/10.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] }, { 'title' : 'KATARINA', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/11.jpg'], 'large' : ['images/small/11.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] }, { 'title' : 'HOMELIFE REALTY OFFICE', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/12.jpg'], 'large' : ['images/small/12.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] }, { 'title' : 'KATARINA', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/13.jpg'], 'large' : ['images/small/13.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] }, { 'title' : 'KATARINA', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/14.jpg'], 'large' : ['images/small/14.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] }, { 'title' : 'HOMELIFE REALTY OFFICE', 'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ', 'thumbnail' : ['images/small/15.jpg'], 'large' : ['images/small/15.jpg'], 'button_list' : [{ 'title':'Readmore', 'url' : 'portfolio.html', 'new_window' : false }], 'tags' : [] } ] }); });</script>";
           //  document.getElementById('elastic').appendChild(dynamicWs);   
    })

    .controller('portfolio', function() {

      // if (window.location.href == 'http://localhost:8080/jnkm/#/portfolio') {
      //      window.location.href = '#/portfolio//';
      //       };

          

            
    })
;

