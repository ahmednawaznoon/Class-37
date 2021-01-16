class Form {
    constructor() {
        this.button = createButton('Play');
        this.input = createInput("Name");
        this.greeting = createElement('h3');
    }

    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display() {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);

        this.button.position(250,300);
        this.input.position(130,160);
        
        this.button.mousePressed(()=> {
            his.button.hide();
            this.input.hide();
            
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(130,160);
        });
    }
}