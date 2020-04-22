(this["webpackJsonpwww.richychen.com"]=this["webpackJsonpwww.richychen.com"]||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(19),r=a.n(i),s=(a(27),a(2)),l=a(3),c=a(5),h=a(4),m=a(6),d=a(13),u=a(10),p=(a(28),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleClick=function(){a.setState({showMenu:!a.state.showMenu})},a.menu=function(){return o.a.createElement("div",{onClick:a.handleClick,className:"menu"},a.profile(),o.a.createElement("div",{className:"page-links font"},o.a.createElement("a",{href:"/#hello"},"Hello"),o.a.createElement("a",{href:"/resume.pdf",target:"_blank"},"Resume"),o.a.createElement("a",{href:"/#projects"},"Projects"),o.a.createElement("a",{href:"/#books"},"Reading"),o.a.createElement("a",{href:"/#blogs"},"Writing")))},a.state={showMenu:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"profile",value:function(){return o.a.createElement("div",{className:"mobile profile"},o.a.createElement("i",{onClick:this.handleClick,className:"close icon"}),o.a.createElement(d.b,{to:"/",className:"font no-underline"},"Richy Chen"),o.a.createElement("div",{className:"links"},o.a.createElement("a",{className:"button",href:"mailto:richychn@hotmail.com",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"envelope icon"})),o.a.createElement("a",{className:"button",href:"https://github.com/richychn",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"github icon"})),o.a.createElement("a",{className:"button",href:"http://www.linkedin.com/in/richychen",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"linkedin icon"})),o.a.createElement("a",{className:"button",href:"http://www.twitter.com/richychn",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"twitter icon"}))))}},{key:"render",value:function(){return this.state.showMenu?this.menu():o.a.createElement("div",{className:"mobile sidebar ".concat(this.props.hidden?"hidden":"")},o.a.createElement(d.b,{to:"/",className:"font no-underline"},"Richy Chen"),o.a.createElement("i",{onClick:this.handleClick,className:"bars icon"}))}}]),t}(o.a.Component)),g=(a(34),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"sidebar"},o.a.createElement("h3",null,"Richy Chen"),o.a.createElement("div",{className:"links"},o.a.createElement("a",{className:"button",href:"mailto:chenrichy@outlook.com",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"envelope icon"})),o.a.createElement("a",{className:"button",href:"https://github.com/richychn",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"github icon"})),o.a.createElement("a",{className:"button",href:"http://www.linkedin.com/in/richychen",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"linkedin icon"})),o.a.createElement("a",{className:"button",href:"http://www.twitter.com/richychn",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"twitter icon"}))),o.a.createElement("div",{className:"page-links font"},o.a.createElement("a",{href:"/#hello"},"Hello"),o.a.createElement("a",{href:"/resume.pdf",target:"_blank"},"Resume"),o.a.createElement("a",{href:"/#projects"},"Projects"),o.a.createElement("a",{href:"/#books"},"Reading"),o.a.createElement("a",{href:"/#blogs"},"Writing")))}}]),t}(o.a.Component)),f=(a(35),function(){return o.a.createElement("div",{className:"bio"},o.a.createElement("div",{style:{backgroundImage:'url("profile.jpg")'},className:"gradient img"},o.a.createElement("div",{className:"gradient overlay"})),o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"font"},"Hello!"),o.a.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:w.text}})))}),w={text:'<p>I\'m Richy. I\'m a senior at Claremont McKenna College studying Computer Science and Economics. I think it would be incredibly cool to design something that affects a lot of people\'s lives. I jot down a lot of these ideas and will happily dream out an idea with anyone.</p>    <p>Currently, I am hooked by the idea of designing systems that cross digital and physical environments and use software to empower regular, physical activities, such as shopping, eating at restaurants, or going to work. To that end, I am working with my friends to develop an app for restaurant customers. More on that <a href="/#/blogs/0">here</a>.</p>    <p>After graduation, I look forward to helping clients use machine learning at <a href="https://www.thehive.ai" target="_blank">Hive</a> in San Francisco. I am excited to see first hand how corporates are using machine learning to enhance or replace various business tasks.</p>'},b=(a(36),"<p>A project I did with four friends in class, Market Modeling is a web app showing the results of a research project on machine learning and markets data. We tested variations of two models, Echo State Networks and Long Short Term Memory, to try to predict stock and other markets data. Google Colab was a very helpful tool for costless testing of our models on GPU machines.</p>    <p>Unfortunately, we began this project with very little domain knowledge and picked variables that theoretically strongly correlated with each other. As a result, our strategy of using multiple variables to predict multiple variables was not effective with our data. However, the process of making and testing two models allowed us to learn a lot about the models. Echo State Networks, being a fairly new development, was especially interesting.</p>    <p>We also used this opportunity to practice designing a website and creating the front end, something I do not work on often. We learned AJAX to make requests without disrupting the user flow, and used Chartist.js to create beautiful graphs in HTML. Our website was made with Python Flask and hosted on Heroku.</p>    <p><a href='http://market-modeling.herokuapp.com'>Check it out!</a></p>"),y="<p>My first iPhone application was built during the CalTech hackathon in 2019. My friends and I completed a Swift tutorial in the month beforehand to prepare for the hackathon. During the hackathon, we built a simple image recognition machine learning model to recognize photos of notes, whiteboards, or blackboards. This camera app would automatically separate such photos from others. We also implemented a quick way of tagging and searching for photos.</p>    <p><a href='https://github.com/richychn/photo-ally'>Check out the repository!</a></p>",k="<p>I first learned to develop web applications at the LeWagon bootcamp in Lisbon, where I was part of batch 86. For my capstone project, I worked with a team to build an online forum for musicians to share their practice and learning. We used Ruby on Rails and hosted it on Heroku.</p>    <p><a href='http://guitwise.herokuapp.com'>Check it out!</a></p>",v="<p>Launch Workstation is a Chrome extension that enables users to quickly open a set of websites. This helps with opening up Chrome and with switching between tasks. </p>    <p>I first messed around with Chrome extensions when I learned web development, but I did not have a good idea for one that hadn't already been done, until this project. Launch Workstation is primarily a tool for myself. I built the first version in less than 24 hours. I plan to only add features if more people start using it or if I need more features.</p>    <p>Please check it out on the Chrome extension store <a href='https://chrome.google.com/webstore/detail/launch-workstation/bonigddakfdagmgiodddmconddoebaoa?hl=en'>here</a></p>    <p>Or if you want to see how I made it, check out my Github <a href='https://github.com/richychn/launch-workstation'>here</a></p>",E=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderLaunchWorkstation",value:function(){return o.a.createElement("div",{className:"project"},o.a.createElement("h3",null,"Launch Workstation"),o.a.createElement("div",{className:"center-contents"},o.a.createElement("a",{href:"https://chrome.google.com/webstore/detail/launch-workstation/bonigddakfdagmgiodddmconddoebaoa?hl=en"},o.a.createElement("img",{style:{width:"10em",backgroundColor:"white"},src:"https://raw.githubusercontent.com/richychn/launch-workstation/master/public/icon128.png"}))),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:v}}))}},{key:"renderMarketModeling",value:function(){return o.a.createElement("div",{className:"project"},o.a.createElement("h3",null,"Market Modeling"),o.a.createElement("div",{className:"center-contents"},o.a.createElement("a",{href:"http://market-modeling.herokuapp.com"},o.a.createElement("img",{style:{width:"20em"},src:"https://raw.githubusercontent.com/richychn/market-modeling/master/static/images/square_logo.png"}))),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:b}}),o.a.createElement("div",{className:"center-contents"},o.a.createElement("img",{style:{width:"20em"},src:"https://raw.githubusercontent.com/richychn/market-modeling/master/static/images/step_2.gif"})))}},{key:"renderPhotoAlly",value:function(){return o.a.createElement("div",{className:"project"},o.a.createElement("h3",null,"Photo Ally"),o.a.createElement("div",{className:"center-contents"},o.a.createElement("a",{style:{marginRight:"1em"},href:"https://github.com/richychn/photo-ally"},o.a.createElement("img",{style:{width:"10em"},src:"https://raw.githubusercontent.com/richychn/photo-ally/master/good%20photo/Assets.xcassets/AppIcon.appiconset/1024.png"}))),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:y}}))}},{key:"renderGuitwise",value:function(){return o.a.createElement("div",{className:"project"},o.a.createElement("h3",null,"GuitWise"),o.a.createElement("a",{href:"http://guitwise.herokuapp.com"},o.a.createElement("img",{style:{width:"100%",margin:"20px 0",display:"block"},src:"/guitwise.gif"})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:k}}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"projects"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Projects"),this.renderLaunchWorkstation(),this.renderMarketModeling(),this.renderPhotoAlly(),this.renderGuitwise()))}}]),t}(o.a.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10+1);a.setState({spans:t})},a.state={spans:0},a.imageRef=o.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.object;return o.a.createElement("a",{target:"_blank",style:{gridRowEnd:"span ".concat(this.state.spans)},href:"".concat(e[1].link_url)},o.a.createElement("img",{ref:this.imageRef,alt:"Cover of ".concat(e[1].title),src:e[1].image_url}))}}]),t}(o.a.Component),_={0:{title:"Steve Jobs",image_url:"https://images-na.ssl-images-amazon.com/images/I/41EQKL0jMhL._SX325_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/Steve-Jobs-Biography-Isaacson-2011-11-04/dp/B01K15BMIM/ref=sr_1_3?crid=OXAQCHC47JU5&dchild=1&keywords=steve+jobs+biography&qid=1584562600&s=books&sprefix=steve+jobs+bio%2Cstripbooks%2C204&sr=1-3"},1:{title:"Titan: The Life of John D. Rockefeller Sr.",image_url:"https://images-na.ssl-images-amazon.com/images/I/51fQkrcrWnL._SX364_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/Titan-Life-John-Rockefeller-Sr/dp/0679438084/ref=sr_1_2?dchild=1&keywords=rockefeller+titan&qid=1584562679&s=books&sr=1-2"},2:{title:"Hillbilly Elegy: A Memoir of a Family and Culture in Crisis",image_url:"https://images-na.ssl-images-amazon.com/images/I/51gufUMfXZL._SX328_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/Hillbilly-Elegy-Memoir-Family-Culture/dp/0062300547"},3:{title:"The Snowball: Warren Buffett and the Business of Life",image_url:"https://images-na.ssl-images-amazon.com/images/I/51KVWaAP02L._SX328_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/Snowball-Warren-Buffett-Business-Life/dp/0553384619"},4:{title:"The House of Morgan",image_url:"https://images-na.ssl-images-amazon.com/images/I/518k5q1%2BjFL._SX331_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/gp/product/0802144659/ref=dbs_a_def_rwt_bibl_vppi_i4"},5:{title:"Never Split the Difference",image_url:"https://images-na.ssl-images-amazon.com/images/I/51yKczFDuQL.jpg",link_url:"https://www.amazon.com/Never-Split-Difference-Negotiating-Depended/dp/B01COR1GM2/ref=sr_1_2?dchild=1&keywords=never+split+the+difference&qid=1584562374&sr=8-2"},6:{title:"Quiet",image_url:"https://images-na.ssl-images-amazon.com/images/I/71SLQKwNLBL.jpg",link_url:"https://www.amazon.com/Quiet-Power-Introverts-World-Talking/dp/B00714PZMQ/ref=sr_1_1?dchild=1&keywords=quiet&qid=1584562393&s=audible&sr=1-1"},7:{title:"Trillion Dollar Coach",image_url:"https://images-na.ssl-images-amazon.com/images/I/41vgassjrKL._SX329_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/Trillion-Dollar-Coach-Leadership-Playbook/dp/0062839268"},8:{title:"The Ride of a Lifetime: Lessons Learned from 15 Years as the CEO of the Walt Disney Company",image_url:"https://images-na.ssl-images-amazon.com/images/I/41gr0fllE9L._SX327_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/Ride-Lifetime-Lessons-Learned-Company/dp/0399592091"},9:{title:"Range: Why Generalists Triumph in a Specialized World",image_url:"https://images-na.ssl-images-amazon.com/images/I/41-nFxo5yTL._SX333_BO1,204,203,200_.jpg",link_url:"https://www.amazon.com/Range-Generalists-Triumph-Specialized-World/dp/0735214484"}},j=(a(37),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderGallery",value:function(){return Object.entries(_).reverse().map((function(e){return o.a.createElement(I,{object:e,key:e[0]})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Reading"),o.a.createElement("div",{className:"books gallery"},this.renderGallery()))}}]),t}(o.a.Component)),N={0:{title:"Bridging Digital and Physical Activity",date:"March 4, 2020",image_url:"https://1m9qrs2s997uox6846iotvmx-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/1-Copy.png",credit:"https://news.nike.com/news/nike-app-at-retail-shopping-experience",image_alt:"Nike App",description:"Shopping online and offline are distinct and separate activities today. That seems to be changing slowly as your mobile phone becomes a useful aid when you are in the store.",text:"<p>Last summer, when I met up with some friends in a sushi restaurant in Hong Kong, I sat confused while my friends picked up their phone and started ordering their food. As I was looking around for the menu, my friends had scanned the QR code on a receipt left by the waiter and found an online menu where they could start ordering food. I quickly realized what they had done and followed suit.</p>        <p>Everything else in that restaurant was more familiar. I waited for food. I ate and had to wave down a busy waiter to bring the bill. Then, I paid using a debit card, while my friends Venmo'd me their share of the bill. I forgot about this experience until I was listening to a podcast and heard about Nike's new app and retail experience.</p>        <p>I dug into it, and the video in <a href'https://news.nike.com/news/nike-app-at-retail-shopping-experience'>this article</a> describes many of the features. I want to highlight a couple: reserve and try on, and instant checkout.</p>        <p>Today, when I shop for clothes at most stores, I walk around the store, looking at mannequins and shelves until I find something I like. Then, I find a store clerk, wait until he or she is done helping another customer, and then ask where I can find the shirt on a mannequin or if a shoe in my size is available. I repeat this process a few times, each time getting embarrassed about having to bother the store clerk. My friend is a shopaholic and has already picked out what he wants online and is only here to try them on, so he has already asked a clerk and is waiting for the clerk to get back. After we decide on what to purchase, we join the long line at the counter, where I realize how short a time I can stand still, on both legs.</p>        <p>Nike's innovative app would help both my friend and I fight our impatience and cut down shopping time. When I see a shirt on a mannequin, I can scan the QR code attached, or if I see a shoe and can't find the right size, I can scan the barcode. Then, I can request it, and it will be delivered to a marked area or directly to the fitting room. My friend can reserve the shoes he wants to try from home and go to a locker in the store to pick it up. When we have everything we want, we can checkout in the app and leave the store. To me, this is a better experience than being helped by even the most cheerful store clerk.</p>        <p>Both the sushi restaurant and Nike remind me of how separated our digital and physical lives are. As I thought about this while travelling in India, I instinctively wished for an app to help me check in to my hotel, help me request a razor, and let me text the concierge about the airport bus. Mobile apps are over a decade old now, but we are only seeing the apps that bridge the virtual and physical more recently.</p>        <p>I daydream about walking into malls, hotels, shops, restaurants, cafes, and maybe even the DMV one day and be able to use my phone as a personal assistant. I find myself saying to my friends, \"I wish I could order food from my table in the food court\" and wishes for many other products/features that all seem technologically possible and even easy.</p>        <p>Which is why I am working with my friends to build a system of apps that will allow business owners (potentially of all the stores I mentioned and more) to better serve their customers. We are starting with cafes and restaurants, where we hope to replicate the service of the sushi restaurant in Hong Kong, and do one better by adding payment, requests, and discounts.</p>"},1:{title:"My Favorite Career Advice",date:"March 22, 2020",image_url:"",credit:"",image_alt:"",description:"My list of resources for thinking about your career and pursuing opportunities. This particular post will be continuously updated as I find better resources.",text:"<p>I am very lucky to be working at Hive for my first full time job. Coming into college, working at a startup was not on my mind. Throughout college, I changed career directions at least three times, despite being absolutely sure I was following a plan I laid out for myself. Now, as I think longer term and reflect on my job search process, I stumbled on interesting resources for thinking about your career and pursuing opportunities, which I wish I had viewed at the beginning of college.</p>        <h3>Career Planning</h3>        <ul>        <li><a href='https://www.youtube.com/watch?v=xmYekD6-PZ8'>Bill Gurley's Runnin' Down a Dream speech</a></li>        <p>After finding your passion, become the most knowledgable in it. You may not be the best or smartest at it, but anyone can become one of the most knowledgable in a field. This helps you find and talk to mentors at a high level. This also proves your passion to yourself, because you are doing some of the work to becoming better at your passion.</p>        <li><a href='https://pmarchive.com/guide_to_career_planning_part0.html'>Marc Andreessen's Guide to Career Planning</a></li>        <p>Ironically for me, Andreessen's first advice is 'don't plan your career.' Rather, recognize opportunities and think strategically about the risk of pursuing an opportunity in the 'portfolio' of all the jobs in your career.</p>        <p>Learn hard things in school, so that you are not easily fazed by difficult problems. Become top 25% in two or three skills. Some important skills are communication, management, sales, and finance. Pick an industry where the founders of the industry are still involved. For a rapidly changing industry like technology, find a young, fast growing company rather than a big, established one.</p>        <p>David Epstein's <i>Range</i> supports many of Andreessen's suggestions. Epstein argues that a more diverse experience and knowledge base can do better for ambiguous situations or problems. Specifically, scientists in multiple disciplines are able to solve seemingly impossible problems, and those who have worked abroad tend to have a greater scientific impact.</p>        </ul>        <h3>Pursuing Opportunities</h3>        <ul>        <li><a href='https://medium.com/@julesdwalt/networking-for-introverts-3544f4287fc1'>Jules Walter's Networking for Introverts</a></li>        <p>I entered college not knowing the word networking. Even in college, no one told me specifics. It seemed like all my peers were having wonderful, half hour to hour long conversations with all our alumni, but I could barely come up with enough questions to last 20 minutes. Walter's short piece gives very practical advice for what you can do, if you, like me, aren't the type to wow everyone around you with jokes and fun small talk. My two key takeaways is first, to start by asking for low commitment interactions, such as one very specific question, and second, as you ramp up these interactions, let them know how they have helped you and what you have done as a result of their advice.</p>        <li><a href='https://haseebq.com/tech-careers/'>Haseeb Qureshi's Blogs on Tech Careers</a></li>        <p>Qureshi dropped out of school to become a pro poker player, studied his ass off to become a software developer, and is now an investor in blockchain related companies. He wrote blogs at each step of the way and gives very specific advice on how to break into tech from an unconventional background and how to negotiate job offers.</p>        <p>I found negotiating incredibly difficult, even though I was reading <i>Never Split the Difference</i> and trying to incorporate its suggestions. Qureshi's two part blog on negotiation suggests 10 concrete steps you can take. My kep takeaways are always be positive, mention and internally hype up what you would do if you rejected the offer, and always say you need to discuss the offer with someone else. Read Qureshi's blogs for specific examples.</p>        </ul>"}},O=(a(38),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderCard",value:function(e){return o.a.createElement("div",{className:"blog-card"},o.a.createElement("div",{className:"blog-divider"}),o.a.createElement("h3",{className:"font"},e.title),o.a.createElement("p",null,e.description),o.a.createElement("p",null,e.date))}},{key:"renderGallery",value:function(){var e=this;return Object.entries(N).reverse().map((function(t){return o.a.createElement("a",{href:"/#blogs/".concat(t[0]),key:t[0]},e.renderCard(t[1]))}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Blog"),o.a.createElement("div",{className:"description"},"Although I love to think and discuss philosophy, a product idea, or what the future might look like, I rarely have the patience to write it all down. This is something I want to work on, so I built a simple, minimalist blog site where I will hopefully write more."),o.a.createElement("div",{className:"blogs gallery"},this.renderGallery()))}}]),t}(o.a.Component)),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={title:N[a.props.match.params.id].title,date:N[a.props.match.params.id].date,image_url:N[a.props.match.params.id].image_url,credit:N[a.props.match.params.id].credit,image_alt:N[a.props.match.params.id].image_alt,text:N[a.props.match.params.id].text},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderImage",value:function(){return""===this.state.image_url?null:o.a.createElement("div",{className:"blog img"},o.a.createElement("img",{src:this.state.image_url,alt:this.state.image_alt}),o.a.createElement("div",{className:"credits"},"Image Credit: ",this.state.credit))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,this.state.title),this.renderImage(),o.a.createElement("p",{className:"blog date"},this.state.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.text}})))}}]),t}(o.a.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleScroll=function(e){var t=a.state.lastYpos;a.setState({lastYpos:window.pageYOffset}),0===window.pageYOffset?a.setState({header:!0}):window.pageYOffset>t?a.setState({header:!1}):window.pageYOffset<t&&a.setState({header:!0})},a.windowWidth=function(){window.innerWidth<800?a.setState({mobile:!0}):a.setState({mobile:!1})},a.sidebar=function(){return a.state.mobile?a.state.header?o.a.createElement(p,null):o.a.createElement(p,{hidden:"hidden"}):o.a.createElement(g,null)},a.state={mobile:!1,lastYpos:null,header:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.windowWidth(),window.addEventListener("resize",this.windowWidth),window.addEventListener("scroll",this.handleScroll,!0),this.setState({lastYpos:window.pageYOffset})}},{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"page ".concat(this.state.mobile?"mobile":"")},this.sidebar(),o.a.createElement(u.c,null,o.a.createElement(u.a,{path:"/",exact:!0,component:f}),o.a.createElement(u.a,{path:"/hello",exact:!0,component:f}),o.a.createElement(u.a,{path:"/projects",exact:!0,component:E}),o.a.createElement(u.a,{path:"/books",exact:!0,component:j}),o.a.createElement(u.a,{path:"/blogs",exact:!0,component:O}),o.a.createElement(u.a,{path:"/blogs/:id",exact:!0,component:C}))))}}]),t}(o.a.Component);r.a.render(o.a.createElement(S,null),document.querySelector("#root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0cbca559.chunk.js.map