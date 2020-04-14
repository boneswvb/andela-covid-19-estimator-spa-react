import React from 'react';
import wim from '../wim.jpg';

const Header = () => {
  return (
    <div>
      <header className="header">
      <image>
        <img src={wim} alt="Wim von Benecke" class="profilePic" />
      </image>
        <div className="name">
        	<h1>Andela Assessment</h1>
        	<h3>Prepared by Wim von Benecke</h3>
        </div> 
        <div className="contact">
        	<p>Cell: +27 (0) 71 099 2811</p>
        	<a href="mailto:info@lesawi.co.za?subject=Covid19 page inquiry">
        		<h3>Email: info@lesawi.co.za</h3>
        	</a>
        </div> 
      </header>
      <hr />
    </div>
  );
}

export default Header;