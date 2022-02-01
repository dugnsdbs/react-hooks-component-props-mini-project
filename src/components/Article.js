import React from 'react';


  // const minutess = function (minutes){
  //   return (minutes <30) ? "☕️" : "🍱";}
  
function Article(props) {

  const {id, title, date="January 1, 1970", preview, minutes} = props;
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <span>{minutes}</span>
    </article>
  )
 
}

export default Article;
