'use client'

import React from 'react'
import Image from 'next/image'
import { CldImage, getCldImageUrl } from 'next-cloudinary'
import { dataUrl, debounce, download, getImageSize } from '@/lib/utils'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
import { Button } from '../ui/button'

const TransformedImage = ({ image, type, title, transformationConfig, isTransforming, setIsTransforming, hasDownload = true }: TransformedImageProps ) => {
    const downloadHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    
        download(getCldImageUrl({
        width: image?.width,
        height: image?.height,
        src: image?.publicId,
        ...transformationConfig
        }), title)

        alert('Image Downloaded Successfully!')
    }
    
        return (
        <div className='flex flex-col gap-4'>
            <div className='flex-between'>
                <h3 className='h3-bold text-dark-600'>
                    Transformed
                </h3>

                {hasDownload && (
                    <Button
                        className='download-btn bg-transparent shadow-2xl shadow-black' 
                        onClick={downloadHandler}
                    > 
                        <Image 
                            src='/assets/icons/download.svg'
                            alt='download'
                            width={24}
                            height={24}
                            className='pb-[6px]'
                        />
                    </Button>
                )}
            </div>

            {image?.publicId && transformationConfig ? (
                <div className='relative'>
                    <CldImage 
                        width={getImageSize(type, image,  "width")}
                        height={getImageSize(type, image, "height")}
                        src={image?.publicId}
                        alt={image.title}
                        sizes={"(max-width: 767px) 100vw, 50vw"}
                        placeholder={dataUrl as PlaceholderValue}
                        className="transformed-image"
                        onLoad={() => setIsTransforming && setIsTransforming(false)}
                        onError={() => debounce(() => {
                            () => setIsTransforming && setIsTransforming(false)
                            }, 8000)()
                        }
                        {...transformationConfig}
                    />

                    {isTransforming && (
                        <div className='transforming-loader'>
                            <Image 
                                src='/assets/icons/spinner.svg'
                                width={50}
                                height={50}
                                alt='spinner'
                            />
                            <p className='text-white/80'>
                                Transformation in Progress...
                            </p>
                        </div>
                    )}
                </div>
            ) : (
                <div className='transformed-placeholder'>
                    Transformed Image!
                </div>
            )}
        </div>
    )
}

export default TransformedImage