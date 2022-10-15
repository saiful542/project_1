//problem 4
//finding the name which carries 5 letters

function perfectFriend(friends)
{
    //error cases
    if(typeof(friends) != 'object')
        return 'please enter the correct format';
    if(friends.length == 0)
        return 'please enter atleast one friend name';


    let a=0;
    for(const friend of friends)
    {
        if (friend.length == 5)
        {
            a=1;
            return friend;
            break;
        } 
    }

    //unexpected case ,if the number of letters in all names is less than or greater than 5
    if(a == 0)
        return 'you dont have any friend who has 5 letters in his name';
}

const friends = ['rafi','abir','rahim','rahik','alif'];
const result = perfectFriend(friends);
console.log(result);
