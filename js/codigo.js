

function color(r){ 
   switch (r) {
    case 1:
    document.getElementById('a').style.background ="blue"
        break;
        case 2:
        document.getElementById('b').style.background ="blue"
            break;
        case 3:
                document.getElementById('c').style.background ="blue"
                    break;
    default:
        document.getElementById('a').style.background ="#f3f3f3"
        document.getElementById('b').style.background ="#f3f3f3"
        document.getElementById('c').style.background ="#f3f3f3"
        break;
   }
       
}