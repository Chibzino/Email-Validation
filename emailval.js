function validate()
{
  var email = document.getElementById('mail').value;

  var regex = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})$/

  if(email == "")
  {
    alert('Input Email Id');
  }

  else if((regex.test(email)))
  {
    alert('Email id submitted successfully');
  }

  else{
    alert('Wrong Email id');
  }
    
  }
 