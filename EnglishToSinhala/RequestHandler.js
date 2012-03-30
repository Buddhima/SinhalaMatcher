function ajax_finder(url,msg,container){
    
    // check the URL start with http
    if(url.match('^http')){
        
      // assemble the YQL call
      msg.removeClass('error');
      msg.html('<strong><br>     Searching ........</strong>');   
      
      // requesting json result from online dic
      $.getJSON("http://query.yahooapis.com/v1/public/yql?"+
                "q=select%20*%20from%20html%20where%20url%3D%22"+
                encodeURIComponent(url)+
                "%22&format=xml'&callback=?",
        function(data){
          if(data.results[0]){
            var data = filterData(data.results[0]);	//calling to remove html tags
			msg.html('<strong><br>     Finished</strong>');
            container.
              html(data);
			 
			  
			  
		
          }
		  else {
            msg.html('     <strong>error!</strong>');
            msg.addClass('error');
            var errormsg = '<p>Error: Failed to load the page.</p>';
            container.
              html(errormsg).
                focus().
                  effect('highlight',{color:'#c00'},1000);
          }	
        }
      );
    } 
    
    
  }



  function filterData(data){
      
    // filter out all html elements
    
    data = data.replace(/<?\/body[^>]*>/g,'');
    data = data.replace(/[\r|\n]+/g,'');
    data = data.replace(/<--[\S\s]*?-->/g,'');
    data = data.replace(/<noscript[^>]*>[\S\s]*?<\/noscript>/g,'');
    data = data.replace(/<script[^>]*>[\S\s]*?<\/script>/g,'');
    data = data.replace(/<script.*\/>/,'');
    data = data.replace(/<div style="float:right;">/g,'<P>');
    data = data.replace(/<div[^>]*>[\S\s]*?<\/div>/g,'');
    
	
    return data;
  }
  
  
