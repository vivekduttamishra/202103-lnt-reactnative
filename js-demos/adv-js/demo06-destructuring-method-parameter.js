
let sendEmailV5=function( target , body){
    console.log(`sending email to ${target.email} : message:${body} `);
}

let person={
    name:'Vivek',
    phone:'9036084835',
    email:'vivek@gmail.com'
    
};

let organization={
    company:'LT',
    email:'support@lnt.com'
};


sendEmailV5(person, 'test');
sendEmailV5(organization, 'test');