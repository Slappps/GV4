class collisions{


    static cirCir(c1 , c2){
        //c1[x,y,radius]
        
        let distX = c1[0] - c2[0]
        let distY = c1[1] - c2[1]
        let dist = Math.sqrt( (distX*distX) + (distY*distY) )
        console.log("Dist: " , dist)

        let radSum = c1[2] + c2[2]
        console.log('Sum: ' , radSum)
        if(dist <= radSum){
            console.log('1')
            return 1
        }
        else{
            console.log('0')
            return 0
        }
    }
}