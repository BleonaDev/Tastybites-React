import React, {useState} from 'react';

function Subscribe(){

    const [isSubscribed,setIsSubscribed]=useState(false);
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
    e.preventDefault();
   setIsSubscribed(true);
    }

    return (
   <section className="subscribe">
  <h2><b>Subscribe for Weekly Recipes</b></h2>
  <p>Get delicious recipes delivered straight to your inbox 🍴</p>
  <form onSubmit={handleSubscribe}>
  <input type="email" placeholder="Enter your email" required value={email}
          onChange={(event) => setEmail(event.target.value)}/>  
  <button type="submit">Subscribe</button><br/><br/>
  <p id="subscribeParagraph">
  {isSubscribed ? `Thank you for subscribing to our channel! We will get to you through your email ! ❤️` : ""}
</p>
  </form>
</section>
    
    )
};

export default Subscribe