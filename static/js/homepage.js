var quotes=["Education is the most powerful weapon which you can use to change the world.<br> <strong>~Nelson Mandela</strong>",
"Education is the passport to the future,<br> for tomorrow belongs to those who prepare for it today. <br><strong>~Malcolm X</strong>",
"I have no special talent. I am only passionately curious. <br><strong>~Albert Einstein</strong>",
"The philosophy of the school room in one generation <br> will be the philosophy of government in the next. <br><strong>~Abraham Lincoln</strong>",
"Don't limit a child to your own learning, for he was born in another time. <br><strong>~Rabindranath Tagore</strong>",
"We should not give up and we should not allow the problem to defeat us.<br> <strong>~A. P. J. Abdul Kalam</strong>",
"If you want to shine like a sun, first burn like a sun. <br><strong>A. P. J. Abdul Kalam</strong>"];
function ran_quote() {
	var ran=Math.floor(Math.random()*(quotes.length));
	document.getElementById('quote').innerHTML="\""+quotes[ran]+"\"";
}
setInterval(ran_quote,6000)