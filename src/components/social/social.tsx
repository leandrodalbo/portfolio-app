import { SocialItem } from "../../data/types"
import "./social.css"

interface SocialProps {
    data : SocialItem[]
}

 const Social = ({data}:SocialProps) => {
  return (
    <div className="social">
    {data.map((it) => (
      <a
        key={it.id}
        href={it.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {<it.icon />}
      </a>
    ))}
  </div>
  )
}


export default Social;