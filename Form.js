class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("PLAY")
        this.greetings=createElement("h3")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greetings.hide()
    }
    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(150,0);
       
        this.input.position(150,150);
        this.button.position(200,200)

     this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            
            player.name=this.input.value()
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)

            this.greetings.html("WELCOME " +player.name)
            this.greetings.position(150,150);
        })
    }
}