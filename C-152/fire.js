//-----------------------------Death Race---------------------------------//
AFRAME.registerComponent("fire",{
    schema:{
        XPos:{type:"number",default:0}
    },

    tick:function(){
        window.addEventListener("keydown",(e)=>{ 
            if(e.key==="f"){
                    this.data.XPos+=0.025
                    this.el.setAttribute("material",{"color":'yellow'})  
            }         
        })

        Pos=this.el.getAttribute("position")

        if(Pos.x<10){
            Pos.x+=this.data.XPos
        }
        else{
            Pos.x=0
        }
        
        this.el.setAttribute("position",{x:Pos.x,y:Pos.y,z:Pos.z}) 
    }
})
//-----------------------------Death Race---------------------------------//