// jquery validation
$(function () {
		/*uncomment 34an t5ly tfkeer eluser be rsala m4 highkighted red */
		/*$('[required]').blur(function () {
			console.log("bas")
		if ($(this).val() =='') {
			console.log("good")
			$(this).next('span').fadeIn().delay(3000).fadeOut();
		}
		else if( $('option').val() == 'Choose...') {
			console.log("sood")
			$(this).next('span').fadeIn().delay(3000).fadeOut();	

		}
   else{$(this).next('span').hide();}
	});*/
/* hide the error messages intialy */
	$("#error_name").hide();
	$("#error_lname").hide();
	$("#error_email").hide();
	$("#error_number").hide();
	//$(".error_text").hide();
  //  $('button').attr('disabled', true); 
	var error_fname = false;
	var error_lname = false;
	var error_email = false;
	var error_number = false;
	//var error_text = false;
/* when you leaves the field hyro7 ynfz dalh m3ynh hn3rfha t7t */
	$("#form_fname").blur(function(){
	check_fname();
	});
	$("#form_lname").blur(function(){
	check_lname();
	});	
	$("#email").blur(function() {
	check_email();
	});
	$("#form_number").blur(function(){
		check_number();
	});
	/*$("#form_text").blur(function(){
		check_text();
	});*/

	/* when focus the field  */
	$("#form_fname").focus(function(){
	    $("#error_name").delay(3000).hide();

	});
		$("#form_lname").focus(function(){
	    $("#error_lname").delay(3000).hide();
	});
	$("#email").focus(function() {
	  $("#error_email").delay(3000).hide();

	});
	$("#form_number").focus(function(){
	    $("#error_number").delay(3000).hide();
	});
	$("#form_text").focus(function(){
       $("#error_text").delay(3000).hide();

	});

	/* bdayt t3reef el functions */
	/* ^[\u0621-\u064A0-9 ]+$
	/* frist one for the name which must be only in English letter*/

	function check_fname() {
	  var pattern = /^[a-zA-Z ]*$/;
	  var patern = /^[\u0621-\u064A ]+$/;
	  var fname = $("#form_fname").val();
	  var x = fname.indexOf(' ')
	 	if (fname == '') {
	 		 $("#form_fname").css("border-bottom","2px solid #F90A0A");
	 		 $("#error_name").html("Please fill this field");
	 		 $("#error_name").show();

	     	error_fname = true;}
	    else if (x == 0 ) {
	 		 $("#form_fname").css("border-bottom","2px solid #F90A0A");
	 		 $("#error_name").html("Name can't start with space");
	 		 $("#error_name").show();
	     	error_fname = true; 	
	 	}
	 	else if (pattern.test(fname)) {
	       $("#error_name").hide();
	       $("#form_fname").css("border-bottom","2px solid #34F458"); }

	    else if (patern.test(fname))  {
		   $("#error_name").hide();
	       $("#form_fname").css("border-bottom","2px solid #34F458");
	    } 
	    
	    else {
	       $("#error_name").html("Please enter a correct name");
	       $("#error_name").show();
	       $("#form_fname").css("border-bottom","2px solid #F90A0A");
	       error_fname = true;
	    }
	}
	function check_lname() {
	  var pattern = /^[a-zA-Z ]*$/;
	  var patern = /^[\u0621-\u064A ]+$/;
	  var lname = $("#form_lname").val();
	  var x = lname.indexOf(' ')
	 	if (lname == '') {
	 		 $("#form_lname").css("border-bottom","2px solid #F90A0A");
	     	 $("#error_lname").html("Please fill this field");
	 		 $("#error_lname").show();
	     	 error_lname = true;
	     }
	    else if (x == 0 ) {
	 		 $("#form_lname").css("border-bottom","2px solid #F90A0A");
	 		 $("#error_lname").html("Name can't start with space");
	 		 $("#error_lname").show();
	     	error_lname = true; 	
	 	}
	 	else if (pattern.test(lname)) {
	       $("#error_lname").hide();
	       $("#form_lname").css("border-bottom","2px solid #34F458"); }

	    else if (patern.test(lname))  {
		   $("#error_lname").hide();
	       $("#form_lname").css("border-bottom","2px solid #34F458");
	    } 
	    
	    else {
	       $("#error_lname").html("Please enter a correct name");
	       $("#error_lname").show();
	       $("#form_lname").css("border-bottom","2px solid #F90A0A");
	       error_lname = true;
	    }
	}

	 /*email validation function*/
	function check_email() {
	  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	  var email = $("#email").val();
	 	if ( email == '') {
	 		$("#email").css("border-bottom","2px solid #F90A0A"); //red

	     	error_email = true;
	    }
	    else if(pattern.test(email) ) {
	     $("#error_email").hide();
	     $("#email").css("border-bottom","2px solid #34F458"); //green
	    } 

	    else {
	     $("#error_email").html("Please enter a correct E-mail");
	     $("#error_email").show();
	     $("#email").css("border-bottom","2px solid #F90A0A");
	     error_email = true;
	    }
	}

		/* mobile number validation function 011 010 012 015   */

	function check_number() {
	  var pattern = /^01([0-2]|5){1}[0-9]{8}/;
	  var number = $("#form_number").val();

		if ( number == '') {
	 		$("#form_number").css("border-bottom","2px solid #F90A0A");
	     	$("#error_number").html("Please enter your number");
	     	$("#error_number").show();
	     	error_number = true;
	    }
	    else if(pattern.test(number) ) {
	     $("#error_number").hide();
	     $("#form_number").css("border-bottom","2px solid #34F458");
	     	error_number = false;
	    } 

	    else {
	     $("#error_number").html("Please enter a correct phone number");
	     $("#error_number").show();
	     $("#form_number").css("border-bottom","2px solid #F90A0A");
	     error_number = true;
	    }

	}
	/* check if the text is empty*/
	/*function check_text() {
		//var text_length = $("#form_text").val().length;
		var text = $("#form_text").val();
		if ( text == '') {
	 		$("#form_text").css("border-bottom","2px solid #F90A0A");
	 		error_text = true;
	 	}
	 	else{
	 		$("#error_text").hide();
	     	$("#form_text").css("border-bottom","2px solid #34F458");
	 	}
		
	}*/



	/* lw b3t we hwa 3aml 7aga 3'lt */


 /* conditions */
	$("#fou").hide();
	$('#error_fou').hide();
	var error_fou = false;
	var error_unifill = false;
	$("#foe").hide();
	$('#error_foe').hide();
	var error_foe = false;
	var error_fucfill = false;
	var error_programe = false;
	var error_year = false;
	var error_elec = false;
	var error_mech = false;
	var error_arch = false;
	var error_civil = false;

	$("#majordiv").hide();
	$('#error_major').hide();
	$("#minordiv").hide();
	$('#error_minor').hide();
	$("#mainminordiv").hide();
	$('#error_mainminor').hide();
	$("#prep").hide();
	$("#programe").show();
	$('#progdiv').hide();
	$("#elec").hide();
	$("#civil").hide();
	$("#arch").hide();
	$("#mech").hide();
/* when you leave the field hyro7 ynfz dalh m3ynh hn3rfha t7t */

	$("#unifill").click(function(){
	check_unifill();
	});
	$("#unifill").blur(function(){
		 var unifillchoose = $("#unifill option:selected").text();
		 if (unifillchoose == 'Choose...') {
	     $("#unifill").css("border-bottom","2px solid #F90A0A");

	     error_unifill = true; }
	});
	$("#year").blur(function(){
		 var yearchoose3 = $("#year option:selected").text();
		 if (yearchoose3 == 'Choose...') {
	     $("#year").css("border-bottom","2px solid #F90A0A");

	     error_year = true; }
	});
	$("#fucfill").click(function(){
	check_fucfill();
	});
	$("#major").click(function(){
	check_major();
	});
	$("#fucfill").blur(function(){
		 var fucfillchoose = $("#fucfill option:selected").text();
		 if (fucfillchoose == 'Choose...') {
	     $("#fucfill").css("border-bottom","2px solid #F90A0A");
	     error_fucfill = true; }
	});
	$("#programe").click(function(){
		check_programe();
	  });
	$("#year").click(function(){
		check_year();
	  });
	$("#elec").click(function(){
		check_elec();
	  });
		$("#mech").click(function(){
		check_mech();
	  });
	$("#civil").click(function(){
		check_civil();
	  });
	$("#arch").click(function(){
		check_arch();
	  });
	/* when focus the field  */
	$("#form_fou").focus(function() {
	  $("#error_fou").delay(3000).hide();});

	$("#unifill").focus(function(){
	    $("#error_unifill").delay(3000).hide();
	});
	$("#form_fuc").focus(function() {
	  $("#error_fuc").delay(3000).hide();});

	$("#fucfill").focus(function(){
	    $("#error_fucfill").delay(3000).hide();
	});

	/*bdayt t3reef el functions */
	function check_unifill() {
	  var unifill = $("#unifill option:selected").text();
	  console.log(unifill);
	 	if (unifill == 'Ain shams' || unifill == 'Cairo' || unifill == 'AUC' || unifill == 'Helwan' ) {
	 		console.log("sss")
	 	 $("#error_unifill").hide();
	     $("#unifill").css("border-bottom","2px solid #34F458");
	     $("#fou").hide();
	     	error_unifill = false;}
	     
	    else if (unifill == 'Other') {
	     $("#error_unifill").hide();
	     $("#unifill").css("border-bottom","2px solid #34F458");
	     $("#fou").show();
	     	$("#form_fou").blur(function(){
				check_fou();
			});
	     function check_fou(){
	     	var textfou = $("#form_fou").val();
			if ( textfou.length == 0 ) {
				console.log("wow")
	 			$("#form_fou").css("border-bottom","2px solid #F90A0A");
	 			error_unifill = true;
	 			}
	 		else {
	 			$("#form_fou").css("border-bottom","2px solid #34F458");

	 			error_unifill = false;}
	 		}
	 		check_fou();
				 }

	   	else{
	 			$("#error_fou").hide();
	 			$("#fou").hide();

	     		$("#form_fou").css("border-bottom","2px solid #F90A0A");
	     		
	     		error_unifill = true;
	 			} 
	 	}

function check_fucfill() {
 	   $("#majordiv").hide();
		$("#minordiv").hide();
		$("#mainminordiv").hide();
		check_programefs();
	  var fucfill = $("#fucfill option:selected").text();
	  console.log(fucfill);
	 	if (fucfill == 'Engineering' || fucfill == 'Computers and information' || fucfill == 'Commerce' || fucfill == 'Mass Communication' ) {
	 		console.log("sss")
	 	 $("#error_fucfill").hide();
	     $("#fucfill").css("border-bottom","2px solid #34F458");
	     $("#foe").hide();
	     	error_unifill = false;
	     	if (fucfill == 'Engineering') {
     			$('#progdiv').show();
	     		$("#prep").show();
	     	}else {$("#prep").hide();
	     	     		$('#progdiv').hide();
}

	     }

	     
	    else if (fucfill == 'Other') {
	     $("#error_fucfill").hide();
	     $("#fucfill").css("border-bottom","2px solid #34F458");
	     $("#foe").show();
	     	$("#form_fuc").blur(function(){
				check_foe();
			});
	     function check_foe(){
	     	var textfoe = $("#form_fuc").val();
			if ( textfoe.length == 0 ) {
				console.log("wow")
	 			$("#form_fuc").css("border-bottom","2px solid #F90A0A");
	 			error_fucfill = true;
	 			}
	 		else {
	 			$("#form_fuc").css("border-bottom","2px solid #34F458");

	 			error_fucfill = false;}
	 		}
	 		check_foe();
				 }

	   	else{
	 			$("#error_foe").hide();
	     		$("#form_fuc").css("border-bottom","2px solid #F90A0A");
   			    $("#foe").hide();

	     		error_fucfill = true;
	 			} 
	 	}
	 	function check_programe(){
	 		check_programefs();
	  var fucfill4 = $("#fucfill option:selected").text();

	 	if 	(fucfill4 == 'Engineering') {
		 var programechoose = $("#programe option:selected").text();
		 if (programechoose == 'Choose...') {
	     $("#programe").css("border-bottom","2px solid #F90A0A");
	     error_programe = true; }
	  else{
	  	$("#programe").css("border-bottom","2px solid #34F458");

	  }}}
	  function check_year(){
	  	check_programefs()
	  	var yearchoose = $("#year option:selected").text();
	  	if (yearchoose == 'preparatory'){
	  		$("#year").css("border-bottom","2px solid #34F458");
	  		$("#majordiv").hide();
	  		$("#minordiv").hide();
	  		$("#mainminordiv").hide();	
	  	} 
	  	else if (yearchoose == 'First Year' || yearchoose == 'Second Year' ){
	  		console.log("wewewewe")
	  		$("#year").css("border-bottom","2px solid #34F458");

								 }

	  	else if (yearchoose == 'Third Year' || yearchoose == 'Forth Year')  {
	  		console.log("wawawawa")
	  		$("#year").css("border-bottom","2px solid #34F458");
	  	}else{
		$("#year").css("border-bottom","2px solid #F90A0A");
					  $("#majordiv").hide();
				       $("#minordiv").hide();
				       $("#mainminordiv").hide();
	  		error_year = true;
	  	}
	  }
				function check_programefs(){
						  var major = "left"

					var programechoose2 = $("#programe option:selected").text();
					var fucfill2 = $("#fucfill option:selected").text();
					var yearchoose2 = $("#year option:selected").text();
					if ( programechoose2 == 'Mainstream' && fucfill2 == 'Engineering' && (yearchoose2 == 'First Year' || yearchoose2 == 'Second Year' ) ) {
						console.log("wakawaka")
					   $("#majordiv").show();
				       $("#minordiv").hide();
				       $("#mainminordiv").hide();
			 			}
			 			else if ( programechoose2 == 'Credit Hours' && fucfill2 == 'Engineering' && (yearchoose2 != 'preparatory') ) {
						console.log("wakawaka")
					   $("#majordiv").hide();
				       $("#minordiv").show();
				       $("#mainminordiv").hide();
			 			} 
			 			else if (programechoose2 == 'Mainstream' && fucfill2 == 'Engineering' && (yearchoose2 == 'Third Year' || yearchoose2 == 'Forth Year' )){

			 			 $("#majordiv").show();
				       	$("#minordiv").hide();
			 			} else {
					  $("#majordiv").hide();
				       $("#minordiv").hide();
				       $("#mainminordiv").hide();
	  					error_year = true;
			 			}
			 			 							 		
 	   			 		}
					 	check_programefs();
					 	function check_major(){
 							var programechoose2 = $("#programe option:selected").text();
							var fucfill2 = $("#fucfill option:selected").text();
							var yearchoose2 = $("#year option:selected").text();
					 		if  (programechoose2 == 'Mainstream' && fucfill2 == 'Engineering' && (yearchoose2 == 'Third Year' || yearchoose2 == 'Forth Year' )) {

					 			var majorchoose = $("#major option:selected").text();
					 			 if (majorchoose == 'Electrical'){
					 				$("#mainminordiv").show();
					 				$("#elec").show();
					 				$("#civil").hide();
					 				$("#arch").hide();
					 				$("#mech").hide();
							  		$("#major").css("border-bottom","2px solid #34F458");
								check_elec();
							  		}
					 			else if (majorchoose == 'Mechanical'){
					 				$("#mainminordiv").show();
					 				$("#mech").show();
					 				$("#elec").hide();
					 				$("#civil").hide();
					 				$("#arch").hide();
							  		$("#major").css("border-bottom","2px solid #34F458");
							  		check_mech();							  			}  
							  	else if (majorchoose == 'Archticture'){
					 				$("#mainminordiv").show();
					 				$("#mech").hide();
					 				$("#elec").hide();
					 				$("#civil").hide();
					 				$("#arch").show();
							  		$("#major").css("border-bottom","2px solid #34F458");
							  		check_arch();							  			}  
							  	else if (majorchoose == 'Civil' &&  yearchoose2 == 'Forth Year' ){
					 					$("#mainminordiv").show();
					 					$("#mech").hide();
					 					$("#elec").hide();
					 					$("#civil").show();
					 					$("#arch").hide();
							  			$("#major").css("border-bottom","2px solid #34F458");
							  			check_civil();}
							  	else if (majorchoose == 'Civil' &&  yearchoose2 == 'Third Year' ){
					 					$("#mainminordiv").hide();
					 					$("#mech").hide();
					 					$("#elec").hide();
					 					$("#civil").show();
					 					$("#arch").hide();
							  			$("#major").css("border-bottom","2px solid #34F458");
							  			check_year(); 
							  			check_civil();									  			}
							  	else {
							  		$("#mainminordiv").hide();
					 					$("#mech").hide();
					 					$("#elec").hide();
					 					$("#civil").hide();
					 					$("#arch").hide();
							  			$("#major").css("border-bottom","2px solid #34F458");
							  	}		 
							  		
							  	 	}							  		
					 			
					 		}

					 	check_major();		

					 	function check_elec(){
								var elecchoose = $("#elec option:selected").text();
							  			console.log(elecchoose)

							  			if (elecchoose == "Power" || elecchoose == "Electronics" || elecchoose == "Computer" ) {
									  		$("#elec").css("border-bottom","2px solid #34F458");
							  			console.log("dfeasd")

							  			}else{
							  			$("#elec").css("border-bottom","2px solid #F90A0A");
										error_elec = true;
							  			}  }
						function check_mech(){

									var mechchoose = $("#mech option:selected").text();
							  			if (mechchoose == "Power" || mechchoose == "Production" || mechchoose == "Vechiles" || mechchoose == "Mechatronics" ) {
									  		console.log("mech")
									  		$("#mech").css("border-bottom","2px solid #34F458");
										}else{
							  			$("#mech").css("border-bottom","2px solid #F90A0A");
							  			error_mech = true;
						}	}  			

						function check_arch(){

									var archchoose = $("#arch option:selected").text();
							  			if (archchoose == "Urban Design" || archchoose == "Urban Planing"  ) {
									  		console.log("arch")
									  		$("#arch").css("border-bottom","2px solid #34F458");
										}else{
							  			$("#arch").css("border-bottom","2px solid #F90A0A");
							  			error_arch = true;
						}	}  			
						function check_civil(){

									var civilchoose = $("#civil option:selected").text();
							  			if (civilchoose == "Structural Engineering" || civilchoose == "Public Works" || civilchoose == "Irrigation and Hydraulics" ) {
									  		console.log("civi")
									  		$("#civil").css("border-bottom","2px solid #34F458");
										}else{
							  			$("#civil").css("border-bottom","2px solid #F90A0A");
							  			error_civil = true;
						}	}  			

/*-------password-------*/

var error_password = false;
var error_retype_password = false;

$("#password").blur(function() {
check_password();
});
 
$("#retype_password").blur(function() {
check_retype_password();
});


function check_password() {
var password_length = $("#password").val().length;
 
if (password_length < 8) {
	console.log(password_length)
$("#password_error").html("at least 8 Characters");
$("#password_error").show();
$("#password").css("border-bottom","2px solid #F90A0A");
error_password = true;
} else {
$("#password_error").hide();
$("#password").css("border-bottom","2px solid #34F458");
}
};
function check_retype_password() {
  var password = $("#password").val();
  var retype_password = $("#retype_password").val();
 
    if(password !== retype_password) {
      $("#retype_password_error").html("Passwords Did not Matched");
      $("#retype_password_error").show();
      $("#retype_password").css("border-bottom","2px solid #F90A0A");
      error_retype_password = true;
     } else {
      $("#retype_password_error").hide();
      $("#retype_password").css("border-bottom","2px solid #34F458");
     }
};

	$("#myForm").submit(function() {
	  error_fname = false;
	  error_lname = false;
	  error_number = false;
	  error_unifill= false;
	  error_fucfill= false;
	  error_programe= false
	  error_year= false
	  error_arch = false;
	  error_civil = false;
	  error_elec = false;
	  error_mech = false;
	  error_email = false;
	  check_programefs();
	  check_number();
	  check_fname();
	  check_lname();
	  check_unifill();
	  check_fucfill();
	  check_programe();
	  check_year();
	  check_elec();	  	
      check_mech();
	  check_civil();
   	  check_arch();
   	  check_email();

	  if (error_fname === false && error_lname === false && error_number === false && error_unifill === false  && error_fucfill === false  &&  error_programe=== false &&  error_year=== false &&  error_elec=== false &&  error_mech=== false &&  error_arch=== false &&  error_civil=== false && error_email === false) {
	    alert("thank you ");
	    return true;
	   } else {
	    alert("Please Fill all fields Correctly");
	    console.log("fo2")
	    return false;
	  }
	});
	 	$("#signUp").submit(function() {

	  error_email = false;
	  error_password = false;
	  error_retype_password = false;
   	  check_email();
   	  check_password();
   	  check_retype_password();
	  if ( error_email === false && error_password === false && error_retype_password === false ) {
	    alert("thank you ");
	    return true;
	   } else {
	    alert("Please Fill all fields Correctly");
	    console.log("fo2")
	    return false;
	  }
	});
	 $("#logIn").submit(function() {

	  error_email = false;
	  error_password = false;
   	  check_email();
   	  check_password();
	  if ( error_email === false && error_password === false ) {
	    alert("thank you ");
	    return true;
	   } else {
	    alert("Please Fill all fields Correctly");
	    console.log("fo2")
	    return false;
	  }
	});
	

});