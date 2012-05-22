


var max=0;
	$("img:[src$='.jpg']").each(function()
	{
		var width = $(this).attr("width");
		var height= $(this).attr("height"); 
	 
		var temp=width*height;
		if(temp>max)
		{
			max=temp;
			$big_image=$(this);
            $big_image_src=	$(this).attr("src"); 		
	    }
		
    });
	
	
	//var new_image='http://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/101031_Italie_sud_055.jpg/220px-101031_Italie_sud_055.jpg'; // src from developer tool (working)
    //var new_image="C:\wamp\www\abc\a1.jpg"; // local storage does not work
    //$big_image.attr('src','http://upload.wikimedia.org/wikipedia/commons/0/0f/101031_Italie_sud_055.jpg'); //alter by using url
	//$big_image.attr('src',new_image); //alter by using variable that stores url
	//var update_src= new Array();
	
	src=$big_image_src; 
    //alert(src)
	//src1='http://www.nice.org.uk/'
    if((src[0]!='h') || (src[1]!='t') || (src[2]!='t') || (src[3]!='p') || (src[4]!=':') || (src[5]!='/') || (src[6]!='/'))
    //if(src[0]!='h')	
	{
	   
	   if((src[0]=='/') && (src[1]=='/'))
	   {
			var src1='http:';
	   }
	   
	   else if((src[0]=='/') && (src[1]!='/'))
	   
	   {
	         var src1='http:/';
	   }
	   
	   else 
	   {
			var src1='http://';
	   }
	   
	   var update_src=src1+src;
	   //alert(update_src);
	   chrome.extension.sendRequest({greeting: "vertical", url: update_src}, function(response) 
	   {
			var dataUrl=response.farewell;//working
			window.open(dataUrl, "toDataURL() image", "width=600, height=200");//working
			//alert(dataUrl);
	   });
	}
	
	
	else
	{
	
		//var update_src=src1+src;
		//alert(src);
		chrome.extension.sendRequest({greeting: "vertical", url: src}, function(response) 
		{
			//console.log(response.farewell);
			var dataUrl=response.farewell;//working
			window.open(dataUrl, "toDataURL() image", "width=600, height=200");//working
			//alert(dataUrl);
    
		});
   

	}