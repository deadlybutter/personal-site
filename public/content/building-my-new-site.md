# Building the new joekent.me

My website has gone through quite a few iterations since its inception. The first version was a Jekyll blog that was cracking shitty jokes about the tech industry. It also used joe-kent.com and the - drove me furious.

~i wayback_1.png
(^ Sep. 2014)

Eventually it got a refresh & turned into a router for all things Joe Kent on the internet. Every website that I had an account for I linked here. Not really sure why but it made me feel important. Oh and I had a video of myself that played in a circle, which is the only thing I miss.

~i wayback_2.png
(^ Early 2016)

But more importantly up until now everything was relatively safe, living on Github pages. I stuck some static files in a repo, Github made sure it had 99.999% reliability and a super fast CDN behind it (For free!). And thats cool for most people, but I found that boring. More than anything I treated this new iteration of the site as an experiment. In the process I think I broke every rule of web development I would normally follow.

## Hybrid Static Website

When it comes to website delivery I believe there is mostly two schools of thought. On one end, static files served over a CDN (What I was previously doing). On the other end of the spectrum, you have backend servers running a template engine. The new joekent.me is somewhere in the middle of that.

Every URL on this website (Except for /api), goes to a single function. That function delivers a string containing a few bits of HTML to set the page up, such as the <body>, scripts, etc. This string by the way, is computed at startup & stored in memory based on the environment. This has two major benefits. First, you only have to compute once whether you're using dev or prod assets. Second, the time it takes to return a response to the client is nearly instant because you're just sending a string variable back & ran no conditional logic.

At this point, the client is a single page app (SPA). It simply checks the URL & asks for the content it should render.

~i site_request_order.png

## Rendering

There are a lot of approaches on how to render the page at this point. Again, I wanted to experiment so I tried my own way.

First, the SPA gets the "markdown" file containing the post content. I put quotes around markdown because I had to make my own quick way of parsing the file & didn't follow all of the standard Markdown rules.

This process turns the Markdown into JSON containing a series of elements each with a type & content. From there the object gets passed into a React component which creates the actual HTML elements & sticks the content in them. This React component while seemingly smart, is pretty dumb. It just loops over content & makes a matching HTML element. Some features do require smart components however, for example the "Latest" block on the homepage.

To build the latest block, I call the API asking for the most recent posts, which returns an array containing there paths. For each of those paths, I get the markdown & reuse the markdown parsing function I talked about earlier. The post titles are added to the page as each individual ajax request & related processing finishes. This unfortunately means posts are not always in order, but it makes the code really simple & safe in terms of handling failure.

## Limitations

There are some limitations to the approach I've implemented here in its current form. The server currently loads a json file containing all of the routes (URL --> .md) which is how the API knows what files to return. Additionally, the server sorts this file on startup based on date for the latest posts. This creates two problems. First, any new blog posts or route changes requires a server restart. Thats always icky. Second, this server would have issues scaling either under high load or significant amount of blog posts. Thankfully this could be alleviated fairly easily by sticking content in a database & putting a service with an API in front of it.

The other big limitation, not unique to my app specifically but all SPA's, is SEO. There are two options to this problem that I can see. Option 1, ignore SEO, which for your business might be a problem. Option 2, what I'm calling "hybrid" server side rendering (and keeping the HTML in a string approach I talked about earlier).

First, the browser asks the hybrid server to return a page. The hybrid server, based on the URL, asks a content API (Or itself, depending on your architecture), for that content. The hybrid server then inserts that content as a <script> into the larger HTML string you already computed. You can now return this as a response.

Now, the client can automatically parse & render the page content by checking the window.whateverVariable. Why does this work for SEO? Googlebot allows Javascript to run, it just doesn't wait for Ajax requests.

I hope this inspired you to try writing a website like this yourself, reach out on Twitter if you'd like to talk more about it! And yes, of course you can checkout the source! https://github.com/deadlybutter/personal-site)
