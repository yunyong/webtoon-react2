import React from "react";

const ImageView = props => (
    <div id="imageView">
        <div className="wrpa_img" onClick={props.toggleAction}>
        { props.images.map(img =>
            <div key={img.id}>
                <img src={img.url} alt="" className="img_episode" />
            </div>
        ) }
        </div>
    </div>
)

export default ImageView;