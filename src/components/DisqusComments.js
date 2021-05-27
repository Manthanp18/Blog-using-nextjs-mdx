import {DiscussionEmbed} from "disqus-react"
// import { useRouter } from 'next/router'

const DisqusComments = ({ meta, posts}) => {

  // const router = useRouter()
  const disqusShortname = "knowuser"
  const disqusConfig = {
    url: `localhost:3000/`,
    identifier: meta.id, // Single post id
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