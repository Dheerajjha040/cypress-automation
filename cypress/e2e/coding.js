

function palindrome(word)
{
    reverse = word.split("").reverse().join("")
   // console.log(reverse)
    if(reverse == word)
    {
        console.log(word + "  is palindrome")
    }
    else 
    { 
        console.log(word + "  is not palindrome")

    }

}

function reversestring(key)
{
    let revstr='';

    for(let i = key.length-1;i>= 0 ;i--)
    {
        revstr += key[i];
    }

    return revstr;
}

word = 'diljit'
//palindrome(word)
ans = reversestring(word)
console.log(ans)



