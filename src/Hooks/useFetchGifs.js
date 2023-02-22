import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const getImages = async () =>{
    
    const imageList = await getGif(category);
        setimages(imageList);
        setisLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])


  return {
    images,
    isLoading
  }
}
