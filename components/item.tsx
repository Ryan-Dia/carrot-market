import Link from 'next/link';

interface ItemProps {
  id: number;
  title: string;
  price: number;
  comments: number;
  hearts: number;
}

export default function Item({ id, title, price, comments, hearts }: ItemProps) {
  return (
    <Link href={`/items/${id}`} className='w-full '>
      <div className='flex justify-between pb-4 border-b cursor-pointer'>
        <div className='flex space-x-4'>
          {/* 물건 사진 */}
          <div className='w-20 h-20 bg-gray-400 rounded-md' />

          {/* 제품명 및 가격 */}
          <div className='flex flex-col pt-2'>
            <h3 className='text-sm font-medium text-gray-900'>{title}</h3>
            <span className='mt-1 font-medium text-gray-900'>{price}</span>
          </div>
        </div>

        {/*  하트(관심) 및 채팅 이모티콘 */}
        {/* 하트(관심) */}
        <div className='flex items-end justify-end space-x-2'>
          <div className='flex space-x-0.5 items-center text-sm  text-gray-600'>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              ></path>
            </svg>
            <span>{hearts}</span>
          </div>

          {/* 채팅 이모티콘 */}
          <div className='flex space-x-0.5 items-center text-sm  text-gray-600'>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
              ></path>
            </svg>
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
