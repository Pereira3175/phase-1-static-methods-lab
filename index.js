class Formatter {

  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9 '-]/gi, '')
  }


  static titleize (string) {
    let newArray = []
    let stringToArray = string.split(' ')
    let notCapWords =  ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
 
    for ( let i = 0; i < stringToArray.length; i++ ) {
      if ( i == 0 ) {
        newArray.push(this.capitalize(stringToArray[i]))
      } else {
        if (notCapWords.includes(stringToArray[i])) {
          newArray.push(stringToArray[i])
        } else {
          newArray.push(this.capitalize(stringToArray[i]))
        }
      }
    }
    return newArray.join( " " );
}
}


console.log("test F Forever Foolish  ", Formatter.titleize( "F forever foolish" ))
console.log('test Getting Giggles  ',Formatter.titleize( "getting giggles" )) //( "Getting Giggles" )
console.log("test Where the Wild Things Are  ",Formatter.titleize( "where the wild things are a A " )) //( "Where the Wild Things Are" )
console.log('test Chicken Soup With Rice and a Few Other Songs  ',Formatter.titleize( "chicken soup with rice and a few other songs" )) //)( "Chicken Soup With Rice and a Few Other Songs" )
Formatter.titleize( "Maurice a an but of and for at by from end" )//( "Maurice a an but of and for at by from End" )
  
  
Formatter.titleize( "a tale of two cities" )//( "A Tale of Two Cities" )
Formatter.titleize( "in the night kitchen" )//( "In the Night Kitchen" )

