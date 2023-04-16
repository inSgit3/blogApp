import axios from "axios";

const access_token =
  "IGQVJYekFWSGpUVlAwbUg0WDVLYU9FMGdFcHJCYW1iVDBZAV2hhVm04Ri11WTRGUXVPdHNEVGcwb0RYMjFZAU090dDdhX0RQVFVWOEw5YUpkRHRlVkY5R0UzZADdFNkRkdWg0Vl9xeVlUbFk3VDl5VjE5bwZDZD";

export const getRecentPosts = async (count = 5) => {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${access_token}`
    );
    const recentPosts = response.data.data.slice(0, count);
    return recentPosts;
  } catch (error) {
    console.error(error);
  }
};
