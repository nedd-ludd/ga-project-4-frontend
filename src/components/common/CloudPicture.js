//couple packages
// c has entire sdk for react
import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

const Profile = ({ cloudinaryImageId }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    },
  });

  const myImage = cld.image(cloudinaryImageId);
  myImage
    .resize(thumbnail().width(70).height(70).gravity(focusOn(FocusOn.face())))
    .roundCorners(byRadius(35));

  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};

const Item = ({ cloudinaryImageId }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    },
  });

  const myImage = cld
    .image(cloudinaryImageId)
    .resize(thumbnail().width(130).height(130))
    .roundCorners(byRadius(5));

  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};

export const CLOUD = { Profile, Item };
