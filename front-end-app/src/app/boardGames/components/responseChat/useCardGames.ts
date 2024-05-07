//* Importing content multimedia.
import img1 from "../../../../images/BoardGame1.jpg";
import img2 from "../../../../images/BoardGame2.jpg";
import img3 from "../../../../images/BoardGame3.jpg";
import img4 from "../../../../images/BoardGame4.jpg";
import img5 from "../../../../images/BoardGame5.jpg";

export const useCardGames = () => {
  
    //* Attributes.
    const images: string[] = [ img1, img2, img3, img4, img5 ];

    //* Methods.
    const getRandomID = ( valueMax: number ): number => {
        return Math.floor( Math.random() * valueMax );
    }

    return {
        //* Attributes.
        imageBoardGame: images[ getRandomID(5) ],

        //* Methods.
    }

}
