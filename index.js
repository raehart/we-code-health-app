// Badges using icons
function Badge (name, icon, bonusPts) {
  this.name = name;
  this.icon = path + icon;
  this.bonusPts = bonusPts;
};

var path = "styles/img/";


//Badge constructors

var mvp = new Badge("MVP", "shield.png", 10);
var threeActivities = new Badge("3 Activities", "bronze.png", 5);
var fiveActivities = new Badge("5 Activities", "silver.png", 5);
var tenActivities = new Badge("10 Activities", "gold.png", 10);
var joinTeam = new Badge("Joined a Team", "shield.png", 5);

//temp global badge variable
var userBadge =[threeActivities];


//display badges. Adds badge to userBadges
function earnBadge(badgeEarned){
  userBadge.push(badgeEarned);
  console.log(userBadge);
  for (i=0; i < userBadge.length; i++) {
    console.log(userBadge[i].icon);
  $('div.badges').append("<img src=" + userBadge[i].icon + "></img> <p>" + userBadge[i].name + "</p>");
  }
};

earnBadge(mvp);
