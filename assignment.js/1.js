//problem 1
//converting seer into mon
 function seerToMon(seer)
 {     
    //error cases
    if(seer<0)
        return 'please enter a positive number';
    if(typeof(seer)!='number')
        return 'please enter the correct input format';
    
    //40 seer = 1 mon;
    //1 seer = 0.025 mon;

    const mon = (seer*0.025);
    return mon;
 }
 const seer = 40;
 const answer = seerToMon(seer);
 console.log(answer);