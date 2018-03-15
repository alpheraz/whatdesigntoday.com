



function readTextFile(file)
{
    var allText;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
	//console.log(rawFile.readyState);
	if(rawFile.readyState === 4)
	{
	    if(rawFile.status === 200 || rawFile.status == 0)
	    {
		allText = rawFile.responseText;
	    }
	}
    }
    rawFile.send(null);
    return allText;
}


function create_sections(content){
    // wraps <h1> & elments that follow, until next <h1>, within a <div class="section" id="section_N'>...  
    var sections = [];
    h1s = content.find('h1');	    
    h1s.each( function(h1){
    	var el_id = $(this).attr('id'); //get its id		    
    	var h1_next = $(this).nextUntil('h1'); //els from h1 to next h1
    	h1_next = h1_next.add($(this)); //include h1
    	sections.push(h1_next);
    });    
    
    $('div#content').text('');
    var sections_length = sections.length;
    for (var i=0; i < sections_length; i++) {   
	$('div#content').append('<div class="section" id="section_'+i +'" ></div>');
	$('div#section_'+i).append( sections[i] );
    }    
    return [sections, h1s]
}

function generate_toc(headings){
    var menu = '' // start w/ empty menu
    headings.each( function(h){ //for each heading
	var el_id = $(this).attr('id'); //get its id
	var el_text = $(this).text(); //get its text
	var menu_item = '<li><a href="#' + el_id + '">' + el_text + '</a></li>' //build a <li> with <a> pointing to each <h1> in text 
	menu = menu + menu_item;
    });	
    menu = '<ul>'+menu+'</ul>'; //wrap all <li>s inside <ul> </ul>
//$('div#toc').html(menu); //insert menu before div#content
//  return menu
}
   
     $( function() {
        $( ".container").draggable();
        } );  

$( function() {
        $( ".frame figure").draggable();
        } ); 

    
$ (function() {
    
    var b = document.getElementById(".container");
var ctx = b.getContext("2d");
    var bl = document.getElementsByClassName("figure")
ctx.beginPath(bl);
ctx.moveTo(onContextMenu, 0);
ctx.lineTo(600, 150);
ctx.stroke();
}
  
  
  )




$(document).ready(
    function(){
	var content = readTextFile('content.html');
	content_el = $('div#content').append( content );
	
	var sections= create_sections(content_el);	
	var h1s = sections[1];
	var menu = generate_toc(h1s);

	//ADD MORE JS HERE:
	//console.log($('p')[0].innerText);
	//$('p').css('width', '50%', '!important')
    }
)

  $( function() {
    $( "#circle" ).draggable();
  } );

