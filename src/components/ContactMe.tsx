import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
type Props = {}

export default function ContactMe({ }: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-main-font text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center max-sm:text-2xl">
          I have got just what you need. {" "}
          <span className=" decoration-[#61f236]/50 underline "> Lets Talk.</span>
        </h4>

        <div className='space-y-10'>
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className=' text-[#61f236] h-7 w-7 animate-pulse' />
            <p className='text-2xl max-sm:text-lg'>+62-856-9336-9108</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className=' text-[#61f236] h-7 w-7 animate-pulse' />
            <p className='text-2xl max-sm:text-lg'>mamunramdhan@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className=' text-[#61f236] h-7 w-7 animate-pulse' />
            <p className='text-2xl max-sm:text-base'>Kab.Bogor, Jawa Barat Indonesia</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className='flex space-x-2 max-sm:w-[97%]'>
            <input placeholder='Name' className='contactInput' type="text" />
            <input placeholder='Email' className='contactInput' type="email" />
          </div>
          <input placeholder='Subject' className='contactInput' type="text" />

          <textarea placeholder='Message' className='contactInput' />
          <button type='submit' className='bg-[#00b21f] max-sm:w-[97%] text-[#0f172a] font-bold py-5 px-10 rounded-md'>Submit</button>
        </form>

      </div>
    </div>
  )
}