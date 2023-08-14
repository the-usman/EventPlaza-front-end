import { useState } from "react";
import Context from "./postPageContext";

const PostPage = (props) => {
    const [post, setPost] = useState(null);
    
    return (
        <Context.Provider value={{ post, setPost }}>
            {props.children}
        </Context.Provider>
    );
}

export default PostPage;