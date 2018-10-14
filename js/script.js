let key = {
    cards: [25,24,23,22,21,20,19,18,17,16,15,14,13],
    swap: function (x, y) {
        if (this.check().indexOf(x) >= 0 && this.check().indexOf(y) >= 0) {
            let orig_x = this.cards[x];
            let orig_y = this.cards[y];
            this.cards[x] = orig_y;
            this.cards[y] = orig_x;
            display();
            initialization();
        }
        if (this.check() == 0) {
            console.log("I win!");
        }
        
    },
    check: function () {
        let output = [];
        for (let i = 0; i < this.cards.length; i++) {
            if ((i+1) % 13 != (this.cards[i] + 1) % 13) {
                output.push(i);
            }
        }
        return output;
    },


}

function display() {
    let out = document.getElementById("gameboard");
    let message = "";
    message += "<table><tr>";
    for (let i = 0; i < key.cards.length; i++) {
        message += "<td>"
        message += "<div class='card'>";
        switch ((i + 1) % 13) {
            case 1:
                message += " A";
                break;
            case 10:
                message += "10";
                break;
            case 11:
                message += " J";
                break;
            case 12:
                message += " Q";
                break;
            case 0:
                message += " K";
                break;
            default:
                message += " " + ((i + 1) % 13);
                break;
        }
        message += "<br />\&clubs\;</div><div id='key-" + i + "' class='card-btm'>";

        switch ((key.cards[i] + 1) % 13) {
            case 1:
                message += " A";
                break;
            case 10:
                message += "10";
                break;
            case 11:
                message += " J";
                break;
            case 12:
                message += " Q";
                break;
            case 0:
                message += " K";
                break;
            default:
                message += " " + ((key.cards[i] + 1) % 13);
                break;
        }
        message += "<br /> \&diams\;"
        message += "</td>";
    }
    message += "</tr></table>";
    out.innerHTML = message;
}

function selection(x) {
    for (let i = 0; i < key.check().length; i++) {
        let card = document.getElementById("key-" + key.check()[i]);
        if (x != key.check()[i]) {
            card.addEventListener("click", function() {
                key.swap(x, key.check()[i]);
            });
        }
        else {
            card.addEventListener("click", function(){
                initialization();
            });
        }
        
    }
}

function initialization() {
    for (let i = 0; i < key.check().length; i++) {
        let card = document.getElementById("key-" + key.check()[i]);
        card.addEventListener("click", function() {
            selection(key.check()[i]);
        });

    }
}