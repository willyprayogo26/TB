function soal2(param)
{
    for(var i = 0; i < param.length; i++) {
        console.log('firstName:' + param[i][0]);
        console.log('lastName:' + param[i][1]);
        console.log('hobbies:' + param[i][2]);
        console.log('profesion:' + param[i][3]);
        console.log('');
    }
}

soal2([ ['Aries','Dimas',['coding','pubg','anime'],'Web Developer'] , 
['Radit','Dika',['manga','gaming'],'Web Developer'] ]);

/* output 
  
  [
    {
        firtName:"Aries",
        lastName:"Dimas",
        hobbies:['coding','pubg','anime'],
        profession:'Web Developer'
    },
    {
        firtName:"Radit",
        lastName:"Dika",
        hobbies:['manga','gaming'],
        profession:'Web Developer'
    }
  ]
*/ 

soal2([ ['Awtian','Akbar',['coding','main kucing','anime'],'Web Instructur'] , 
['Megalo','Maniak',['metal music','maniac'],'Maniac Expert'] ]);