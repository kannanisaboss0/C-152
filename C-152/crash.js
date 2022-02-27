//-----------------------------Death Race---------------------------------//
AFRAME.registerComponent("crash",{
    schema:{
        rotationx:{type:"number",default:0},
        rotationy:{type:"number",default:100},
        rotationz:{type:"number",default:0},
        positionx:{type:"number",default:20},
        positiony:{type:"number",default:0},
        positionz:{type:"number",default:4},
        time:{type:"number",deafult:5000}
    },

    tick: function(){
       this.data.time+=1

       if(this.data.time>250){
           this.data.rotationz+=-5
           this.data.rotationy+=-3
           this.data.positionx+=-1
           this.data.positiony+=0.2
           this.data.positionz+=-0.3
           this.data.rotationx+=-2   
       } 

       if(this.data.positiony>5){
           this.data.positiony+=-0.5
       }

       position=this.el.getAttribute("position")
       position.x=this.data.positionx
       position.y=this.data.positiony
       position.z=this.data.positionz
       position=this.el.setAttribute("position",{x:position.x,y:position.y,z:position.z})

       rotation=this.el.getAttribute("rotation")
       rotation.z=this.data.rotationz
       rotation.y=this.data.rotationy
       rotation.x=this.data.rotationx
       rotation=this.el.setAttribute("rotation",{x:rotation.x,y:rotation.y,z:rotation.z})
    }
})
//-----------------------------Death Race---------------------------------//