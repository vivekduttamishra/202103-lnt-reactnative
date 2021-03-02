

//we just need the email property from the supplied object



let person={
    name:'Vivek',
    phone:'9036084835',
    email:'vivek@gmail.com'
    
};

let organization={
    company:'LT',
    email:'support@lnt.com'
};

let sendEmailV2015=function( {email} , body){

    //now you dont need to write arg.email here
    console.log(`sending email to ${email} : message:${body} `);
}

sendEmailV2015(person, 'test');
sendEmailV2015(organization, 'test');