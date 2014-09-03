(function(){

  angular.module('app',[])
  .factory('DataFactory',DataFactory)
  .controller('MainCtrl',MainCtrl)
  .filter('startFrom',startFrom)
  .directive('paginator',Paginator);

  MainCtrl.$inject = ['DataFactory'];

  function MainCtrl(data){
    var self = this;
    self.data = data;
    self.curPage = 0;
    self.pageSize = 10;
    self.pagerSize = 5;
  }

  function Paginator(){
    return {
      restrict: 'EA',
      templateUrl: '/paginator.html',
      scope: {
        data:'=',
        curPage:'=',
        pageSize:'=',
        pagerSize:'='
      },
      link : function(scope, element, attrs){
        scope.maxPage = function(){ return Math.ceil(scope.data.length/scope.pageSize);};
        scope.pagers= function(){
          var pagerSize = scope.pagerSize,
              median = parseInt(pagerSize / 2),
              max = scope.maxPage(),
              cur = scope.curPage,
              start = 1,
              end = max,
              sequence = [];

          if (max > pagerSize) {
            if (cur <= median) {
              end = pagerSize;
            } else if (cur >= max - median) {
              start = max - pagerSize + 1;
            } else {
              start = cur - median;
              end = cur + median;
            }
          }

          for (var i = start; i <= end; i++) {
            sequence.push(i);
          }
          return sequence;
        };
        scope.goPage = function(p){
          if(p<1){p=1;}else if(p>scope.maxPage()){p=scope.maxPage();}
          scope.curPage = p;
        };
        scope.prev = function(){scope.goPage(--scope.curPage);};
        scope.next = function(){scope.goPage(++scope.curPage);};
      }
    };
  }

  function startFrom() {
    return function(input, start) {
      return input.slice(parseInt(start));
    }
  }

  function DataFactory(){
    return [
      {
        "name": "Maria Cotton",
        "email": "mariacotton@comtext.com"
      },
      {
        "name": "Vinson Prince",
        "email": "vinsonprince@comtext.com"
      },
      {
        "name": "Dejesus Maldonado",
        "email": "dejesusmaldonado@comtext.com"
      },
      {
        "name": "Kathie Leonard",
        "email": "kathieleonard@comtext.com"
      },
      {
        "name": "Sheppard Snow",
        "email": "sheppardsnow@comtext.com"
      },
      {
        "name": "Janette Buchanan",
        "email": "janettebuchanan@comtext.com"
      },
      {
        "name": "Casandra Skinner",
        "email": "casandraskinner@comtext.com"
      },
      {
        "name": "Rosa Knowles",
        "email": "rosaknowles@comtext.com"
      },
      {
        "name": "Coleen Joyner",
        "email": "coleenjoyner@comtext.com"
      },
      {
        "name": "Santos Martin",
        "email": "santosmartin@comtext.com"
      },
      {
        "name": "Cross Perry",
        "email": "crossperry@comtext.com"
      },
      {
        "name": "Sherri Pruitt",
        "email": "sherripruitt@comtext.com"
      },
      {
        "name": "Clay Vega",
        "email": "clayvega@comtext.com"
      },
      {
        "name": "Ellis Hernandez",
        "email": "ellishernandez@comtext.com"
      },
      {
        "name": "Berta Jimenez",
        "email": "bertajimenez@comtext.com"
      },
      {
        "name": "Jami Silva",
        "email": "jamisilva@comtext.com"
      },
      {
        "name": "Kellie Wong",
        "email": "kelliewong@comtext.com"
      },
      {
        "name": "Annie Torres",
        "email": "annietorres@comtext.com"
      },
      {
        "name": "Haley Sutton",
        "email": "haleysutton@comtext.com"
      },
      {
        "name": "Rochelle Kidd",
        "email": "rochellekidd@comtext.com"
      },
      {
        "name": "Mitzi Harris",
        "email": "mitziharris@comtext.com"
      },
      {
        "name": "Stout Wells",
        "email": "stoutwells@comtext.com"
      },
      {
        "name": "Kim Callahan",
        "email": "kimcallahan@comtext.com"
      },
      {
        "name": "Whitney Sparks",
        "email": "whitneysparks@comtext.com"
      },
      {
        "name": "Theresa Hardy",
        "email": "theresahardy@comtext.com"
      },
      {
        "name": "Caroline Jarvis",
        "email": "carolinejarvis@comtext.com"
      },
      {
        "name": "Olsen Delacruz",
        "email": "olsendelacruz@comtext.com"
      },
      {
        "name": "Stuart Wade",
        "email": "stuartwade@comtext.com"
      },
      {
        "name": "Gamble Goff",
        "email": "gamblegoff@comtext.com"
      },
      {
        "name": "Duncan Norman",
        "email": "duncannorman@comtext.com"
      },
      {
        "name": "Kelley Britt",
        "email": "kelleybritt@comtext.com"
      },
      {
        "name": "Harrington Flynn",
        "email": "harringtonflynn@comtext.com"
      },
      {
        "name": "Clayton Spence",
        "email": "claytonspence@comtext.com"
      },
      {
        "name": "Roberts Dillard",
        "email": "robertsdillard@comtext.com"
      },
      {
        "name": "Flossie Woodard",
        "email": "flossiewoodard@comtext.com"
      },
      {
        "name": "Estrada Davenport",
        "email": "estradadavenport@comtext.com"
      },
      {
        "name": "Ofelia Hubbard",
        "email": "ofeliahubbard@comtext.com"
      },
      {
        "name": "Rivers Rodriquez",
        "email": "riversrodriquez@comtext.com"
      },
      {
        "name": "Conway Peck",
        "email": "conwaypeck@comtext.com"
      },
      {
        "name": "Jody Dudley",
        "email": "jodydudley@comtext.com"
      },
      {
        "name": "Erin Morris",
        "email": "erinmorris@comtext.com"
      },
      {
        "name": "Christine Baxter",
        "email": "christinebaxter@comtext.com"
      },
      {
        "name": "Preston Little",
        "email": "prestonlittle@comtext.com"
      },
      {
        "name": "Brady Mccormick",
        "email": "bradymccormick@comtext.com"
      },
      {
        "name": "Tia Salinas",
        "email": "tiasalinas@comtext.com"
      },
      {
        "name": "Minnie Patrick",
        "email": "minniepatrick@comtext.com"
      },
      {
        "name": "Jodie Calhoun",
        "email": "jodiecalhoun@comtext.com"
      },
      {
        "name": "Etta Peterson",
        "email": "ettapeterson@comtext.com"
      },
      {
        "name": "Shaffer Lester",
        "email": "shafferlester@comtext.com"
      },
      {
        "name": "Gill Santos",
        "email": "gillsantos@comtext.com"
      },
      {
        "name": "Natasha Flores",
        "email": "natashaflores@comtext.com"
      },
      {
        "name": "Rosanne Dalton",
        "email": "rosannedalton@comtext.com"
      },
      {
        "name": "Janis Buckner",
        "email": "janisbuckner@comtext.com"
      },
      {
        "name": "Sandra Swanson",
        "email": "sandraswanson@comtext.com"
      },
      {
        "name": "Lauri Vazquez",
        "email": "laurivazquez@comtext.com"
      },
      {
        "name": "Kaye Lyons",
        "email": "kayelyons@comtext.com"
      },
      {
        "name": "Corrine Odom",
        "email": "corrineodom@comtext.com"
      },
      {
        "name": "Benson Camacho",
        "email": "bensoncamacho@comtext.com"
      },
      {
        "name": "Snyder Boyle",
        "email": "snyderboyle@comtext.com"
      },
      {
        "name": "Sondra Beck",
        "email": "sondrabeck@comtext.com"
      },
      {
        "name": "Donovan Dorsey",
        "email": "donovandorsey@comtext.com"
      },
      {
        "name": "Riddle Medina",
        "email": "riddlemedina@comtext.com"
      },
      {
        "name": "Aguilar Fulton",
        "email": "aguilarfulton@comtext.com"
      },
      {
        "name": "Baird Mcleod",
        "email": "bairdmcleod@comtext.com"
      },
      {
        "name": "Vicky Sheppard",
        "email": "vickysheppard@comtext.com"
      },
      {
        "name": "Penelope Sullivan",
        "email": "penelopesullivan@comtext.com"
      },
      {
        "name": "Sonja Wilcox",
        "email": "sonjawilcox@comtext.com"
      },
      {
        "name": "Pollard Mayer",
        "email": "pollardmayer@comtext.com"
      },
      {
        "name": "Benton Macdonald",
        "email": "bentonmacdonald@comtext.com"
      },
      {
        "name": "Joyce Wyatt",
        "email": "joycewyatt@comtext.com"
      },
      {
        "name": "Roth Case",
        "email": "rothcase@comtext.com"
      },
      {
        "name": "Liliana Colon",
        "email": "lilianacolon@comtext.com"
      },
      {
        "name": "Milagros House",
        "email": "milagroshouse@comtext.com"
      },
      {
        "name": "Angela Hamilton",
        "email": "angelahamilton@comtext.com"
      },
      {
        "name": "Crawford Owen",
        "email": "crawfordowen@comtext.com"
      },
      {
        "name": "Dora Dixon",
        "email": "doradixon@comtext.com"
      },
      {
        "name": "Robles Lamb",
        "email": "robleslamb@comtext.com"
      },
      {
        "name": "Kimberly Moran",
        "email": "kimberlymoran@comtext.com"
      },
      {
        "name": "Hunt Murray",
        "email": "huntmurray@comtext.com"
      },
      {
        "name": "Mejia Cline",
        "email": "mejiacline@comtext.com"
      },
      {
        "name": "Foley Padilla",
        "email": "foleypadilla@comtext.com"
      },
      {
        "name": "Duke Pace",
        "email": "dukepace@comtext.com"
      },
      {
        "name": "Rich Yang",
        "email": "richyang@comtext.com"
      },
      {
        "name": "Durham Parsons",
        "email": "durhamparsons@comtext.com"
      },
      {
        "name": "Nita Robertson",
        "email": "nitarobertson@comtext.com"
      },
      {
        "name": "Larson Delgado",
        "email": "larsondelgado@comtext.com"
      },
      {
        "name": "Mcgee Bullock",
        "email": "mcgeebullock@comtext.com"
      },
      {
        "name": "Josefa Garrett",
        "email": "josefagarrett@comtext.com"
      },
      {
        "name": "Pierce Morin",
        "email": "piercemorin@comtext.com"
      },
      {
        "name": "Sherrie Wiley",
        "email": "sherriewiley@comtext.com"
      },
      {
        "name": "Tricia Mclean",
        "email": "triciamclean@comtext.com"
      },
      {
        "name": "Debra Frazier",
        "email": "debrafrazier@comtext.com"
      },
      {
        "name": "Mccray Oneill",
        "email": "mccrayoneill@comtext.com"
      },
      {
        "name": "Leblanc Schneider",
        "email": "leblancschneider@comtext.com"
      },
      {
        "name": "Bryan Lloyd",
        "email": "bryanlloyd@comtext.com"
      },
      {
        "name": "Chambers Adkins",
        "email": "chambersadkins@comtext.com"
      },
      {
        "name": "Boyle Fisher",
        "email": "boylefisher@comtext.com"
      },
      {
        "name": "Bowers Parks",
        "email": "bowersparks@comtext.com"
      }
    ];
  }

})();