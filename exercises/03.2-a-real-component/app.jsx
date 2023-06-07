import React from "react";
import ReactDOM from "react-dom";

//create your function here
const BootstrapCard = () => {
	return (
		<div class="card m-5">
			<img class="card-img-top" src="../../.learn/assets/Dylan.png?raw=true" alt="Card image cap" />
			<div class="card-body">
				<h5 class="card-title">Bob Dylan</h5>
				<p class="card-text">
					Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an
					influential figure in popular music and culture for more than five decades.
				</p>
				<a href="https://en.wikipedia.org/wiki/Bob_Dylan" class="btn btn-primary">
					Go to wikipedia
				</a>
			</div>
		</div>
	);
};

//remember to use ReactDOM.render to include the component into the website
ReactDOM.render(<BootstrapCard />, document.querySelector("#myDiv"));
