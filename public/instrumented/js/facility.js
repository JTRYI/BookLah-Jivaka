function cov_17nysk72q3(){var path="C:\\Users\\teiji\\TP Year 2-3 Coding Projects\\DevOps Y2\\BookLah\\public\\js\\facility.js";var hash="3afaa5fed89860b594d534d571a330742da81cc1";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\teiji\\TP Year 2-3 Coding Projects\\DevOps Y2\\BookLah\\public\\js\\facility.js",statementMap:{"0":{start:{line:1,column:19},end:{line:1,column:21}},"1":{start:{line:2,column:24},end:{line:2,column:28}},"2":{start:{line:6,column:19},end:{line:6,column:21}},"3":{start:{line:7,column:18},end:{line:7,column:38}},"4":{start:{line:8,column:4},end:{line:8,column:48}},"5":{start:{line:9,column:4},end:{line:9,column:65}},"6":{start:{line:11,column:4},end:{line:32,column:6}},"7":{start:{line:12,column:8},end:{line:12,column:52}},"8":{start:{line:13,column:8},end:{line:13,column:29}},"9":{start:{line:14,column:19},end:{line:14,column:21}},"10":{start:{line:15,column:8},end:{line:28,column:9}},"11":{start:{line:15,column:21},end:{line:15,column:22}},"12":{start:{line:17,column:12},end:{line:26,column:25}},"13":{start:{line:27,column:16},end:{line:27,column:22}},"14":{start:{line:29,column:8},end:{line:29,column:65}},"15":{start:{line:30,column:29},end:{line:30,column:61}},"16":{start:{line:31,column:8},end:{line:31,column:35}},"17":{start:{line:33,column:4},end:{line:33,column:19}},"18":{start:{line:40,column:18},end:{line:40,column:38}},"19":{start:{line:41,column:4},end:{line:41,column:48}},"20":{start:{line:42,column:4},end:{line:42,column:65}},"21":{start:{line:43,column:4},end:{line:55,column:6}},"22":{start:{line:44,column:8},end:{line:44,column:58}},"23":{start:{line:45,column:19},end:{line:45,column:47}},"24":{start:{line:46,column:8},end:{line:54,column:9}},"25":{start:{line:47,column:12},end:{line:47,column:93}},"26":{start:{line:48,column:12},end:{line:48,column:78}},"27":{start:{line:49,column:12},end:{line:49,column:90}},"28":{start:{line:51,column:12},end:{line:51,column:64}},"29":{start:{line:53,column:12},end:{line:53,column:69}},"30":{start:{line:56,column:4},end:{line:56,column:19}},"31":{start:{line:60,column:4},end:{line:60,column:38}},"32":{start:{line:61,column:4},end:{line:61,column:41}},"33":{start:{line:62,column:4},end:{line:62,column:40}}},fnMap:{"0":{name:"viewResources",decl:{start:{line:4,column:9},end:{line:4,column:22}},loc:{start:{line:4,column:25},end:{line:37,column:1}},line:4},"1":{name:"(anonymous_1)",decl:{start:{line:11,column:21},end:{line:11,column:22}},loc:{start:{line:11,column:33},end:{line:32,column:5}},line:11},"2":{name:"showFacilityDetails",decl:{start:{line:39,column:9},end:{line:39,column:28}},loc:{start:{line:39,column:38},end:{line:57,column:1}},line:39},"3":{name:"(anonymous_3)",decl:{start:{line:43,column:21},end:{line:43,column:22}},loc:{start:{line:43,column:33},end:{line:55,column:5}},line:43},"4":{name:"logout",decl:{start:{line:59,column:9},end:{line:59,column:15}},loc:{start:{line:59,column:17},end:{line:63,column:1}},line:59}},branchMap:{"0":{loc:{start:{line:46,column:8},end:{line:54,column:9}},type:"if",locations:[{start:{line:46,column:8},end:{line:54,column:9}},{start:{line:46,column:8},end:{line:54,column:9}}],line:46}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3afaa5fed89860b594d534d571a330742da81cc1"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_17nysk72q3=function(){return actualCoverage;};}return actualCoverage;}cov_17nysk72q3();var facility_array=(cov_17nysk72q3().s[0]++,[]);var currentFacilityId=(cov_17nysk72q3().s[1]++,null);function viewResources(){cov_17nysk72q3().f[0]++;var response=(cov_17nysk72q3().s[2]++,'');var request=(cov_17nysk72q3().s[3]++,new XMLHttpRequest());cov_17nysk72q3().s[4]++;request.open('GET','/view-facility',true);cov_17nysk72q3().s[5]++;request.setRequestHeader('Content-Type','application/json');cov_17nysk72q3().s[6]++;request.onload=function(){cov_17nysk72q3().f[1]++;cov_17nysk72q3().s[7]++;response=JSON.parse(request.responseText);cov_17nysk72q3().s[8]++;console.log(response);var html=(cov_17nysk72q3().s[9]++,'');cov_17nysk72q3().s[10]++;for(var i=(cov_17nysk72q3().s[11]++,0);i<response.length;i++){cov_17nysk72q3().s[12]++;html+='<div class="facility-container"style="border: 1px solid #ccc; padding: 10px;"onclick="showFacilityDetails(this)" data-toggle="modal" data-target="#proModal" item="'+i+'">'+'<img src="'+response[i].image+'" alt="Facility Image" style="max-width:200px; max-height:200px;">'+'<div class="facility-details"item="'+i+'">'+'<br>'+// '<p><strong>Facility ID:</strong> ' + response[i].facilityId + '</p>' +
'<p><strong>Facility: </strong> '+response[i].facility_name+'</p>'+'<p><strong>Address:</strong> '+response[i].address+'</p>'+'<br>'+'</div>'+'</div>';cov_17nysk72q3().s[13]++;'<br>';}cov_17nysk72q3().s[14]++;document.getElementById('tableContent').innerHTML=html;var facility_array=(cov_17nysk72q3().s[15]++,JSON.parse(request.responseText));cov_17nysk72q3().s[16]++;console.log(facility_array);};cov_17nysk72q3().s[17]++;request.send();//console.log(response.JSON)
}function showFacilityDetails(element){cov_17nysk72q3().f[2]++;var request=(cov_17nysk72q3().s[18]++,new XMLHttpRequest());cov_17nysk72q3().s[19]++;request.open('GET','/view-facility',true);cov_17nysk72q3().s[20]++;request.setRequestHeader('Content-Type','application/json');cov_17nysk72q3().s[21]++;request.onload=function(){cov_17nysk72q3().f[3]++;cov_17nysk72q3().s[22]++;facility_array=JSON.parse(request.responseText);// Populate the global array
var item=(cov_17nysk72q3().s[23]++,element.getAttribute("item"));cov_17nysk72q3().s[24]++;if(facility_array[item]){cov_17nysk72q3().b[0][0]++;cov_17nysk72q3().s[25]++;document.getElementById("name").textContent=facility_array[item].facility_name;cov_17nysk72q3().s[26]++;document.getElementById("image").src=facility_array[item].image;cov_17nysk72q3().s[27]++;document.getElementById("address").textContent=facility_array[item].address;cov_17nysk72q3().s[28]++;currentFacilityId=facility_array[item].facilityId;// Set the current facility ID
}else{cov_17nysk72q3().b[0][1]++;cov_17nysk72q3().s[29]++;console.error("Facility data not found for item:",item);}};cov_17nysk72q3().s[30]++;request.send();}function logout(){cov_17nysk72q3().f[4]++;cov_17nysk72q3().s[31]++;sessionStorage.removeItem('email');cov_17nysk72q3().s[32]++;sessionStorage.removeItem('username');cov_17nysk72q3().s[33]++;window.location.href='index.html';}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTdueXNrNzJxMyIsImFjdHVhbENvdmVyYWdlIiwiZmFjaWxpdHlfYXJyYXkiLCJzIiwiY3VycmVudEZhY2lsaXR5SWQiLCJ2aWV3UmVzb3VyY2VzIiwiZiIsInJlc3BvbnNlIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsImkiLCJsZW5ndGgiLCJpbWFnZSIsImZhY2lsaXR5X25hbWUiLCJhZGRyZXNzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInNlbmQiLCJzaG93RmFjaWxpdHlEZXRhaWxzIiwiZWxlbWVudCIsIml0ZW0iLCJnZXRBdHRyaWJ1dGUiLCJiIiwidGV4dENvbnRlbnQiLCJzcmMiLCJmYWNpbGl0eUlkIiwiZXJyb3IiLCJsb2dvdXQiLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiXSwic291cmNlcyI6WyJmYWNpbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZmFjaWxpdHlfYXJyYXk9W11cclxudmFyIGN1cnJlbnRGYWNpbGl0eUlkID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIHZpZXdSZXNvdXJjZXMoKSB7XHJcbiAgICBcclxuICAgIHZhciByZXNwb25zZSA9ICcnO1xyXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbignR0VUJywgJy92aWV3LWZhY2lsaXR5JywgdHJ1ZSk7XHJcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICBcclxuICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgdmFyIGh0bWwgPSAnJ1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2UubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwiZmFjaWxpdHktY29udGFpbmVyXCJzdHlsZT1cImJvcmRlcjogMXB4IHNvbGlkICNjY2M7IHBhZGRpbmc6IDEwcHg7XCJvbmNsaWNrPVwic2hvd0ZhY2lsaXR5RGV0YWlscyh0aGlzKVwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNwcm9Nb2RhbFwiIGl0ZW09XCInICsgaSArICdcIj4nICtcclxuICAgICAgICAgICAgICAgICc8aW1nIHNyYz1cIicgKyByZXNwb25zZVtpXS5pbWFnZSArICdcIiBhbHQ9XCJGYWNpbGl0eSBJbWFnZVwiIHN0eWxlPVwibWF4LXdpZHRoOjIwMHB4OyBtYXgtaGVpZ2h0OjIwMHB4O1wiPicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmYWNpbGl0eS1kZXRhaWxzXCJpdGVtPVwiJytpKydcIj4nICtcclxuICAgICAgICAgICAgICAgICc8YnI+JytcclxuICAgICAgICAgICAgICAgIC8vICc8cD48c3Ryb25nPkZhY2lsaXR5IElEOjwvc3Ryb25nPiAnICsgcmVzcG9uc2VbaV0uZmFjaWxpdHlJZCArICc8L3A+JyArXHJcbiAgICAgICAgICAgICAgICAnPHA+PHN0cm9uZz5GYWNpbGl0eTogPC9zdHJvbmc+ICcgKyByZXNwb25zZVtpXS5mYWNpbGl0eV9uYW1lICsgJzwvcD4nICtcclxuICAgICAgICAgICAgICAgICc8cD48c3Ryb25nPkFkZHJlc3M6PC9zdHJvbmc+ICcgKyByZXNwb25zZVtpXS5hZGRyZXNzICsgJzwvcD4nICtcclxuICAgICAgICAgICAgICAgICc8YnI+JysgICAgXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgICc8YnI+J1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGVDb250ZW50JykuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICB2YXIgZmFjaWxpdHlfYXJyYXkgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmYWNpbGl0eV9hcnJheSlcclxuICAgIH07XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLkpTT04pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGYWNpbGl0eURldGFpbHMoZWxlbWVudCkge1xyXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbignR0VUJywgJy92aWV3LWZhY2lsaXR5JywgdHJ1ZSk7ICBcclxuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZhY2lsaXR5X2FycmF5ID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7ICAvLyBQb3B1bGF0ZSB0aGUgZ2xvYmFsIGFycmF5XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcIml0ZW1cIik7XHJcbiAgICAgICAgaWYgKGZhY2lsaXR5X2FycmF5W2l0ZW1dKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS50ZXh0Q29udGVudCA9IGZhY2lsaXR5X2FycmF5W2l0ZW1dLmZhY2lsaXR5X25hbWU7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIikuc3JjID0gZmFjaWxpdHlfYXJyYXlbaXRlbV0uaW1hZ2U7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkcmVzc1wiKS50ZXh0Q29udGVudCA9IGZhY2lsaXR5X2FycmF5W2l0ZW1dLmFkZHJlc3M7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdXJyZW50RmFjaWxpdHlJZCA9IGZhY2lsaXR5X2FycmF5W2l0ZW1dLmZhY2lsaXR5SWQ7ICAvLyBTZXQgdGhlIGN1cnJlbnQgZmFjaWxpdHkgSURcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFjaWxpdHkgZGF0YSBub3QgZm91bmQgZm9yIGl0ZW06XCIsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXF1ZXN0LnNlbmQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nb3V0KCl7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdlbWFpbCcpXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VybmFtZScpXHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdpbmRleC5odG1sJztcclxufVxyXG5cclxuIl0sIm1hcHBpbmdzIjoicXFIQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLEdBQUksQ0FBQUUsY0FBYyxFQUFBRixjQUFBLEdBQUFHLENBQUEsTUFBQyxFQUFFLEVBQ3JCLEdBQUksQ0FBQUMsaUJBQWlCLEVBQUFKLGNBQUEsR0FBQUcsQ0FBQSxNQUFHLElBQUksRUFFNUIsUUFBUyxDQUFBRSxhQUFhQSxDQUFBLENBQUcsQ0FBQUwsY0FBQSxHQUFBTSxDQUFBLE1BRXJCLEdBQUksQ0FBQUMsUUFBUSxFQUFBUCxjQUFBLEdBQUFHLENBQUEsTUFB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