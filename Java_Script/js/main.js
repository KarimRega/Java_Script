function Bold()
    {
        var texte = document.getElementById("article-body").style.fontWeight ;
      
    if (texte == 'normal') 
        {
            document.getElementById("article-body").style.fontWeight = 'bold';
        } 
    else 
        {
            document.getElementById("article-body").style.fontWeight = 'normal'; 
        }   
    }

function italic()
    {
        var texte = document.getElementById("article-body");
        var fontStyle = texte.style.fontStyle;

        if(fontStyle == 'italic')
            {
            texte.style.fontStyle = 'normal';
            }
        else 
            {
            texte.style.fontStyle = 'italic'
            }
        }

function underline()
    {
        var texte = document.getElementById("article-body")

        if(texte.style.textDecoration == "underline")
            {
            texte.style.textDecoration = "";
            }
        else
            {
            texte.style.textDecoration = "underline";
            }
    }


    var texte = document.getElementById("article-body");
    var changeFonts=document.getElementById("changeFonts");
function changeFont()
    {
        texte.style.fontFamily=changeFonts.value;

    }





        