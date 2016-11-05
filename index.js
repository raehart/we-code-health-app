//User constructora

function User (firstName, lastName, dob, gender, weight, height, city, state, indPoints, team, userBadge, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
  this.gender = gender;
  this.weight = weight;
  this.height = height;
  this.city = city;
  this.state = state;
  this.indPoints = indPoints;
  this.team = team;
  this.userBadge = userBadge
  this.avatar = avatar;  
};


//Activity constructor 
function Activity(name, points, time, icon){
  this.name = name;
  this.points = points;
  this.time = time;
  this.icon = icon;
}


// Badge constructors
function Badge (name, icon, bonusPts) {
  this.name = name;
  this.icon = path + icon;
  this.bonusPts = bonusPts;
};

//Team constructor
function Team (name, members, teamPts) {
  this.name = name;
  this.members = members;
  this.teamPts = teamPts;
};

var path = "./styles/img/";
var mvp = new Badge("MVP", "badge.png", 10);
var threeActivities = new Badge("3 Activities", "bronze.png", 5);
var fiveActivities = new Badge("5 Activities", "silver.png", 5);
var tenActivities = new Badge("10 Activities", "gold.png", 10);
var joinTeam = new Badge("Joined a Team", "shield.png", 5);

//mock data
//users
var Jen = new User("Jen","Ferro","","Female","","","Portland","OR",100,"Oscar",[joinTeam,mvp,threeActivities,fiveActivities], "");
var James = new User("James","Smith","","Male","","","Portland","OR",110,"Oscar",[joinTeam,mvp,threeActivities,fiveActivities],"");
var Jeanette = new User("Jeanette","Valli","","Female","","","Portland","OR",60,"bigBird",[joinTeam,threeActivities],"");
var Brigette = new User("Brigette","Eckert","","Female","","","Portland","OR",180,"bigBird",[joinTeam,mvp,threeActivities,fiveActivities,tenActivities],"");
//teams
var bigBird = new Team("Big Bird", [Brigette,Jeanette],240);
var Oscar = new Team("Oscar", [James,Jen],210);
//activites 



 //Adds badge to userBadges when user earns new badge
function earnBadge(badgeEarned){
  userBadge.push(badgeEarned);
};

//earnBadge(mvp);

//Display individual data 

function displayUser(currentUser){
  $('div.solopoints').append("<p>My Points" + currentUser.indPoints + "/ 500 </p> <p> Progress towards $25 Nike Gift Card");
  for (i=0; i < currentUser.userBadge.length; i++) {
      console.log(currentUser.userBadge[i].icon);
    $('div.badges').append("<img src=" + currentUser.userBadge[i].icon + "></img> <p>" + currentUser.userBadge[i].name + "</p>");
    }

};

//display team dat
function displayTeam(userTeam){
  console.log(userTeam);
  $('div.teamPts').append("<h3> My Team: " + userTeam.name + "</h3> <p>Team Points" + userTeam.teamPts + "</p>");
  for (i=0; i < userTeam.members.length; i++) {
    $('div.teamMembers').append(userTeam.members[i].name);
    }
};

function displayOpt(optTeam){
  console.log(optTeam);
  $('div.optPts').append("<h3> Rival Team: " + optTeam.name + "</h3> <p>Team Points" + optTeam.teamPts + "</p>");
  for (i=0; i < optTeam.members.length; i++) {
    $('div.optMembers').append(optTeam.members[i].name);
    }
};

displayUser(Jen);
displayTeam(Oscar);
displayOpt(bigBird);

//add activity 


//set up alogirthm to determine points per time. low intensity .5pt per min, high intensity = 1 pt per mins

