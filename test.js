var NinjaTurtles;

function main() 
{
  /* $('#here').load("NinjaTurtles.json"); */
  
  $.getJSON("NinjaTurtles.json", function (response)
  {
    NinjaTurtles = response;
    
    $.each(NinjaTurtles, function (index, turtle)
    {
      $('#list').append("<li class=\"space-me-out\">" + turtle.name + "'s favorite color is <font color=\"" + turtle.favoriteColor + "\">" + turtle.favoriteColor + "</font> and his weapon of choice is the " + turtle.weaponOfChoice + ", his personality is best described as '" + turtle.personality + "'.</li>");
    });
  });
}

$(document).ready(main);