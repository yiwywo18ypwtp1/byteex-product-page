export const heroQuery = `
*[_type == "heroSection"][0]{
    title,
    leftPhoto,
    centerPhoto,
    rightPhoto,
    review{
      photo,
      name,
      text
    },
    featuresList[]{
      "svgUrl": svg.asset->url,
      text
    }
  }
`

export const testimonialsQuery = `
  *[_type == "testimonialsSection"][0]{
    title,
    subtitle,
    photos,
    reviews[]{
      photoUrl,
      name,
      text
    },
  }
`;