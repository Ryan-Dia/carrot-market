interface TextArea {
  label?: string;
  name?: string;
  rows?: number;
  [key: string]: any;
}

export default function TextArea({ label, name, rows = 4, ...rest }: TextArea) {
  return (
    <div>
      {label ? (
        <label htmlFor={name} className='block mb-1 text-sm font-medium text-gray-700'>
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        className='w-full mt-1 border-gray-300 rounded-md shadow-sm \n 
        focus:ring-orange-500 focus:border-orange-500 '
        rows={rows}
        {...rest}
      />
    </div>
  );
}
