

//alert("will change page content");


src=new Array();

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
	 src=$big_image_src; 
	
	/* chrome.extension.sendRequest({greeting: "happy", url: src}, function(response) 
		{
			var dataUrl=response.farewell;//working
			//window.open(dataUrl, "toDataURL() image", "width=600, height=200");//working
			$big_image.attr('src',dataUrl);
    
		});  */ 

		
	var min=100000;
	$("img:[src$='.jpg']").each(function()
	{
		var width = $(this).attr("width");
		var height= $(this).attr("height"); 
	 
		var temp=width*height;
		if(temp<min && temp>0)
		{
			min=temp;
			$small_image=$(this);
            $small_image_src=$(this).attr("src"); 		
	    }
		
    });
    
	src1=$small_image_src; 
	
	chrome.extension.sendRequest({greeting: "happy", url: src1}, function(response) 
		{
			
			var dataUrl1=response.farewell;//working
			//window.open(dataUrl, "toDataURL() image", "width=600, height=200");//working
			//jQuery("img:first").attr('src',dataUrl);
			//jQuery("img:first").remove();
			//$big_image.remove();
			$small_image.attr('src',dataUrl1);
    
		}); 
	
	
	