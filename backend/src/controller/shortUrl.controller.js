import { getShortUrl } from "../dao/shortUrl.js"
import { createShortUrlWithoutUser } from "../services/shortUrl.service.js"
import wrapAsync from "../utils/trycatchWrapper.js"

export const createShortUrl = wrapAsync(async (req,res)=>{
     const {url} = req.body
    const shortUrl = await createShortUrlWithoutUser(url, req.user.id)
    res.send(process.env.APP_URL + shortUrl)
 
})
export const redirectFromShortUrl = wrapAsync(async (req,res)=>{
    
    const {id} = req.params;
    const url = await getShortUrl(id);
    if(!url) throw new Error("Short URL not found")
    //console.log(url)
    res.redirect(url.full_url)

})