const useState = React.useState;

 const LB = () => {
   const [liked, setLiked] = useState(false);
   
    if (liked) {
      return 'You liked this.';
    }

   /**
   return e(
      'button',
      { className: "btn btn-primary", onClick: () => setLiked(true) },
      'Like'
    ); 
	**/
	
	return (
      <button className="btn btn-primary" onClick={() => {setLiked(true)}}>
      Like
	   </button>
    );
  
}

export default LB;

