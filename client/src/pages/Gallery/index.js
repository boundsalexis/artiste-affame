import React from "react";
<<<<<<< HEAD
import ShownPainting from "../../components/ShownPainting/index";
import Wrapper from "../../components/Wrapper/index";
import axios from "axios";

// import Cloudinary from "cloudinary";
// This page shows all paintings currently on display in the Gallery.
// Players can offer likes to paintings made by other players, but only once per painting
// This page will use the ShownPainting Component
=======
import Consumer from "../../configContext.js";
import ShownPainting from "../../components/ShownPainting/index.js";
import Wrapper from "../../components/Wrapper/index.js";
import API from "../../utils/API";
>>>>>>> master

// WRITE handleLike FX THAT DOES THE FOLLOWING:
//      ON CLICK OF THE LIKE BUTTON, LOOK AT THE PAINTING THAT WAS LIKED
//      IN THE GLOBAL STATE, UPDATE THE addedLike (or something like this)
//      TO "TRUE". THEN, DISABLE THE LIKE BUTTON FOR THAT PAINTING.

// WHEN THE USER LEAVES THE GALLERY, UPDATE THE DATABASE OF PAINTINGS
// BY LOOKING AT THE GLOBAL STATE. IF, WHEN THE USER LEFT THE GALLERY,
// A PAINTING HAD AN addedLike VALUE OF "TRUE", INCREMENT THE LIKE VALUE OF
// THAT PAINTINGS DOC OBJ BY 1

<<<<<<< HEAD
// const curl = new (require( 'curl-request' ))();
// curl https://<API_KEY>:<API_SECRET>@api.cloudinary.com/v1_1/<cloud_name>/resources/image
// // curl.setHeaders([
// //     ''
// // ])
// // .get('https://www.google.com')
// // .then(({statusCode, body, headers}) => {
// //     console.log(statusCode, body, headers)
// // })
// // .catch((e) => {
// //     console.log(e);
// // });
// // const header = { 
// //     // cloud_name: "artiste-defamme",
// //     api_key: "878159185894491",
// //     api_secret: "FhJy3Dc_yVACl6gaPFwLALrLjkg"
// //   };
const cheesey = () => {
axios.get("https://878159185894491:FhJy3Dc_yVACl6gaPFwLALrLjkg@api.cloudinary.com/v1_1/artiste-defamme/resources/image").then(res => {
    console.log(res);
    return res;
})
}
// cheesey();
=======
>>>>>>> master
const Gallery = () => {
   
    return (
<<<<<<< HEAD

        //  FROM THE GLOBAL STATE,
        //  MAP THE SHOWN PAINTINGS USING THE ShownPainting COMPONENT
        //  TO GENERATE THE PICTURES IN THE GALLERY

        <Wrapper>
{cheesey()}
            {/* <ShownPainting
                paintingName={painting.paintingName}
                painter={painting.painter}
                likes={painting.likes}
                src={painting.src}
                handleLike={this.handleLike} // WE WILL EMPOWER THIS COMPONENT WITH THE handleLike FUNCTION ONCE WRITTEN
            /> */}

            <h1>this is the gallery</h1>

        </Wrapper>


=======
        <Consumer>
            {context => {
                function loadGallery() {
                    // console.log(context.gallery)
                    if (context.gallery.length === 0) {
                        API.getGallery()
                            .then(res => {
                                context.loadShownPaintings(res.data);
                            })
                    }
                }
                return (
                    <Wrapper>
                        {loadGallery()}
                        <div className="container section">
                            <div className="center">
                                <h1>Gallery</h1>
                                <br />
                                <hr />
                            </div>

                            <div className="row">
                                {context.gallery.map(painting => (
                                    // console.log(painting);

                                    // review this with team
                                    <ShownPainting
                                        id={painting._id}
                                        src={painting.src}
                                        paintingName={painting.paintingName}
                                        likes={painting.likes}
                                    />

                                ))}
                            </div>
                        </div>
                    </Wrapper>
                )
            }}
        </Consumer>
>>>>>>> master
    )
}

export default Gallery;