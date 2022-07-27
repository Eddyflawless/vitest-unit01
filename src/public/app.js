import { extractPostData , savePost } from '../app/util/posts';

const form = document.querySelector('form');

function formSubmitHandler(event){

    event.preventDefault();
    
    const formData = new FormData(form);
    try{
        
        const postData = extractPostData(formData);
        await savePost(postData);

    }catch(error){

        showError(error);
    }
}

form.addEventListener('submit', formSubmitHandler);