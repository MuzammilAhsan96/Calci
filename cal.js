//JavaScript Document....
//Create Function to get numbers as input....
function getNumber(num) {
	// body...
	try
	{
		var input_var= document.getElementById('input');
		var len = input_var.value.length;
		var ch = input_var.value.charAt(len-1);
		if(document.getElementById('answer').value!=0)
		{
			clearScreen();
			switch(num)
			{
				case 1:input_var.value +='1';
				break;
				case 2:input_var.value +='2';
				break;
				case 3:input_var.value +='3';
				break;
				case 4:input_var.value +='4';
				break;
				case 5:input_var.value +='5';
				break;
				case 6:input_var.value +='6';
				break;
				case 7:input_var.value +='7';
				break;
				case 8:input_var.value +='8';
				break;
				case 9:input_var.value +='9';
				break;
				case 0:input_var.value +='0';
				break;
			}
		}
		else
		{
			if (ch==')')
			{
				input_var.value +='*';
				switch(num)
				{
					case 1:input_var.value +='1';
					break;
					case 2:input_var.value +='2';
					break;
					case 3:input_var.value +='3';
					break;
					case 4:input_var.value +='4';
					break;
					case 5:input_var.value +='5';
					break;
					case 6:input_var.value +='6';
					break;
					case 7:input_var.value +='7';
					break;
					case 8:input_var.value +='8';
					break;
					case 9:input_var.value +='9';
					break;
					case 0:input_var.value +='0';
					break;
				}
			}
			else
			{
				switch(num)
				{
					case 1:input_var.value +='1';
					break;
					case 2:input_var.value +='2';
					break;
					case 3:input_var.value +='3';
					break;
					case 4:input_var.value +='4';
					break;
					case 5:input_var.value +='5';
					break;
					case 6:input_var.value +='6';
					break;
					case 7:input_var.value +='7';
					break;
					case 8:input_var.value +='8';
					break;
					case 9:input_var.value +='9';
					break;
					case 0:input_var.value +='0';
					break;
				}
			}
		}
	}
	catch(err)
	{
		document.getElementById('answer').value = "Invalid Input";
	}
}
//Create clear function....
function clearScreen()
{
	try
	{
		document.getElementById('input').value="";
		document.getElementById('answer').value="";
		c=0;
		i=0;
	}
	catch(err)
	{
		document.getElementById('answer').value = "Invalid Input";
	}
}
//Create function for mathematical operations...
function operate(opt)
{
	try
	{
		var input_var=document.getElementById('input');
		var len = input_var.value.length;
		var ch = input_var.value.charAt(len-1);
		if(document.getElementById('answer').value!=0)
		{
			clearScreen();
			if((len<2&&opt=='*')||(len<2&&opt=='/')||ch=='('&&opt=='*'||ch=='('&&opt=='/')
			{

			}
			else
			{
				if(document.getElementById('answer').value!=0)
				{
					clearScreen();
					if(ch=='+'||ch=='-'||ch=='*'||ch=='/')
					{
						backSpace();
						switch(opt)
						{
							case '+':input_var.value+='+';
							break;
							case '-':input_var.value+='-';
							break;
							case '*':input_var.value+='*';
							break;
							case '/':input_var.value+='/';
							break;
						}
					}
					else{
						switch(opt)
						{
							case '+':input_var.value+='+';
							break;
							case '-':input_var.value+='-';
							break;
							case '*':input_var.value+='*';
							break;
							case '/':input_var.value+='/';
							break;
						}
					}
				}
				else
				{
					if(ch=='+'||ch=='-'||ch=='*'|ch=='/')
					{
						backSpace();
						switch(opt)
						{
							case '+':input_var.value+='+';
							break;
							case '-':input_var.value+='-';
							break;
							case '*':input_var.value+='*';
							break;
							case '/':input_var.value+='/';
							break;
						}
					}
					else{
						switch(opt)
						{
							case '+':input_var.value+='+';
							break;
							case '-':input_var.value+='-';
							break;
							case '*':input_var.value+='*';
							break;
							case '/':input_var.value+='/';
							break;
						}
					}
				}
			}
		}
		else
		{
			if (len<2&&opt=='*'||len<2&&opt=='/'||ch=='('&&opt=='*'||ch=='('&&opt=='/')
			{

			}
			else
			{
				if(document.getElementById('answer').value!=0)
				{
					clearScreen();
					if(ch=='+'||ch=='-'||ch=='*'||ch=='/')
					{
						backSpace();
						switch(opt)
						{
							case '+':input_var.value+='+';
							break;
							case '-':input_var.value+='-';
							break;
							case '*':input_var.value+='*';
							break;
							case '/':input_var.value+='/';
							break;
						}
					}
					else{
						switch(opt)
						{
							case '+':input_var.value+='+';
							break;
							case '-':input_var.value+='-';
							break;
							case '*':input_var.value+='*';
							break;
							case '/':input_var.value+='/';
							break;
						}
					}
				}
				else
				{
					if(ch=='+'||ch=='-'||ch=='*'||ch=='/')
					{
						backSpace();
						switch(opt)
						{
							case '+':input_var.value+='+';
							break;
							case '-':input_var.value+='-';
							break;
							case '*':input_var.value+='*';
							break;
							case '/':input_var.value+='/';
							break;
						}
					}
					else{
						switch(opt)
						{
							case '+':input_var.value+='+';
							break;
							case '-':input_var.value+='-';
							break;
							case '*':input_var.value+='*';
							break;
							case '/':input_var.value+='/';
							break;
						}
					}
				}
			}
		}
	}
	catch(err)
	{
		document.getElementById('answer').value = "Invalid Input";
	}
}
//Create function for brackets....
var i=0;
var c=0;//number of brackets(count)
function brackets()
{
	try
	{
		if(document.getElementById('answer').value!=0)
		{
			clearScreen();
			var input_var=document.getElementById('input');
			var len = input_var.value.length;
			var ch = input_var.value.charAt(len-1);
			if(len==0||ch=='('||ch=='+'||ch=='-'||ch=='*'||ch=='/'||(c==0&&ch==')')||(c==0&&ch=='1')||(c==0&&ch=='2')||(c==0&&ch=='3')||(c==0&&ch=='4')||(c==0&&ch=='5')||(c==0&&ch=='6')||(c==0&&ch=='7')||(c==0&&ch=='8')||(c==0&&ch=='9')||(c==0&&ch=='0')||(c==0&&ch=='-')||(c==0&&ch=='+')||(c==0&&ch=='*')||(c==0&&ch=='/'))
			{	
				c++;
				if(ch==')'||ch=='1'||ch=='2'||ch=='3'||ch=='4'||ch=='5'||ch=='6'||ch=='7'||ch=='8'||ch=='9'||ch=='0')
				{
					input_var.value+='*(';
				}
				else
				{
					input_var.value+='(';
				}
			}
			else
			{
				if(c>0)
				{
					if(i==0)
					{
						input_var.value+=')';
						i=1
					}
					else
					{
						input_var.value+=')';
					}
					c--;
				}
			}
		}
		else
		{
			var input_var=document.getElementById('input');
			var len = input_var.value.length;
			var ch = input_var.value.charAt(len-1);
			if(len==0||ch=='('||ch=='+'||ch=='-'||ch=='*'||ch=='/'||(c==0&&ch==')')||(c==0&&ch=='1')||(c==0&&ch=='2')||(c==0&&ch=='3')||(c==0&&ch=='4')||(c==0&&ch=='5')||(c==0&&ch=='6')||(c==0&&ch=='7')||(c==0&&ch=='8')||(c==0&&ch=='9')||(c==0&&ch=='0')||(c==0&&ch=='-')||(c==0&&ch=='+')||(c==0&&ch=='*')||(c==0&&ch=='/'))		
			{	
				c++;
				if(ch==')'||ch=='1'||ch=='2'||ch=='3'||ch=='4'||ch=='5'||ch=='6'||ch=='7'||ch=='8'||ch=='9'||ch=='0')
				{
					input_var.value+='*(';
				}
				else
				{
					input_var.value+='(';
				}
			}
			else
			{
				if(c>0)
				{
					if(i==0)
					{
						input_var.value+=')';
						i=1
					}
					else
					{
						input_var.value+=')';
					}
					c--;
				}
			}
		}
		//window.alert(c);
	}
	catch(err)
	{
		document.getElementById('answer').value = "Invalid Input";
	}
}

//Create function to compute....
function compute()
{
	try {
		var input_var=document.getElementById('input');
		ans=Math.floor(+eval(input_var.value));
		document.getElementById('answer').value=+ans;
  
		}
	catch(err) {
		document.getElementById('answer').value = "Invalid Input";
	}
}


//Create function for Clear a previous value...
function backSpace()
{
	var input_var=document.getElementById('input');
	if(input_var.value.length>0)
		input_var.value=input_var.value.slice(0,input_var.value.length-1);
}















