/* ============================================================ DATA ============================================================ */
const TEAM_SEASONS=[
 {team:"Philadelphia Warriors",year:1962,players:[{n:"Wilt Chamberlain",pos:"C",ppg:50.4,rpg:25.7,apg:2.4,imp:97},{n:"Paul Arizin",pos:"SF",ppg:21.9,rpg:7.9,apg:2.0,imp:80},{n:"Tom Gola",pos:"SG",ppg:15.5,rpg:9.3,apg:5.4,imp:78},{n:"Guy Rodgers",pos:"PG",ppg:8.9,rpg:4.0,apg:6.2,imp:74},{n:"Al Attles",pos:"PG",ppg:7.8,rpg:2.9,apg:3.0,imp:70}]},
 {team:"Los Angeles Lakers",year:1972,players:[{n:"Jerry West",pos:"PG",ppg:25.8,rpg:4.2,apg:9.7,imp:92},{n:"Gail Goodrich",pos:"SG",ppg:25.9,rpg:3.7,apg:4.5,imp:84},{n:"Wilt Chamberlain",pos:"C",ppg:14.8,rpg:19.2,apg:4.0,imp:90},{n:"Jim McMillian",pos:"SF",ppg:18.8,rpg:6.5,apg:2.7,imp:78},{n:"Happy Hairston",pos:"PF",ppg:13.1,rpg:13.1,apg:2.0,imp:76}]},
 {team:"Philadelphia 76ers",year:1983,players:[{n:"Moses Malone",pos:"C",ppg:24.5,rpg:15.3,apg:1.3,imp:90},{n:"Julius Erving",pos:"SF",ppg:21.4,rpg:6.5,apg:3.7,imp:88},{n:"Andrew Toney",pos:"SG",ppg:19.7,rpg:2.5,apg:4.6,imp:80},{n:"Maurice Cheeks",pos:"PG",ppg:12.5,rpg:2.9,apg:6.9,imp:80},{n:"Bobby Jones",pos:"PF",ppg:9.0,rpg:4.5,apg:2.2,imp:76}]},
 {team:"Boston Celtics",year:1986,players:[{n:"Larry Bird",pos:"SF",ppg:25.8,rpg:9.8,apg:6.8,imp:97},{n:"Kevin McHale",pos:"PF",ppg:21.3,rpg:8.1,apg:2.7,imp:88},{n:"Robert Parish",pos:"C",ppg:16.1,rpg:9.5,apg:1.8,imp:84},{n:"Dennis Johnson",pos:"PG",ppg:15.6,rpg:3.4,apg:5.8,imp:82},{n:"Danny Ainge",pos:"SG",ppg:10.7,rpg:2.9,apg:5.1,imp:78}]},
 {team:"Los Angeles Lakers",year:1987,players:[{n:"Magic Johnson",pos:"PG",ppg:23.9,rpg:6.3,apg:12.2,imp:97},{n:"James Worthy",pos:"SF",ppg:19.4,rpg:5.7,apg:2.8,imp:86},{n:"Kareem Abdul-Jabbar",pos:"C",ppg:17.5,rpg:6.7,apg:2.6,imp:85},{n:"Byron Scott",pos:"SG",ppg:17.0,rpg:3.4,apg:3.4,imp:80},{n:"A.C. Green",pos:"PF",ppg:10.8,rpg:7.8,apg:1.1,imp:76},{n:"Michael Cooper",pos:"SG",ppg:10.5,rpg:2.6,apg:4.5,imp:76}]},
 {team:"Detroit Pistons",year:1989,players:[{n:"Isiah Thomas",pos:"PG",ppg:18.2,rpg:3.4,apg:8.3,imp:86},{n:"Joe Dumars",pos:"SG",ppg:17.2,rpg:2.3,apg:5.7,imp:82},{n:"Mark Aguirre",pos:"SF",ppg:15.5,rpg:3.7,apg:2.5,imp:78},{n:"Bill Laimbeer",pos:"C",ppg:13.7,rpg:9.7,apg:1.9,imp:78},{n:"Dennis Rodman",pos:"PF",ppg:9.0,rpg:9.4,apg:1.3,imp:82},{n:"Vinnie Johnson",pos:"SG",ppg:13.8,rpg:2.9,apg:3.4,imp:74}]},
 {team:"Phoenix Suns",year:1993,players:[{n:"Charles Barkley",pos:"PF",ppg:25.6,rpg:12.2,apg:5.1,imp:93},{n:"Kevin Johnson",pos:"PG",ppg:16.1,rpg:3.6,apg:7.8,imp:82},{n:"Dan Majerle",pos:"SG",ppg:16.9,rpg:4.6,apg:3.8,imp:78},{n:"Tom Chambers",pos:"SF",ppg:12.2,rpg:4.1,apg:1.4,imp:74},{n:"Cedric Ceballos",pos:"SF",ppg:12.8,rpg:5.2,apg:0.8,imp:72}]},
 {team:"Houston Rockets",year:1994,players:[{n:"Hakeem Olajuwon",pos:"C",ppg:27.3,rpg:11.9,apg:3.6,imp:95},{n:"Otis Thorpe",pos:"PF",ppg:14.0,rpg:10.6,apg:2.8,imp:78},{n:"Vernon Maxwell",pos:"SG",ppg:13.4,rpg:2.7,apg:4.0,imp:74},{n:"Kenny Smith",pos:"PG",ppg:12.8,rpg:2.2,apg:4.1,imp:74},{n:"Robert Horry",pos:"SF",ppg:9.9,rpg:5.4,apg:2.9,imp:76}]},
 {team:"Chicago Bulls",year:1996,players:[{n:"Michael Jordan",pos:"SG",ppg:30.4,rpg:6.6,apg:4.3,imp:98},{n:"Scottie Pippen",pos:"SF",ppg:19.4,rpg:6.4,apg:5.9,imp:90},{n:"Dennis Rodman",pos:"PF",ppg:5.5,rpg:14.9,apg:2.5,imp:84},{n:"Toni Kukoc",pos:"SF",ppg:13.1,rpg:4.0,apg:3.5,imp:80},{n:"Ron Harper",pos:"PG",ppg:7.4,rpg:2.7,apg:2.6,imp:74},{n:"Luc Longley",pos:"C",ppg:9.1,rpg:5.1,apg:1.9,imp:72},{n:"Steve Kerr",pos:"SG",ppg:8.4,rpg:1.3,apg:2.3,imp:72}]},
 {team:"Utah Jazz",year:1998,players:[{n:"Karl Malone",pos:"PF",ppg:27.0,rpg:10.3,apg:3.9,imp:92},{n:"John Stockton",pos:"PG",ppg:12.0,rpg:2.7,apg:8.5,imp:86},{n:"Jeff Hornacek",pos:"SG",ppg:14.2,rpg:3.0,apg:4.1,imp:78},{n:"Bryon Russell",pos:"SF",ppg:10.8,rpg:3.9,apg:1.6,imp:72},{n:"Greg Ostertag",pos:"C",ppg:7.4,rpg:7.3,apg:0.8,imp:68}]},
 {team:"Los Angeles Lakers",year:2001,players:[{n:"Shaquille O'Neal",pos:"C",ppg:28.7,rpg:12.7,apg:3.7,imp:97},{n:"Kobe Bryant",pos:"SG",ppg:28.5,rpg:5.9,apg:5.0,imp:93},{n:"Derek Fisher",pos:"PG",ppg:11.5,rpg:2.9,apg:4.4,imp:76},{n:"Rick Fox",pos:"SF",ppg:9.6,rpg:4.7,apg:3.5,imp:74},{n:"Horace Grant",pos:"PF",ppg:8.5,rpg:7.7,apg:2.4,imp:74},{n:"Robert Horry",pos:"PF",ppg:4.8,rpg:5.2,apg:2.0,imp:74}]},
 {team:"Detroit Pistons",year:2004,players:[{n:"Chauncey Billups",pos:"PG",ppg:16.9,rpg:3.5,apg:5.7,imp:84},{n:"Richard Hamilton",pos:"SG",ppg:17.6,rpg:3.9,apg:4.0,imp:82},{n:"Rasheed Wallace",pos:"PF",ppg:13.7,rpg:6.9,apg:1.7,imp:82},{n:"Ben Wallace",pos:"C",ppg:9.5,rpg:12.4,apg:1.7,imp:84},{n:"Tayshaun Prince",pos:"SF",ppg:10.3,rpg:4.8,apg:2.3,imp:76}]},
 {team:"Boston Celtics",year:2008,players:[{n:"Kevin Garnett",pos:"PF",ppg:18.8,rpg:9.2,apg:3.4,imp:90},{n:"Paul Pierce",pos:"SF",ppg:19.6,rpg:5.1,apg:4.5,imp:88},{n:"Ray Allen",pos:"SG",ppg:17.4,rpg:3.7,apg:3.1,imp:84},{n:"Rajon Rondo",pos:"PG",ppg:10.6,rpg:4.2,apg:5.1,imp:80},{n:"Kendrick Perkins",pos:"C",ppg:6.9,rpg:6.1,apg:1.0,imp:72}]},
 {team:"Miami Heat",year:2013,players:[{n:"LeBron James",pos:"SF",ppg:26.8,rpg:8.0,apg:7.3,imp:98},{n:"Dwyane Wade",pos:"SG",ppg:21.2,rpg:5.0,apg:5.1,imp:88},{n:"Chris Bosh",pos:"PF",ppg:16.6,rpg:6.8,apg:1.7,imp:84},{n:"Mario Chalmers",pos:"PG",ppg:8.6,rpg:2.4,apg:3.5,imp:74},{n:"Shane Battier",pos:"SF",ppg:6.6,rpg:2.6,apg:1.4,imp:72},{n:"Chris Andersen",pos:"C",ppg:4.9,rpg:4.2,apg:0.5,imp:70}]},
 {team:"Oklahoma City Thunder",year:2014,players:[{n:"Kevin Durant",pos:"SF",ppg:32.0,rpg:7.4,apg:5.5,imp:96},{n:"Russell Westbrook",pos:"PG",ppg:21.8,rpg:5.7,apg:6.9,imp:90},{n:"Serge Ibaka",pos:"PF",ppg:15.1,rpg:8.8,apg:1.0,imp:80},{n:"Reggie Jackson",pos:"SG",ppg:13.1,rpg:3.9,apg:4.1,imp:76},{n:"Steven Adams",pos:"C",ppg:3.3,rpg:4.1,apg:0.5,imp:70}]},
 {team:"Cleveland Cavaliers",year:2016,players:[{n:"LeBron James",pos:"SF",ppg:25.3,rpg:7.4,apg:6.8,imp:97},{n:"Kyrie Irving",pos:"PG",ppg:19.6,rpg:3.0,apg:4.7,imp:88},{n:"Kevin Love",pos:"PF",ppg:16.0,rpg:9.9,apg:2.4,imp:84},{n:"J.R. Smith",pos:"SG",ppg:12.4,rpg:2.8,apg:1.7,imp:76},{n:"Tristan Thompson",pos:"C",ppg:7.8,rpg:9.0,apg:0.8,imp:74}]},
 {team:"Golden State Warriors",year:2017,players:[{n:"Stephen Curry",pos:"PG",ppg:25.3,rpg:4.5,apg:6.6,imp:97},{n:"Kevin Durant",pos:"SF",ppg:25.1,rpg:8.3,apg:4.8,imp:96},{n:"Klay Thompson",pos:"SG",ppg:22.3,rpg:3.7,apg:2.1,imp:88},{n:"Draymond Green",pos:"PF",ppg:10.2,rpg:7.9,apg:7.0,imp:88},{n:"Andre Iguodala",pos:"SF",ppg:7.6,rpg:4.0,apg:3.4,imp:78},{n:"Zaza Pachulia",pos:"C",ppg:6.1,rpg:5.9,apg:1.9,imp:70}]},
 {team:"Houston Rockets",year:2019,players:[{n:"James Harden",pos:"SG",ppg:36.1,rpg:6.6,apg:7.5,imp:93},{n:"Chris Paul",pos:"PG",ppg:15.6,rpg:4.6,apg:8.2,imp:84},{n:"Clint Capela",pos:"C",ppg:16.6,rpg:12.7,apg:1.4,imp:82},{n:"Eric Gordon",pos:"SG",ppg:16.2,rpg:2.2,apg:1.9,imp:78},{n:"P.J. Tucker",pos:"PF",ppg:7.3,rpg:5.8,apg:1.2,imp:74}]},
 {team:"Milwaukee Bucks",year:2021,players:[{n:"Giannis Antetokounmpo",pos:"PF",ppg:28.1,rpg:11.0,apg:5.9,imp:97},{n:"Khris Middleton",pos:"SF",ppg:20.4,rpg:6.0,apg:5.4,imp:85},{n:"Jrue Holiday",pos:"PG",ppg:17.7,rpg:4.5,apg:6.1,imp:84},{n:"Brook Lopez",pos:"C",ppg:12.3,rpg:5.0,apg:1.1,imp:78},{n:"Bobby Portis",pos:"PF",ppg:11.4,rpg:7.1,apg:1.2,imp:74}]},
 {team:"Denver Nuggets",year:2023,players:[{n:"Nikola Jokic",pos:"C",ppg:24.5,rpg:11.8,apg:9.8,imp:97},{n:"Jamal Murray",pos:"PG",ppg:20.0,rpg:4.0,apg:6.2,imp:85},{n:"Aaron Gordon",pos:"PF",ppg:16.3,rpg:6.6,apg:3.0,imp:80},{n:"Michael Porter Jr.",pos:"SF",ppg:17.4,rpg:5.5,apg:1.0,imp:80},{n:"Kentavious Caldwell-Pope",pos:"SG",ppg:10.8,rpg:2.4,apg:2.4,imp:76}]},
 {team:"Boston Celtics",year:2024,players:[{n:"Jayson Tatum",pos:"SF",ppg:26.9,rpg:8.1,apg:4.9,imp:91},{n:"Jaylen Brown",pos:"SG",ppg:23.0,rpg:5.5,apg:3.6,imp:87},{n:"Kristaps Porzingis",pos:"C",ppg:20.1,rpg:7.2,apg:2.0,imp:82},{n:"Jrue Holiday",pos:"PG",ppg:12.5,rpg:5.4,apg:4.8,imp:82},{n:"Derrick White",pos:"SG",ppg:15.2,rpg:4.2,apg:5.2,imp:82},{n:"Al Horford",pos:"C",ppg:8.6,rpg:6.4,apg:2.6,imp:76}]},
 {team:"Oklahoma City Thunder",year:2025,players:[{n:"Shai Gilgeous-Alexander",pos:"PG",ppg:32.7,rpg:5.0,apg:6.4,imp:96},{n:"Jalen Williams",pos:"SF",ppg:21.6,rpg:5.3,apg:5.1,imp:85},{n:"Chet Holmgren",pos:"C",ppg:15.0,rpg:8.0,apg:1.9,imp:83},{n:"Isaiah Hartenstein",pos:"C",ppg:11.2,rpg:10.7,apg:3.8,imp:80},{n:"Lu Dort",pos:"SG",ppg:10.1,rpg:4.1,apg:1.7,imp:78},{n:"Alex Caruso",pos:"SG",ppg:7.1,rpg:2.9,apg:2.9,imp:76}]},
 {team:"New York Knicks",year:2026,players:[{n:"Jalen Brunson",pos:"PG",ppg:26.0,rpg:2.9,apg:6.8,imp:91},{n:"Karl-Anthony Towns",pos:"C",ppg:22.0,rpg:12.0,apg:3.0,imp:87},{n:"OG Anunoby",pos:"SF",ppg:16.7,rpg:5.2,apg:2.0,imp:82},{n:"Mikal Bridges",pos:"SG",ppg:14.4,rpg:3.8,apg:3.7,imp:81},{n:"Josh Hart",pos:"SF",ppg:12.0,rpg:7.4,apg:4.8,imp:80},{n:"Mitchell Robinson",pos:"C",ppg:5.5,rpg:8.8,apg:0.8,imp:76}]},
 {team:"Oklahoma City Thunder",year:2026,players:[{n:"Shai Gilgeous-Alexander",pos:"PG",ppg:31.1,rpg:4.3,apg:6.6,imp:96},{n:"Chet Holmgren",pos:"PF",ppg:17.1,rpg:8.9,apg:1.7,imp:88},{n:"Jalen Williams",pos:"SG",ppg:17.1,rpg:4.6,apg:5.5,imp:87},{n:"Isaiah Hartenstein",pos:"C",ppg:9.2,rpg:9.4,apg:3.5,imp:82},{n:"Luguentz Dort",pos:"SF",ppg:8.3,rpg:3.6,apg:1.2,imp:80},{n:"Cason Wallace",pos:"SG",ppg:8.6,rpg:3.1,apg:2.6,imp:80},{n:"Ajay Mitchell",pos:"SG",ppg:13.6,rpg:3.3,apg:3.6,imp:80},{n:"Isaiah Joe",pos:"SG",ppg:11.1,rpg:2.5,apg:1.3,imp:78},{n:"Jaylin Williams",pos:"PF",ppg:7.2,rpg:5.5,apg:2.4,imp:74}]},
 {team:"Cleveland Cavaliers",year:2026,players:[{n:"Donovan Mitchell",pos:"SG",ppg:27.9,rpg:4.5,apg:5.7,imp:91},{n:"Evan Mobley",pos:"PF",ppg:18.2,rpg:9.0,apg:3.6,imp:89},{n:"Darius Garland",pos:"PG",ppg:18.0,rpg:2.4,apg:6.9,imp:85},{n:"James Harden",pos:"PG",ppg:20.5,rpg:4.8,apg:7.7,imp:85},{n:"Jarrett Allen",pos:"C",ppg:15.4,rpg:8.5,apg:1.8,imp:84},{n:"De'Andre Hunter",pos:"SF",ppg:14.0,rpg:4.2,apg:2.1,imp:81},{n:"Jaylon Tyson",pos:"SG",ppg:13.2,rpg:5.1,apg:2.2,imp:79},{n:"Sam Merrill",pos:"SG",ppg:12.8,rpg:2.6,apg:2.4,imp:77},{n:"Dean Wade",pos:"PF",ppg:5.8,rpg:4.2,apg:1.5,imp:73}]},
];
const MULTI={
 "Magic Johnson":["PG","SG","SF"],"Michael Jordan":["SG","SF"],"Kobe Bryant":["SG","SF"],"James Harden":["SG","PG"],"Russell Westbrook":["PG","SG"],"Dwyane Wade":["SG","PG"],
 "Jrue Holiday":["PG","SG"],"Paul Pierce":["SF","SG"],"Khris Middleton":["SF","SG"],"Rick Fox":["SF","SG"],"Klay Thompson":["SG","SF"],
 "Larry Bird":["SF","PF"],"LeBron James":["SF","PF"],"Kevin Durant":["SF","PF","C"],"Scottie Pippen":["SF","PF"],"James Worthy":["SF","PF"],"Robert Horry":["PF","SF"],
 "Charles Barkley":["PF","SF"],"Dennis Rodman":["PF","SF"],"Toni Kukoc":["SF","PF","SG"],"Andre Iguodala":["SF","SG","PF"],"Shane Battier":["SF","PF"],"P.J. Tucker":["PF","SF"],
 "Aaron Gordon":["PF","SF"],"Michael Porter Jr.":["SF","PF"],"Otis Thorpe":["PF","C"],
 "Kevin McHale":["PF","C"],"Kevin Garnett":["PF","C"],"Chris Bosh":["PF","C"],"Serge Ibaka":["PF","C"],"Kevin Love":["PF","C"],"Draymond Green":["PF","C"],
 "Ben Wallace":["C","PF"],"Rasheed Wallace":["PF","C"],"Tristan Thompson":["C","PF"],"Bobby Portis":["PF","C"],"Giannis Antetokounmpo":["PF","SF","C"],
 "Jaylen Brown":["SG","SF"],"Derrick White":["SG","PG"],"Al Horford":["C","PF"],"Kristaps Porzingis":["C","PF"],
 "Jalen Williams":["SF","SG"],"Chet Holmgren":["C","PF"],"Alex Caruso":["SG","PG"],
 "Karl-Anthony Towns":["C","PF"],"Mikal Bridges":["SF","SG"],"Josh Hart":["SG","SF"],
};
/* Merge the bulk 2016–2024 league (companion file rosters-2016-2024.js) if present.
   Dedupe by team+year so curated iconic squads win over the auto-generated ones. */
if(window.EXTRA_TEAM_SEASONS&&Array.isArray(window.EXTRA_TEAM_SEASONS)){
  const _seen=new Set(TEAM_SEASONS.map(t=>t.team+"|"+t.year));
  window.EXTRA_TEAM_SEASONS.forEach(t=>{const k=t.team+"|"+t.year;if(!_seen.has(k)){_seen.add(k);TEAM_SEASONS.push(t);}});
}
const ALL_PLAYERS=[];
TEAM_SEASONS.forEach(ts=>ts.players.forEach(p=>ALL_PLAYERS.push(Object.assign({},p,{tm:ts.team,yr:ts.year}))));
const NBA_TEAMS=[
  {name:"Boston Celtics",conf:"E",rating:96},{name:"Cleveland Cavaliers",conf:"E",rating:95},{name:"New York Knicks",conf:"E",rating:93},{name:"Milwaukee Bucks",conf:"E",rating:91},
  {name:"Orlando Magic",conf:"E",rating:90},{name:"Indiana Pacers",conf:"E",rating:89},{name:"Philadelphia 76ers",conf:"E",rating:88},{name:"Miami Heat",conf:"E",rating:87},
  {name:"Atlanta Hawks",conf:"E",rating:86},{name:"Detroit Pistons",conf:"E",rating:86},{name:"Chicago Bulls",conf:"E",rating:84},{name:"Toronto Raptors",conf:"E",rating:82},
  {name:"Charlotte Hornets",conf:"E",rating:81},{name:"Brooklyn Nets",conf:"E",rating:80},{name:"Washington Wizards",conf:"E",rating:79},
  {name:"Oklahoma City Thunder",conf:"W",rating:97},{name:"Denver Nuggets",conf:"W",rating:95},{name:"Minnesota Timberwolves",conf:"W",rating:92},{name:"LA Clippers",conf:"W",rating:91},
  {name:"Houston Rockets",conf:"W",rating:90},{name:"Dallas Mavericks",conf:"W",rating:90},{name:"Los Angeles Lakers",conf:"W",rating:89},{name:"Memphis Grizzlies",conf:"W",rating:89},
  {name:"Golden State Warriors",conf:"W",rating:88},{name:"Phoenix Suns",conf:"W",rating:87},{name:"Sacramento Kings",conf:"W",rating:85},{name:"San Antonio Spurs",conf:"W",rating:85},
  {name:"New Orleans Pelicans",conf:"W",rating:84},{name:"Portland Trail Blazers",conf:"W",rating:81},{name:"Utah Jazz",conf:"W",rating:80},
];
/* Recenter the backdrop league so a good drafted lineup reads as a genuine playoff team rather
   than below-average. A uniform shift keeps the backdrop teams' relative standings identical. */
NBA_TEAMS.forEach(t=>{t.rating-=8;});
/* current backdrop league mean — used to scale marquee-player form so it tracks any shift */
const LG_MEAN=NBA_TEAMS.reduce((a,t)=>a+t.rating,0)/NBA_TEAMS.length;
/* marquee player per backdrop franchise — carries a simulated season so awards are contested league-wide */
const BACKDROP_STARS={
 "Boston Celtics":{n:"Jayson Tatum",pos:"SF",ppg:27,rpg:8,apg:4,imp:92},"Cleveland Cavaliers":{n:"Donovan Mitchell",pos:"SG",ppg:27,rpg:4,apg:6,imp:90},
 "New York Knicks":{n:"Jalen Brunson",pos:"PG",ppg:28,rpg:4,apg:7,imp:92},"Milwaukee Bucks":{n:"Giannis Antetokounmpo",pos:"PF",ppg:30,rpg:11,apg:6,imp:96},
 "Orlando Magic":{n:"Paolo Banchero",pos:"SF",ppg:23,rpg:7,apg:5,imp:85},"Indiana Pacers":{n:"Tyrese Haliburton",pos:"PG",ppg:20,rpg:4,apg:11,imp:88},
 "Philadelphia 76ers":{n:"Joel Embiid",pos:"C",ppg:33,rpg:11,apg:4,imp:91},"Miami Heat":{n:"Bam Adebayo",pos:"C",ppg:20,rpg:10,apg:4,imp:84},
 "Atlanta Hawks":{n:"Trae Young",pos:"PG",ppg:26,rpg:3,apg:11,imp:86},"Detroit Pistons":{n:"Cade Cunningham",pos:"PG",ppg:23,rpg:6,apg:9,imp:88},
 "Chicago Bulls":{n:"Coby White",pos:"SG",ppg:20,rpg:4,apg:5,imp:79},"Toronto Raptors":{n:"Scottie Barnes",pos:"SF",ppg:20,rpg:8,apg:6,imp:82},
 "Charlotte Hornets":{n:"LaMelo Ball",pos:"PG",ppg:24,rpg:5,apg:8,imp:83},"Brooklyn Nets":{n:"Cam Thomas",pos:"SG",ppg:24,rpg:3,apg:4,imp:79},
 "Washington Wizards":{n:"Jordan Poole",pos:"SG",ppg:21,rpg:3,apg:5,imp:77},
 "Oklahoma City Thunder":{n:"Shai Gilgeous-Alexander",pos:"PG",ppg:31,rpg:6,apg:6,imp:96},"Denver Nuggets":{n:"Nikola Jokic",pos:"C",ppg:27,rpg:12,apg:9,imp:97},
 "Minnesota Timberwolves":{n:"Anthony Edwards",pos:"SG",ppg:27,rpg:6,apg:5,imp:92},"LA Clippers":{n:"Kawhi Leonard",pos:"SF",ppg:24,rpg:6,apg:3,imp:90},
 "Houston Rockets":{n:"Alperen Sengun",pos:"C",ppg:21,rpg:10,apg:5,imp:84},"Dallas Mavericks":{n:"Luka Doncic",pos:"PG",ppg:33,rpg:9,apg:9,imp:96},
 "Los Angeles Lakers":{n:"Anthony Davis",pos:"C",ppg:25,rpg:12,apg:3,imp:90},"Memphis Grizzlies":{n:"Ja Morant",pos:"PG",ppg:25,rpg:6,apg:8,imp:86},
 "Golden State Warriors":{n:"Stephen Curry",pos:"PG",ppg:27,rpg:4,apg:6,imp:93},"Phoenix Suns":{n:"Devin Booker",pos:"SG",ppg:27,rpg:4,apg:7,imp:90},
 "Sacramento Kings":{n:"Domantas Sabonis",pos:"C",ppg:19,rpg:13,apg:8,imp:85},"San Antonio Spurs":{n:"Victor Wembanyama",pos:"C",ppg:24,rpg:11,apg:4,imp:94},
 "New Orleans Pelicans":{n:"Zion Williamson",pos:"PF",ppg:24,rpg:6,apg:5,imp:84},"Portland Trail Blazers":{n:"Anfernee Simons",pos:"SG",ppg:21,rpg:3,apg:5,imp:79},
 "Utah Jazz":{n:"Lauri Markkanen",pos:"PF",ppg:23,rpg:8,apg:2,imp:82},
};
const CONF_NAME={E:"Eastern Conference",W:"Western Conference"};
const POS_FULL={PG:"Point Guard",SG:"Shooting Guard",SF:"Small Forward",PF:"Power Forward",C:"Center","6":"Sixth Man"};

/* ============================================================ STATE ============================================================ */
const SLOT_DEFS=[{key:"PG",label:"PG"},{key:"SG",label:"SG"},{key:"SF",label:"SF"},{key:"PF",label:"PF"},{key:"C",label:"C"},{key:"6",label:"6"}];
const POS_LABEL={PG:"PG",SG:"SG",SF:"SF",PF:"PF",C:"C","6":"6th"};
const SPOT_XY={PG:{t:12,l:50},SG:{t:31,l:80},SF:{t:31,l:20},PF:{t:61,l:33},C:{t:65,l:67}};
let roster={PG:null,SG:null,SF:null,PF:null,C:null,"6":null};
let minYr,maxYr,conference="W";
let spinning=false, currentTeam=null, rerollsLeft=1, started=false, movingSlot=null, pickSel=null, sortBy="rating";
let phase="draft", reg=null, po=null, poReveal=0, activeResTab="log", simMode="watch", runSeed=0, pbpMode="quick";
let screen="setup", freePos=false;
let lobby=null; // {seed,from,to,conf} when playing a shared multiplayer league
const SEASON_YEARS=[...new Set(TEAM_SEASONS.map(t=>t.year))].sort((a,b)=>a-b);
const YMIN=SEASON_YEARS[0], YMAX=SEASON_YEARS[SEASON_YEARS.length-1];

/* ============================================================ SEEDED RNG ============================================================ */
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;};}
function hashSeed(){let h=2166136261>>>0;for(const a of arguments){const s=""+a;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}}return h>>>0;}
function gaussFrom(r){return (m,sd)=>{let u=0,v=0;while(!u)u=r();while(!v)v=r();return m+sd*Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);};}
function erf(x){const t=1/(1+0.3275911*Math.abs(x));const y=1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-0.284496736)*t+0.254829592)*t*Math.exp(-x*x);return x>=0?y:-y;}
function normCdf(x){return 0.5*(1+erf(x/Math.SQRT2));}

/* ============================================================ HELPERS ============================================================ */
const $=s=>document.querySelector(s);
function shortName(n){const p=n.split(" ");return p[0][0]+". "+p.slice(1).join(" ");}
function hashHue(s){let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))%360;return h;}
function avatar(p,size){const hue=hashHue(p.n+p.pos);const bg=`hsl(${hue} 42% 30%)`,fg=`hsl(${hue} 52% 66%)`;return `<svg class="ava" width="${size}" height="${size}" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="32" fill="${bg}"/><circle cx="32" cy="24" r="12" fill="${fg}"/><path d="M11 59c0-12 9.5-19 21-19s21 7 21 19z" fill="${fg}"/></svg>`;}
function ordinal(n){const s=["th","st","nd","rd"],v=n%100;return n+(s[(v-20)%10]||s[v]||s[0]);}
function seasonLabel(p){return `${p.yr-1}-${String(p.yr).slice(2)}`;}
function roleClass(pos){return (pos==="PG"||pos==="SG")?"g":(pos==="SF"?"w":"b");}
function rosterFull(){return Object.values(roster).every(Boolean);}
function takenNames(){return new Set(Object.values(roster).filter(Boolean).map(p=>p.n));}
function eligPositions(p){return MULTI[p.n]||[p.pos];}
function openEligibleSlots(p){const e=eligPositions(p);const out=[];["PG","SG","SF","PF","C"].forEach(pos=>{if((freePos||e.includes(pos))&&!roster[pos])out.push(pos);});if(!roster["6"])out.push("6");return out;}
function targetSlot(p){const s=openEligibleSlots(p);return s.length?s[0]:null;}
function inRange(y){return y>=minYr&&y<=maxYr;}
function poolCount(){const t=takenNames();return ALL_PLAYERS.filter(p=>inRange(p.yr)&&!t.has(p.n)).length;}
function teamHasPick(ts){const t=takenNames();return inRange(ts.year)&&ts.players.some(p=>!t.has(p.n)&&openEligibleSlots(p).length);}
function spinnableTeams(){return TEAM_SEASONS.filter(teamHasPick);}
function movableTargets(slotKey){const p=roster[slotKey];if(!p)return [];if(!freePos&&eligPositions(p).length<=1)return [];return SLOT_DEFS.filter(d=>d.key!==slotKey&&!roster[d.key]&&(d.key==="6"||freePos||eligPositions(p).includes(d.key))).map(d=>d.key);}

/* ============================================================ RATINGS ============================================================ */
const OFFW={PG:1.0,SG:1.05,SF:1.05,PF:0.95,C:0.9}, DEFW={PG:0.8,SG:0.85,SF:0.95,PF:1.1,C:1.2};
const clamp=(x,lo,hi)=>Math.max(lo,Math.min(hi,x));
function offI(p){return clamp(p.imp+(p.ppg-18)*0.45+(p.apg-4)*0.6,60,106);}
function defI(p){return clamp(p.imp+(p.rpg-8)*0.7-(p.ppg-18)*0.12+(p.pos==="C"?4:p.pos==="PF"?2:0),60,106);}
function slotPos(k,pl){return k==="6"?pl.pos:k;} // unit weights use the slot the player occupies
function unitProfile(){
  const entries=SLOT_DEFS.map(d=>({k:d.key,p:roster[d.key],w:d.key==="6"?0.5:1}));
  let oN=0,oD=0,dN=0,dD=0,apgW=0,rpgW=0,wsum=0;
  entries.forEach(({k,p,w})=>{const pos=slotPos(k,p);const ow=OFFW[pos]*w,dw=DEFW[pos]*w;oN+=offI(p)*ow;oD+=ow;dN+=defI(p)*dw;dD+=dw;apgW+=p.apg*w;rpgW+=p.rpg*w;wsum+=w;});
  return {O:oN/oD, D:dN/dD, apg:apgW/wsum, rpg:rpgW/wsum};
}

/* ============================================================ MATCH MODEL ============================================================ */
const PACE=112, K=0.42, SD_MARGIN=10.5, SD_TOTAL=13, HOME=3;
function expMarginVs(O,D,oppR,homeFor){return (K*(O-oppR)) - (K*(oppR-D)) + (homeFor?HOME:-HOME);}
function winProbVs(O,D,oppR,homeFor){return normCdf(expMarginVs(O,D,oppR,homeFor)/SD_MARGIN);}
function sampleGame(O,D,oppR,homeFor,g){const forA=PACE+K*(O-oppR),forB=PACE+K*(oppR-D);const margin=g((forA-forB)+(homeFor?HOME:-HOME),SD_MARGIN);const total=Math.max(174,g(forA+forB,SD_TOTAL));let a=Math.round((total+margin)/2),b=Math.round((total-margin)/2);if(a===b){if(margin>=0)a++;else b++;}return {a,b,win:a>b};}
function sampleGeneric(rA,rB,homeA,g){const margin=g(K*(rA-rB)*2+(homeA?HOME:-HOME),SD_MARGIN);const total=Math.max(174,g(2*PACE,SD_TOTAL));let a=Math.round((total+margin)/2),b=Math.round((total-margin)/2);if(a===b){if(margin>=0)a++;else b++;}return {a,b,win:a>b};}

/* Secret backdoor: this exact starting five sweeps the league 82-0 */
const DREAM={PG:"Stephen Curry",SG:"Michael Jordan",SF:"LeBron James",PF:"Tim Duncan",C:"Shaquille O'Neal"};
function isDreamRoster(){return ["PG","SG","SF","PF","C"].every(k=>roster[k]&&roster[k].n===DREAM[k]);}
function isDreamSix(six){if(!six||!six.length)return false;const b={};six.forEach(e=>{b[e.slot]=e.n;});return ["PG","SG","SF","PF","C"].every(k=>b[k]===DREAM[k]);}

/* ============================================================ COHERENT LEAGUE ============================================================ */
function simulateLeague(seed){
  const prof=unitProfile();
  const you={name:"Your Legends",conf:conference,isYou:true,O:prof.O,D:prof.D,prof,rating:(prof.O+prof.D)/2,cheat:isDreamRoster(),wins:0,losses:0,gp:0};
  const teams=NBA_TEAMS.map(t=>({name:t.name,conf:t.conf,rating:t.rating,O:t.rating,D:t.rating,isYou:false,wins:0,losses:0,gp:0})).concat([you]);
  const rng=mulberry32(seed),g=gaussFrom(rng);
  const sched=[];
  for(let i=0;i<teams.length;i++)for(let j=i+1;j<teams.length;j++){sched.push([teams[i],teams[j]]);sched.push([teams[j],teams[i]]);teams[i].gp+=2;teams[j].gp+=2;}
  /* balanced top-up to 82: each team plays a fixed set of opponents one extra time
     (circulant offsets), so no lopsided "play one team 13 times" schedules */
  const n=teams.length, extra=Math.round((82-2*(n-1))/2);
  for(let i=0;i<n;i++)for(let d=1;d<=extra;d++){const j=(i+d)%n;sched.push([teams[i],teams[j]]);teams[i].gp++;teams[j].gp++;}
  for(let i=sched.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[sched[i],sched[j]]=[sched[j],sched[i]];}
  const order=["PG","SG","SF","PF","C","6"],pool=order.map(k=>roster[k]),sixth=roster["6"];
  const tot=pool.map(()=>({pts:0,reb:0,ast:0}));const yourGames=[];let pf=0,pa=0;
  sched.forEach(([h,aw])=>{
    let res;
    if(h.isYou)res=sampleGame(h.O,h.D,aw.rating,true,g);
    else if(aw.isYou){const r=sampleGame(aw.O,aw.D,h.rating,false,g);res={a:r.b,b:r.a,win:r.a<r.b};}
    else res=sampleGeneric(h.rating,aw.rating,true,g);
    if(you.cheat){if(h.isYou)res.win=true;else if(aw.isYou)res.win=false;}
    if(res.win){h.wins++;aw.losses++;}else{h.losses++;aw.wins++;}
    if(h.isYou||aw.isYou){let mine=h.isYou?res.a:res.b,theirs=h.isYou?res.b:res.a;const opp=h.isYou?aw:h,win=h.isYou?res.win:!res.win,home=h.isYou;
      if(you.cheat&&mine<=theirs){const t=mine;mine=theirs;theirs=t;if(mine===theirs)mine++;}
      const box=makeBox(pool,sixth,mine,g);pool.forEach((pl,j)=>{tot[j].pts+=box.pts[j];tot[j].reb+=box.reb[j];tot[j].ast+=box.ast[j];});
      let sM=-1,sI=0,aM=-1,aI=0;box.pts.forEach((v,j)=>{if(v>sM){sM=v;sI=j;}});box.ast.forEach((v,j)=>{if(v>aM){aM=v;aI=j;}});
      yourGames.push({opp:opp.name,oppR:opp.rating,home,win,mine,theirs,box,topS:pool[sI],sVal:sM,topA:pool[aI],aVal:aM});pf+=mine;pa+=theirs;}
  });
  yourGames.forEach((gm,i)=>gm.g=i+1);
  const W=yourGames.filter(x=>x.win).length,L=yourGames.length-W;
  const confs={E:[],W:[]};teams.forEach(t=>confs[t.conf].push(t));
  for(const c of ["E","W"]){confs[c].sort((a,b)=>b.wins-a.wins||b.rating-a.rating);confs[c].forEach((t,i)=>{t.seed=i+1;});}
  const playerStats=pool.map((pl,j)=>({p:pl,ppg:tot[j].pts/yourGames.length,rpg:tot[j].reb/yourGames.length,apg:tot[j].ast/yourGames.length,pts:tot[j].pts}));
  // league-wide award pool: your six + each backdrop team's marquee (simulated season)
  const league=playerStats.map(s=>({n:s.p.n,pos:s.p.pos,team:"Your Legends",tw:W,ppg:s.ppg,rpg:s.rpg,apg:s.apg,imp:s.p.imp,isYou:true}));
  teams.filter(t=>!t.isYou).forEach(t=>{const b=BACKDROP_STARS[t.name];if(!b)return;const r=mulberry32(hashSeed(seed,"star",t.name)),gg=gaussFrom(r);const form=0.88+(t.rating-LG_MEAN)/55;
    league.push({n:b.n,pos:b.pos,team:t.name,tw:t.wins,ppg:Math.max(4,b.ppg*form*gg(1,0.06)),rpg:Math.max(1,b.rpg*(0.92+form*0.1)*gg(1,0.08)),apg:Math.max(0.5,b.apg*form*gg(1,0.08)),imp:b.imp,isYou:false});});
  return {seed,you,prof,W,L,games:yourGames,pf:pf/yourGames.length,pa:pa/yourGames.length,confs,teams,playerStats,league,sixth:playerStats[5]};
}
function makeBox(pool,sixth,teamPts,g){const w=pool.map(pl=>Math.max(1,pl.ppg*(pl===sixth?0.62:1)*Math.max(0.15,g(1,0.28))));const sw=w.reduce((a,b)=>a+b,0);const pts=w.map(x=>Math.round(teamPts*x/sw));pts[0]+=teamPts-pts.reduce((a,b)=>a+b,0);const reb=pool.map(pl=>Math.max(0,Math.round(g(pl.rpg*(pl===sixth?0.7:1),Math.max(1,pl.rpg*0.3)))));const ast=pool.map(pl=>Math.max(0,Math.round(g(pl.apg*(pl===sixth?0.7:1),Math.max(0.8,pl.apg*0.35)))));return {pts,reb,ast};}

/* ============================================================ AWARDS (league-wide) ============================================================ */
function computeAwards(R){
  const pool=R.league;
  const mvpS=s=>s.ppg+1.2*s.apg+0.7*s.rpg+0.25*s.imp+(s.tw-41)*0.38;
  const defS=s=>1.4*s.rpg+0.5*s.imp-0.25*s.ppg+(s.pos==="C"?4:s.pos==="PF"?2:0)+(s.tw-41)*0.05;
  const by=f=>[...pool].sort((a,b)=>f(b)-f(a))[0];
  return {mvp:by(mvpS),dpoy:by(defS),scoring:by(s=>s.ppg),boards:by(s=>s.rpg),dimes:by(s=>s.apg),sixth:{n:R.sixth.p.n,pos:R.sixth.p.pos,team:"Your Legends",ppg:R.sixth.ppg,rpg:R.sixth.rpg,apg:R.sixth.apg,imp:R.sixth.p.imp,isYou:true,tm:R.sixth.p.tm,yr:R.sixth.p.yr}};
}
function finalsMVP(){ // only meaningful once the Finals are fully revealed
  if(!po||seriesRevealed(po.finals)<po.finals.games.length)return null;
  const f=po.finals,champ=f.winner;
  if(champ.isYou){const pool=["PG","SG","SF","PF","C","6"].map(k=>roster[k]);const tot=pool.map(()=>0);
    f.games.forEach(gm=>{const mine=f.hi.isYou?gm.hiPts:gm.loPts,theirs=f.hi.isYou?gm.loPts:gm.hiPts,opp=(f.hi.isYou?f.lo:f.hi).name;
      const box=makeBox(pool,roster["6"],mine,gaussFrom(mulberry32(hashSeed(runSeed,opp,mine,theirs))));box.pts.forEach((v,j)=>tot[j]+=v);});
    let bi=0;tot.forEach((v,j)=>{if(v>tot[bi])bi=j;});const p=pool[bi];
    return {n:p.n,pos:p.pos,team:"Your Legends",isYou:true,imp:p.imp,line:(tot[bi]/f.games.length).toFixed(1)+" PPG across "+f.games.length+" Finals games"};}
  const st=BACKDROP_STARS[champ.name],le=reg.league.find(x=>x.team===champ.name);
  return {n:st?st.n:champ.name,pos:st?st.pos:"SF",team:champ.name,isYou:false,imp:st?st.imp:88,line:le?(le.ppg.toFixed(1)+" PPG · "+le.rpg.toFixed(1)+" RPG in the run"):"Finals standout"};
}

/* ============================================================ EXPLAINABILITY ============================================================ */
function analysis(R){
  const prof=R.prof;let projW=0,hardest=null,hp=2;
  R.teams.filter(t=>!t.isYou).forEach(t=>{const ph=winProbVs(prof.O,prof.D,t.rating,true),pa=winProbVs(prof.O,prof.D,t.rating,false);projW+=ph+pa;const avg=(ph+pa)/2;if(avg<hp){hp=avg;hardest=t;}});
  projW=projW/(R.teams.length-1)/2*82;
  let logp=0;R.games.forEach(gm=>{logp+=Math.log(Math.min(0.999,winProbVs(prof.O,prof.D,gm.oppR,gm.home)));});
  const pPerfect=Math.exp(logp),oneIn=pPerfect>0?Math.round(1/pPerfect):Infinity;
  const grade=(x,lo,hi)=>clamp((x-lo)/(hi-lo)*100,2,100);
  const units=[{k:"Offense",v:grade(prof.O,78,105)},{k:"Playmaking",v:grade(prof.apg,3,11)},{k:"Rebounding",v:grade(prof.rpg,5,16)},{k:"Defense",v:grade(prof.D,78,105)}];
  const sorted=[...units].sort((a,b)=>b.v-a.v);
  return {projW,hardest,pPerfect,oneIn,units,strongest:sorted[0].k,weakest:sorted[sorted.length-1].k};
}

/* ============================================================ PLAYOFFS ============================================================ */
function seriesGames(hi,lo,g){const games=[];let hw=0,lw=0,no=0;while(hw<4&&lw<4){no++;const homeHi=[1,2,5,7].includes(no);let res;if(hi.isYou)res=sampleGame(hi.O,hi.D,lo.rating,homeHi,g);else if(lo.isYou){const r=sampleGame(lo.O,lo.D,hi.rating,!homeHi,g);res={a:r.b,b:r.a,win:r.a<r.b};}else res=sampleGeneric(hi.rating,lo.rating,homeHi,g);if(res.win)hw++;else lw++;games.push({hiPts:res.a,loPts:res.b,hiWin:res.win,homeHi});}const winner=hw===4?hi:lo,loser=winner===hi?lo:hi;return {hi,lo,games,winner,loser,score:`${Math.max(hw,lw)}-${Math.min(hw,lw)}`};}
function playInGame(a,b,g){const hi=a.seed<=b.seed?a:b,lo=hi===a?b:a;let res;if(hi.isYou)res=sampleGame(hi.O,hi.D,lo.rating,true,g);else if(lo.isYou){const r=sampleGame(lo.O,lo.D,hi.rating,false,g);res={a:r.b,b:r.a,win:r.a<r.b};}else res=sampleGeneric(hi.rating,lo.rating,true,g);const winner=res.win?hi:lo,loser=winner===hi?lo:hi;return {hi,lo,hiPts:res.a,loPts:res.b,hiWin:res.win,winner,loser};}
function runConf(seeds,g){const s=seeds;const gA=playInGame(s[6],s[7],g),gB=playInGame(s[8],s[9],g),g8=playInGame(gA.loser,gB.winner,g);const b=[s[0],s[1],s[2],s[3],s[4],s[5],gA.winner,g8.winner];const r1=[seriesGames(b[0],b[7],g),seriesGames(b[3],b[4],g),seriesGames(b[2],b[5],g),seriesGames(b[1],b[6],g)];const semi=[seriesGames(r1[0].winner,r1[1].winner,g),seriesGames(r1[3].winner,r1[2].winner,g)];const cf=seriesGames(semi[0].winner,semi[1].winner,g);return {playIn:{gA,gB,g8},bracket:b,r1,semi,cf,champ:cf.winner};}
function simPostseason(){const g=gaussFrom(mulberry32(hashSeed(runSeed,"playoffs")));const east=runConf(reg.confs.E,g),west=runConf(reg.confs.W,g);const finals=seriesGames(east.champ.wins>=west.champ.wins?east.champ:west.champ,east.champ.wins>=west.champ.wins?west.champ:east.champ,g);const myRun=conference==="E"?east:west;const seq=[];const addS=(pg,r)=>seq.push({kind:"single",round:r,pg});const addSr=(ser,r)=>ser.games.forEach((gm,i)=>seq.push({kind:"series",round:r,ser,gi:i}));addS(myRun.playIn.gA,"Play-In");addS(myRun.playIn.gB,"Play-In");addS(myRun.playIn.g8,"Play-In");myRun.r1.forEach(s=>addSr(s,"First Round"));myRun.semi.forEach(s=>addSr(s,"Conference Semifinals"));addSr(myRun.cf,"Conference Finals");addSr(finals,"NBA Finals");return {east,west,finals,myRun,seq};}

/* ============================================================ PLAY-BY-PLAY ============================================================ */
function buildPBP(gm){const r=mulberry32(hashSeed(runSeed,gm.oppName,gm.mine,gm.theirs,gm.g||0)),g=gaussFrom(r);
  function splitQ(total){let q=[0,0,0,0];for(let i=0;i<4;i++)q[i]=Math.max(14,g(total/4,4));const s=q.reduce((a,b)=>a+b);q=q.map(x=>x*total/s);let out=q.map(x=>Math.round(x));out[3]+=total-out.reduce((a,b)=>a+b);return out;}
  const mq=splitQ(gm.mine),tq=splitQ(gm.theirs);const feed=[];let rm=0,rt=0;const players=gm.pool||[],pts=gm.box?gm.box.pts:null,wsum=pts?pts.reduce((a,b)=>a+b,0):1;
  for(let q=0;q<4;q++){rm+=mq[q];rt+=tq[q];const plays=[];const nH=2+Math.floor(r()*2);for(let k=0;k<nH;k++){const you=r()<0.55;if(you&&pts){let x=r()*wsum,idx=0;for(let i=0;i<pts.length;i++){x-=pts[i];if(x<=0){idx=i;break;}}plays.push({who:shortName(players[idx].n),val:r()<0.32?3:2,you:true});}else{plays.push({who:gm.oppName,val:r()<0.3?3:2,you:false});}}feed.push({q:q+1,mScore:rm,tScore:rt,plays});}
  return {mq,tq,feed};
}

/* ============================================================ DRAFT / SETUP UI ============================================================ */
function showScreen(n){screen=n;$("#setupScreen").style.display=n==="setup"?"":"none";$("#draftScreen").style.display=n==="draft"?"":"none";$("#resultsScreen").style.display=n==="results"?"":"none";const ls=$("#lobbyScreen");if(ls)ls.style.display=n==="lobby"?"":"none";$("#restartRun").style.display=(n==="setup"||n==="lobby")?"none":"";window.scrollTo({top:0,behavior:"smooth"});}
function initControls(){
  const from=$("#from"),to=$("#to");SEASON_YEARS.forEach(y=>{from.appendChild(new Option(y,y));to.appendChild(new Option(y,y));});
  minYr=YMIN;maxYr=YMAX;from.value=minYr;to.value=maxYr;
  from.onchange=()=>{if(lobby)return;minYr=+from.value;if(minYr>maxYr){maxYr=minYr;to.value=maxYr;}$("#poolCount").textContent=poolCount();};
  to.onchange=()=>{if(lobby)return;maxYr=+to.value;if(maxYr<minYr){minYr=maxYr;from.value=minYr;}$("#poolCount").textContent=poolCount();};
  document.querySelectorAll("#confToggle button").forEach(b=>{b.onclick=()=>{if(lobby)return;conference=b.dataset.c;document.querySelectorAll("#confToggle button").forEach(x=>x.classList.toggle("on",x===b));};});
  document.querySelectorAll("#freeToggle button").forEach(b=>{b.onclick=()=>{freePos=b.dataset.f==="1";document.querySelectorAll("#freeToggle button").forEach(x=>x.classList.toggle("on",x===b));};});
  document.querySelectorAll("#simmode button").forEach(b=>{b.onclick=()=>{simMode=b.dataset.m;document.querySelectorAll("#simmode button").forEach(x=>x.classList.toggle("on",x===b));};});
  $("#startDraft").onclick=startDraft;
  $("#reset").onclick=clearLineup;
  $("#restartRun").onclick=fullReset;
  $("#backToDraft").onclick=()=>{showScreen("draft");renderAll();};
  $("#poolCount").textContent=poolCount();
}
function summaryText(){return `${minYr===maxYr?minYr:minYr+"–"+maxYr} · ${CONF_NAME[conference]} · ${freePos?"Free positioning":"By position"}${lobby?" · 🏀 Lobby "+groupCode(lobby.code):""}`;}
function startDraft(){started=true;phase="draft";updateSummaries();showScreen("draft");renderAll();}
function updateSummaries(){const s=summaryText();const a=$("#setupSummary"),b=$("#resSummary");if(a)a.textContent=s;if(b)b.textContent=s;
  if(lobby){const rs=$("#resSummary");const acts=rs&&rs.parentElement.querySelector(".ds-actions");if(acts&&!$("#cmpOpen")){const btn=document.createElement("button");btn.id="cmpOpen";btn.className="ds-clear";btn.style.borderColor="var(--action)";btn.style.color="var(--action)";btn.textContent="🏀 Compare with friends";btn.onclick=openLobbyCompare;acts.insertBefore(btn,acts.firstChild);}}}
function clearLineup(){roster={PG:null,SG:null,SF:null,PF:null,C:null,"6":null};rerollsLeft=1;spinning=false;currentTeam=null;movingSlot=null;pickSel=null;renderAll();}
function fullReset(){roster={PG:null,SG:null,SF:null,PF:null,C:null,"6":null};rerollsLeft=1;started=false;spinning=false;currentTeam=null;movingSlot=null;pickSel=null;phase="draft";reg=null;po=null;poReveal=0;activeResTab="log";$("#results").innerHTML="";$("#poolCount").textContent=poolCount();showScreen("setup");renderAll();}

/* ============================================================ MULTIPLAYER LOBBY (shared-seed, no backend) ============================================================ */
const LB_YBASE=1962;
function encLobby(seed,from,to,conf){return ((seed>>>0).toString(36).padStart(7,"0")+(from-LB_YBASE).toString(36).padStart(2,"0")+(to-LB_YBASE).toString(36).padStart(2,"0")+(conf==="W"?"W":"E")).toUpperCase();}
function decLobby(code){code=(code||"").toUpperCase().replace(/[^0-9A-Z]/g,"");if(code.length<12)return null;const seed=parseInt(code.slice(0,7),36)>>>0;const from=parseInt(code.slice(7,9),36)+LB_YBASE;const to=parseInt(code.slice(9,11),36)+LB_YBASE;if(isNaN(seed)||isNaN(from)||isNaN(to))return null;return {seed,from:Math.max(YMIN,Math.min(YMAX,from)),to:Math.max(YMIN,Math.min(YMAX,to)),conf:code[11]==="W"?"W":"E",code};}
function groupCode(c){return c.replace(/(.{4})/g,"$1-").replace(/-$/,"");}
function parseHashLobby(){const m=(location.hash||"").match(/L=([0-9A-Za-z]+)/);return m?decLobby(m[1]):null;}
function applyLobby(l){lobby=l;minYr=l.from;maxYr=l.to;conference=l.conf;
  const from=$("#from"),to=$("#to");if(from){from.value=minYr;to.value=maxYr;from.disabled=true;to.disabled=true;}
  document.querySelectorAll("#confToggle button").forEach(b=>{b.classList.toggle("on",b.dataset.c===conference);b.disabled=true;});
  $("#poolCount").textContent=poolCount();renderLobbyBanner();}
function renderLobbyBanner(){let el=$("#lobbyBanner");if(!lobby){if(el)el.remove();return;}
  if(!el){el=document.createElement("div");el.id="lobbyBanner";el.className="lobby-banner";$("#setupScreen").insertBefore(el,$("#setupScreen").firstChild);}
  el.innerHTML=`<span class="lb-tag">🏀 Shared lobby</span><span class="lb-code">${groupCode(lobby.code)}</span><span class="lb-note">Everyone in this lobby plays the identical league — draft your six and compare records.</span><button class="lb-leave" id="lbLeave">Leave</button>`;
  $("#lbLeave").onclick=leaveLobby;}
function leaveLobby(){lobby=null;const from=$("#from"),to=$("#to");if(from){from.disabled=false;to.disabled=false;}document.querySelectorAll("#confToggle button").forEach(b=>b.disabled=false);if(location.hash)history.replaceState(null,"","#");const el=$("#lobbyBanner");if(el)el.remove();const c=$("#cmpOpen");if(c)c.remove();updateSummaries();}

/* result codes for the combined leaderboard */
function encResult(name,W,L,champ){try{return "R"+btoa(unescape(encodeURIComponent(JSON.stringify([String(name).slice(0,18),W,L,champ?1:0]))));}catch(e){return "";}}
function decResult(code){try{const j=JSON.parse(decodeURIComponent(escape(atob(code.replace(/^R/,"").replace(/[^A-Za-z0-9+/=]/g,"")))));return {name:j[0],W:+j[1],L:+j[2],champ:!!j[3]};}catch(e){return null;}}
function myChampion(){return !!(po&&seriesRevealed(po.finals)>=po.finals.games.length&&po.finals.winner&&po.finals.winner.isYou);}

function openLobbyCompare(){
  const meName=(window._lbName||"You");
  const myCode=reg?encResult(meName,reg.W,reg.L,myChampion()):"";
  const root=$("#modalRoot");
  root.innerHTML=`<div class="lbm-bg" id="cmpBg"><div class="lbm">
    <div class="lbm-h"><div class="lbm-t">Compare with friends</div><button class="lbm-x" id="cmpX">&times;</button></div>
    <div class="lbm-sub">Everyone played the same league (<b>${groupCode(lobby.code)}</b>). Copy your result, share it, and paste your friends' codes to rank the lobby.</div>
    <div class="lbm-row"><label>Your name</label><input id="cmpName" class="lbm-in" value="${meName.replace(/"/g,'')}" maxlength="18"></div>
    <div class="lbm-row"><label>Your result code</label><div class="lbm-codebox"><span id="myCode">${myCode||"— simulate a season first —"}</span></div></div>
    <button class="lbm-btn sec" id="cmpCopy"${myCode?"":" disabled"}>Copy my result</button>
    <div class="lbm-row" style="margin-top:14px"><label>Paste friends' codes (one per line)</label><textarea id="cmpPaste" class="lbm-in" rows="4" placeholder="R...&#10;R..."></textarea></div>
    <button class="lbm-btn" id="cmpBuild">Build leaderboard</button>
    <div id="cmpBoard"></div>
  </div></div>`;
  const close=()=>{root.innerHTML="";};
  $("#cmpX").onclick=close;$("#cmpBg").onclick=e=>{if(e.target.id==="cmpBg")close();};
  const nameEl=$("#cmpName");nameEl.oninput=()=>{window._lbName=nameEl.value||"You";if(reg)$("#myCode").textContent=encResult(window._lbName,reg.W,reg.L,myChampion());};
  $("#cmpCopy").onclick=()=>{const c=$("#myCode").textContent;if(c&&c[0]==="R"&&navigator.clipboard){navigator.clipboard.writeText(c);const b=$("#cmpCopy");b.textContent="Copied ✓";setTimeout(()=>b.textContent="Copy my result",1400);}};
  $("#cmpBuild").onclick=()=>{
    const rows=[];if(reg)rows.push({name:window._lbName||"You",W:reg.W,L:reg.L,champ:myChampion(),you:true});
    ($("#cmpPaste").value||"").split(/\s+/).filter(Boolean).forEach(cd=>{const r=decResult(cd);if(r)rows.push(r);});
    if(!rows.length){$("#cmpBoard").innerHTML=`<div class="lbm-empty">No valid results yet. Simulate your season and paste friends' codes.</div>`;return;}
    rows.sort((a,b)=>b.W-a.W||a.L-b.L||(b.champ?1:0)-(a.champ?1:0));
    $("#cmpBoard").innerHTML=`<div class="lbm-lead">Lobby standings — most wins</div>`+rows.map((r,i)=>`<div class="lbm-line${r.you?" you":""}"><span class="cr">${i+1}</span><span class="cn">${(r.name||"—").replace(/[<>]/g,"")}${r.champ?' <span class="cch">🏆</span>':""}${r.you?' <span class="cyou">you</span>':""}</span><span class="cw">${r.W}-${r.L}</span></div>`).join("");
  };
}
function applyLock(){$("#rrCount").textContent=rerollsLeft;}
function renderCourt(){
  const spots=$("#spots");spots.innerHTML="";
  ["PG","SG","SF","PF","C"].forEach(k=>{const p=roster[k];const xy=SPOT_XY[k];const el=document.createElement("div");
    el.className="spot "+roleClass(k)+(p?" filled":"")+(p&&movableTargets(k).length?" movable":"");el.style.top=xy.t+"%";el.style.left=xy.l+"%";
    if(p){el.innerHTML=avatar(p,44)+`<div class="nm">${shortName(p.n)}</div><div class="lbl">${k} · ${p.imp}</div>`+(movableTargets(k).length?`<span class="mvpip">⇄</span>`:"");
      if(movableTargets(k).length)el.onclick=()=>{movingSlot=movingSlot===k?null:k;renderCourt();renderMovebar();};}
    else{el.innerHTML=`<div class="disc">${k}</div><div class="lbl">${POS_FULL[k]}</div>`;}
    spots.appendChild(el);});
  // bench
  const b=roster["6"];const bench=$("#benchSpot");bench.className="bench"+(b?" filled":"");
  if(b){bench.innerHTML=`<span class="bl">6TH</span>`+avatar(b,30)+`<div class="who"><div class="nm">${b.n}</div><div class="yr">${b.tm} · ${seasonLabel(b)} · ${b.pos}</div></div><span class="imp" style="font-family:'IBM Plex Mono';color:var(--led);font-weight:600">${b.imp}</span>`+(movableTargets("6").length?`<span class="mv" title="Move">&#8646;</span>`:"");
    if(movableTargets("6").length)bench.querySelector(".mv").onclick=()=>{movingSlot=movingSlot==="6"?null:"6";renderCourt();renderMovebar();};}
  else bench.innerHTML=`<span class="bl">6TH</span><div class="who"><div class="empty">Sixth man — any position</div></div>`;
  renderMovebar();
  const btn=$("#sim");
  if(mpRoom){if(rosterFull()&&!mpPublished){mpPublished=true;mpPublishRoster();}mpUpdateDraftUI(mpRoomData);}
  else{btn.disabled=!rosterFull();btn.textContent=rosterFull()?"Simulate the season":`Fill all 6 to simulate (${Object.values(roster).filter(Boolean).length}/6)`;}
  $("#rrCount").textContent=rerollsLeft;
}
function renderMovebar(){const host=$("#movebarHost");if(!movingSlot||!roster[movingSlot]){host.innerHTML="";return;}const p=roster[movingSlot];const targets=movableTargets(movingSlot);
  host.innerHTML=`<div class="movebar"><span class="mlab">Move ${shortName(p.n)} →</span>`+targets.map(t=>`<button data-to="${t}">${POS_LABEL[t]}</button>`).join("")+`<button class="cancel" data-x="1">cancel</button></div>`;
  host.querySelectorAll("[data-to]").forEach(btn=>btn.onclick=()=>{roster[btn.dataset.to]=roster[movingSlot];roster[movingSlot]=null;movingSlot=null;renderAll();});
  host.querySelector("[data-x]").onclick=()=>{movingSlot=null;renderCourt();renderMovebar();};
}
function needSlots(){return SLOT_DEFS.filter(d=>!roster[d.key]).length;}
/* ============================================================ PROJECTED STANDING (pre-sim) ============================================================ */
function expWinsLeague(O,D,skipName){let s=0,n=0;NBA_TEAMS.forEach(t=>{if(t.name===skipName)return;s+=0.5*winProbVs(O,D,t.rating,true)+0.5*winProbVs(O,D,t.rating,false);n++;});return s/n*82;}
function projectStanding(){const prof=unitProfile();const myExp=expWinsLeague(prof.O,prof.D,null);
  const rows=NBA_TEAMS.filter(t=>t.conf===conference).map(t=>({name:t.name,exp:expWinsLeague(t.rating,t.rating,t.name)}));
  rows.push({name:"Your Legends",exp:myExp,isYou:true});rows.sort((a,b)=>b.exp-a.exp);
  const seed=rows.findIndex(t=>t.isYou)+1,wins=Math.max(0,Math.min(82,Math.round(myExp)));
  let tier;if(seed===1||wins>=60)tier="Title favorite";else if(seed<=4)tier="Contender";else if(seed<=6)tier="Solid playoff team";else if(seed<=10)tier="Play-in hopeful";else tier="Lottery-bound";
  return {seed,wins,losses:82-wins,prof,tier,conf:conference};}

function renderPicker(){
  const wrap=$("#pickWrap");
  if(rosterFull()){const pj=projectStanding();
    wrap.innerHTML=`<div class="projcard"><div class="pj-h">Projected finish <span>before you simulate</span></div>
      <div class="pj-main"><div class="pj-seed"><b>${ordinal(pj.seed)}</b><span>seed · ${pj.conf==="E"?"East":"West"}</span></div>
        <div class="pj-mid"><div class="pj-rec">&asymp; ${pj.wins}&ndash;${pj.losses}</div><div class="pj-tier">${pj.tier}</div></div></div>
      <div class="pj-foot">Off ${pj.prof.O.toFixed(1)} · Def ${pj.prof.D.toFixed(1)} — a rating-based forecast. Simulate to see how the season actually plays out.</div></div>
      <div class="reel landed" style="margin-top:12px"><div class="team" style="font-size:20px">Lineup complete</div><div class="yr">Pick Watch or Quick, then hit Simulate</div></div>`;return;}
  const teams=spinnableTeams();
  if(spinning){wrap.innerHTML=`<div class="reel spinning" id="reel"><div class="team" id="reelTeam">—</div><div class="yr" id="reelYr">&nbsp;</div></div>`;return;}
  if(currentTeam){
    const t=takenNames();
    let list=currentTeam.players.map(p=>Object.assign({},p));
    if(sortBy==="rating")list.sort((a,b)=>b.imp-a.imp);
    else if(sortBy==="position"){const ord={PG:0,SG:1,SF:2,PF:3,C:4};list.sort((a,b)=>ord[a.pos]-ord[b.pos]||b.imp-a.imp);}
    else list.sort((a,b)=>a.n.split(" ").slice(-1)[0].localeCompare(b.n.split(" ").slice(-1)[0]));
    const cards=list.map(p=>{
      const taken=t.has(p.n);const opens=taken?[]:openEligibleSlots(p);const draftable=!taken&&opens.length;
      const tags=eligPositions(p).map(pos=>`<span class="ptag${(!roster[pos]||pos===p.pos)?"":" taken"}">${pos}</span>`).join("");
      const sel=(pickSel===p.n&&draftable);
      const placeIn=sel?`<div class="placein"><div class="pil">Place in (${opens.length})</div><div class="opts">`+opens.map(s=>`<button class="pi-btn${s==="6"?" six":""}" data-slot="${s}"><span class="code">${s==="6"?"6th":s}</span><span class="full">${POS_FULL[s]}</span></button>`).join("")+`</div></div>`:"";
      return `<div class="pcard${sel?" sel":""}${draftable?"":" dis"}" data-n="${encodeURIComponent(p.n)}" data-draftable="${draftable?1:0}">
        <div class="prow"><div class="badge ${roleClass(p.pos)}">${p.imp}</div><div class="pinfo"><div class="n">${p.n}</div><div class="s">${p.ppg.toFixed(1)} PPG · ${p.rpg.toFixed(1)} RPG · ${p.apg.toFixed(1)} APG${taken?" · drafted":(draftable?"":" · no open slot")}</div></div><div class="ptags">${tags}</div></div>${placeIn}</div>`;}).join("");
    wrap.innerHTML=`<div class="sqhead"><span class="chip">Squad spun</span><span class="slots"><b>${needSlots()}</b> slots left</span>
        <button class="rerollbtn" id="rerollBtn" ${rerollsLeft>0?"":"disabled"}>&#8635; Re-roll${rerollsLeft>0?` (${rerollsLeft} left)`:" — none"}</button></div>
      <div class="sqteam">${currentTeam.team} <span class="yr">${currentTeam.year-1}/${String(currentTeam.year).slice(2)}</span></div>
      <div class="pickhint"><span>Pick any player, then choose which open position to slot him into.${freePos?" <b style='color:var(--big)'>Free positioning on — any slot allowed.</b>":""}</span>
        <span class="sort"><span class="sl">Sort</span><button data-s="rating" class="${sortBy==="rating"?"on":""}">Rating</button><button data-s="position" class="${sortBy==="position"?"on":""}">Position</button><button data-s="name" class="${sortBy==="name"?"on":""}">Name</button></span></div>
      <div class="plist">${cards}</div>`;
    const rb=$("#rerollBtn");if(rb&&rerollsLeft>0)rb.onclick=()=>{rerollsLeft--;pickSel=null;doSpin();};
    wrap.querySelectorAll(".sort button").forEach(b=>b.onclick=()=>{sortBy=b.dataset.s;renderPicker();});
    wrap.querySelectorAll(".pcard").forEach(c=>{if(c.dataset.draftable==="1"){c.querySelector(".prow").onclick=()=>{const n=decodeURIComponent(c.dataset.n);pickSel=(pickSel===n?null:n);renderPicker();const pi=wrap.querySelector(".pcard.sel .placein");if(pi)pi.scrollIntoView({block:"nearest"});};c.querySelectorAll(".pi-btn").forEach(btn=>btn.onclick=(e)=>{e.stopPropagation();draftPlayer(decodeURIComponent(c.dataset.n),btn.dataset.slot);});}});
    return;
  }
  wrap.innerHTML=`<div class="reel" id="reel"><div class="placeholder">Spin for a team & season</div></div><div class="spin-cta"><button class="spinbtn" id="spinBtn" ${teams.length?"":"disabled"}>Spin the wheel</button></div>${teams.length?"":'<div class="foot-note" style="color:var(--loss)">No eligible team — Clear all to change the pool.</div>'}`;
  if(teams.length)$("#spinBtn").onclick=doSpin;
}
function doSpin(){const teams=spinnableTeams();if(!teams.length){renderPicker();return;}if(!started){started=true;applyLock();}
  const finalTeam=teams[Math.floor(Math.random()*teams.length)];spinning=true;currentTeam=null;pickSel=null;renderPicker();
  const rt=$("#reelTeam"),ry=$("#reelYr");const total=22;let i=0;
  (function tick(){i++;const last=i>=total;const tt=last?finalTeam:teams[Math.floor(Math.random()*teams.length)];if(rt)rt.textContent=tt.team;if(ry)ry.textContent=`${tt.year-1}/${String(tt.year).slice(2)}`;if(last){const reel=$("#reel");if(reel){reel.classList.remove("spinning");reel.classList.add("landed");}setTimeout(()=>{spinning=false;currentTeam=finalTeam;renderPicker();},600);return;}setTimeout(tick,32+i*i*0.85);})();
}
function draftPlayer(name,slot){const p=currentTeam.players.find(x=>x.n===name);if(!p||roster[slot])return;roster[slot]=Object.assign({},p,{tm:currentTeam.team,yr:currentTeam.year});currentTeam=null;pickSel=null;renderAll();}
function renderAll(){$("#poolCount").textContent=poolCount();$("#rrCount").textContent=rerollsLeft;renderCourt();renderPicker();}

/* ============================================================ SIM FLOW ============================================================ */
function runSeason(){runSeed=lobby?(lobby.seed>>>0):((Math.floor(Math.random()*1e9))>>>0);reg=simulateLeague(runSeed);po=null;poReveal=0;phase="regular";activeResTab="log";updateSummaries();showScreen("results");if(simMode==="quick")afterRegular();else animateSeason();}
function animateSeason(onDone){const $r=$("#results");
  $r.innerHTML=`<div class="arena"><div class="arena-head"><div class="arena-meta">Game <b id="ar-gnum">0</b> / 82</div><div class="arena-ctrls"><button id="ar-skip">Skip to results &rarr;</button></div></div><div class="arena-body"><div class="arena-game"><div class="arena-opp" id="ar-opp">&nbsp;</div><div class="ar-score" id="ar-score">0&ndash;0</div><div class="ar-lead" id="ar-lead">&nbsp;</div></div><div class="arena-rec"><div class="r"><span class="w" id="ar-recW">0</span>&ndash;<span class="l" id="ar-recL">0</span></div><div class="cap">Record</div><div class="arena-stamp" id="ar-stamp">&nbsp;</div></div></div><div class="arena-streak" id="ar-streak"></div><div class="arena-bar"><div id="ar-barfill"></div></div></div>`;
  $r.scrollIntoView({behavior:"smooth",block:"start"});
  let i=0,W=0,L=0,stopped=false;const games=reg.games,streak=$("#ar-streak"),scoreEl=$("#ar-score"),stamp=$("#ar-stamp");
  function finish(){if(stopped)return;stopped=true;afterRegular();if(onDone)onDone();}$("#ar-skip").onclick=finish;
  function step(){if(stopped)return;if(i>=games.length){finish();return;}const gm=games[i],won=gm.win;if(won)W++;else L++;
    $("#ar-gnum").textContent=gm.g;$("#ar-opp").textContent=(gm.home?"vs ":"@ ")+gm.opp;scoreEl.textContent=`${gm.mine}\u2013${gm.theirs}`;scoreEl.className="ar-score "+(won?"w":"l");void scoreEl.offsetWidth;scoreEl.classList.add("flash");
    stamp.textContent=won?"W":"L";stamp.className="arena-stamp "+(won?"w":"l");$("#ar-recW").textContent=W;$("#ar-recL").textContent=L;$("#ar-lead").innerHTML=`${shortName(gm.topS.n)} <b>${gm.sVal} PTS</b> &middot; ${shortName(gm.topA.n)} <b>${gm.aVal} AST</b>`;
    const pip=document.createElement("span");pip.className="pip"+(won?"":" l");streak.appendChild(pip);$("#ar-barfill").style.width=((i+1)/games.length*100)+"%";if(gm.vsLobby&&mpRoom){i++;playRivalry(gm,()=>{if(!stopped)step();});return;}i++;setTimeout(step,34);}
  step();
}
function afterRegular(){activeResTab="log";renderResults();}
function verdict(){const seed=reg.you.seed,perfect=reg.L===0;
  if(!po)return {seed,perfect,tone:perfect?"perfect":"",h:perfect?"PERFECT SEASON":ordinal(seed)+" SEED",note:perfect?"82–0. Now take it to the playoffs.":"Regular season done — step through the playoffs."};
  const run=po.myRun,f=po.finals,inF=(f.hi.isYou||f.lo.isYou);let h,note,tone="";
  if(f.winner.isYou){h="NBA CHAMPIONS";tone="champ";note=`Won the Finals ${f.score} over the ${f.loser.name}.`;}
  else if(inF){h="NBA FINALS";note=`Lost the Finals ${f.score} to the ${f.winner.name}.`;}
  else if(run.cf.loser.isYou){h="CONFERENCE FINALS";note=`Fell in the ${CONF_NAME[conference]} Finals ${run.cf.score}.`;}
  else if(run.semi.some(s=>s.loser.isYou)){h="CONFERENCE SEMIS";note="Bounced in the second round.";}
  else if(run.r1.some(s=>s.loser.isYou)){h="FIRST ROUND";note="Out in the opening series.";}
  else if(seed>=7&&seed<=10&&!po.myRun.bracket.some(t=>t.isYou)){h="PLAY-IN EXIT";note="Eliminated in the Play-In.";}
  else {h="MISSED PLAYOFFS";note=`Finished ${ordinal(seed)} in the ${CONF_NAME[conference]}.`;}
  return {seed,perfect,tone:(perfect&&tone!=="champ")?"perfect":tone,h,note};
}

/* ============================================================ RESULTS ============================================================ */
function renderResults(){const v=verdict(),confShort=conference==="E"?"East":"West",R=reg,$r=$("#results");
  $r.innerHTML=`<div class="scoreboard"><div class="record"><div class="big"><span class="w">${R.W}</span>&ndash;<span class="l">${R.L}</span></div><div class="cap">Regular<br>Season<span class="seed">${confShort} #${v.seed} seed</span></div></div><div class="verdict ${v.tone}"><div class="headline">${v.h}</div><div class="note">${v.note}</div></div></div>
    <div class="metaline"><span>Off rtg <b>${R.prof.O.toFixed(1)}</b></span><span>Def rtg <b>${R.prof.D.toFixed(1)}</b></span><span>Points for <b>${R.pf.toFixed(1)}</b></span><span>Against <b>${R.pa.toFixed(1)}</b></span><span class="seedchip">seed #${R.seed}</span></div>
    <div class="restabs" id="restabs"><button class="tab" data-t="log">Game Log</button><button class="tab" data-t="stand">Standings</button><button class="tab" data-t="stats">Player Stats</button><button class="tab" data-t="awards">Awards</button><button class="tab" data-t="analysis">Analysis</button><button class="tab" data-t="po">Playoffs</button></div>
    <div id="resbody"></div>`;
  document.querySelectorAll("#restabs .tab").forEach(b=>{b.onclick=()=>{activeResTab=b.dataset.t;paintTab();};});
  paintTab();
}
function paintTab(){document.querySelectorAll("#restabs .tab").forEach(b=>b.classList.toggle("on",b.dataset.t===activeResTab));const body=$("#resbody");
  if(activeResTab==="log")tabLog(body);else if(activeResTab==="stand")body.innerHTML=tabStandings();else if(activeResTab==="stats")body.innerHTML=tabStats();else if(activeResTab==="awards")body.innerHTML=tabAwards();else if(activeResTab==="analysis")body.innerHTML=tabAnalysis();else if(activeResTab==="po")paintPlayoffs(body);}
function tabLog(body){const pips=reg.games.map(x=>`<span class="pip${x.win?"":" l"}" title="G${x.g} ${x.win?"W":"L"} ${x.mine}-${x.theirs}"></span>`).join("");
  const rows=reg.games.map(x=>`<div class="logrow" data-g="${x.g}"><span class="g">${x.g}</span><span class="opp">${x.home?"vs":"@"} ${x.opp}</span><span class="sc ${x.win?"w":"l"}">${x.mine}-${x.theirs}</span><span class="leader ls"><span class="nm">${shortName(x.topS.n)}</span> <span class="v">${x.sVal} PTS</span></span><span class="watch">watch ▸</span></div>`).join("");
  body.innerHTML=`<div class="panelbox"><div class="hd"><h2>Regular Season — 82 Games</h2><span style="font-family:'IBM Plex Mono';font-size:11px;color:var(--dim)">tap a game for play-by-play</span></div><div class="streakwrap">${pips}</div><div class="loghead"><span>#</span><span>Opponent</span><span style="text-align:center">Score</span><span class="h-sc">Top Scorer</span><span></span></div><div class="logbody">${rows}</div></div>`;
  body.querySelectorAll(".logrow").forEach(r=>r.onclick=()=>{const gm=reg.games[+r.dataset.g-1];openPBP({mine:gm.mine,theirs:gm.theirs,oppName:gm.opp,win:gm.win,box:gm.box,pool:["PG","SG","SF","PF","C","6"].map(k=>roster[k]),g:gm.g,title:`${gm.home?"vs":"@"} ${gm.opp} · Game ${gm.g}`});});}
function tabStandings(){const col=(c)=>{const rows=reg.confs[c].map(t=>{let cut="";if(t.seed===6)cut='<div class="cut"><span>Playoffs</span></div>';if(t.seed===10)cut='<div class="cut playin"><span>Play-In</span></div>';return `<div class="strow${t.isYou?" you":""}"><span class="sd">${t.seed}</span><span class="tm">${t.name}</span><span class="wl">${t.wins}</span><span class="wl" style="color:var(--dim)">${t.losses}</span></div>${cut}`;}).join("");
    return `<div class="standcol"><h3>${CONF_NAME[c]}</h3><div class="strow" style="border-bottom:1px solid var(--line)"><span class="sd" style="color:var(--dim)">#</span><span class="tm" style="color:var(--dim);font-size:11px;text-transform:uppercase">Team</span><span class="wl" style="color:var(--dim);font-size:11px">W</span><span class="wl" style="color:var(--dim);font-size:11px">L</span></div>${rows}</div>`;};
  return `<div class="panelbox"><div class="standwrap">${col(conference)}${col(conference==="E"?"W":"E")}</div></div>`;}
function tabStats(){const posOf={0:"PG",1:"SG",2:"SF",3:"PF",4:"C",5:"6th"},ps=reg.playerStats;const mp=Math.max(...ps.map(s=>s.ppg)),mr=Math.max(...ps.map(s=>s.rpg)),ma=Math.max(...ps.map(s=>s.apg));
  const rows=ps.map((s,i)=>`<div class="psrow"><span class="pp">${posOf[i]}</span>${avatar(s.p,32)}<span class="pn"><span class="nm">${s.p.n}</span><span class="yr">${s.p.tm} · ${seasonLabel(s.p)}</span></span><span class="v">${reg.games.length}</span><span class="v ${s.ppg===mp?"lead":""}">${s.ppg.toFixed(1)}</span><span class="v ${s.rpg===mr?"lead":""}">${s.rpg.toFixed(1)}</span><span class="v ${s.apg===ma?"lead":""}">${s.apg.toFixed(1)}</span><span class="v">${s.pts}</span></div>`).join("");
  return `<div class="panelbox"><div class="hd"><h2>Player Season Averages</h2></div><div class="pshead"><span>Pos</span><span></span><span>Player</span><span>GP</span><span>PPG</span><span>RPG</span><span>APG</span><span>PTS</span></div>${rows}</div>`;}
function tabAwards(){const a=computeAwards(reg);
  const card=(t,s,line,mvp)=>`<div class="awcard${mvp?" mvp":""}${s.isYou?" you":""}"><div class="badge ${roleClass(s.pos)}" style="width:44px;height:44px">${s.imp}</div><div class="awtext"><div class="awttl">${t}</div><div class="awname">${s.n}</div><div class="awteam ${s.isYou?"you":""}">${s.team}${s.isYou?" (you)":""}</div><div class="awstat">${line(s)}</div></div></div>`;
  const full=s=>`${s.ppg.toFixed(1)} PPG · ${s.rpg.toFixed(1)} RPG · ${s.apg.toFixed(1)} APG`;
  const fm=finalsMVP();
  const fmCard=fm?`<div class="awcard mvp${fm.isYou?" you":""}"><div class="badge ${roleClass(fm.pos)}" style="width:44px;height:44px">${fm.imp}</div><div class="awtext"><div class="awttl">Finals MVP</div><div class="awname">${fm.n}</div><div class="awteam ${fm.isYou?"you":""}">${fm.team}${fm.isYou?" (you)":""}</div><div class="awstat">${fm.line}</div></div></div>`
    :`<div class="awcard" style="opacity:.7"><div class="badge b" style="width:44px;height:44px;background:var(--panel);color:var(--dim)">?</div><div class="awtext"><div class="awttl" style="color:var(--gold)">Finals MVP</div><div class="awname" style="font-size:15px;color:var(--muted)">Decided after the Finals</div><div class="awstat">Play through the NBA Finals in the Playoffs tab.</div></div></div>`;
  return `<div class="panelbox"><div class="hd"><h2>Season Awards</h2><span style="font-family:'IBM Plex Mono';font-size:11px;color:var(--dim)">contested league-wide</span></div><div class="awgrid">
    ${card("Most Valuable Player",a.mvp,full,true)}${fmCard}${card("Defensive Player of the Year",a.dpoy,s=>`${s.rpg.toFixed(1)} RPG · ${s.imp} OVR anchor`)}
    ${card("Sixth Man of the Year",a.sixth,full)}${card("Scoring Champion",a.scoring,s=>`${s.ppg.toFixed(1)} points per game`)}${card("Rebounding Leader",a.boards,s=>`${s.rpg.toFixed(1)} rebounds per game`)}
    ${card("Assists Leader",a.dimes,s=>`${s.apg.toFixed(1)} assists per game`)}
  </div></div>`;}
function tabAnalysis(){const an=analysis(reg);const bars=an.units.map(u=>`<div class="unit"><div class="ul"><span>${u.k}</span><b>${Math.round(u.v)}</b></div><div class="ubar"><div style="width:${u.v}%"></div></div></div>`).join("");
  const rarity=an.oneIn===Infinity||an.oneIn>1e9?"Effectively zero":("≈ 1 in "+an.oneIn.toLocaleString());
  return `<div class="panelbox"><div class="hd"><h2>Season Analysis</h2></div><div class="anwrap"><div><div style="font-family:'IBM Plex Mono';font-size:11px;color:var(--dim);text-transform:uppercase;margin-bottom:8px">Unit Ratings</div>${bars}</div>
    <div><div style="font-family:'IBM Plex Mono';font-size:11px;color:var(--dim);text-transform:uppercase;margin-bottom:8px">The Factors</div><div class="anfacts"><div class="row"><span class="k">Projected wins</span><span class="v">${an.projW.toFixed(1)}</span></div><div class="row"><span class="k">Strongest unit</span><span class="v">${an.strongest}</span></div><div class="row"><span class="k">Weakest unit</span><span class="v">${an.weakest}</span></div><div class="row"><span class="k">Toughest opponent</span><span class="v">${an.hardest?an.hardest.name:"—"}</span></div><div class="row"><span class="k">Off / Def rating</span><span class="v">${reg.prof.O.toFixed(1)} / ${reg.prof.D.toFixed(1)}</span></div></div>
    <div class="rarity"><div class="lbl">Perfect-season chance (this seed)</div><div class="big">${rarity}</div></div></div></div></div>`;}

/* ============================================================ PLAYOFFS UI ============================================================ */
function ensurePO(){if(!po){po=simPostseason();poReveal=0;}}
function seqSeriesEnd(idx){const it=po.seq[idx];if(it.kind==="single")return idx+1;let j=idx;while(j<po.seq.length&&po.seq[j].kind==="series"&&po.seq[j].ser===it.ser)j++;return j;}
function roundEnd(idx){const rn=po.seq[idx].round;let j=idx;while(j<po.seq.length&&po.seq[j].round===rn)j++;return j;}
function paintPlayoffs(body){ensurePO();const total=po.seq.length,done=poReveal>=total,nextIt=poReveal<total?po.seq[poReveal]:null;
  body.innerHTML=`<div class="panelbox"><div class="po-controls"><button class="primary" id="poGame" ${done?"disabled":""}>▶ Play next game</button><button id="poSeries" ${done?"disabled":""}>Sim current series</button><button id="poRound" ${done?"disabled":""}>Sim round</button><button id="poAll" ${done?"disabled":""}>Sim to end</button><span class="spacer"></span><span id="poUpNext" style="font-family:'IBM Plex Mono';font-size:11px;color:var(--dim)">${done?"Postseason complete":(nextIt?("Up next: "+nextIt.round):"")}</span></div><div id="poBody"></div></div>`;
  $("#poGame").onclick=()=>{if(poReveal<total){poReveal++;afterReveal();}};$("#poSeries").onclick=()=>{if(poReveal<total){poReveal=seqSeriesEnd(poReveal);afterReveal();}};
  $("#poRound").onclick=()=>{if(poReveal<total){poReveal=roundEnd(poReveal);afterReveal();}};$("#poAll").onclick=()=>{poReveal=total;afterReveal();};
  renderPOBody();}
function afterReveal(){renderPOBody();const v=verdict();const sb=$(".scoreboard .verdict");if(sb){sb.className="verdict "+v.tone;sb.innerHTML=`<div class="headline">${v.h}</div><div class="note">${v.note}</div>`;}const total=po.seq.length,done=poReveal>=total;["poGame","poSeries","poRound","poAll"].forEach(id=>{const b=$("#"+id);if(b)b.disabled=done;});const up=$("#poUpNext");if(up)up.textContent=done?"Postseason complete":("Up next: "+po.seq[poReveal].round);}
function seriesRevealed(ser){let c=0;for(let i=0;i<poReveal&&i<po.seq.length;i++){const it=po.seq[i];if(it.kind==="series"&&it.ser===ser)c++;}return c;}
function singleRevealed(pg){for(let i=0;i<poReveal&&i<po.seq.length;i++){const it=po.seq[i];if(it.kind==="single"&&it.pg===pg)return true;}return false;}
function renderPOBody(){const body=$("#poBody");if(!body)return;const run=po.myRun,f=po.finals,you=t=>t&&t.isYou?" youser":"";
  const done=ser=>seriesRevealed(ser)>=ser.games.length;
  const tbdRow=()=>`<div class="r tbd"><span class="nm"><span class="badge2"></span>TBD</span><span class="sc"></span></div>`;
  function singleBox(pg,label,known){const yc=(known&&(you(pg.hi)||you(pg.lo)));
    if(!known)return `<div class="serie">${tbdRow()}${tbdRow()}<div class="status">${label} — awaiting earlier results</div></div>`;
    if(!singleRevealed(pg))return `<div class="serie${yc}"><div class="r"><span class="nm"><span class="badge2">#${pg.hi.seed}</span>${pg.hi.name}</span><span class="status">${label}</span></div><div class="r"><span class="nm"><span class="badge2">#${pg.lo.seed}</span>${pg.lo.name}</span><span class="status">not played</span></div></div>`;
    const tl=(t,cls,r)=>`<div class="r ${cls}"><span class="nm"><span class="badge2">#${t.seed}</span>${t.name}</span><span class="sc">${r}</span></div>`;
    return `<div class="serie${yc}">${tl(pg.winner,"win","W")}${tl(pg.loser,"out","L")}<div class="games"><span class="gchip ${pg.hiWin?"w":"l"}" data-po="single" data-key="${encodeURIComponent(pg.hi.name+"|"+pg.lo.name)}">${pg.hiPts}-${pg.loPts}</span></div></div>`;}
  function serieBox(ser,hiK,loK){if(!hiK&&!loK)return `<div class="serie">${tbdRow()}${tbdRow()}<div class="status">awaiting earlier results</div></div>`;
    const revN=seriesRevealed(ser),shown=ser.games.slice(0,revN);let hw=0,lw=0;shown.forEach(gm=>{if(gm.hiWin)hw++;else lw++;});const complete=revN>=ser.games.length;
    const yc=((hiK&&you(ser.hi))||(loK&&you(ser.lo)))?" youser":"";
    const chips=shown.map((gm,i)=>`<span class="gchip ${gm.hiWin?"w":"l"}" data-po="series" data-ser="${ser._id}" data-gi="${i}">G${i+1} ${gm.hiPts}-${gm.loPts}</span>`).join("");
    const status=complete?"":(revN===0?'<span class="status">not started</span>':`<span class="status">series ${Math.max(hw,lw)}-${Math.min(hw,lw)}</span>`);
    const hiSc=complete?(ser.winner===ser.hi?ser.score.split("-")[0]:ser.score.split("-")[1]):hw, loSc=complete?(ser.winner===ser.lo?ser.score.split("-")[0]:ser.score.split("-")[1]):lw;
    const side=(t,known,cls,sc)=>known?`<div class="r ${cls}"><span class="nm"><span class="badge2">${t.seed?"#"+t.seed:""}</span>${t.name}</span><span class="sc">${sc}</span></div>`:tbdRow();
    return `<div class="serie${yc}">${side(ser.hi,hiK,complete?(ser.winner===ser.hi?"win":"out"):"",hiSc)}${side(ser.lo,loK,complete?(ser.winner===ser.lo?"win":"out"):"",loSc)}${status}${chips?`<div class="games">${chips}</div>`:""}</div>`;}
  let sid=0;[...run.r1,...run.semi,run.cf,f].forEach(s=>{s._id=sid++;});
  const sAr=singleRevealed(run.playIn.gA),sBr=singleRevealed(run.playIn.gB),s8r=singleRevealed(run.playIn.g8);
  const r1d=run.r1.map(done),smd=run.semi.map(done),cfd=done(run.cf);
  const r1K=[[true,s8r],[true,true],[true,true],[true,sAr]];   // 1v(g8w), 4v5, 3v6, 2v(gAw)
  const smK=[[r1d[0],r1d[1]],[r1d[3],r1d[2]]];
  body.innerHTML=`<div class="round"><h4>Play-In</h4>${singleBox(run.playIn.gA,"7 v 8",true)}${singleBox(run.playIn.gB,"9 v 10",true)}${singleBox(run.playIn.g8,"8-seed game",sAr&&sBr)}</div>
    <div class="round"><h4>First Round</h4>${run.r1.map((s,i)=>serieBox(s,r1K[i][0],r1K[i][1])).join("")}</div>
    <div class="round"><h4>Conference Semifinals</h4>${run.semi.map((s,i)=>serieBox(s,smK[i][0],smK[i][1])).join("")}</div>
    <div class="round"><h4>Conference Finals</h4>${serieBox(run.cf,smd[0],smd[1])}</div>
    <div class="finalsbox"><h4>NBA Finals</h4>${serieBox(f,cfd,cfd)}${poReveal>=po.seq.length?`<div class="champline">&#127942; ${f.winner.name} — Champions${f.winner.isYou?" (you!)":""}</div>`:""}</div>`;
  body.querySelectorAll(".gchip[data-po='series']").forEach(ch=>ch.onclick=()=>{const ser=[...run.r1,...run.semi,run.cf,f].find(s=>s._id==ch.dataset.ser);const gm=ser.games[+ch.dataset.gi];openPlayoffPBP(ser,gm,+ch.dataset.gi);});
  body.querySelectorAll(".gchip[data-po='single']").forEach(ch=>ch.onclick=()=>{const [hn,ln]=decodeURIComponent(ch.dataset.key).split("|");const pg=[run.playIn.gA,run.playIn.gB,run.playIn.g8].find(p=>p.hi.name===hn&&p.lo.name===ln);openSinglePBP(pg);});}
function normalizeForYou(hi,lo,hiPts,loPts,hiWin){const pool=["PG","SG","SF","PF","C","6"].map(k=>roster[k]);
  if(hi.isYou)return {mine:hiPts,theirs:loPts,win:hiWin,oppName:lo.name,box:makeBox(pool,roster["6"],hiPts,gaussFrom(mulberry32(hashSeed(runSeed,lo.name,hiPts,loPts)))),pool};
  if(lo.isYou)return {mine:loPts,theirs:hiPts,win:!hiWin,oppName:hi.name,box:makeBox(pool,roster["6"],loPts,gaussFrom(mulberry32(hashSeed(runSeed,hi.name,loPts,hiPts)))),pool};
  return {mine:hiPts,theirs:loPts,win:hiWin,oppName:lo.name,leftName:hi.name};}
function openPlayoffPBP(ser,gm,gi){const n=normalizeForYou(ser.hi,ser.lo,gm.hiPts,gm.loPts,gm.hiWin);n.g=gi+1;n.title=`${ser.hi.name} vs ${ser.lo.name} · Game ${gi+1}`;openPBP(n);}
function openSinglePBP(pg){const n=normalizeForYou(pg.hi,pg.lo,pg.hiPts,pg.loPts,pg.hiWin);n.title=`${pg.hi.name} vs ${pg.lo.name} · Play-In`;openPBP(n);}

/* ============================================================ PBP MODAL ============================================================ */
function openPBP(gm){const leftName=gm.leftName||"Your Legends",rightName=gm.oppName,leftPts=gm.mine,rightPts=gm.theirs,leftWin=gm.win;const pbp=buildPBP(gm);const root=$("#modalRoot");
  root.innerHTML=`<div class="modal"><div class="box"><div class="mh"><span class="t">${gm.title||("vs "+rightName)}</span><span class="x" id="pbpX">&times;</span></div>
    <div class="pbp-score"><div class="pbp-side ${leftWin?"w":"l"}"><div class="tn">${leftName}</div><div class="pt" id="pbpL">0</div></div><div style="color:var(--dim);font-family:Anton;font-size:24px">–</div><div class="pbp-side ${leftWin?"l":"w"}"><div class="tn">${rightName}</div><div class="pt" id="pbpR">0</div></div></div>
    <table class="qtable"><thead><tr><th></th><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th><th>F</th></tr></thead><tbody><tr><td class="tm">${leftName}</td>${pbp.mq.map(q=>`<td>${q}</td>`).join("")}<td class="fin">${leftPts}</td></tr><tr><td class="tm">${rightName}</td>${pbp.tq.map(q=>`<td>${q}</td>`).join("")}<td class="fin">${rightPts}</td></tr></tbody></table>
    <div class="pbp-ctrls"><button id="pbpQuick" class="${pbpMode==='quick'?'on':''}">Quick</button><button id="pbpWatch" class="${pbpMode==='watch'?'on':''}">Play-by-play ▸</button></div><div class="feed" id="pbpFeed"></div></div></div>`;
  $("#pbpX").onclick=()=>root.innerHTML="";root.querySelector(".modal").onclick=(e)=>{if(e.target.classList.contains("modal"))root.innerHTML="";};
  const setMode=(m)=>{pbpMode=m;$("#pbpQuick").classList.toggle("on",m==="quick");$("#pbpWatch").classList.toggle("on",m==="watch");renderFeed(pbp,leftPts,rightPts,m);};
  $("#pbpQuick").onclick=()=>setMode("quick");$("#pbpWatch").onclick=()=>setMode("watch");renderFeed(pbp,leftPts,rightPts,pbpMode);}
function renderFeed(pbp,leftPts,rightPts,mode){const feed=$("#pbpFeed"),L=$("#pbpL"),R=$("#pbpR");
  if(mode==="quick"){L.textContent=leftPts;R.textContent=rightPts;feed.innerHTML=pbp.feed.map(fq=>`<div class="fq">End of Q${fq.q} — ${fq.mScore}-${fq.tScore}</div>`+fq.plays.map(p=>`<div class="play"><span class="desc">${p.you?`<span class="who">${p.who}</span>`:p.who} ${p.val===3?"drills a three":"scores"}</span></div>`).join("")).join("");return;}
  feed.innerHTML="";L.textContent="0";R.textContent="0";let i=0,stopped=false;const box=$("#modalRoot .box");if(box)box._stop=()=>stopped=true;
  (function tick(){if(stopped||i>=pbp.feed.length)return;const fq=pbp.feed[i];const hdr=document.createElement("div");hdr.className="fq";hdr.textContent=`Q${fq.q}`;feed.appendChild(hdr);
    fq.plays.forEach((p,k)=>setTimeout(()=>{if(stopped)return;const d=document.createElement("div");d.className="play";d.innerHTML=`<span class="desc">${p.you?`<span class="who">${p.who}</span>`:p.who} ${p.val===3?"drills a three":"scores"}</span>`;feed.appendChild(d);feed.scrollTop=feed.scrollHeight;},k*220));
    setTimeout(()=>{if(stopped)return;L.textContent=fq.mScore;R.textContent=fq.tScore;const e=document.createElement("div");e.className="fq";e.textContent=`End of Q${fq.q} — ${fq.mScore}-${fq.tScore}`;feed.appendChild(e);i++;tick();},fq.plays.length*220+400);})();}

/* ================= MULTIPLAYER — Firebase live lobby (Phase 1: waiting room) ================= */
const FIREBASE_CONFIG={apiKey:"AIzaSyA5dhTBzxjjt_Hozfoto50nsOAmhaIZk48",authDomain:"project-82-0.firebaseapp.com",databaseURL:"https://project-82-0-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"project-82-0",storageBucket:"project-82-0.firebasestorage.app",messagingSenderId:"1084377339040",appId:"1:1084377339040:web:f98bea8a2eff042218e5c5",measurementId:"G-WXVD3XZK24"};
let mpOn=false,mpAuth=null,mpDb=null,mpUid=null,mpRoom=null,mpCode=null,mpJoined=false,mpStarted=false,mpIsHost=false,mpRoomData=null,mpPublished=false,mpRan=false,mpLobbyTeams=null,mpTimer=null,mpTimeLeft=0;
const DRAFT_SECONDS=120;
function mpEsc(s){return String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function mpInit(){if(mpOn)return true;if(typeof firebase==="undefined"||!firebase.initializeApp)return false;try{if(!(firebase.apps&&firebase.apps.length))firebase.initializeApp(FIREBASE_CONFIG);mpAuth=firebase.auth();mpDb=firebase.database();mpOn=true;return true;}catch(e){console.warn("Firebase unavailable",e);return false;}}
function mpHeader(l){const c=$("#mpCodeShow");if(c)c.textContent=groupCode(l.code);const s=$("#mpSettings");if(s)s.innerHTML=`Era ${l.from}\u2013${l.to} \u00b7 ${l.conf==="E"?"Eastern":"Western"} Conference \u00b7 everyone plays the identical league`;const lv=$("#mpLeave");if(lv)lv.onclick=mpLeave;}
function mpJoin(l){mpCode=l.code;
  mpAuth.onAuthStateChanged(user=>{if(!user||mpJoined)return;mpJoined=true;mpUid=user.uid;mpRoom=mpDb.ref("rooms/"+mpCode);
    mpRoom.child("settings").once("value").then(s=>{
      if(!s.exists())mpRoom.child("settings").set({seed:l.seed,eraFrom:l.from,eraTo:l.to,conf:l.conf,hostId:mpUid,status:"waiting",createdAt:Date.now()}).catch(()=>{});
      const meRef=mpRoom.child("players/"+mpUid);
      meRef.update({name:(window._lbName||"Player"),ready:false,joinedAt:Date.now()}).catch(()=>{});
      meRef.onDisconnect().remove();
      mpRoom.on("value",snap=>mpOnRoom(snap.val()));
    }).catch(()=>renderLobbyScreen(null,"Couldn't reach the lobby \u2014 check your connection, or tap Leave to play solo."));
  });
  mpAuth.signInAnonymously().catch(()=>renderLobbyScreen(null,"Sign-in failed \u2014 check your connection, or tap Leave to play solo."));
}
function renderLobbyScreen(room,note){const body=$("#lobbyBody");if(!body)return;
  if(!room){body.innerHTML=`<div class="mp-note">${note||"Connecting\u2026"}</div>`;return;}
  const settings=room.settings||{},players=room.players||{};
  mpIsHost=(settings.hostId===mpUid);
  const ids=Object.keys(players).sort((a,b)=>(players[a].joinedAt||0)-(players[b].joinedAt||0));
  const allReady=ids.length>0&&ids.every(id=>players[id].ready);
  const me=players[mpUid]||{};
  const free=!!settings.free;
  const list=ids.map(id=>{const p=players[id],you=id===mpUid,host=id===settings.hostId;
    return `<div class="mp-p${you?" me":""}"><span class="mp-nm">${mpEsc(p.name||"Player")}${host?' <span class="mp-hosttag">host</span>':""}${you?' <span class="mp-youtag">you</span>':""}</span><span class="mp-rd ${p.ready?"on":""}">${p.ready?"Ready":"Not ready"}</span></div>`;}).join("");
  body.innerHTML=`<div class="mp-players">${list||'<div class="mp-note">Waiting for players\u2026</div>'}</div>
    <div class="mp-namerow"><label>Your name</label><input id="mpName" class="mp-in" maxlength="18" value="${mpEsc(me.name||window._lbName||"")}"></div>
    ${mpIsHost?`<div class="mp-posrow"><span class="mp-poslbl">Positioning</span><div class="conf-toggle" id="mpPos"><button data-f="0" class="${free?"":"on"}">By position</button><button data-f="1" class="${free?"on":""}">Free</button></div></div>`:`<div class="mp-note" style="margin-bottom:12px">Positioning: <b>${free?"Free (positionless)":"By position"}</b> \u00b7 set by host</div>`}
    <button class="bigcta${me.ready?" isready":""}" id="mpReady">${me.ready?"\u2713 Ready":"I'm ready"}</button>
    ${mpIsHost?`<button class="bigcta" id="mpStart" style="margin-top:10px"${allReady?"":" disabled"}>${allReady?"Start league &rarr;":"Waiting for all players to ready"}</button>`:`<div class="mp-note" style="margin-top:12px">${allReady?"Everyone's ready \u2014 waiting for the host to start.":"Ready up, then the host starts the league."}</div>`}`;
  const nm=$("#mpName");if(nm)nm.onchange=()=>{const v=(nm.value||"").slice(0,18)||"Player";window._lbName=v;if(mpRoom)mpRoom.child("players/"+mpUid+"/name").set(v);};
  const pos=$("#mpPos");if(pos)pos.querySelectorAll("button").forEach(b=>b.onclick=()=>{if(mpRoom)mpRoom.child("settings/free").set(b.dataset.f==="1");});
  const rb=$("#mpReady");if(rb)rb.onclick=()=>{if(mpRoom)mpRoom.child("players/"+mpUid+"/ready").set(!me.ready);};
  const sb=$("#mpStart");if(sb)sb.onclick=()=>{if(allReady&&mpRoom)mpRoom.child("settings/status").set("started");};
}
function mpLeave(){try{if(mpRoom){mpRoom.off();mpRoom.child("players/"+mpUid).remove();}}catch(e){}clearInterval(mpTimer);mpRoom=null;mpJoined=false;mpStarted=false;mpPublished=false;mpRan=false;leaveLobby();showScreen("setup");}

/* ---- Phase 2: shared league — lobby teams become extension franchises ---- */
function mpRosterArr(r){if(!r)return [];const a=Array.isArray(r)?r.slice():Object.keys(r).sort((x,y)=>x-y).map(k=>r[k]);const ord=["PG","SG","SF","PF","C","6"];return a.slice().sort((p,q)=>ord.indexOf(p.slot)-ord.indexOf(q.slot));}
function mpPublishRoster(){if(!mpRoom||!mpUid||!rosterFull())return;const order=["PG","SG","SF","PF","C","6"];const r=order.map(k=>{const p=roster[k];return {slot:k,n:p.n,pos:p.pos,ppg:p.ppg,rpg:p.rpg,apg:p.apg,imp:p.imp,tm:p.tm,yr:p.yr};});mpRoom.child("players/"+mpUid).update({roster:r,drafted:true}).catch(()=>{});}
function autoFillRoster(){const taken=takenNames();["PG","SG","SF","PF","C","6"].forEach(k=>{if(roster[k])return;const cands=ALL_PLAYERS.filter(p=>inRange(p.yr)&&!taken.has(p.n)&&(k==="6"||freePos||eligPositions(p).includes(k)));if(!cands.length)return;const pick=cands[Math.floor(Math.random()*cands.length)];roster[k]=Object.assign({},pick);taken.add(pick.n);});currentTeam=null;pickSel=null;renderAll();}
function mpFmt(s){s=Math.max(0,s);return Math.floor(s/60)+":"+String(s%60).padStart(2,"0");}
function mpStartTimer(){if(!mpRoom)return;clearInterval(mpTimer);mpTimeLeft=DRAFT_SECONDS;const el=$("#draftTimer");if(el)el.style.display="";mpTickTimer();mpTimer=setInterval(mpTickTimer,1000);}
function mpTickTimer(){const el=$("#draftTimer");
  if(screen!=="draft"||!mpRoom){clearInterval(mpTimer);if(el)el.style.display="none";return;}
  if(rosterFull()){clearInterval(mpTimer);if(el){el.textContent="\u2713 Team locked";el.classList.remove("low");}return;}
  if(mpTimeLeft<=0){clearInterval(mpTimer);if(el){el.textContent="\u23f1 Time! Auto-filled";el.classList.remove("low");}autoFillRoster();return;}
  if(el){el.textContent="\u23f1 "+mpFmt(mpTimeLeft)+" to draft";el.classList.toggle("low",mpTimeLeft<=15);}
  mpTimeLeft--;}
function buildLobbyUnit(six,name,conf,uid,isYou){let oN=0,oD=0,dN=0,dD=0,apgW=0,rpgW=0,wsum=0;six.forEach(e=>{const w=e.slot==="6"?0.5:1;const pos=e.slot==="6"?(e.pos||"SF"):e.slot;const ow=OFFW[pos]*w,dw=DEFW[pos]*w;oN+=offI(e)*ow;oD+=ow;dN+=defI(e)*dw;dD+=dw;apgW+=(e.apg||0)*w;rpgW+=(e.rpg||0)*w;wsum+=w;});const O=oN/oD,D=dN/dD;return {name:name||"Player",conf,isYou,uid,lobby:true,O,D,prof:{O,D,apg:apgW/wsum,rpg:rpgW/wsum},six,cheat:isDreamSix(six),rating:(O+D)/2,wins:0,losses:0,gp:0};}
function simulateLeagueMP(seed,lobbyTeams){
  const teams=NBA_TEAMS.map(t=>({name:t.name,conf:t.conf,rating:t.rating,O:t.rating,D:t.rating,isYou:false,lobby:false,wins:0,losses:0,gp:0})).concat(lobbyTeams);
  const rng=mulberry32(seed),g=gaussFrom(rng);const sched=[];
  for(let i=0;i<teams.length;i++)for(let j=i+1;j<teams.length;j++){sched.push([teams[i],teams[j]]);sched.push([teams[j],teams[i]]);teams[i].gp+=2;teams[j].gp+=2;}
  const n=teams.length,extra=Math.round((82-2*(n-1))/2);
  if(extra>0)for(let i=0;i<n;i++)for(let d=1;d<=extra;d++){const j=(i+d)%n;sched.push([teams[i],teams[j]]);teams[i].gp++;teams[j].gp++;}
  for(let i=sched.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[sched[i],sched[j]]=[sched[j],sched[i]];}
  const me=lobbyTeams.find(t=>t.isYou),yourGames=[];
  sched.forEach(([h,aw])=>{const res=sampleGeneric(h.rating,aw.rating,true,g);let hw=res.win;if(h.cheat&&!aw.cheat)hw=true;else if(aw.cheat&&!h.cheat)hw=false;if(hw){h.wins++;aw.losses++;}else{h.losses++;aw.wins++;}
    if(me&&(h===me||aw===me)){const home=h===me;let mine=home?res.a:res.b,theirs=home?res.b:res.a;let win=home?hw:!hw;if(me.cheat&&mine<=theirs){const t=mine;mine=theirs;theirs=t;if(mine===theirs)mine++;}const opp=home?aw:h;yourGames.push({opp:opp.name,oppR:opp.rating,home,win,mine,theirs,vsLobby:!!opp.lobby,vsUid:opp.uid||null});}});
  const order=["PG","SG","SF","PF","C","6"];
  const pool=me?me.six.slice().sort((a,b)=>order.indexOf(a.slot)-order.indexOf(b.slot)).map(e=>({n:e.n,pos:e.pos,ppg:e.ppg,rpg:e.rpg,apg:e.apg,imp:e.imp,tm:e.tm,yr:e.yr})):order.map(k=>roster[k]);
  const sixth=pool[5],tot=pool.map(()=>({pts:0,reb:0,ast:0}));
  yourGames.forEach((gm,i)=>{gm.g=i+1;const gg=gaussFrom(mulberry32(hashSeed(seed,"box",i)));const box=makeBox(pool,sixth,gm.mine,gg);gm.box=box;pool.forEach((pl,j)=>{tot[j].pts+=box.pts[j];tot[j].reb+=box.reb[j];tot[j].ast+=box.ast[j];});let sM=-1,sI=0,aM=-1,aI=0;box.pts.forEach((v,j)=>{if(v>sM){sM=v;sI=j;}});box.ast.forEach((v,j)=>{if(v>aM){aM=v;aI=j;}});gm.topS=pool[sI];gm.sVal=sM;gm.topA=pool[aI];gm.aVal=aM;});
  const W=yourGames.filter(x=>x.win).length,L=yourGames.length-W;
  const confs={E:[],W:[]};teams.forEach(t=>confs[t.conf].push(t));
  for(const c of ["E","W"]){confs[c].sort((a,b)=>b.wins-a.wins||b.rating-a.rating);confs[c].forEach((t,i)=>{t.seed=i+1;});}
  const gp=yourGames.length||1;
  const playerStats=pool.map((pl,j)=>({p:pl,ppg:tot[j].pts/gp,rpg:tot[j].reb/gp,apg:tot[j].ast/gp,pts:tot[j].pts}));
  const league=playerStats.map(s=>({n:s.p.n,pos:s.p.pos,team:me?me.name:"Your Legends",tw:W,ppg:s.ppg,rpg:s.rpg,apg:s.apg,imp:s.p.imp,isYou:true}));
  teams.filter(t=>!t.lobby).forEach(t=>{const b=BACKDROP_STARS[t.name];if(!b)return;const r=mulberry32(hashSeed(seed,"star",t.name)),gg=gaussFrom(r);const form=0.88+(t.rating-LG_MEAN)/55;league.push({n:b.n,pos:b.pos,team:t.name,tw:t.wins,ppg:Math.max(4,b.ppg*form*gg(1,0.06)),rpg:Math.max(1,b.rpg*(0.92+form*0.1)*gg(1,0.08)),apg:Math.max(0.5,b.apg*form*gg(1,0.08)),imp:b.imp,isYou:false});});
  const pf=yourGames.reduce((a,x)=>a+x.mine,0)/gp,pa=yourGames.reduce((a,x)=>a+x.theirs,0)/gp;
  return {seed,you:me,prof:me?me.prof:unitProfile(),W,L,games:yourGames,pf,pa,confs,teams,playerStats,league,sixth:playerStats[5],mp:true};
}
function tryRunMP(room){const s=room.settings||{},players=room.players||{};let lineup=(s.lineup&&s.lineup.length)?s.lineup.slice():Object.keys(players).filter(id=>players[id].drafted);lineup=lineup.slice().sort();if(!lineup.length)return;if(!lineup.every(id=>players[id]&&players[id].roster))return;if(!lineup.includes(mpUid)){mpRan=true;const sim=$("#sim");if(sim){sim.disabled=true;sim.textContent="Season started without you \u2014 you didn't draft in time";}return;}mpRan=true;mpLobbyTeams=lineup.map(id=>buildLobbyUnit(mpRosterArr(players[id].roster),players[id].name,(s.conf||conference),id,id===mpUid));runSeasonMP();}
function runSeasonMP(){runSeed=(lobby?lobby.seed:0)>>>0;reg=simulateLeagueMP(runSeed,mpLobbyTeams);po=null;poReveal=0;phase="regular";activeResTab="log";started=true;updateSummaries();showScreen("results");animateSeason(()=>setTimeout(showChampionPopup,300));}
function ordSafe(n){try{return ordinal(n);}catch(e){return "#"+n;}}
function showChampionPopup(){if(!reg||!reg.teams)return;const lob=reg.teams.filter(t=>t.lobby).slice().sort((a,b)=>b.wins-a.wins||a.seed-b.seed);if(!lob.length)return;const champ=lob[0],youWon=!!champ.isYou,myIdx=lob.findIndex(t=>t.isYou);
  const rows=lob.map((t,i)=>`<div class="ch-row${t.isYou?" me":""}${i===0?" champ":""}"><span class="ch-rank">${i===0?"\u{1F451}":"#"+(i+1)}</span><span class="ch-nm">${mpEsc(t.name)}${t.isYou?' <span class="mp-youtag">you</span>':""}</span><span class="ch-rec">${t.wins}\u2013${t.losses}</span><span class="ch-seed">${t.conf==="E"?"East":"West"} ${ordSafe(t.seed)}</span></div>`).join("");
  const root=$("#modalRoot");if(!root)return;
  root.innerHTML=`<div class="lbm-bg" id="chBg"><div class="lbm ch-modal"><div class="ch-crown">${youWon?"\u{1F451} You are the lobby Champion":mpEsc(champ.name)+" wins the lobby"}</div><div class="ch-sub">${youWon?`Best record in the lobby at ${champ.wins}\u2013${champ.losses}.`:`You finished ${ordSafe(myIdx+1)} of ${lob.length}. ${mpEsc(champ.name)} took the crown at ${champ.wins}\u2013${champ.losses}.`}</div><div class="ch-list">${rows}</div><button class="lbm-btn" id="chClose">See full standings</button></div></div>`;
  const close=()=>{root.innerHTML="";};$("#chClose").onclick=close;$("#chBg").onclick=(e)=>{if(e.target.id==="chBg")close();};
}
function mpUpdateDraftUI(room){if(!mpRoom||screen!=="draft")return;const sim=$("#sim");if(!sim)return;const modeEl=$("#simmode");if(modeEl)modeEl.style.display="none";
  const players=(room&&room.players)||{},ids=Object.keys(players),drafted=ids.filter(id=>players[id].drafted).length,total=ids.length;
  if(!rosterFull()){sim.disabled=true;sim.textContent=`Fill all 6 to lock your team (${Object.values(roster).filter(Boolean).length}/6)`;sim.onclick=null;return;}
  if(mpIsHost){const canRun=drafted>=1;sim.disabled=!canRun;sim.textContent=(drafted>=total)?`Run the season \u2192 (all ${total} ready)`:`Run the season \u2192 (${drafted}/${total} drafted)`;sim.onclick=()=>{if(mpRoom){const lineup=ids.filter(id=>players[id].drafted);if(lineup.length)mpRoom.child("settings").update({status:"running",lineup});}};}
  else{sim.disabled=true;sim.textContent=`\u2713 Team locked \u2014 waiting (${drafted}/${total} drafted)`;sim.onclick=null;}
}
function mpOnRoom(room){if(!room)return;mpRoomData=room;const st=(room.settings||{}).status;
  if(st==="started"&&screen==="lobby"&&!mpStarted){mpStarted=true;freePos=!!(room.settings&&room.settings.free);startDraft();mpStartTimer();}
  if(st==="running"&&!mpRan){clearInterval(mpTimer);tryRunMP(room);}
  if(screen==="lobby")renderLobbyScreen(room);else if(screen==="draft")mpUpdateDraftUI(room);
}

/* ---- Head-to-head rivalry play-by-play (lobby opponents only) ---- */
function fmtClock(sec){sec=Math.max(0,sec);return Math.floor(sec/60)+":"+String(sec%60).padStart(2,"0");}
function rivDesc(who,val,rng,mates){if(val===1)return who+" makes free throw";const s2=["driving layup","8-foot floater","turnaround jumper","step-back jumper","cutting dunk","putback layup","fadeaway jumper","mid-range pull-up"],s3=["26-foot three","corner three","step-back three","pull-up three","transition three"];let d=who+" makes "+(val===3?s3[Math.floor(rng()*s3.length)]:s2[Math.floor(rng()*s2.length)]);if(rng()<0.4&&mates.length>1){let a=mates[Math.floor(rng()*mates.length)],guard=0;while(a===who&&guard++<5)a=mates[Math.floor(rng()*mates.length)];if(a!==who)d+=" ("+a+" assists)";}return d;}
function rivFlavor(type,nm,other){return type==="Block"?(nm+" blocks "+other):type==="Rebound"?(nm+" rebound"):type==="Steal"?(nm+" steal"):type==="Turnover"?(nm+" turnover"):(nm+" personal foul");}
function buildRivalryFeed(gm){
  const order=["PG","SG","SF","PF","C","6"];
  const me=mpLobbyTeams.find(t=>t.isYou)||{name:"You",six:[]};
  const opp=mpLobbyTeams.find(t=>t.uid===gm.vsUid)||{name:gm.opp,six:[]};
  const meP=me.six.slice().sort((a,b)=>order.indexOf(a.slot)-order.indexOf(b.slot)).map(e=>e.n);
  let opP=(opp.six||[]).slice().sort((a,b)=>order.indexOf(a.slot)-order.indexOf(b.slot)).map(e=>e.n);if(!opP.length)opP=[opp.name];
  const key=[me.name,opp.name].sort();
  const base=hashSeed(runSeed,"h2h",key[0],key[1],Math.max(gm.mine,gm.theirs),Math.min(gm.mine,gm.theirs));
  const rng=mulberry32(base),g=gaussFrom(mulberry32(base^0x5bd1e995));
  const meBox=gm.box?gm.box.pts.slice():makeBox(me.six,me.six[5],gm.mine,gaussFrom(mulberry32(base^7))).pts;
  const opBox=makeBox((opp.six&&opp.six.length)?opp.six:me.six,(opp.six&&opp.six[5])||me.six[5],gm.theirs,gaussFrom(mulberry32(base^13))).pts;
  function splitQ(total){let q=[0,0,0,0],s=0;for(let i=0;i<4;i++){q[i]=Math.max(8,g(total/4,4));s+=q[i];}q=q.map(x=>Math.round(x*total/s));q[3]+=total-q.reduce((a,b)=>a+b,0);return q;}
  const mq=splitQ(gm.mine),tq=splitQ(gm.theirs);
  function baskets(total,names,box){const ev=[];let rem=total,guard=0;const ws=box.reduce((a,b)=>a+Math.max(0,b),0)||1;while(rem>0&&guard++<300){let val=rem>=3&&rng()<0.36?3:(rem>=2?2:1);if(rem<2)val=1;let x=rng()*ws,idx=0;for(let i=0;i<box.length;i++){x-=Math.max(0,box[i]);if(x<=0){idx=i;break;}}ev.push({who:names[Math.min(idx,names.length-1)],val});rem-=val;}return ev;}
  const flavor=["Rebound","Steal","Turnover","Block","Foul"],feed=[];let sm=0,st=0;
  for(let q=0;q<4;q++){
    const mev=baskets(mq[q],meP,meBox),tev=baskets(tq[q],opP,opBox),seq=[];let mi=0,ti=0;
    while(mi<mev.length||ti<tev.length){const pm=(ti>=tev.length)||(mi<mev.length&&rng()<0.5);seq.push(pm?{side:"me",ev:mev[mi++]}:{side:"opp",ev:tev[ti++]});}
    let clock=12*60;
    seq.forEach(s=>{
      if(rng()<0.32){const ft=flavor[Math.floor(rng()*flavor.length)],fs=rng()<0.5?"me":"opp",A=fs==="me"?meP:opP,B=fs==="me"?opP:meP;clock=Math.max(0,clock-Math.round(5+rng()*20));feed.push({q:q+1,time:fmtClock(clock),type:ft,desc:rivFlavor(ft,A[Math.floor(rng()*A.length)],B[Math.floor(rng()*B.length)]),side:fs,sm,st});}
      clock=Math.max(0,clock-Math.round(8+rng()*22));if(s.side==="me")sm+=s.ev.val;else st+=s.ev.val;
      const val=s.ev.val,type=val===3?"3-pointer":val===1?"Free Throw":"Made Shot";
      feed.push({q:q+1,time:fmtClock(clock),type,desc:rivDesc(s.ev.who,val,rng,s.side==="me"?meP:opP),side:s.side,val,sm,st,score:true});
    });
    feed.push({q:q+1,type:"__end__",endM:sm,endT:st});
  }
  return {feed,meName:me.name,oppName:opp.name,mine:gm.mine,theirs:gm.theirs,win:gm.win};
}
function playRivalry(gm,done){
  const root=$("#modalRoot");if(!root||!mpLobbyTeams){done();return;}
  const R=buildRivalryFeed(gm),meWin=gm.win;
  root.innerHTML=`<div class="lbm-bg" id="rivBg"><div class="lbm riv-modal"><div class="riv-tag">\u2694\ufe0f Head-to-head \u2014 lobby rival</div><div class="riv-score"><div class="riv-team me"><div class="riv-nm">${mpEsc(R.meName)} <span class="mp-youtag">you</span></div><div class="riv-pts" id="rivM">0</div></div><div class="riv-vs">vs</div><div class="riv-team" id="rivTteam"><div class="riv-nm">${mpEsc(R.oppName)}</div><div class="riv-pts" id="rivT">0</div></div></div><div class="riv-clock" id="rivClock">Tip-off</div><div class="feed riv-feed" id="rivFeed"></div><button class="lbm-btn sec" id="rivSkip">Skip to result \u2192</button></div></div>`;
  const feedEl=$("#rivFeed"),mEl=$("#rivM"),tEl=$("#rivT"),clockEl=$("#rivClock");let i=0,stopped=false;
  function finalize(){stopped=true;mEl.textContent=gm.mine;tEl.textContent=gm.theirs;$(".riv-team.me").classList.toggle("win",meWin);$("#rivTteam").classList.toggle("win",!meWin);clockEl.innerHTML=`Final \u2014 <b style="color:${meWin?'var(--win)':'var(--loss)'}">${meWin?"You win":"You lose"} ${gm.mine}\u2013${gm.theirs}</b>`;const b=$("#rivSkip");b.textContent="Continue season \u2192";b.classList.remove("sec");b.onclick=()=>{root.innerHTML="";done();};}
  function row(p){if(p.type==="__end__"){const d=document.createElement("div");d.className="fq";d.textContent=`End of Q${p.q} \u2014 ${p.endM}\u2013${p.endT}`;feedEl.appendChild(d);return;}const d=document.createElement("div");d.className="play riv-play "+(p.side==="me"?"me":"opp")+(p.score?" score":"");d.innerHTML=`<span class="rp-l"><span class="rp-type">${p.type}</span><span class="rp-desc">${mpEsc(p.desc)}</span></span><span class="rp-t">${p.time} \u00b7 Q${p.q}</span>${p.score?`<span class="rp-sc">${p.sm}\u2013${p.st}</span>`:'<span class="rp-sc"></span>'}`;feedEl.appendChild(d);if(p.score){mEl.textContent=p.sm;tEl.textContent=p.st;}clockEl.textContent="Q"+p.q+"  "+p.time;}
  function step(){if(stopped)return;if(i>=R.feed.length){finalize();return;}row(R.feed[i++]);feedEl.scrollTop=feedEl.scrollHeight;setTimeout(step,55);}
  $("#rivSkip").onclick=()=>{if(stopped){root.innerHTML="";done();return;}while(i<R.feed.length)row(R.feed[i++]);feedEl.scrollTop=feedEl.scrollHeight;finalize();};
  step();
}

/* ============================================================ WIRE UP ============================================================ */
$("#sim").addEventListener("click",()=>{if(!mpRoom&&rosterFull())runSeason();});
initControls();applyLock();
const _lb=parseHashLobby();
if(_lb){applyLobby(_lb);if(mpInit()){mpHeader(_lb);showScreen("lobby");mpJoin(_lb);}else{showScreen("setup");}}
else{showScreen("setup");}
renderAll();
