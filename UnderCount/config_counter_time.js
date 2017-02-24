/******************************************************************************************
Configuration File for Counter

Version 1.0.3 by I. Martinez. & S. Rendulic by CMSZine.com
******************************************************************************************/

/******************************************************************************************
Instructions:
- just change year, month, day, hours, minutes and seconds.
"2013/01/24 4:12:1"
******************************************************************************************/

/***Change only this numbers**************************************************************/
 var year = 2017;
 var month= 2;
 var day= 27;
 var hours= 0;
 var minutes= 0;
 var seconds= 0;
/*****************************************************************************************/
 
  $(function() {
      var currentDate = new Date(),
          finished = false,
          availiableExamples = {
            set15daysFromNow: 356 * 24 * 60 * 60 * 1000,
            set5minFromNow  : 5 * 60 * 1000,
            set1minFromNow  : 1 * 60 * 1000
          };
  

      $(function() {
        $('div#clock').countdown(year+'/'+month+'/'+day+' '+hours+':'+minutes+':'+seconds, function(event) {
		
          var $this = $(this);
          switch(event.type) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
            case "weeks":
            case "daysLeft":
              $this.find('span#'+event.type).html(event.value);
              break;
            case "finished":
              $this.hide();
              break;
          }
        });
      });



  
      function callback(event) {
  		  $this = $(this);
  			switch(event.type) {
  				case "seconds":
  				case "minutes":
  				case "hours":
  				case "days":
  				case "weeks":
  				case "daysLeft":
  				  $this.find('span#'+event.type).html(event.value);
  				  if(finished) {
  				    $this.fadeTo(0, 1);
  				    finished = false;
  				  }
  					break;
  				case "finished":
            $this.fadeTo('slow', .5);
            finished = true;
  					break;
  			}
      }
      
  		$('#clock').countdown(availiableExamples.set15daysFromNow + currentDate.valueOf(), callback);
  		
  		$('select#exampleDate').change(function() {
  		  try {
    		  var $this = $(this),
    		      value;
  		    currentDate = new Date();
    		  switch($this.attr('value')) {
    		    case "other":
    		      value = prompt('Set the date to countdown:\nThe hh:mm:ss parameters are opitionals', 'YYYY/MM/DD hh:mm:ss');
    		      break;
    		    case "daysFromNow":
    		      value = prompt('How many days from now?', '');
    		      value = new Number(value) * 24 * 60 * 60 * 1000 + currentDate.valueOf();
    		      break;
    		    case "minutesFromNow":
    		      value = prompt('How many minutes from now?', '');
    		      value = new Number(value) * 60 * 1000 + currentDate.valueOf();
    		      break;
    		    default:
    		      value = availiableExamples[$this.attr('value')] + currentDate.valueOf();
    		  }
    		  $('#clock').countdown(value, callback);
    		  $this.find('option:first').attr('selected', true);
    		} catch(e) { alert(e); }
  		});
  	});