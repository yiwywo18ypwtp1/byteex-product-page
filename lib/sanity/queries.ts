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

export const brandsQuery = `
*[_type == "brandsSection"][0]{
    title,
    carouselPhotos[]{
      "url": asset->url
    },

    logoPhotos[]{
      "url": asset->url
    },
    featuresList[]{
      "svgUrl": svg.asset->url,
      title,
      text
    }
  }
`

export const aboutQuery = `
*[_type == "aboutSection"][0]{
    title,
    text,
    topPhoto,
    centerPhoto,
    bottomPhoto,
  }
`

export const comfortQuery = `
*[_type == "comfortSection"][0]{
    title,
    featuresList[]{
      "svgUrl": svg.asset->url,
      title,
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

export const faqQuery = `
  *[_type == "faqSection"][0]{
    title,
    topPhoto,
    centerPhoto,
    bottomPhoto,
    questions[]{
      title,
      text
    },
  }
`;

export const impactQuery = `
*[_type == "impactSection"][0]{
    title,
    featuresList[]{
      "svgUrl": svg.asset->url,
      title,
      text
    }
  }
`

export const findloveQuery = `
*[_type == "findloveSection"][0]{
    title,
    text,
    leftPhoto,
    centerPhoto,
    rightPhoto,
    featuresList[]{
      "svgUrl": svg.asset->url,
      text
    }
  }
`

