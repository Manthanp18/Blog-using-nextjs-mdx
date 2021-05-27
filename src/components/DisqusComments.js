import {DiscussionEmbed} from "disqus-react"
import { useRouter } from 'next/router'

const DisqusComments = ({ meta, posts}) => {
console.log(meta)
console.log(posts)
  const router = useRouter()
  const disqusShortname = "knowuser"
  const disqusConfig = {
    url: `localhost:3000/${router.pathname}`,
    identifier: router.pathname, // Single post id
    title: meta.title // Single post title

  }
  console.log(router)
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