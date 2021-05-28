import {DiscussionEmbed} from "disqus-react"
import { useRouter } from 'next/router'

const DisqusComments = ({ meta }) => {
  const router = useRouter()
  const disqusShortname = "knowuser"
  const disqusConfig = {
    url: `http://localhost:3000/${router.pathname}`,
    identifier: undefined, // Single post id
    title: meta.title // Single post title
 }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;