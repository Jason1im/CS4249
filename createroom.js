var N = 30;
var roomArr = [];

for(var i=0; i<N; i++) {
    var id=100 +i;
    var newroom = {id: id.toString(), location: '', roomtype: 'seminar room', name: 'room 1'}
    roomArr.push(newroom);
}

function createRooms() {
    console.log("creating rooms")
    var containerid ='#Room-options';
    for (var i=0; i<N; i++) {
        var option = document.createElement('input');  // CREATE CHECK BOX.
        option.setAttribute('id', roomArr[i].id);       // SPECIFY THE TYPE OF ELEMENT.
        option.setAttribute('location', roomArr[i].location);     // SET UNIQUE ID.
        option.setAttribute('type', 'checkbox');
        option.setAttribute('roomtype', roomArr[i].roomtype);
        option.setAttribute('name', roomArr[i].name + " " + roomArr[i].id); 
        option.classname += "custom-control-input parent-Room-options"; //ADD CLASS

        var label = document.createElement('label');  // CREATE LABEL.
        label.setAttribute('for', roomArr[i].id);
        label.classname += "custom-control-label";

        // CREATE A TEXT NODE AND APPEND IT TO THE LABEL.
        label.appendChild(document.createTextNode(roomArr[i].name));

        // APPEND THE NEWLY CREATED CHECKBOX AND LABEL TO THE <p> ELEMENT.
        $(containerid).append(option);
        $(containerid).append(label);

        // roomArr[i].value = '';
        document.getElementById( roomArr[i].id).focus();
        i = i + 1;
    }
}
