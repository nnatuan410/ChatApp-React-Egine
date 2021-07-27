import React from 'react'

export default function MyMessage({message}) {
    
    if(message.attachments[0]){
        return(
            <img src= {message.attachments[0].file}
                 alt="message-attachment"
                 className="message-image"
                 style={{float: 'right'}} />
        )
    }
    return (
        <>
        {
            (message.text) === ''  ?
            null : 
            <div className="message" style={{float:'right',marginRight:'18px',color:'#ffff',backgroundColor:'blue'}}>
            {message.text.replace(/<[^>]+>/g, '')}
            </div>
        }
       </>
    )
}
