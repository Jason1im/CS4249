var roomArr = [
    { location: 'locationA', faciltype: 'seminar room', name: 'room '},
    { location: 'locationB', faciltype: 'seminar room', name: 'room '},
    { location: 'locationA', faciltype: 'seminar room', name: 'room '},
    { location: 'locationC', faciltype: 'seminar room', name: 'room '},
    { location: 'locationA', faciltype: 'seminar room', name: 'room '},
    { location: 'locationD', faciltype: 'seminar room', name: 'room '},
    { location: 'locationD', faciltype: 'seminar room', name: 'room '},
    { location: 'locationD', faciltype: 'seminar room', name: 'room '},
    { location: 'locationA', faciltype: 'seminar room', name: 'room '},
    { location: 'locationC', faciltype: 'seminar room', name: 'room '},
    { location: 'locationD', faciltype: 'seminar room', name: 'room '},
    { location: 'locationA', faciltype: 'seminar room', name: 'room '},
    { location: 'locationA', faciltype: 'seminar room', name: 'room '},
    { location: 'locationB', faciltype: 'seminar room', name: 'room '},
    { location: 'locationB', faciltype: 'seminar room', name: 'room '},
    { location: 'locationC', faciltype: 'seminar room', name: 'room '},
    { location: 'locationB', faciltype: 'seminar room', name: 'room '},
    { location: 'locationA', faciltype: 'seminar room', name: 'room '},
    { location: 'locationC', faciltype: 'seminar room', name: 'room '},
    { location: 'locationC', faciltype: 'seminar room', name: 'room '},
    { location: 'locationD', faciltype: 'seminar room', name: 'room '},
    { location: 'locationA', faciltype: 'seminar room', name: 'room '},
    { location: 'locationD', faciltype: 'seminar room', name: 'room '},
    { location: 'locationB', faciltype: 'seminar room', name: 'room '},
    { location: 'locationA', faciltype: 'seminar room', name: 'room '},
    { location: 'locationB', faciltype: 'seminar room', name: 'room '},
    { location: 'locationD', faciltype: 'seminar room', name: 'room '},
    { location: 'locationB', faciltype: 'seminar room', name: 'room '},
    { location: 'locationA', faciltype: 'seminar room', name: 'room '},
    { location: 'locationB', faciltype: 'seminar room', name: 'room '},

];

for(var i=0; i<roomArr.length; i++) {
    roomArr[i].name += i+1;
    roomArr[i].id = roomArr[i].name;
}

function createRooms() {
    var containerid ='#Room-options';
    for (var i=0; i<roomArr.length; i++) {
        var input = document.createElement('input');  // CREATE CHECK BOX.
        input.setAttribute('id', roomArr[i].id);
        input.setAttribute('location', roomArr[i].location);
        input.setAttribute('type', 'checkbox');
        input.setAttribute('faciltype', roomArr[i].faciltype);
        input.setAttribute('name', roomArr[i].name + " " + roomArr[i].id); 

        input.classList.add('custom-control-input');
        input.classList.add('parent-Room-options');        
        input.classList.add('location-'+ roomArr[i].location);
        
        var label = document.createElement('label');  // CREATE LABEL.
        label.setAttribute('for', roomArr[i].id);
        label.className += "custom-control-label";

        var optiondiv = document.createElement('div');
        optiondiv.className = optiondiv.className + "custom-control custom-checkbox location-"+roomArr[i].location
        

        // CREATE A TEXT NODE AND APPEND IT TO THE LABEL.
        label.appendChild(document.createTextNode(roomArr[i].name));

        // APPEND THE NEWLY CREATED CHECKBOX AND LABEL TO THE <p> ELEMENT.
        $(optiondiv).append(input);
        $(optiondiv).append(label);
        $(containerid).append(optiondiv);
        console.log(optiondiv.className);
        console.log(input.className)
        console.log(label.className)

        // roomArr[i].value = '';
        document.getElementById( roomArr[i].id).focus();
    }
}
