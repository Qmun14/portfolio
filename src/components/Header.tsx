import { SocialIcon } from "react-social-icons"

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className="sticky top-0 mx-auto p-5 flex items-start justify-between max-w-7xl z-20 xl:items-center">
      <div className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          url="https://twitter.com/mr_dh4n"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/mr_dh4n"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/mr_dh4n"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
      </div>
    </header>
  )
}