import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'

const images = [
    "https://plus.unsplash.com/premium_photo-1664438942574-e56510dc5ce5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8fDA%3D",
    "https://cdn.pixabay.com/photo/2021/08/18/19/26/background-6556413_1280.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRap98RO9UCUrq1yhD18Vi_HZJMh9YB1tCghw&s",
    "https://download.cdn-shop.com/media/web_images/my/blog/article-80/abstract-art-on-canvas-2.webp",
    "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/129752/296739/prints%2Fdownscaled%2Fp_7ddnz7ldtro_2000x2000__43708.1721632896.jpg?c=2"
]

const ImageSlideshow = () => {

    const [index, setIndex] = useState(0);

    const prev = () => {
        setIndex(i => i === 0 ? i : i - 1);
    }

    const next = () => {
        setIndex(i => i === images.length-1? i : i + 1 )
    }

  return (
    <div class='max-w-md mx-auto mt-10'>
        <Card>
            <CardContent class='space-y-4 p-4'>
                <img src={images[index]} alt="slideshow"
                class='rounded-md w-full' />

                <div class='flex justify-between'>
                    <Button variant='outline' onClick={prev}>
                        Previous
                    </Button>
                    <Button onClick={next}>
                        Next
                    </Button>
                </div>
                
            </CardContent>
        </Card>
    </div>
  )
}

export default ImageSlideshow