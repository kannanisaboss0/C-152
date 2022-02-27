//-----------------------------Death Race---------------------------------//
AFRAME.registerComponent("bullet",{
    schema:{
        positionx:{type:"number",default:0.5},
        positiony:{type:"number",default:2.25}
    },

      tick:function(){
          this.data.positionx+=1

          if(this.data.positionx>200){
              this.data.positionx=0
              this.data.positiony=2.25
          }

          if(this.data.positionx>20){
            this.data.positiony+=-0.04
        }

          position=this.el.getAttribute("position")

          position.x=this.data.positionx
          position.y=this.data.positiony

          this.el.setAttribute("position",{x:position.x,y:position.y,z:position.z})
      } 
})
//-----------------------------Death Race---------------------------------//