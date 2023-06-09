$(document).ready(function(){
    $("#signupform").validate({
        rules:{
         fname:{
            required:true,
            minlength:4,
            maxlength:8
          },
         sname:{
            required:true,
            minlength:4   
         },
         emailaddress:{
             required:true,
            email:true
         },
         pass:{
            minlength:8
         },
         day:{
            required:true
         },
         male:{
            required:true
         }

        },
        messages:{
            fname:{
                required:"Enter First Name",
                minlength:"Enter atleast 4 character"
        }
    }

    })
})