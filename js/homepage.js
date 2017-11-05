function validateForm() 
{
	var form_element = document.forms["form.col.s12"]["input#first_name.validate"].value;
	
	if (form_element == "") 
	{
		return false;
	}
		window.open('mailto:test@example.com');
		return true;
}