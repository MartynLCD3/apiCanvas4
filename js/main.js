function init()
{

    var element = document.getElementById( 'myCanvas' );
    canvas = element.getContext( '2d' );

    var image = new Image();

    image.src = 'pictures/0.jpeg';
    image.addEventListener( 'load' , modifyImage , false );


}

function modifyImage( e )
{

    image = e.target;

    // Draw canvas
    canvas.drawImage( image , 0 , 0 );
    var info = canvas.getImageData( 0 , 0 , 815 , 281 );
    
    var pos;

    // Negative effect in the canvas

    for( x = 0 ; x <= 815 ; x++ )
    {
        for( y = 0 ; y <= 562 ; y++ )
        {
        
            // Type info 
            pos = ( info.width * 4 * y ) + ( x * 4 );
            
            info.data[ pos ]     = 255 - info.data[ pos     ];
            info.data[ pos + 1 ] = 255 - info.data[ pos + 1 ];
            info.data[ pos + 2 ] = 255 - info.data[ pos + 2 ];
        
        }
    }

    canvas.putImageData( info , 0 , 0 );

}

window.addEventListener( 'load' , init , false );