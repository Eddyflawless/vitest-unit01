import { validateStringNotEmpty } from "./validation";
import { sendDataRequest } from "./http";

export function savePost(postData){

    postData.created = new Date();
    
    return sendDataRequest(postData);

}

export function extractPostData(form){
    const title = form.get('title');
    const content = form.get('content');

    validateStringNotEmpty(title,`A title must be provided`);
    validateStringNotEmpty(content,`Content must not be empty`);

    return {title, content}
}