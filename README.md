#ngPaginator

*Angular Directive for Data Pagination.*
by Po Chen Lin

##How to Use

1. Declare **paginator** directive in your module.

	``` javascript 
	angular.module('app',[])
	.directive('paginator',Paginator);
	function Paginator(){ ... }
	```

2. Declare **startFrom** filter in your module.

	``` javascript 
	.filter('startFrom',startFrom)
	function startFrom() { ... }
	```

3. In controller, create **model** for binding. *(data, curPage, pageSize, pagerSize)*

	``` javascript
	// use controller as viewmodel or old fashion $scope for view
	this.data = data; // array of data
	this.curPage = 1; // current page. External function can change page with this
	this.pageSize = 10; // how many items per page
	this.pagerSize = 5; // how many pagers in paginator (odd number recommended)
	```

4. Create remote template for paginator *(Customize for your own need)*

	``` html
	<button ng-disabled="curPage == 1" ng-click="prev()">Prev</button>
	<button ng-repeat="p in pagers()" ng-disabled="this.p == curPage" ng-click="goPage(this.p)">{{p}}</button>
	<button ng-disabled="curPage >= maxPage()" ng-click="next()">Next</button>
	```

5. In html view, you can use directive in controller scope like this.

	``` html
	// element style 
	<paginator data="main.data" cur-page="main.curPage" page-size="main.pageSize" pager-size="main.pagerSize"></paginator>

	// ngRepeat for each page (where startFrom filter kickin)
	<ul>
	<li ng-repeat="p in main.data | startFrom:(main.curPage-1)*main.pageSize | limitTo:main.pageSize">{{p.name}} - {{p.email}}</li>
	</ul>

	// Attribute style
	<div data="main.data" cur-page="main.curPage" page-size="main.pageSize" pager-size="main.pagerSize" paginator></div>
	```

for detail, check out the example code.

##License
The MIT License (MIT)
