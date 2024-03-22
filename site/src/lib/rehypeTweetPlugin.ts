import { visit } from 'unist-util-visit';
import { getTweet } from 'react-tweet/api';
import storage from 'node-persist';
storage.init();

export default function rehypeTweetPlugin() {
  return async function transformer(tree: any) {
    const tweetPromises: Promise<any>[] = [];

    visit(tree, 'element', (node: any, index: number | undefined, parent: any) => {
      if (parent === undefined) return; // ignore root node
      const idx = index as number;
      if (node.tagName === 'p' && node.children.some((child: any) => child.type === 'text')) {
        const textNode = node.children.find((child: any) => child.type === 'text');
        const tweetMatch = textNode.value.match(/\{\{<\s*tweet\s+user\s*=\s*["“”](\w+)["“”]\s+id\s*=\s*["“”](\d+)["“”]\s*>}}/);

        if (tweetMatch) {
          const promise = fetchAndReplaceTweet(idx , parent, tweetMatch);
          tweetPromises.push(promise);
        }
      }
    });

    await Promise.all(tweetPromises);
  };
}

async function fetchAndReplaceTweet(index: number, parent: any, tweetMatch: RegExpMatchArray) {
  try {
    let tweetData = await storage.getItem(tweetMatch[2]);

    if (!tweetData) {
      tweetData = await getTweet(tweetMatch[2]);
      await storage.setItem(tweetMatch[2], tweetData, { ttl: 24 * 60 * 60 * 1000 }); // Cache for 1 day
    }

    if (true) {
      const tweetHtml = createTweetHtml(tweetData);
      const tweetNode = {
        type: 'raw',
        value: tweetHtml
      };
      parent.children.splice(index, 1, tweetNode);
    }
  } catch (error) {
    console.error('Error fetching tweet:', error);
  }
}

const twitterVerified = `
<svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
	<path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#1d9bf0"></path>
</svg>
`;
function createTweetHtml(tweet:any) {
  // console.log(JSON.stringify(tweet))
  const tweetMediaUrl = tweet?.photos?.[0]?.url || tweet.mediaDetails?.[0]?.url || ''; // Handle media URL
  const profileImageStyle = tweet.user.profile_image_shape === 'Circle' ? 'border-radius: 50%;' : '';

  const verifiedBadge = tweet.user.is_blue_verified ? twitterVerified: '';
  const createdAt = new Date(tweet.created_at).toLocaleString();

  return `
  <div class="not-prose" style="position: relative;padding: 10px; display: flex; justify-content: center; align-items: center;max-width: 600px; margin-right:auto; margin-left:auto">
  <a href="https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}" target="_blank" style="text-decoration: none; color: inherit;padding:.5rem; width:100%">
      <div style="background-color: white; padding: 20px; border-radius: 15px; border: 1px solid #ddd; ">
      
          <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="display: flex; align-items: center;">
                  <img src="${tweet.user.profile_image_url_https}" style="height: 44px; width: 44px; ${profileImageStyle} margin-right: 10px;"/>
                  <div>
                      <span style="font-weight: bold; color: black; display: flex; align-items: center;">${tweet.user.name} ${verifiedBadge}</span>
                      <span style="color: #657786; display: block;">@${tweet.user.screen_name}</span>
                  </div>
              </div>
              <div style="margin-bottom:1.75rem; margin-right:1rem">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-6zzn7w r-19fsva8 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-q1j0wu">
              <g>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
          </svg>
          </div>
          </div>
          <p style="font-family: Helvetica; color: black; margin-top: 10px;">${tweet.text}</p>
          ${tweetMediaUrl ? `<img src="${tweetMediaUrl}" style="margin-top: 10px; border-radius: 15px; border: 1px solid #ddd; width: 100%;"/>` : ''}
          <div style="color: #657786; padding-top: 5px; font-size: 0.85em;">${createdAt}</div>
          <div style="border-top: 1px solid #ddd; margin-top: 10px;"></div>
          <div style="color: #657786; display: flex; justify-content: space-between; align-items: center; padding-top: 10px;">
              <div style="display: flex; align-items: center;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="red" d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
                  <span style="margin-left: 5px;">${tweet.favorite_count} </span>
              </div>
              <div style="display: flex; align-items: center;">
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="r-1cvl2hr r-4qtqp9 r-4r3dic r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path fill="#1d9bf0" d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"></path></g></svg>
                  <span style="margin-left: 5px;">${tweet.conversation_count} Replies</span>
              </div>
              <!-- Other interaction icons can go here -->
          </div>
      </div>
  </a>
  </div>
  `;
}
