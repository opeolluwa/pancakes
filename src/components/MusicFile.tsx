import Image from 'next/image';
import { AudioFile } from '@/types';
import { computeFileSize } from '@/utils';

// allowed audio  types 
// display type not listed here as broken file
// type AudioFile = 'au' | 'aif' | 'aifc' | 'aiff' | 'wav' | 'flac' | 'la' | 'pac' | 'm4a' | 'ape' | 'wv' | 'wma' | 'ast' | 'mp2' | 'mp3' | 'spx' | 'aac' | 'mpc' | 'ra' | 'ogg' | 'mid' | 'm3u' | 'pls';


type Props = AudioFile;

export default function MusicFile({ fileName, fileFormat, fileSize, filePath }: Props) {
    const __file_icon__ = "/images/mime/music-player.png";
    const __fileSize__ = computeFileSize(fileSize);

    return (
        <div className='flex flex-col flex-wrap w-fit items-center justify-between bg-shilo-200 dark:bg-mirage-x-600 hover:brightness-75 cursor-pointer rounded-lg p-4 my-4'>
            <div>
                {
                    <Image
                        src={__file_icon__} // Route of the image file
                        height={144} // Desired size with correct aspect ratio
                        width={144} // Desired size with correct aspect ratio
                        alt="file card icon"
                        className='w-[32px] dark:brightness-75 '// automatic height calculation
                    />
                }
            </div>
            <div className='flex flex-col justify-between mt-3'>
                <h5 className='font-semibold dark:text-gray-500 small overflow-clip text-ellipsis w-[10px] hidden'>{fileName}</h5>
                <div className='flex gap-3 mt[1.5px] text-gray-600  text-xs height={30} // Desired size with correct aspect ratio
                width={30} '>
                    <span>{__fileSize__}</span> <span>
                        {/**file duration goes here */}
                    </span>
                </div>
            </div>
        </div>
    )
}