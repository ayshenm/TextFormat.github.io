const a = document.getElementById("a");
        const b = document.getElementById("b");
        const c = document.getElementById("c");
        const title = document.getElementById("title");

        
    //   let defaultStyle = {
    //     fontWeight : "normal",
    //     fontStyle : "normal",
    //     textDecoration : "none",

    //   }
 
      function yaz(type){
        if(type === "bold"){
            title.style.fontWeight = title.style.fontWeight == "bold" ? "normal" : "bold";
            // title.style.fontStyle = "normal";
            // title.style.textDecoration = "normal";
            title.style.color ="#fff"
        }else if(type === "italic"){
            // title.style.fontWeight = "normal";
            title.style.fontStyle = title.style.fontStyle == "italic" ? "normal" : "italic";
            // title.style.textDecoration = "normal";
        }else if( type === "under"){
            // title.style.fontWeight = "normal";
            // title.style.fontStyle = "normal";
            title.style.textDecoration = title.style.textDecoration === "underline" ? "none" : "underline"

        }
      }

        // function yaz1(){
        //    if(title.style.fontWeight == "bold"){
        //       title.style.fontWeight = "normal";
        //    }else{
        //     title.style.fontWeight = "bold";

        //    }
             
        // }
        
        // function yaz2(){
        //     if(title.style.fontStyle == "italic"){
        //       title.style.fontStyle = "normal";
        //    }else{
        //     title.style.fontStyle = "italic";

        //    }
        // }
        // function yaz3(){
        //     if(title.style.textDecoration == "underline"){
        //       title.style.textDecoration = "none";
        //    }else{
        //     title.style.textDecoration = "underline";

        //    }
            
        // }