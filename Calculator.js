
let onScreen="";

let getButtonKoText=Array.from(document.querySelectorAll('.number'));

getButtonKoText.forEach((i)=>{
    i.addEventListener('click',(toSend)=>{
        console.log(toSend.target.innerText);

        textInsideButton=toSend.target.innerText;
         accessScreenKoText=document.querySelector('input');

   
        if(textInsideButton=="="){

            try{
                if(onScreen.includes("%")){               
                    forPer= Array.from(accessScreenKoText.value);
                    size=forPer.length;
                    numForPer=forPer[size-2];                
                    onScreen=numForPer/100;
                    accessScreenKoText.value=onScreen;
                }

                else{
                onScreen = eval(onScreen);
                accessScreenKoText.value=onScreen;
                }
            }

        catch{
            accessScreenKoText.value="Error";
        }
        }

        else if(textInsideButton=="AC"){
            onScreen="";
            accessScreenKoText.value=onScreen;
        }

        else if(textInsideButton=="del"){
            currentWord= accessScreenKoText.value;
            // console.log(Array.from(currentWord));
            arrayWord=Array.from(currentWord);
            // console.log(arrayWord);
            // console.log(currentWord.length);
            size=arrayWord.length;
            arrayWord[size-1]="";
            // console.log(arrayWord);
           onScreen=arrayWord.join("");
           accessScreenKoText.value=onScreen;
            
        }

       

        else{
            onScreen =onScreen + textInsideButton;
            accessScreenKoText.value=onScreen;
        }

    });
});
