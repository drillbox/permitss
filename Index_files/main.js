 $(function()
{

	var calendarTitle = $('.ms-acal-header .ms-acal-display').text();
	var newCalTitle = calendarTitle.split('(')[0];
	$('.ms-acal-header .ms-acal-display').text(newCalTitle);
	$('.ms-acal-header .ms-acal-display').parent('td').next().attr("style","text-align:right");
	$('html[dir=rtl] .ms-acal-header .ms-acal-display').parent('td').next().attr("style","text-align:left");
});

$(function(){
	try{
		$('#carousel').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 48,
			asNavFor: '#slider'
		});
//////////////////////////////////////////////////////////////////////
var HomeEN = "/en/pages/default.aspx";
var HomeAR = "/ar/pages/default.aspx";
var CR="Applications/RelocationManagement/Pages/CompleteRegistration";

if($('html').attr('dir').toLowerCase()=='ltr'){
		
		var langx='en';
	
		if(pathname.toLowerCase().indexOf(HomeEN)!=-1){
				$('.scroll-pane').jScrollPane({showArrows: true});
			// //alert("Home EN");
			$('.flexsliderEvents').flexslider({
				animation: "slide",
				animationLoop: false,
				itemMargin:2,
				useCSS:false,
				itemWidth: 292,
				slideshow: false,
				controlsContainer:$('.flexControls .flexPaging'),
				direction: "horizontal"
			});		
		
		
		}
		
	}	
else{
		var langx='ar';
	    if(pathname.toLowerCase().indexOf(HomeAR)!=-1){	$('.scroll-pane').jScrollPane({showArrows: true});
			// //alert("Home AR");
			$('.flexsliderEvents').flexslider({
				animation: "slide",
				animationLoop: false,
				itemMargin:2,
				useCSS:false,
				itemWidth: 292,
				slideshow: false,
				controlsContainer:$('.flexControls .flexPaging'),
				direction: "horizontal",
				reverse: true,
			});					
		} 		
	}
				
				
				
					
////////////////////////////////////////////////////////////////////////
		
		$('#slider').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			useCSS:false,
			slideshow: false,
			sync: "#carousel",
			start:function(slider){$('.news .itemDesc:eq(0)').show()},
			after: function(slider) {
				$('.news .itemDesc').hide();
				$('.news .itemDesc:eq('+slider.currentSlide+')').show();
			}
		});
		$('.news .greenbtnL').click(function(){$('#slider').flexslider("prev")});
		$('.news .greenbtnR').click(function(){$('#slider').flexslider("next")});
	}catch(e){/* //console.log(e.message)*/}

	$('.evts .larrow').click(function(e){
		e.preventDefault();
		$('.flexsliderEvents').flexslider('prev');
	});
	$('.evts .rarrow').click(function(e){
		e.preventDefault();
		$('.flexsliderEvents').flexslider('next');
	});
//Remove first tag and separator in BreadCrumb
	$("#BreadCrumb span span:nth-child(1),#BreadCrumb span span:nth-child(2)").remove();
//load the language link below
	LangLnkAdjust();
//SessionsColExp
	$("ul.sessionsList li a").click(function(){
		$("ul.sessionsList li a .sessionDtls").slideToggle("slow");
		$(this).siblings("div.sessionDtls").slideToggle("slow");
	});
	$(".expand").click(function(){
		$("ul.sessionsList li .sessionDtls").slideDown("slow");
	});
	$(".collapse").click(function(){
		$("ul.sessionsList li .sessionDtls").slideUp("slow");
	});

	var srchBxEmty = $('#srchBx').attr("value");
	if($('html').attr('dir').toLowerCase()=='ltr'){
		var lang='en';
		if(srchBxEmty=="")
		$('#srchBx').attr("value","Search");
	}else{
		var lang='ar';
		var srchBxEmty = $('#srchBx').attr("value");
		if(srchBxEmty=="")
		$('#srchBx').attr("value","بحث");
	}
/*Started search box configurations*/
	var srchMsg = (lang=="en") ? "Please enter a search Keyword!" : "من فضلك ادخل كلمة بحث!";
//	var srchKeyWord = (lang=="en") ? "Search" : "بحث";
	$('.home_search input[type=text]').keypress(function(e){
		var code = e.charCode || e.keyCode;
		if($(this).val().length>0&&code=="13"){
			e.preventDefault();
			var href = $(this).siblings('.home_search a.search').attr('href')+$(this).val();
			window.location.href=href;
		}else if($(this).val().length<=0&&code=="13"){
			e.preventDefault();
			 // //alert(srchMsg);
			$('#srchBx').focus();
		}
	});
	$('.home_search a.search').click(function(e){
		e.preventDefault();
		if($(this).siblings('input[type=text]').val().length>0){
		var href = $(this).attr('href') + $(this).siblings('input[type=text]').val();
		window.location.href=href;
		}else{
			 //alert(srchMsg);
			$('#srchBx').focus();
		}
	});
	/************************/
	//get query strings
	function getQuerystring(key, default_)
	{
	     if (default_==null) default_=""; 
	     key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	     var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
	     var href = window.location.href;
	     href = href.toLowerCase();
	     var qs = regex.exec(href)
	     if(qs == null)
	          return default_;
	     else
	          return qs[1];
	}
	var SearchQuery = getQuerystring('k');//Query String of the search keyword ENCODED
	var decodedUrl = decodeURIComponent(SearchQuery);//Query String of the search keyword DECODED
	$('#srchBx').attr("value",decodedUrl);
	setKeyword();CRMEvents();
	//Remove empty events pages from the Home page events component
	
	/*XXXXX
	$(".flexsliderEvents .slides li").each(function(index) {
			if($(this).children().length==0){
			 //alert("0");
			 //alert("Index "+$(this).index());
			var _index=$(this).index();
			$($(".flexsliderEvents ol.flex-control-paging li")[_index]).css("border","1px solid red");
			}else if($(this).children().length >=1){
			 //alert("1");
		}

		
		if($(this).children().length==0){
			index=index+1;
			$(this).hide();
			$(this).parent().parent().parent().children("ol").children("li:nth-child("+index+")").hide();
			$(".flexsliderEvents ol li").css("border","1px solid red");
			// //alert("index "+index);
		}
		
	});*/
	
	
	
});
// //console.log(decodedUrl);
var SearchResEN = '/en/pages/results.aspx';
var SearchResAR = '/ar/pages/results.aspx';
var t="/en/";
var n="/ar/";
var pathname = window.location.pathname;
var photoEN="/en/mediacenter/pages/photogallery.aspx";
var videoEN="/en/mediacenter/pages/videogallery.aspx";
var photoAR="/ar/mediacenter/pages/photogallery.aspx";
var videoAR="/ar/mediacenter/pages/videogallery.aspx";
	if(pathname.toLowerCase().indexOf(photoEN)!=-1){
		$("body").attr("style","overflow:auto!important");
	}
	if(pathname.toLowerCase().indexOf(photoAR)!=-1){
		$("body").attr("style","overflow:auto!important");
	}
	if(pathname.toLowerCase().indexOf(videoEN)!=-1){
		$("body").attr("style","overflow:hidden!important");
	}
	if(pathname.toLowerCase().indexOf(videoAR)!=-1){
		$("body").attr("style","overflow:hidden!important");
	}
function CRMEvents(){
	var breadCRMEN = '/en/applications/eventsmanagement/';
	var breadCRMAR = '/ar/applications/eventsmanagement/';
	var breadCrumbEN = '<span id="ctl00_PlaceHolderBreadCrumb_breadcrumb" sitemapproviders="SPSiteMapProvider,SPXmlContentMapProvider" hideinteriorrootnodes="true" hiderootnodestyle="true" renderrootnode="false" skiprootnode="true"><span><a class="breadcrumbNode" href="/en/Pages/default.aspx">KAPSARC</a></span><span> &gt; </span><span><a class="breadcrumbNode" href="/en/MediaCenter/Pages/default.aspx">Media Center</a></span><span> &gt; </span><span><a class="breadcrumbNode" href="/en/MediaCenter/Events/Pages/default.aspx">Events calender</a></span><span> &gt; </span><span class="breadcrumbCurrentNode">';//Event Details</span></span>';
	var breadCrumbAR = '<span id="ctl00_PlaceHolderBreadCrumb_breadcrumb" sitemapproviders="SPSiteMapProvider,SPXmlContentMapProvider" hideinteriorrootnodes="true" hiderootnodestyle="true" renderrootnode="false" skiprootnode="true"><span><a class="breadcrumbNode" href="/ar/Pages/default.aspx">كابسارك</a></span><span> &gt; </span><span><a class="breadcrumbNode" href="/ar/MediaCenter/Pages/default.aspx">المركز الإعلامي</a></span><span> &gt; </span><span><a class="breadcrumbNode" href="/ar/MediaCenter/Events/Pages/default.aspx">تقويم الفعاليات</a></span><span> &gt; </span><span class="breadcrumbCurrentNode">';//تفاصيل الفعالية</span></span>';
	var closingTag = '</span></span>';
	var pageName = $(".breadcrumbCurrentNode").text();
	if(pathname.toLowerCase().indexOf(breadCRMEN)!=-1){
		$("#BreadCrumb").html(breadCrumbEN+pageName+closingTag);
	}
	if(pathname.toLowerCase().indexOf(breadCRMAR)!=-1){
		$("#BreadCrumb").html(breadCrumbAR+pageName+closingTag);
	}
}
//Set Search KeyWord to the search box
function setKeyword() {
    if (document.getElementById('srchBx') != null){// //alert("Not Null");
        if(pathname.toLowerCase().indexOf(t)!=-1){
            if (document.getElementById('srchBx').value == '')
            	document.getElementById('srchBx').value = 'Search';
        }
        else if(pathname.toLowerCase().indexOf(n)!=-1){
            if (document.getElementById('srchBx').value == '')
            	document.getElementById('srchBx').value = 'بحث';
        }
    }
}
//If Enter key is pressed
function check() {
    if (window.event.keyCode == 13){// //alert(srchMsg);// //alert("You pressed enter key");
//    	redirect();
		window.event.keyCode.returnValue = false;
		window.event.keyCode = true;
//        redirect();
    }
}
//
function clicked(){
    if(pathname.toLowerCase().indexOf(t)!=-1){// //alert("english");
        if(document.getElementById('srchBx') != null){// //alert("English null box");
            if(document.getElementById('srchBx').value == 'Search' || document.getElementById('srchBx').value == 'search'){// //alert("E have srch word");
				document.getElementById('srchBx').value='';
            }
            else if(document.getElementById('srchBx').value != 'Search' || document.getElementById('srchBx').value != ''){}
        }
    }
    else if(pathname.toLowerCase().indexOf(n)!=-1){// //alert("arabic");
        if(document.getElementById('srchBx') != null){// //alert("arabic null box");
            if(document.getElementById('srchBx').value == 'بحث'){// //alert("A have srch word");
				document.getElementById('srchBx').value='';
            }
            else if(document.getElementById('srchBx').value != 'بحث' || document.getElementById('srchBx').value != ''){}
        }
    }
}
/*function check() {
    if (window.event.keyCode == 13){// //alert("You pressed enter key");
//    	redirect();
//		window.event.keyCode.returnValue = false;
//		window.event.keyCode = true;
        redirect();
    }
}*/
function redirect() {
	var enVal = "/en/";
    var arVal = "/ar/";
	if(pathname.toLowerCase().indexOf(enVal)!=-1){
        if(document.getElementById('srchBx') != null){
            if(document.getElementById('srchBx').value == 'Search' || document.getElementById('srchBx').value == 'search' || document.getElementById('srchBx').value == ''){
                 //alert('Please enter search keyword ');$('#srchBx').attr("value","Search");
//				document.getElementById('srchBx').value == 'Search';setKeyword();
//				event.cancel = true;
//				event.returnValue = false;
            }
            else{
                window.location = '/en/pages/results.aspx' + '?k=' + document.getElementById('srchBx').value;
                $('#srchBx').attr("value",decodedUrl);
            }
        }
    }
	else if(pathname.toLowerCase().indexOf(arVal)!=-1){
        if(document.getElementById('srchBx') != null){
            if(document.getElementById('srchBx').value == 'بحث' || document.getElementById('srchBx').value == ''){
                 //alert("من فضلك ادخل كلمة بحث!");$('#srchBx').attr("value","بحث");
//				document.getElementById('srchBx').value == 'بحث'
//				event.cancel = true;
//				event.returnValue = false;
            }
            else{
                window.location = '/ar/pages/results.aspx' + '?k=' + document.getElementById('srchBx').value;
				$('#srchBx').attr("value",decodedUrl);
            }
        }
    }
}
/*function enCheck(){
        if($('#srchBx') != null){
            if($('#srchBx').value == 'Search' || $('#srchBx').value == ''){
                 //alert('Please enter search keyword ');
                event.cancel = true;
                event.returnValue = false;
            }
            else{
                window.location = '/en/pages/results.aspx' + '?k=' + document.getElementById('srchBx').value;
            }
        }
}
function arCheck(){
        if($('#srchBx') != null){
            if($('#srchBx').value == 'بحث' || $('#srchBx').value == ''){
                 //alert("من فضلك ادخل كلمة بحث!");
                event.cancel = true;
                event.returnValue = false;
            }
            else{
                window.location = '/ar/pages/results.aspx' + '?k=' + document.getElementById('srchBx').value;
            }
        }
}*
/************************/
//Language switcher
var ne="/en/mediacenter/news/";
var na="/ar/mediacenter/news/";
var nea="/en/mediacenter/news/archive/";
var naa="/ar/mediacenter/news/archive/";
var ee="/en/mediacenter/events/";
var ea="/ar/mediacenter/events/";
function LangLnkAdjust(){
	var e=$(".lang"); document.location.href.toLowerCase().indexOf(na)!=-1
	if(e!=null){
		if(document.location.href.toLowerCase().indexOf(t)!=-1){//var t="/en/";
			/*if(document.location.href.toLowerCase().indexOf(nea)!=-1){
				$(e).attr('href',naa);
			}
			else if(document.location.href.toLowerCase().indexOf(ne)!=-1){
//				window.location = ne;
				$(e).attr('href',na);
			}
			else if(document.location.href.toLowerCase().indexOf(ee)!=-1){
//				window.location = ea;
				$(e).attr('href',ea);
			}
			else{
				$(e).attr('href',document.location.href.toLowerCase().replace(t,n));
			}*/
			$(e).attr('href','/ar/About/Pages/Aboutus.aspx');
		}
		else if(document.location.href.toLowerCase().indexOf(n)!=-1){//n="/ar/";
			/*if(document.location.href.toLowerCase().indexOf(naa)!=-1){
				$(e).attr('href',nea);
			}
			else if(document.location.href.toLowerCase().indexOf(na)!=-1){
				$(e).attr('href',ne);
			}
			else if(document.location.href.toLowerCase().indexOf(ea)!=-1){
//				window.location = ea;
				$(e).attr('href',ee);
			}
			else{
				$(e).attr('href',document.location.href.toLowerCase().replace(n,t));
			}*/
			$(e).attr('href','/en/pages/default.aspx');
		}
	}
}
/***** Start Preloader global function ****/
function preloader(status){
  var preloaderHtml = '<div class="mainPreloader"><img src="/Style Library/KAPSARCImages/pre.gif" /><div class="dimWhite"></div></div>';
  if(status==="start"){
    $('.mainPreloader').remove();
    $('body').prepend(preloaderHtml);
  }else if(status==="finish"){
    $('.mainPreloader').remove();
  }
} 
/***** End Preloader global function ****/

$(".toc-layout-main").append("<div class='clear'></div>");



/*...Date Format Function Details...*/
function DateFormat(DateString){
	
	var _DateString=DateString;
	

	
	var TrimStart=_DateString.substring(1,$(".newsItem .date").text().indexOf("-")).indexOf("/");
				// //alert(TrimStart);
	TrimStart++;
				// //alert(_DateString[TrimStart+1]);
	var LN=_DateString[TrimStart+1];
	TrimStart++;
	var RN=_DateString[TrimStart+1];
				// //alert(LN+RN);
	var month=parseInt(LN+RN);
				// //alert (month);
		
	
	switch (month)
	{
		case 01:
		var str1 = _DateString.replace("/"," ");
		var str2 = str1.replace("/"," ");
		var str3 = str2.replace("01","يناير");	
		break;
		case 02:
		var str1 = _DateString.replace("/"," ");
		var str2 = str1.replace("/"," ");
		var str3 = str2.replace("02","فبراير");	
		break;
		case 03:
		var str1 = _DateString.replace("/"," ");
		var str2 = str1.replace("/"," ");
		var str3 = str2.replace("03","مارس");		
		break;
		case 04:
		var str1 = _DateString.replace("/"," ");
		var str2 = str1.replace("/"," ");
		var str3 = str2.replace("04","أبريل");	
		break;						
		case 05:
		var str1 = _DateString.replace("/"," ");
		var str2 = str1.replace("/"," ");
		var str3 = str2.replace("05","مايو");	
		break;
		case 06:
		var str1 = _DateString.replace("/"," ");
		var str2 = str1.replace("/"," ");
		var str3 = str2.replace("06","يونيو");	
		break;				
		case 07:
		var str1 = _DateString.replace("/"," ");
		var str2 = str1.replace("/"," ");
		var str3 = str2.replace("07","يوليو");	
		break;		
		case 08:
		var str1 = _DateString.replace("/"," ");
		var str2 = str1.replace("/"," ");
		var str3 = str2.replace("08","أغسطس");	
		break;
		case 09:
		var str1 = _DateString.replace("/"," ");
		var str2 = str1.replace("/"," ");
		var str3 = str2.replace("09","سبتمبر");	
		break;
		case 10:
		var str1 = _DateString.replace("/"," ");
		var str2 = str1.replace("/"," ");
		var str3 = str2.replace("10","اكتوبر");	
		break;
		case 11:
		var str1 = _DateString.replace("/"," ");
		var str2 = str1.replace("/"," ");
		var str3 = str2.replace("11","نوفمبر");	
		break;								
		case 12:
		var str1 = _DateString.replace("/"," ");
		var str2 = str1.replace("/"," ");
		var str3 = str2.replace("12","ديسيمبر");	
		break;		
	}	
	//alert(str3);
	var NewDate="";
	
	
	if($("#ms-designer-ribbon").is(":visible")){
		
		NewDate=str3; 
		
	
		
	
	}else{
	
		
		//remove Time
		if(str3.indexOf("م")!=-1){
				var SNum=str3.indexOf("م");
				for(var i=0;i<=(SNum-7);i++){
					NewDate+=str3[i];
				}
		}else if(str3.indexOf("ص")!=-1 ){
				var SNum=str3.indexOf("ص");
				for(var i=0;i<=(SNum-7);i++){
					NewDate+=str3[i];
				}			
		}
		// End of remove Time
	
	}
	
	return(NewDate);
	
}

/*... Emd of Date Format Function Details...*/

/*...Date Format Function Details EN...*/

function DateFormatEN(DateString){

var _DateString=DateString;
	var charactersNum=_DateString.length;
	var FirstS=parseInt(_DateString.indexOf(":")+1);
	var SecondS=parseInt(_DateString.indexOf("/"));

	var NewMonth=[];
	for(var i=FirstS;i< SecondS;i++){
		var n=_DateString.charAt(i);
		NewMonth.push(n);
	}
	var NewMonthString=NewMonth[0]+NewMonth[1]
	
	var NewDay=[];
		var NDL=_DateString.charAt(SecondS+1);
	var NDR=_DateString.charAt(SecondS+2);	
	if (NDR=="/"){
	NDR=NDL;
	NDL=0;
	}

	var NewDayString=NDL+NDR;
	
	var NewYear=[];
	for(var i=(SecondS+4);i<(SecondS+8);i++){
		var n=_DateString.charAt(i);
		NewYear.push(n);
	}
	var NewYearString=NewYear[0]+NewYear[1]+NewYear[2]+NewYear[3];
	
	var NewTime=[];
	for(var i=(SecondS+8);i<charactersNum;i++){
		var n=_DateString.charAt(i);
		NewTime.push(n);
	}
	var NewTimeString=NewTime[0]+NewTime[1]+NewTime[2]+NewTime[3]+NewTime[4]+NewTime[5]+NewTime[6]+NewTime[7]+NewTime[8]+NewTime[9]+NewTime[10];
	
	


	
	 
	 //console.log("NewDateString " +NewDateString);





	
	var LN=NewMonthString.charAt(0);
	if(LN ==" " ){
		LN=0;
	}
	var RN=NewMonthString.charAt(1);
	 //console.log("LNNNNNN "+LN);
	var month=parseInt(LN+RN);

	switch (month)
	{
		case 1:
		var str1 = NewDateString.replace("- 1-"," January ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("-"," ");
		break;
		case 2:
		var str1 = NewDateString.replace("- 2-"," February ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("-"," ");
			
		break;
		case 3:
		var str1 = NewDateString.replace("- 3-"," March ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("-"," ");	
		break;
		case 4:
		var str1 = NewDateString.replace("- 4-"," April ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("-"," ");
		break;						
		case 5:
		var str1 = NewDateString.replace("- 5-"," May ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("-"," ");
		break;
		case 6:
		var str1 = NewDateString.replace("- 6-"," June ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("-"," ");		
		break;				
		case 7:
		var str1 = NewDateString.replace("- 7-"," July ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("-"," ");				
		break;		
		case 8:
		var str1 = NewDateString.replace("- 8-"," August ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("-"," ");				
		break;
		case 9:
		var str1 = NewDateString.replace("- 9-"," September ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("-"," ");							
		break;
		case 10:
		var str1 = NewDateString.replace("-10-"," October ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("-"," ");			
		break;
		case 11:
		var str1 = NewDateString.replace("-11-"," November ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("-"," ");			
		break;								
		case 12:
		var str1 = NewDateString.replace("-12-"," December ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("-"," ");			
		break;		
	}	
	
	//console.log("str3333333 "+str3);
	return(str3);
	
	 //console.log("str3 EN "+str3);
	
}
$("document").ready(function(){





	
})

/*... Emd of Date Format Function Details EN...*/


/*...Date Format Function Listing...*/
function DateFormatListing(DateString,CurrentItemNum){
	var _DateString=DateString;
	var charactersNum=_DateString.length;
	var NewDay=[];
	for(var i=charactersNum-2;i<=charactersNum;i++){
		var n=_DateString.charAt(i);
		NewDay.push(n);
	}
	var NewDayString=NewDay[0]+NewDay[1]
	 //console.log("NewDay "+NewDayString);
	
	var NewMonth=[];
	for(var i=charactersNum-5;i<=(charactersNum-3);i++){
		var n=_DateString.charAt(i);
		NewMonth.push(n);
	}
	var NewMonthString=NewMonth[0]+NewMonth[1];
	 //console.log("NewMonth "+NewMonthString);
	
	var NewYear=[];
	for(var i=charactersNum-10;i<=(charactersNum-6);i++){
		var n=_DateString.charAt(i);
		NewYear.push(n);
	}
	var NewYearString=NewYear[0]+NewYear[1]+NewYear[2]+NewYear[3];
	 //console.log("NewYear "+NewYearString);

	var NewDateString=NewDayString+"-"+NewMonthString+"-"+NewYearString;
	 //console.log("NewDateString " +NewDateString);
	
	var _CurrentItemNum=CurrentItemNum;
	  //console.log(_DateString);

	 var TrimStart=NewDateString.indexOf("-");
	 
	  //console.log("TrimStart "+TrimStart);
	 TrimStart++;
	 var LN=NewDateString[TrimStart];
	   //console.log("LN "+ LN);
	 TrimStart++;
	 var RN=NewDateString[TrimStart];
	   //console.log("RN "+ RN);	 
	 var month=parseInt(LN+RN);
	  //console.log("month "+month);



	 
		
	switch (month)
	{
		case 01:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("01","يناير");	
		break;
		case 02:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("02","فبراير");	
		break;
		case 03:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("03","مارس");		
		break;
		case 04:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("04","أبريل");	
		break;						
		case 05:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("05","مايو");	
		break;
		case 06:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("06","يونيو");	
		break;				
		case 07:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("07","يوليو");	
		break;		
		case 08:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("08","أغسطس");	
		break;
		case 09:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("09","سبتمبر");	
		break;
		case 10:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("10","اكتوبر");	
		break;
		case 11:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("11","نوفمبر");	
		break;								
		case 12:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("12","ديسيمبر");	
		break;		
	}	
	

	return(str3);
	 //console.log(str3);
	
}
/*... Emd of Date Format Function...*/

/*...Date Format Function Listing EN...*/
function DateFormatListingEN(DateString,CurrentItemNum){
	var stringD=DateString.substring(0,10)

	var _DateString=stringD;
	 //console.log("_DateString "+_DateString);
	var charactersNum=_DateString.length;
	var NewDay=[];
	for(var i=charactersNum-2;i<=charactersNum;i++){
		var n=_DateString.charAt(i);
		NewDay.push(n);
	}
	var NewDayString=NewDay[0]+NewDay[1]
	 //console.log("NewDay "+NewDayString);
	
	var NewMonth=[];
	for(var i=charactersNum-5;i<=(charactersNum-3);i++){
		var n=_DateString.charAt(i);
		NewMonth.push(n);
	}
	var NewMonthString=NewMonth[0]+NewMonth[1];
	 //console.log("NewMonth "+NewMonthString);
	
	var NewYear=[];
	for(var i=charactersNum-10;i<=(charactersNum-6);i++){
		var n=_DateString.charAt(i);
		NewYear.push(n);
	}
	var NewYearString=NewYear[0]+NewYear[1]+NewYear[2]+NewYear[3];
	 //console.log("NewYear "+NewYearString);

	var NewDateString=NewDayString+"-"+NewMonthString+"-"+NewYearString;
	 //console.log("NewDateString " +NewDateString);
	
	var _CurrentItemNum=CurrentItemNum;
	  //console.log(_DateString);

	 var TrimStart=NewDateString.indexOf("-");
	 
	  //console.log("TrimStart "+TrimStart);
	 TrimStart++;
	 var LN=NewDateString[TrimStart];
	   //console.log("LN "+ LN);
	 TrimStart++;
	 var RN=NewDateString[TrimStart];
	   //console.log("RN "+ RN);	 
	 var month=parseInt(LN+RN);
	  //console.log("month "+month);



	 
		
	switch (month)
	{
		case 01:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("01","January");	
		break;
		case 02:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("02","February");	
		break;
		case 03:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("03","March");		
		break;
		case 04:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("04","April");	
		break;						
		case 05:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("05","May");	
		break;
		case 06:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("06","June");	
		break;				
		case 07:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("07","July");	
		break;		
		case 08:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("08","August");	
		break;
		case 09:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("09","September");	
		break;
		case 10:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("10","October");	
		break;
		case 11:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("11","November");	
		break;								
		case 12:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("12","December");	
		break;		
	}	
	

	return(str3);
	 //console.log(str3);
	
}

/*... Emd of Date Format Function EN...*/

/*...ImageFun...*/

function ImageFun(){
	var ImageSrc=$(".eventImg .ms-rtestate-field img").attr('src');
	
	if(ImageSrc==undefined){
		$(".newsItem").css("width","929px");
	}else{
		var ImageWidth=parseInt($(".eventImg .ms-rtestate-field img").css("width"));
		//alert("ImageWidth "+ImageWidth);
		var TextWidth=900-ImageWidth;
		//alert("TextWidth "+TextWidth);
		$(".newsItem").css("width",TextWidth);
	}

}

/*...End of ImageFun...*/




function testFun(){
	var arhEn="/en/MediaCenter/Events";
	alert("page");
	alert(arhEn);
	alert(pathname);
	if(pathname.indexOf(arhEn)!=-1){
		alert("000");
	}
}


/*...En Events Details function...*/
function EnEvents(DateString){
	
	var _DateString=DateString;
	var charactersNum=_DateString.length;
	
	var firsrS=_DateString.indexOf("/");
	

	var MR=_DateString.charAt(firsrS-1);
	var ML=_DateString.charAt(firsrS-2);
//	console.log("ML "+ML);
	
	var NewMonthString=parseInt(ML+MR);
//	console.log("NewMonthString "+NewMonthString);
	
	var DL=_DateString.charAt(firsrS+1);
	var DR=_DateString.charAt(firsrS+2);	
	if (DR=="/"){
	DR=DL;
	DL=0;
	}
	
	var NewDayString=DL+DR;
//	 console.log("NewDayString "+NewDayString);
	
	var secondS=_DateString.indexOf(":");

	
	var NewYear=[];
	for(var i=(secondS-7);i<(charactersNum);i++){
		var n=_DateString.charAt(i);
		NewYear.push(n);
	}
	var NewYearString=NewYear[0]+NewYear[1]+NewYear[2]+NewYear[3];
//	 console.log("NewYearString "+NewYearString);
	
	var NewTimeString=NewYear[4]+NewYear[5]+NewYear[6]+NewYear[7]+NewYear[8]+NewYear[9]+NewYear[10]+NewYear[11]+NewYear[12]+NewYear[13]+NewYear[14];
//	 console.log("NewTimeString "+NewTimeString);
	

	var NewDateString=NewDayString+"-"+NewMonthString+"-"+NewYearString+NewTimeString;
//	 console.log("NewDateString " +NewDateString);



var month=parseInt(NewMonthString);

	switch (month)
	{
		case 1:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("1","January");	
		break;
		case 2:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("2","February");	
		break;
		case 3:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("3","March");		
		break;
		case 4:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("4","April");	

		break;						
		case 5:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("5","May");	
		break;
		case 6:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("6","June");	
		break;				
		case 7:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("7","July");	
		break;		
		case 8:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("8","August");	
		break;
		case 9:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("9","September");	
		break;
		case 10:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("10","October");	
		break;
		case 11:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("11","November");	
		break;								
		case 12:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("12","December");	
		break;		
	}	
	

	return(str3);
	 //console.log("str3 EN "+str3);
	


}
/*...End of En Events Details function...*/

/*...Ar Events Details function...*/
function EnEventsAr(DateString){
//	alert("EnEventsAr");
	var _DateString=DateString;
	var charactersNum=_DateString.length;
	
	var firsrS=_DateString.indexOf("/");
//	console.log("firsrS "+firsrS);

	var MR=_DateString.charAt(firsrS-1);
	var ML=_DateString.charAt(firsrS-2);
//	console.log("ML "+ML);
	
	var NewMonthString=parseInt(ML+MR);
//	console.log("NewMonthString "+NewMonthString);
	
	var DL=_DateString.charAt(firsrS+1);
	var DR=_DateString.charAt(firsrS+2);	
	if (DR=="/"){
	DR=DL;
	DL=0;
	}
	
	var NewDayString=DL+DR;
//	 console.log("NewDayString "+NewDayString);
	
	var secondS=_DateString.indexOf(":");

	
	var NewYear=[];
	for(var i=(secondS-7);i<(charactersNum);i++){
		var n=_DateString.charAt(i);
		NewYear.push(n);
	}
	var NewYearString=NewYear[0]+NewYear[1]+NewYear[2]+NewYear[3];
//	 console.log("NewYearString "+NewYearString);
	
	var NewTimeString=NewYear[4]+NewYear[5]+NewYear[6]+NewYear[7]+NewYear[8]+NewYear[9]+NewYear[10]+NewYear[11]+NewYear[12]+NewYear[13]+NewYear[14];
//	 console.log("NewTimeString "+NewTimeString);
	

	 var NewDateString=NewMonthString+"-"+NewDayString+"-"+NewYearString+NewTimeString;

//	 console.log("NewDateString " +NewDateString);



var month=parseInt(NewDayString);

	switch (month)
	{
		case 1:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("01","يناير");	
		break;
		case 2:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("02","فبراير");	
		break;
		case 3:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("03","مارس");		
		break;
		case 4:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("04","أبريل");	
		//alert("str3 "+str3);
		break;						
		case 5:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("05","مايو");	
		break;
		case 6:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("06","يوينو");	
		break;				
		case 7:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("07","يوليو");	
		break;		
		case 8:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("08","أغسطس");	
		break;
		case 9:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("09","سبتمبر");	
		break;
		case 10:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("10","أكتوبر");	
		break;
		case 11:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("11","نوفمبر");	
		break;								
		case 12:
		var str1 = NewDateString.replace("-"," ");
		var str2 = str1.replace("-"," ");
		var str3 = str2.replace("12","ديسيمبر");	
		break;		
	}	
	

	return(str3);
	

}
/*...End of Ar Events Details function...*/

/*...Calling Date Format functions...*/
function dateFun(){
var naH = "/ar/mediacenter/news/pages/default.aspx";
var neH = "/en/mediacenter/news/pages/default.aspx";
var naaH="/ar/mediacenter/news/archive/pages/default.aspx";
var neaH="/en/mediacenter/news/archive/pages/default.aspx";
na	;	//NewsAR details
naa	;	//News Archive AR details
pathname;//Pathname of the URL
var arhEn="/en/MediaCenter/Events";
var arhAr="/ar/MediaCenter/Events";





	
	if($('html').attr('dir').toLowerCase()=='ltr'){
		var langx='en';
	
		if(pathname.toLowerCase().indexOf(neaH)!=-1 || pathname.toLowerCase().indexOf(neH)!=-1){
				
			
			//	setTimeout(function(){
								
				
						var ItemsNum=$(".eventItem").length;
						for(var i=0;i<= ItemsNum;i++){
							var ListingDateString=$($(".eventItem")[i]).find(".eventDay").text();
							
							var CurrentItemNum=i;
							var ListingDateStringFormated=DateFormatListingEN(ListingDateString,CurrentItemNum);
							
							$($(".eventItem")[i]).find(".eventDay").text(ListingDateStringFormated);
						}
			
			
			
			
				

		//	},200);

		
		
		} // archive news en
		//else if(pathname.toLowerCase().indexOf(neH)!=-1){} // news en
		else if(pathname.toLowerCase().indexOf(nea)!=-1 || pathname.toLowerCase().indexOf(ne)!=-1){
			//if(pathname.toLowerCase().indexOf(ne)!=-1){} // News en details
			//else if(pathname.toLowerCase().indexOf(nea)!=-1){} // News en details
				 //console.log("123");
				 ///////////////////////////////////////////////////////////////
				 /*
				var CreatingString = $(".newsItem .date").text().substring(1,$(".newsItem .date").text().indexOf("-"));
				 console.log("CreatingString  "+CreatingString);
				var EditingString = $(".newsItem .date").text().substring(($(".newsItem .date").text().indexOf("-"))+1,$(".newsItem .date").text().length);
				 console.log("EditingString "+EditingString);
				DateFormatEN(CreatingString);
				var CreatingStringFormated=DateFormatEN(CreatingString);
				 console.log("CreatingStringFormated "+CreatingStringFormated);
				DateFormatEN(EditingString);
				var EditingStringFormated=DateFormatEN(EditingString);		
				 console.log("EditingStringFormated " +EditingStringFormated);
				$(".newsItem .date").text("Created: "+CreatingStringFormated+" - Modified: "+EditingStringFormated);
				*/
				ImageFun();
				
				////////////////////////////////////////////////////////////
				//XXX

		}else if(pathname.indexOf(arhEn)!=-1){

				//alert("EVENTSFun");
				//$(".eventDetail:eq(0) .FloatL:eq(1)").css("border","1px solid red");

				var CreatingString = $(".eventDetail:eq(0) .FloatL:eq(1)").text();
				var CreatingStringFormated=EnEvents(CreatingString);
				$(".eventDetail:eq(0) .FloatL:eq(1)").text(CreatingStringFormated);

				var EditingString = $(".eventDetail:eq(1) .FloatL:eq(1)").text();				
				var EditingStringFormated=EnEvents(EditingString);	
				$(".eventDetail:eq(1) .FloatL:eq(1)").text(EditingStringFormated);
				
			
		}
		
	}else{
		var langx='ar';
		//if(pathname.toLowerCase().indexOf(naaH)!=-1){} // archive news ar
		/*else*/ if(pathname.toLowerCase().indexOf(naaH)!=-1 || pathname.toLowerCase().indexOf(naH)!=-1){
			//setTimeout(function(){
						// //alert($("div").hasClass("eventItem"));
						var ItemsNum=$(".eventItem").length;
						for(var i=0;i<= ItemsNum;i++){
							var ListingDateString=$($(".eventItem")[i]).find(".eventDay").text();
							 //console.log(ListingDateString);
							var CurrentItemNum=i;
							var ListingDateStringFormated=DateFormatListing(ListingDateString,CurrentItemNum);
							 //console.log(ListingDateStringFormated);
							$($(".eventItem")[i]).find(".eventDay").text(ListingDateStringFormated);
						}

			//},200);
		} // news ar
		else if(pathname.toLowerCase().indexOf(na)!=-1 || pathname.toLowerCase().indexOf(naa)!=-1){ 
			/*if(pathname.toLowerCase().indexOf(na)!=-1 || pathname.toLowerCase().indexOf(naa)!=-1){*/
				/*
				var CreatingString = $(".newsItem .date").text().substring(1,$(".newsItem .date").text().indexOf("-"));
				var EditingString = $(".newsItem .date").text().substring(($(".newsItem .date").text().indexOf("-"))+1,$(".newsItem .date").text().length);
				DateFormat(CreatingString); 
				var CreatingStringFormated=DateFormat(CreatingString);
				DateFormat(EditingString);
				var EditingStringFormated=DateFormat(EditingString);		
				$(".newsItem .date").text(CreatingStringFormated+" - "+EditingStringFormated);
				*/
				ImageFun();
			 //} News ar details
			//else if(pathname.toLowerCase().indexOf(naa)!=-1){} // News ar details

		}else if(pathname.indexOf(arhAr)!=-1){

				//alert("EVENTSFunAR");
				//$(".eventDetail:eq(0) .FloatL:eq(1)").css("border","1px solid red");

				var CreatingString = $(".eventDetail:eq(0) .FloatL:eq(1)").text();
				var CreatingStringFormated=EnEventsAr(CreatingString);
				$(".eventDetail:eq(0) .FloatL:eq(1)").text(CreatingStringFormated);

				var EditingString = $(".eventDetail:eq(1) .FloatL:eq(1)").text();				
				var EditingStringFormated=EnEventsAr(EditingString);	
				$(".eventDetail:eq(1) .FloatL:eq(1)").text(EditingStringFormated);

		}

		
	}
/*
if(pathname.toLowerCase().indexOf(na)!=-1){}//news root
else if(pathname.toLowerCase().indexOf(naa)!=-1){}//news archive root
else{}*/

}

function HomeEvents(){
// //alert("Home");
var HomeEN = "/en/pages/default.aspx";
var HomeAR = "/ar/pages/default.aspx";

//XXXXXXXXXXXXXXXXXXXXX


if($('html').attr('dir').toLowerCase()=='ltr'){
	var langx='en';
	if(pathname.toLowerCase().indexOf(HomeEN)!=-1){
		//alert("Home EN");
		$(".eventsDesc span").ToolTip({maxSize:70, showToolTip:true});
		$(".eventsText a").ToolTip({maxSize:25, showToolTip:true});
		///////////////////////////////////////////////////////
		setTimeout(function(){
			$(".flexsliderEvents .slides li").each(function(index) {
				if($(this).children().length==0){
				 //alert("0");
				 //alert("Index "+$(this).index());
				var _index=$(this).index();
				$($(".flexsliderEvents ol.flex-control-paging li")[_index]).hide();
				}else if($(this).children().length >=1){// alert("1");
				}
			});
		},200);
		//////////////////////////////////////////////////////
		} 
	}	
else{
	var langx='ar';
    if(pathname.toLowerCase().indexOf(HomeAR)!=-1){
		// //alert("Home AR");
		$(".eventsDesc span").ToolTip({maxSize:70, showToolTip:true});
		$(".eventsText a").ToolTip({maxSize:25, showToolTip:true});
	////////////////////////////////////////////////////////////////////
	//$($(".flexsliderEvents .slides li")[2]).html(" ");
/*setTimeout(function(){
				$(".flexsliderEvents .slides li").each(function(index) {
					if($(this).children().length==0){
					 alert("0");
					 //alert("Index "+$(this).index());
					var _index=$(this).index();
					$($(".flexsliderEvents ol.flex-control-paging li")[_index]).hide();
					}else if($(this).children().length >=1){
					 alert("1");
				}
		});	
},2000);*/
		/////////////////////////////////////////////////////////////////////
	} 		
}
//xxxxxxxxxxxxxxxxxxx
}
/*...Trim Function...*/
$.fn.ToolTip = function (options) { 
	var defaults = {
	    maxSize: 50,
	    showToolTip: true,
	};
	var options = $.extend(defaults, options);
	return this.each(function() {
		var o = options;
		var objJquery = $(this);
		for(var i=0; i<objJquery.length; i++)
		{
			var txtObj = objJquery.eq(i);
			if(txtObj.text().length > o.maxSize)
			{
				var oldTxt = txtObj.text();
				var newText = txtObj.text().substring(0,o.maxSize);
				if(o.showToolTip)
					txtObj.attr("title", txtObj.text());
				txtObj.text(newText).append("<span class='dots'> ...</span>");
			}
		}
	});
}

dateFun();
HomeEvents();
//testFun();
/*...End of Trim Function...*/
(function ($) {
    var namespace;
    namespace = {
        dateFunAjax: function () {
            dateFun();
        }
    };
    window.ns = namespace;
})(this.jQuery);

/*
if(expandPhotoDate.html() == disply:none){
alert("test")
$(".pp_fade .pp_details p.pp_description").css("width","98%")
}*/

